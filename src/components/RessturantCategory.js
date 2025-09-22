import { useState } from "react";
import ItemList from "./ItemList";

const RessturantCategory=(data,showItem)=>{
    // console.log("data in categry",data)
    // const [showItem,setShowItems]=useState(false)

    const handleClick=()=>{
        // console.log("clicked")
        // setShowItems(!showItem)
    }


    return <div>
    {/* accrdian header section */}
    
    <div className="w-6/12 m-auto bg-gray-50 my-4 p-4 shadow-lg">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>       
<span className="font-bold text-lg">{data.data.name}

    </span>
    <span className="text-red">v</span>
    </div>
   { showItem ? <ItemList  items={data.data}/> : ''}
    </div>
    {/* accordian body */}

    </div>
}

export default RessturantCategory;