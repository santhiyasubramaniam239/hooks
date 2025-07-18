import React, {useState, useEffect} from "react";
const CompB=()=>{
    const[count, setCount]= useState(0);
    useEffect(()=>{
        let timerId;
        console.log('effect goes here');
        if(count){
            setInterval(()=>{
               console.log('get price');
            }, 2000)
        }
        return ()=>{
            console.log('clean up goes here');
            clearInterval(timerId);
        }
    },[count]);
   return(
    <div>
        <p>Component B</p>
        <button onClick={()=> setCount(count+1)}>Get price</button><span>count is {count}</span>
    </div>
   )
};

export default CompB;