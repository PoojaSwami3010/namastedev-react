import React, { useEffect, useState,useContext } from "react"
import RestaurantCard , {withPromotedLabel} from './RestaurantCard'
import resList from '../utils/mockData'
import Shimmer from './Shimmer'
import {Link} from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"

// not using key (not acceptable) <<< index as key <<<<<<<<< unique id (best priactice)
const Body=()=>{

  //local state variable -powerful variable update it using setListofRestaurant
const [listOfRestaurant,setListOfRestaurant]=useState([]);
const [filteredList,setFilteredList]=useState([])
const [searchText,setSearchText]=useState('')
// console.log("body rendered")

const {loggedInUser,setUserName}=useContext(UserContext)


const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

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
  // console.log("json",json.data.cards[0].card.card.gridElements.infoWithStyle.restaurants)
  // optional chanining
  setListOfRestaurant(json.data.cards[0].card.card.gridElements.infoWithStyle.restaurants);
  setFilteredList(json.data.cards[0].card.card.gridElements.infoWithStyle.restaurants);

}

// conditional rendering (rendering on bases of condition)
// if(listOfRestaurant.length===0){
//   return <Shimmer/>
// }
const onlineStatus=useOnlineStatus();

if(onlineStatus===false){
  return <h1>Looks Like you're offline!!!! Please check your internet connection.</h1>
}


    return listOfRestaurant.length===0 ? (<Shimmer/>):(
      <div className='body'>
        <div className='filter flex items-center'>
          <div className="search m-4 p-4 ">
            <input type="text" className="border border-solid border-black" 
            value={searchText} 
            onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button onClick={()=>{
              // filter res cards and update ui
              const filteredList1=listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                // console.log(filteredList1)
                setFilteredList(filteredList1)
            }} className="px-4 bg-green-100 m-4 py-2 rounded-lg">Search</button>
          </div>
          <div>
          <button className="px-4 m-4 bg-gray-100 py-2 rounded-lg" onClick={()=>{
          
          const filteredList=listOfRestaurant.filter((res)=>res.info.avgRating>4)
          // console.log("button listOfRestaurant",filteredList)
          setListOfRestaurant(filteredList);
          }} >Top Rated Restaurants</button>
          </div>
          <div>
            <label className="p-2">User Name</label>
          <input typy="text" className="border border-solid border-black p-2" value={loggedInUser} onChange={(event)=>setUserName(event.target.value)}/>
          </div>
   
        </div>
        <div className='flex flex-wrap'>
          {/* Rstaurnatcard */}
            {              filteredList.map((item)=>
               <Link key={item?.info?.id}  to={"/restaurant/" + 386176}>
                {/* if restaurant is promoted then we will show promoted label on card */}
                {
                  item?.info?.promoted ? (  <RestaurantCardPromoted key={item?.info?.id} resData={item} /> ) : <RestaurantCard key={item?.info?.id} resData={item} />   
                }
               
                
                </Link>              )
            }    
                     </div>
      </div>
    )
  }
  




  export default Body;