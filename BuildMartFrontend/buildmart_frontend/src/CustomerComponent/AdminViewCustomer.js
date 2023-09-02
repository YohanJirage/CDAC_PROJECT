import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AdminViewVendor(){
       
    const uid= (JSON.parse(localStorage.getItem("loggedUser"))).id;
    const[customer,setCustomer]=useState({});
    const {id} = useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        alert(id);
        fetch("http://localhost:8080/getCustomerByUid?uid="+id)
        .then(resp=>resp.json())
        .then(data=>setCustomer(data))
    },[])
    return(
        <div className="fs-4">
            <h1>Vendor Details</h1>
            <div>
                <table className="table table-bordered table-responsive table-striped">
                   <thead>
                      <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Contact number</th>
                         
                      </tr>
                   </thead>
                   <tbody>
                      <tr>
                        <td>
                            {customer.first_name}
                        </td>
                        <td>
                            {customer.last_name}
                        </td>
                        <td>
                            {customer.email}
                        </td>
                        <td>
                            {customer.contactNo}
                        </td>
                      
                      </tr>
                   </tbody>
                    
                </table>
                <button type="button" onClick={()=>{navigate("/admin")}}>Back to homepage</button>
            </div>
        </div>
    )
}