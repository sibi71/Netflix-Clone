import React, { useEffect, useState } from 'react'
import "./Plans.css"
import { addDoc, collection,getDocs,onSnapshot,query,where} from "firebase/firestore"
import { db } from "../../Firebase"
import {loadStripe } from "@stripe/stripe-js"
import { useSelector} from "react-redux"
import { selectUser } from "../../features/userSlice"

const Plans = () => {
    const [product,setProduct]=useState([])
    const user = useSelector(selectUser)
    const [subscription, setSubscription] = useState(null)
useEffect(()=>{
        const fetchData = async()=>{
                const q = query(collection(db,"customers",user.uid,"subscriptions"));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach( (doc)=>{
                    setSubscription({
                        role:doc.data().role,
                        current_period_end:doc.data().current_period_end.seconds,
                        current_period_start:doc.data().current_period_start.seconds,
                    })
                })
        }
        fetchData()
},[user.uid])
 useEffect(()=>{
       const fetchData = async()=>{
        const q = query(collection(db,"products"),where("active","==",true))

        const querySnapshot = await getDocs(q)
        const products ={};
        querySnapshot.forEach( async(doc) => {
            products[doc.id]=doc.data();
            const pricesQuery = query(collection(doc.ref,"prices"))
            const pricesSnap = await getDocs(pricesQuery) 

            pricesSnap.docs.forEach((pricesDoc)=>{
                products[doc.id].prices = {
                    priceId :pricesDoc.id,
                    priceData :pricesDoc.data()
                }
            })
            
        });
        setProduct(products)
       }
       fetchData();
    },[]) 


    const loadCheckout = async(priceId) =>{
            const docRef =await addDoc(collection(db,"customers",user.uid,"checkout_sessions"),{
                price:priceId,
                success_url:window.location.origin,
                cancel_url:window.location.origin
            }) ;

            onSnapshot(docRef,async(snapShot)=>{
                const {error,sessionId} =snapShot.data()
                if(error){
                    alert(`An error occurred : ${error.message}`)
                }
                if(sessionId){
                    const stripe = await loadStripe("pk_test_51MetGoSFm3mHHDpfVuqYS4OSLcYGXchlSLvMn2eXOoHRoOvK2ncvGwAiB4cxRgDhhe1qjHZHJzyzwgbpCIbsI9M100HULu4gMM")
                    stripe.redirectToCheckout({sessionId})
                }
            })
    }
  return (
    <div className='plans'>
        <br/>
        {
            subscription && (
                <p>
                    Renewal Date :{new Date(subscription?.current_period_end*1000)
                    .toLocaleDateString()}
                </p>
            )
        }
        {
            Object.entries(product).map(([productId,productData])=>{
               const isCurrentPackage = productData.name?.includes(subscription?.role)

               console.log(isCurrentPackage);
              
                return(
                    <div key={productId} className={`${isCurrentPackage && "plans__plan--disabled"} plans__plan`}>
                        <div className='plans__info'>
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button 
                        onClick={()=>!isCurrentPackage && loadCheckout(productData.prices.priceId)}>
                        { isCurrentPackage ? "Current Package" : "Subscribe"}
                        </button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Plans