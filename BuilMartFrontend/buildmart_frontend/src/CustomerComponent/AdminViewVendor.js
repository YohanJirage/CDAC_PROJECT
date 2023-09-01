import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AdminViewVendor(){
       
    const uid= (JSON.parse(localStorage.getItem("loggedUser"))).id;
    const[vendor,setVendor]=useState({});
    const {id} = useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        alert(id);
        fetch("http://localhost:8080/getVendorByUid?uid="+id)
        .then(resp=>resp.json())
        .then(data=>setVendor(data))
    },[])
    return(
        <div className="fs-4">
            <h1>Vendor Details</h1>
            <div>
                <table className="table table-bordered table-responsive table-striped">
                   <thead>
                      <tr>
                          <th>Shop Name</th>
                          <th>Email</th>
                          <th>Contact number</th>
                      </tr>
                   </thead>
                   <tbody>
                      <tr>
                        <td>
                            {vendor.shopName}
                        </td>
                        <td>
                            {vendor.email}
                        </td>
                        <td>
                            {vendor.contactNumber}
                        </td>
                      </tr>
                   </tbody>
                    
                </table>
                <button type="button" onClick={()=>{navigate("/admin")}}>Back to homepage</button>
            </div>
        </div>
    )
}