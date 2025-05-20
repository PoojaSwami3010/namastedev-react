import React from "react"
import RestaurantCard  from './RestaurantCard'
import resList from '../utils/mockData'


// not using key (not acceptable) <<< index as key <<<<<<<<< unique id (best priactice)
const Body=()=>{
  const listOfRestaurant=[{

  }]

    return (
      <div className='body'>
        <div className='filter'>
          <button className="filter-btn" onClick={()=>{console.log("button clicked")}} >Top Rated Restaurants</button>
        </div>
        <div className='res-container'>
          {/* Rstaurnatcard */}
            {              resList.map((item)=>
                  <RestaurantCard key={item?.info?.id} resData={item} />              )
            }    
                     </div>
      </div>
    )
  }
  




  export default Body;