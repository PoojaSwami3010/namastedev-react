import { useEffect, useState } from "react";

const User=(props)=>{

const [count,setCount]=useState(0);
const [count2]=useState(1);

useEffect(()=>{
//Api calls
const timer=setInterval(()=>{
    console.log("namste react op")
        },1000)


        return()=>{
            // this return is called when we are unmount the component or destroying component
            console.log("use effect")
            clearInterval(timer)

        }
},[count])

useEffect(()=>{
    //Api calls
    },[count2])

    return <div className="user-card">
        <h1>Count= {count}</h1>
        <h1>Count2= {count2}</h1>
        <h2>Name: {props.name}</h2>
        <h3>Location: Pune</h3>
        <h4>Contact: @Pooja</h4>
    </div>
}

export default User;