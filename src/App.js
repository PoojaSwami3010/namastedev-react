import React from 'react';
import './style.css';
// import './HeadingComponent';


/* 
Header 
  -Logo
  - Nav items
Body
  -Search
  -Restaurantcontaniner
    -restaurant cards
      -img
      -name,star rating,cuisines delivery time

Footer
  -copyright
  -links  
  -address
  -contact



*/


const Header=()=>{
  return (
    <div className='header'>
      <div className='logo-container'>
      <img className='logo' src="https://plus.unsplash.com/premium_vector-1713201017274-e9e97d783e75?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home
          </li>
          <li>
            About Us
            </li>
            <li>
            Contact US
            </li>
            <li>
            Cart
            </li>
        </ul>

      </div>
      

    </div>
  )
}

// const StyleCard={
//  backgroundColor:"#F0F0F0"
// }
const RestaurantCard=()=>{
  return (
    <div className='res-card' style={{backgroundColor:"#F0F0F0"}}>
       <img className='res-logo' height={95} alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar"></img>
      <h3>Meghana Foods</h3>
    <h4>
    Biryani, North Indian, Asian
    </h4>
    <h4>4.4 stars</h4>
    <h4>38 minutes</h4>
    </div>
  )
}

const Body=()=>{

  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {/* Rstaurnatcard */}
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}


 




export default function App() {
  return (
    <div className="app">
      <Header></Header>
      <Body />
      </div>
  );
}


