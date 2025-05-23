import React, { useEffect, useState } from "react"
import RestaurantCard  from './RestaurantCard'
import resList from '../utils/mockData'


// not using key (not acceptable) <<< index as key <<<<<<<<< unique id (best priactice)
const Body=()=>{

  //local state variable -powerful variable update it using setListofRestaurant
const [listOfRestaurant,setListOfRestaurant]=useState(resList);
useEffect(()=>{

    
    var count = {};
    'aabbbgghye'.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    console.log("count",count)
   
  console.log("use effect callback function")
  featchData();
},[]);

const featchData=async ()=>{
  const data =await fetch(''

  );
}

console.log("body rendered")

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