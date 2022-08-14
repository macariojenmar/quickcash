import Axios from 'axios'
import React from 'react';
import {useState} from 'react';
import { Link} from "react-router-dom";




const Company = () => {

    const url = "api/storeCompany";
    
    const [data, setData] = useState({
        companyName : '',
        capital : '',
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            companyName: data.companyName,
            capital: data.capital,
        }).then(res => {
            console.log(res.data.status)

            if(res.data.status == 200){
                alert('Saved')
            }
        })
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    

    return (
        <div>
                <form onSubmit={submit}>
                <h1>Company</h1>
                <Link to="/dashboard">Dashboard</Link>
                <br/><br/>
                <br/><br/>
                <input 
                    type="text"
                    id="companyName"
                    placeholder='Company Name'                    
                    onChange={(e) => handle(e)}
                    value={data.email}
                    required>
                </input>
                <br/><br/>

                <input 
                    type="number"
                    id="capital"
                    placeholder='Capital'                    
                    onChange={(e) => handle(e)}
                    value={data.capital}
                    required>
                </input>
                <br/><br/>
                <button type="submit">Save Company</button>
                </form>
                    
                      
        </div>
    )
}

export default Company;