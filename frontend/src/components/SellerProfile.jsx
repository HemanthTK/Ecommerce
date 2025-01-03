import axios from "axios"
import { useEffect, useState } from "react"

function SellerProfile(){
    const id=sessionStorage.getItem("id")
    const token = sessionStorage.getItem("accessToken")
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const [user,setUser]=useState({
        "id":sessionStorage.getItem("id"),
        "name":"",
        "city":"",
        "email":"",
        "pwd":"",
        "phone":""
    })

    useEffect(()=>{
        axios.get("http://localhost:8080/api/sellers/"+id)
        .then(resp=>{
            console.log(resp.data.data)
            setUser(resp.data.data)
        })
    },[])
    return (
        
        <div className="container">
            <div className="card shadow m-3 p-2">
                <h4 className="p-2" style={{borderBottom:"2px solid green",width:"300px",margin:"auto"}}>Seller Profile Page</h4>
                <br/>
            <h4>Welcome {user.name}</h4>
            <h5>City : {user.city}</h5>
            <h5>Email Id : {user.email}</h5>
            <h5>Contact No : {user.phone}</h5>
            </div>
        </div>
    )
}

export default SellerProfile;
