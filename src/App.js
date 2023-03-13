import React, { useEffect } from 'react'
import "./App.css"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Login from './Pages/Login/Login'
import { useSelector,useDispatch} from "react-redux"
import { login, logout, selectUser } from './features/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
const App = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      }
      else{
        dispatch(logout())
      }
    })

    return unsubscribe
  },[])
  return (
    <div className='app'>
      <Router>
        {
          !user?
          <Login />
          :
          <Routes>
            <Route path='/profile'element={<Profile/>}/>
            <Route path='/' element={<Home />}/>
          </Routes>
        }
      </Router>
    </div>
  )
}

export default App