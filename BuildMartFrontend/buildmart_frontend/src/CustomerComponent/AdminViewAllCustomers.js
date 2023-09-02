import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminViewAllCustomers(){
     
    const[customers, setCustomers]=useState([]);
    const navigate= useNavigate();

    useEffect(()=>{
        fetch("http://localhost:8080/getCustomers")
        .then(resp=>resp.json())
        .then(data=>setCustomers(data))
    },[])
    return(
        <div className="fs-4">
            <h1>All customers list</h1>
            <table className="table table-bordered table-responsive table-striped">
                   <thead>
                      <tr>
                          <th>User id</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>View</th>
                          
                      </tr>
                   </thead>
                   <tbody>
                          {customers.map((v)=>{ return(
                            <tr>
                                <td>
                                    {v.user.id}
                                </td>
                                <td>
                                    {v.first_name}
                                </td>
                                <td>
                                    {v.last_name}
                                </td>
                                <td>
                                    <button type="button" onClick={()=>{navigate(`/viewCustomer/${v.user.id}`)}}>View details</button>
                                </td>
                            </tr>)
                          })}  
                   </tbody>
             </table>
             <button type="button" onClick={()=>{navigate("/admin")}}>Back to homepage</button>
        </div>
    )
}