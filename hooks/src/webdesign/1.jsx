import React from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Card1 from "../design/card1";
import Card2 from "../design/card2";
import Card3 from "../design/card3";
import Card4 from "../design/card4";
import Card from "./card";
import "./web.css"
export default function Webdesign(){
     
    return(
        <div className="main">
        <BrowserRouter>
        
        
         <nav>
         <NavLink style={{textDecoration:'none',color:'coral'}}  to="/">Home</NavLink>
         <NavLink style={{textDecoration:'none',color:'coral'}} to="/card2">Card2</NavLink>
         <NavLink style={{textDecoration:'none',color:'coral'}} to="/cards">Cards</NavLink>
         </nav>
         <div className="content">
         
      
        <Routes>
            
            <Route path="/" element={<Card1/>}/>
            
             <Route path="/card2" element={<Card2/>}/>
             <Route path="cards" element={<Card/>}>
             <Route path="card3" element={<Card3/>}/>
             <Route path="card4" element={<Card4/>}/>
             </Route>
        </Routes>
        </div>
        </BrowserRouter>
     
        </div>
        
    )

}