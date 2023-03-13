import React,{useEffect, useState} from 'react'
import "./Navbar.css"
import {Link } from "react-router-dom"
const Navbar = () => {

    const [show, setShow] = useState(false)

    const transitionNavbar = ()=>{
        if(window.scrollY >100) {
            setShow(true)
        }
        else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar);

        return ()=>window.removeEventListener("scroll",transitionNavbar);

    },[]);

    

  return (
   <nav className={`nav ${show && "nav__black"}`}>
    <div className='nav__contents'>
        <Link to="/">
        <img 
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
        alt='neflix logo'className='nav__logo' />
        </Link>
        <Link to="/profile">
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='avatar logo' className='nav__avatar' />
        </Link>
    </div>

   </nav>
  )
}

export default Navbar