import React,{useRef} from "react";
export default function Reference(){
const reference=useRef();
const click=()=>{
    reference.current.focus();
}
return(
    <div>
        <input ref = {reference} type ="text" placeholder="Type your text here"/>
        <button onClick={click}>click here to focus textbox</button>
    </div>
)
}