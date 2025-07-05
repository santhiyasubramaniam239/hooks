import { useState, useEffect } from "react";
import './design.css';
export default function Card1(){
    const [userid, setUserid]=useState(1);
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[mobile,setMobile]=useState('');
    const[website, setWebsite]=useState('');
    const[company, setCompany]=useState('');
     
     useEffect(()=>{
       
        fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
        .then((r)=>r.json())
        .then((data)=>{
       
        setUserid(data.id);
        setName(data.name);
        setEmail(data.email);
        setMobile(data.phone);
        setWebsite(data.website);
        setCompany(data.company.name);

        });

     },[userid] );
     
    return(
        <div className="c1">
         
        <div className="container1">
            
            <div className="image">
               
                
                <h2 style={{color:'darkviolet',backgroundColor:'lightgreen',padding:'5px',textAlign:'center'}}>USER Id:{userid}</h2>
                <img src ="/pic.png"  width='100px' style={{marginTop:'5px',marginLeft:'100px'}}/>
                <div className="d1" style={{textAlign:'center'}}>
             <h3>Name : {name}</h3>
        <h4>Email : {email}</h4>
          

        </div>
            <div style={{backgroundColor:'white',margin:'3px',padding:'3px',borderRadius:'5px',fontSize:"14px", color:'green',textAlign:'center'}}>
            
            <h4 >Website : {website}</h4>
            <h4 >Company-Name : {company}</h4>
           </div>
           <div>
            <h4 style={{ margin:'5px',textAlign:'center'}} >Mobile : {mobile}</h4>
           </div>
            
       
            </div>
       
        
        </div>
        </div>
    );
}