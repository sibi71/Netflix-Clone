import React, { useState } from 'react'
import "./SignInScreen.css"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword}from "firebase/auth"
import { auth } from '../../Firebase'
const SignInScreen = () => {

  const [email ,setEmail] = useState("")
  const [password ,setPassword] = useState("")

  const register = (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((authuser)=>{
      console.log(authuser);
    }).catch((err)=>{
      alert(err.message)
    })
  }

  const signIn = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((authuser)=>{
      console.log(authuser);
    })
    .catch((err)=>{
      console.log(err.message);
    })

  }
  return (
    <div className='signin'>
      <form>
        <h1>Sign In</h1>
        <input
        value={email}
         placeholder='Email' 
         type="email" onChange={e=>setEmail(e.target.value)}/>
        <input 
        value={password}
        placeholder='Password' 
        type="password"onChange={e=>setPassword(e.target.value)}/>
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4>
          <span className='signin__gray'>New to Netflix ?</span>
          <span className='signin__link' onClick={register}>Sign up Now</span>
        </h4>
      </form>
    </div>
  )
}

export default SignInScreen