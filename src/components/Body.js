import React, { useState } from "react"
import RestaurantCard  from './RestaurantCard'
import resList from '../utils/mockData'


// not using key (not acceptable) <<< index as key <<<<<<<<< unique id (best priactice)
const Body=()=>{

  //local state variable -powerful variable update it using setListofRestaurant
const [listOfRestaurant,setListOfRestaurant]=useState(resList);

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