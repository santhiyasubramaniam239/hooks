import { useState, useEffect } from "react";
import './design.css';
export default function Card5(){
   const [userid] = useState(5);
    const [data, setData] = useState({
        id: '',
        name: '',
        email: '',
        website: '',
        phone: '',
        company: {
            name: ''
        }
    });

    useEffect(() => async () => {
        const res = await
            fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
                .then((r) => r.json())
                .then((data) => {

                    setData(data);
                });
        if (!res.ok) {
            throw Error("User details not found")
        }

    }, [userid]);

    return (
        <div className="c1">

            <div className="container1">

                <div className="image">
                    <h2 style={{ color: 'darkviolet', backgroundColor: 'lightgreen', padding: '5px', textAlign: 'center' }}>
                        USER Id :
                        {data.id}</h2>
                    <img src="/pic.png" width='100px' style={{ marginTop: '5px', marginLeft: '100px' }} />
                    <div className="d1" style={{ textAlign: 'center' }}>
                        <h3>Name : {data.name}</h3>
                        <h4>Email : {data.email}</h4>


                    </div>
                    <div style={{ backgroundColor: 'white', margin: '3px', padding: '3px', borderRadius: '5px', fontSize: "14px", color: 'green', textAlign: 'center' }}>

                        <h4 >Website : {data.website}</h4>
                        <h4 >Company-Name : {data.company.name}</h4>
                    </div>
                    <div>
                        <h4 style={{ margin: '5px', textAlign: 'center' }} >Mobile : {data.phone}</h4>
                    </div>


                </div>


            </div>
        </div>
    );
}