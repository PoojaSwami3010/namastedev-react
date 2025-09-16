import React, { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Header=()=>{


const [btnNameReact,setBtnNameReact]=useState('Login');
// console.log("header render")

// if no dependency array useeffect is called on every component render
useEffect(()=>{
// console.log("header render")
},[ ])

const onlineStatus=useOnlineStatus();

    return (
      <div className='flex  justify-between bg-pink-100 shadow-lg '>
        <div className='logo-container'>
        <img className='w-24 p-4' src={LOGO_URL}></img>
        </div>
        <div className='nav-items'>
          <ul className='flex p-4 items-center'>
            <li className='px-1'>OnLine Status:{onlineStatus? "Online" : "Offline"}</li>
            <li className='px-1'>
            <Link to="/">Home</Link>
            </li>
            <li className='px-1'>
              {/* <a href='/about'>About Us</a>   this will rerender whole page so use link */}
              <Link to="/about">About Us</Link>
              </li>
              <li className='px-1'>
              <Link to="/contact"> Contact US</Link>
             
              </li>
              <li className='px-1'>
              <Link to="/grocery"> Grocery</Link>
             
              </li>
              <li className='px-1'>
              Cart
              </li>
              <button className='login' onClick={()=>{
            btnNameReact==='Login'?   setBtnNameReact('Logout'):setBtnNameReact('Login')
                console.log(btnNameReact)}}>{btnNameReact}</button>
          </ul>
  
        </div>
        
  
      </div>
    )
  }
  

  export default Header;