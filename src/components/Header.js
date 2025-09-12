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
      <div className='header'>
        <div className='logo-container'>
        <img className='logo' src={LOGO_URL}></img>
        </div>
        <div className='nav-items'>
          <ul>
            <li>OnLine Status:{onlineStatus? "Online" : "Offline"}</li>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              {/* <a href='/about'>About Us</a>   this will rerender whole page so use link */}
              <Link to="/about">About Us</Link>
              </li>
              <li>
              <Link to="/contact"> Contact US</Link>
             
              </li>
              <li>
              <Link to="/grocery"> Grocery</Link>
             
              </li>
              <li>
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