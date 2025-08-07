
import { useEffect, useState } from "react";
import resData from "../utils/mockDataforSingleCard";

const useRestrauntMenu =(resId)=>{

    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        featchData();
    },[])

    const featchData=async()=>{
        // nned to call here api for resturant menu data

        const data =await resData?.data?.cards[2].card.card.info
        // const json =await data.json();
        setResInfo(data);
    }
    return resInfo;
}

export default useRestrauntMenu;