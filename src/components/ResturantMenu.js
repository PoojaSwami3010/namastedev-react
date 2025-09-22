import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resData from "../utils/mockDataforSingleCard";
import { useParams } from "react-router-dom";
import useRestrauntMenu from '../utils/useRestrauntMenu'
import RessturantCategory from "../components/RessturantCategory.js"

const ResturantMenu=()=>{
    const [resInfo,setResInfo]=useState(null)
    const {resId}=useParams();
    const [showIndex,setShowIndex]=useState(0)

    // const resInfoCustomHook=useRestrauntMenu(resId);
    console.log("params",resId)

useEffect(()=>{
featchMenu();
},[])


console.log("res menu data",resData)
const featchMenu=async ()=>{

    // const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=11887&catalog_qa=undefined&submitAction=ENTER")
// console.log("res menu data",resData,resData?.data?.cards[2].card.card.info)
    // const json1=resData;

    // console.log(json1)
setResInfo(resData?.data?.cards[2].card.card.info)
}
const {name,cuisines,costForTwoMessage,id}=resData?.data?.cards[2].card.card.info

// console.log("vjdjs",resData?.data?.cards[1])
const itemsCard=resData?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
// filter out all cateogry where we have which has @type=='itemcategory'
// const categories=resData?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.filter(c=>c['@type']=='type.googleapis.com/swiggy.presentation.food.v2.Restaurant')
// console.log("categories",categories)
console.log('items card',itemsCard)

    return resInfo===null ? <Shimmer />: (
        <div className="text-center">
            <h1 className="font-bold my-6 text-xl">{name}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(",")}</h2>
            <h2>{costForTwoMessage}</h2>
             {/*<h2>Menu</h2>
            <ul>
                {itemsCard.map(res=>
                    <li key={res.card.info.id}>{res.card.info.name} -{"Rs."} {res.card.info.price/100}</li>
                )}
            </ul> */}
            {/* now want to build accordian  */}
            {/* controlled component now restaturant category */}
            {itemsCard.map((cateogry,index)=>{
               return <RessturantCategory data={cateogry.card.info} key={cateogry.card.info.id} showItem={index==showIndex ? true: false}/>
            })}
           
        </div>
    )
}

export default ResturantMenu;