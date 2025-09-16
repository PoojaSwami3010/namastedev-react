import React from "react";
import { CDN_URL } from "../utils/constants";


// const RestaurantCard=(props)=>{
    const RestaurantCard=(props)=>{
        // console.log(props)
        const {resData}=props;
      //   console.log('resData',resData)
      const {name,cloudinaryImageId,cuisines,avgRating,costForTwo,sla}=resData?.info
      
        return (
          // here we added w-[200px] we can add speicifally custom css  
          <div className='m-4 p-4 w-[250px] rounded-lg' style={{backgroundColor:"#F0F0F0"}}>
             <img className='res-logo rounded-lg' height={95} alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h4>
          {cuisines.join(", ")}
          </h4>
          <h4 >{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla.slaString} </h4>
          </div>
        )
      }
      

      export default RestaurantCard;