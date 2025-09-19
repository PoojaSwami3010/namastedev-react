const ItemList=(item)=>{
    console.log("item",item)
    return  <div className="p-2 m-2 border-gray-200  border-b-2 text-left flex">
        {/* <ul>
            {item.map(item=>{
return   <li >{item.price}</li>
            })}
          
        </ul> */}
         <div className="w-9/12">
        {item.items.price}
        <p className="text-xs">{item.items.description}</p>
        </div>
        <div className="w-3/12">
            <img className="w-20 "  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/9/10/eccf0a01-a230-4714-a79b-ef4aac9817c4_18bc28d0-dfbb-495e-bcd7-251c59bbf25a.jpg"/>
        </div>
       
    
    </div>
}

export default ItemList;