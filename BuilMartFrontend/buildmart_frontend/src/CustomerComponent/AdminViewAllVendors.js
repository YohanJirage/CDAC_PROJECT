import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AdminViewAllVendors(){

    const[vendors, setVendors]=useState([]);
    const navigate= useNavigate();

    useEffect(()=>{
        fetch("http://localhost:8080/getVendors")
        .then(resp=>resp.json())
        .then(data=>setVendors(data))
    },[])
    return(
        <div className="fs-4">
            <h1>All vendors list</h1>
             <table className="table table-bordered table-responsive table-striped">
                   <thead>
                      <tr>
                          <th>User id</th>
                          <th>Shop Name</th>
                          <th>View</th>
                          
                      </tr>
                   </thead>
                   <tbody>
                          {vendors.map((v)=>{return(
                            <tr>
                                <td>
                                    {v.user.id}
                                </td>
                                <td>
                                    {v.shopName}
                                </td>
                                <td>
                                    <button type="button" onClick={()=>{navigate(`/viewVendor/${v.user.id}`)}}>View details</button>
                                </td>
                            </tr>)
                          })}  
                   </tbody>
             </table>
             <button type="button" onClick={()=>{navigate("/admin")}}>Back to homepage</button>
        </div>
    )
}