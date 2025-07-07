import React from "react";
import { NavLink, Outlet} from "react-router-dom";
export default function Card(){
    return(
        <div>
           <div style={{display:'flex',alignContent:'center',justifyContent:'center',gap:'20px'}}> 
            <NavLink  to="card3">Card3</NavLink>
            <NavLink to="card4">Card4</NavLink>
            </div>
            <Outlet/>
        </div>
    )
}