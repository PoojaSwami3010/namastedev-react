import React from "react"
import RestaurantCard  from './RestaurantCard'
import resList from '../utils/mockData'


// not using key (not acceptable) <<< index as key <<<<<<<<< unique id (best priactice)
const Body=()=>{

    return (
      <div className='body'>
        <div className='search'>Search</div>
        <div className='res-container'>
          {/* Rstaurnatcard */}
            {
              resList.map((item)=>
                  <RestaurantCard key={item.info.id} resData={item} />
              )
            }    
                    
          {/* <RestaurantCard resName="Pizz hut foods" cusine="pizza burger"/> */}
         
        </div>
      </div>
    )
  }
  




  export default Body;