import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './style.css';
import './index.css'
import UserContext from './utils/UserContext';

// Cunking
// Code splitting
// Dynamic Bundling
// Lazy Loading
// On Demand loading
//dynamic inport



export default function App() {

  const [userInfo,setUserInfo]=useState()


  useEffect(()=>{
    const data ={
      name:"Pooja Swami"
    }
    setUserInfo(data.name)
  })


  return (
    <UserContext.Provider>

   
    <div className="app">
      <Header />
      {/* this outlet filled with whatever component we have in chirdern with routes */}
      <Outlet/>
     
    </div>
    </UserContext.Provider>
  );
}