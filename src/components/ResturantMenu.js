import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resData from "../utils/mockDataforSingleCard";
import { useParams } from "react-router-dom";
import useRestrauntMenu from '../utils/useRestrauntMenu'

const ResturantMenu=()=>{
    const [resInfo,setResInfo]=useState(null)
    const {resId}=useParams();

    // const resInfoCustomHook=useRestrauntMenu(resId);
    console.log("params",resId)

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

console.log("vjdjs",resData?.data?.cards[1])
const itemsCard=resData?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards

// console.log('items card',itemsCard)

    return resInfo===null ? <Shimmer />: (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h2>{costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
                {itemsCard.map(res=>
                    <li key={res.card.info.id}>{res.card.info.name} -{"Rs."} {res.card.info.price/100}</li>
                )}
            </ul>
           
        </div>
    )
}

export default ResturantMenu;