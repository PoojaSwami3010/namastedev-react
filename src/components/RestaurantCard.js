import React from "react";
// const RestaurantCard=(props)=>{
    const RestaurantCard=(props)=>{
        // console.log(props)
        const {resData}=props;
      //   console.log('resData',resData)
      const {name,cloudinaryImageId,cuisines,avgRating,costForTwo,sla}=resData?.info
      
        return (
          <div className='res-card' style={{backgroundColor:"#F0F0F0"}}>
             <img className='res-logo' height={95} alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
            <h3>{name}</h3>
          <h4>
          {cuisines.join(", ")}
          </h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla.deliveryTime} minutes</h4>
          </div>
        )
      }
      

      export default RestaurantCard;