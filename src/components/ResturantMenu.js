import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resData from "../utils/mockDataforSingleCard";

const ResturantMenu=()=>{

    const [resInfo,setResInfo]=useState(null)

useEffect(()=>{
featchMenu();
},[])


// console.log("res menu data",resData)
const featchMenu=async ()=>{

    // const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=11887&catalog_qa=undefined&submitAction=ENTER")
// console.log("res menu data",resData,resData?.data?.cards[2].card.card.info)
    // const json1=resData;

    // console.log(json1)
setResInfo(resData?.data?.cards[2].card.card.info)
}
const {name,cuisines,costForTwoMessage,id}=resData?.data?.cards[2].card.card.info


    return resInfo===null ? <Shimmer />: (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <h2>{costForTwoMessage}</h2>
           
        </div>
    )
}

export default ResturantMenu;