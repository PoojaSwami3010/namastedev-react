import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './style.css';
import './index.css'
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

// Cunking
// Code splitting
// Dynamic Bundling
// Lazy Loading
// On Demand loading
//dynamic inport



export default function App() {

  const [userName,setUserName]=useState()


  useEffect(()=>{
    const data ={
      name:"Pooja Swami 30"
    }
    setUserName(data.name)
  })


  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>   
    <div className="app">
    <UserContext.Provider value={{loggedInUser:'Pooja Swami 30'}}>
      <Header />
      </UserContext.Provider>
      {/* this outlet filled with whatever component we have in chirdern with routes */}
      <Outlet/>
     
    </div>
    </UserContext.Provider>
    </Provider>
  );
}