import React, { useState } from "react"
import RestaurantCard  from './RestaurantCard'
import resList from '../utils/mockData'


// not using key (not acceptable) <<< index as key <<<<<<<<< unique id (best priactice)
const Body=()=>{

  //local state variable -powerful variable update it using setListofRestaurant
const [listOfRestaurant,setListOfRestaurant]=useState([{
  "info": {
      "id": "234875",
      "name": "Adil Hotel",
      "cloudinaryImageId": "jo9pdipf4elcuch8g55q",
    
      "costForTwo": "₹150 for two",
      "cuisines": [
          "North Indian",
          "Biryani",
          "Tandoor"
      ],
      "avgRating": 4.3,
     
      "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 10.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "10.7 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
     
    
      
     
  },

},{
  "info": {
      "id": "234895",
      "name": "MCD",
      "cloudinaryImageId": "jo9pdipf4elcuch8g55q",
    
      "costForTwo": "₹150 for two",
      "cuisines": [
          "North Indian",
          "Biryani",
          "Tandoor"
      ],
      "avgRating": 4.1,
     
      "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 10.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "10.7 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
     
    
      
     
  },

}, {
  "info": {
      "id": "234675",
      "name": "Dominos",
      "cloudinaryImageId": "jo9pdipf4elcuch8g55q",
    
      "costForTwo": "₹150 for two",
      "cuisines": [
          "Pizza",
          "Biryani",
          "Tandoor"
      ],
      "avgRating": 3.8,
     
      "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 10.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "10.7 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
     
    
      
     
  },

}]);

// setListOfRestaurant([])

    return (
      <div className='body'>
        <div className='filter'>
          <button className="filter-btn" onClick={()=>{
          
            const filteredList=listOfRestaurant.filter((res)=>res.info.avgRating>4)
            console.log("button listOfRestaurant",filteredList)
            setListOfRestaurant(filteredList);
            }} >Top Rated Restaurants</button>
        </div>
        <div className='res-container'>
          {/* Rstaurnatcard */}
            {              listOfRestaurant.map((item)=>
                  <RestaurantCard key={item?.info?.id} resData={item} />              )
            }    
                     </div>
      </div>
    )
  }
  




  export default Body;