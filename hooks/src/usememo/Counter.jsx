import React, { useState, useMemo } from "react";


const Counter3=()=>{
    const[count, setCount]=useState(0);
    const[person, setPerson]=useState({firstName:'',lastName:''});
    const[number, setNumber]=useState(1);

    const increasefive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevState => prevState + 1);
        }

    }
    const factorial=(n)=>{
        console.log('inside factorial method');
        let result = 1;
        if(n <=1){
            return result;
        }else{
            for(let i=n; i>=1;i--){
                result = result * i;
            }
            return result;
        }
    }

    const factorial1 = useMemo(()=>{factorial(number)},[number]); 

    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
            <p>Current value of count is: {count}</p>
            <button onClick={() => increasefive()}>click me to add 5</button>
            <hr />
            <input type = "text" onChange={(e)=>setPerson({...person, firstName:e.target.value})} placeholder="Enter your first name"/>
             <input type = "text" onChange={(e)=>setPerson({...person, lastName:e.target.value})} placeholder="Enter your last name"/>
             {JSON.stringify(person)}
             <p>firstName value is : {person.firstName}</p>
              <p>lastName value is : {person.lastName}</p>
              <hr />
              <p>Find the factorial of the given number</p>
              <input type ="text" placeholder="Enter the number"  onChange={(e)=> (setNumber(e.target.value))}/>
             <span>Factorial of the given number is : {factorial1}</span>
        
        </div>

    );


};
export default Counter3;