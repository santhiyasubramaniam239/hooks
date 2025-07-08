import { useState, useEffect } from "react";
import './design.css';
export default function A5Cards() {
    
    const [data, setData] = useState([]);

   useEffect(() =>{
        const fetchData = async () => {
        const res = await
            fetch(`https://jsonplaceholder.typicode.com/users`)
             if (!res.ok) {
            throw Error("User details not found")
        } 
           const data =await res.json();

                    setData(data.slice(0,5));
                };
               

       fetchData();
    }, []);

    return (
         
        <div className="c1">
           {data.map((user)=>(  
            <div key={user.id} className="container1">
            
                <div className="image">
                    <h2 style={{ color: 'darkviolet', backgroundColor: 'lightgreen', padding: '5px', textAlign: 'center' }}>
                        USER Id :
                        {user.id}</h2>
                    <img src="/pic.png" width='100px' style={{ marginTop: '5px', marginLeft: '100px' }} />
                    <div className="d1" style={{ textAlign: 'center' }}>
                        <h3>Name : {user.name}</h3>
                        <h4>Email : {user.email}</h4>


                    </div>
                    <div style={{ backgroundColor: 'white', margin: '3px', padding: '3px', borderRadius: '5px', fontSize: "14px", color: 'green', textAlign: 'center' }}>

                        <h4 >Website : {user.website}</h4>
                        <h4 >Company-Name : {user.company.name}</h4>
                    </div>
                    <div>
                        <h4 style={{ margin: '5px', textAlign: 'center' }} >Mobile : {user.phone}</h4>
                    </div>


                </div>

             
            </div>
           ))}
        </div>
    );
}