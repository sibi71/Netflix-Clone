import React from 'react'
import "./Profile.css"
import { useSelector} from "react-redux"
import { selectUser} from "../../features/userSlice";
import Navbar from "../../Components/Navbar/Navbar"
import {signOut} from "firebase/auth"
import { auth } from "../../Firebase"
import Plans from '../../Components/Plans/Plans';

const Profile = () => {
  const user = useSelector(selectUser);

  const logOut =()=>{
    signOut(auth)
  }
  return (
    <div className='profile'>
        <Navbar />
        <div className='profile__body'>
          <h1>Edit Profile</h1>
          <div className='profile__info'>
            <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png '
            alt=''/>
            <div className='profile__details'>
              <h2>
                {user.email}
              </h2>
              <div className='profile__plans'>
                <h3>Plans</h3>
                <Plans />
                <button className='profile__signout' onClick={logOut}>Sign Out</button>
              </div>

            </div>
          </div>

        </div>
    </div>
  )
}

export default Profile