import { useState, useEffect } from "react";
import './view.css';
export default function Design2(){
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
       
      
        setName(data.name);
        setEmail(data.email);
        setMobile(data.phone);
        setWebsite(data.website);
        setCompany(data.company.name);

        });

     },[userid] );
     
    return(
        <div>
          <div>
        <button onClick={()=>userid<10 ?setUserid(userid+1):"user not found"}>CLICK Here to view next user</button>
        </div>
        <div className="container1">
            
            <div className="image">
               
                
                <h2 style={{color:'darkviolet',backgroundColor:'lightgreen',padding:'5px'}}>USER Id:{userid}</h2>
                <img src ="/pic.png"  width='100px' style={{marginTop:'5px'}}/>
                <div className="d1">
             <h3>Name : {name}</h3>
        <h4>Email : {email}</h4>
          

        </div>
            <div style={{backgroundColor:'white',margin:'3px',padding:'3px',borderRadius:'5px',fontSize:"14px", color:'green'}}>
            
            <h4 >Website : {website}</h4>
            <h4 >Company-Name : {company}</h4>
           </div>
           <div>
            <h4 style={{ margin:'5px'}} >Mobile : {mobile}</h4>
           </div>
            
       
            </div>
       
        
        </div>
       
        </div>
    );
}