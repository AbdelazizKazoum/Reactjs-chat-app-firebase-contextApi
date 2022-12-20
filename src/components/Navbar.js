import React from 'react'
import img from '../imgs/img.png'
import { signOut } from 'firebase/auth';
import { auth } from '../file';
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Wagmi</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/13570394/pexels-photo-13570394.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
        <span>Abdelaziz kazum</span>
        <button onClick={ ()=> signOut(auth) } className="btn">Logout</button>
      </div>
    </div>
  );
}

export default Navbar
