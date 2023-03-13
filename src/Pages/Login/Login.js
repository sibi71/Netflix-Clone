import React,{useState}from 'react'
import SignInScreen from '../SignInScreen/SignInScreen'
import "./Login.css"
const Login = () => {
    const [signIn, setSignIn] = useState(false)
  return (
    <div className='login' >
        <div className='login__background'>
            <img  className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
            alt=''
            />
            <button className='login__button' onClick={()=>setSignIn(true)}>
            Sign IN
            </button>
            <div className='login__gradient' />
        </div>
        <div className='login__body'>
            {
                signIn ? (<SignInScreen />):(
                    <>
                    <h1>Unlimited files,Tv programs and more.</h1>
                    <h2>Watch anywhere.cancel at any time</h2>
                    <h3> Ready to watch ? Enter youe Email to Create or restart your 
                        membership
                    </h3>
                    <div className='login__input'>
                        <form>
                            <input type="email" placeholder='Email Address' />
                            <button 
                            onClick={()=>setSignIn(false)}
                            className ="login__getstarted"
                            >GET STARTED</button>
                        </form>
                    </div>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Login