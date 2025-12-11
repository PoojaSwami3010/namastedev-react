import React ,{useContext}from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from '../utils/UserContext'

// const RestaurantCard=(props)=>{
    const RestaurantCard=(props)=>{
      const {loggedInUser}=useContext(UserContext)        // console.log(props)
        const {resData}=props;
      //   console.log('resData',resData)
      const {name,cloudinaryImageId,cuisines,avgRating,costForTwo,sla}=resData?.info
      
        return (
          // here we added w-[200px] we can add speicifally custom css  
          <div  data-testid="restaurant-card" className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400 hover:shadow-lg' >
             <img className='res-logo rounded-lg' height={95} alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h4>
          {cuisines.join(", ")}
          </h4>
          <h4 >{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla.slaString} </h4>
          <h4>{loggedInUser}</h4>
          </div>
        )
      }
      

// higher Order Component 
// imput restocard-output restaurantcard Promoted


export const withPromotedLabel=(RestaurantCard)=>{
  return (props)=>{

    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard  {...props}/>
      </div>
    )

  }
}


      export default RestaurantCard;