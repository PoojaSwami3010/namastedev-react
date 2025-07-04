import React, { useEffect, useState } from "react"
import RestaurantCard  from './RestaurantCard'
import resList from '../utils/mockData'
import Shimmer from './Shimmer'
import {Link} from 'react-router-dom'

// not using key (not acceptable) <<< index as key <<<<<<<<< unique id (best priactice)
const Body=()=>{

  //local state variable -powerful variable update it using setListofRestaurant
const [listOfRestaurant,setListOfRestaurant]=useState([]);
const [filteredList,setFilteredList]=useState([])
const [searchText,setSearchText]=useState('')
// console.log("body rendered")

useEffect(()=>{

    
    // var count = {};
    // 'aabbbgghye'.split('').forEach(function(s) {
    //    count[s] ? count[s]++ : count[s] = 1;
    // });
    // console.log("count",count)
   
  // console.log("use effect callback function")
  featchData();
},[]);

const featchData=async ()=>{
  // here need to call one api and set data to list
  // const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  // const json1=await data.json();

  const json=resList
  // console.log("json",json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  // optional chanining
  setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  setFilteredList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
}

// conditional rendering (rendering on bases of condition)
// if(listOfRestaurant.length===0){
//   return <Shimmer/>
// }



    return listOfRestaurant.length===0 ? (<Shimmer/>):(
      <div className='body'>
        <div className='filter'>
          <div className="search">
            <input typy="text" className="serach-box" 
            value={searchText} 
            onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button onClick={()=>{
              // filter res cards and update ui
              const filteredList1=listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                // console.log(filteredList1)
                setFilteredList(filteredList1)
            }}>Search</button>
          </div>
          <button className="filter-btn" onClick={()=>{
          
            const filteredList=listOfRestaurant.filter((res)=>res.info.avgRating>4)
            // console.log("button listOfRestaurant",filteredList)
            setListOfRestaurant(filteredList);
            }} >Top Rated Restaurants</button>
        </div>
        <div className='res-container'>
          {/* Rstaurnatcard */}
            {              filteredList.map((item)=>
               <Link key={item?.info?.id}  to={"/restaurant/" + 89}><RestaurantCard key={item?.info?.id} resData={item} />   </Link>              )
            }    
                     </div>
      </div>
    )
  }
  




  export default Body;