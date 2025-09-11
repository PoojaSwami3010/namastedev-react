import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    // check if online

    const [onlineStatus,setOnlineStatus]=useState(true)
useEffect(()=>{
    window.addEventListener("offline",()=>{
        setOnlineStatus(false)
    })
    window.addEventListener("onLine",()=>{
        setOnlineStatus(true)
    })
},[])

    // try to check if online
    return onlineStatus;
}

export default useOnlineStatus;