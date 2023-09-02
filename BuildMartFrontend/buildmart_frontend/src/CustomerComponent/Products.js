import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import'../style.css';
import '../Registration/shubham.css';
import ViewProduct from "./ViewProduct";
export default function Products(ps){
     //create diiferent products component for different category
    const navigate = useNavigate();

    const[products,setProduct]=useState([]);
    const[catid,setCatid]=useState(ps.catid);
    const uid= JSON.parse(localStorage.getItem("loggedUser")).id;

    useEffect(()=>{
        
        fetch("http://localhost:8080/getProducts?cid="+catid)
        .then(resp=>resp.json())
        .then(data=>setProduct(data))
    })

    return(
        <div className="App fs-4">
        {/* //     <div id="operations">
        //         <select name="ops" onChange={(e)=>{navigate("/"+e.target.value)}}>
        //             <option >user operations</option>
        //             <option value="editProfile">Edit profile</option>
        //             <option value="viewProfile">View Profile</option>
        //             <option value="myOrders">My orders</option>
        //             <option value="logOut">Log out</option>
        //         </select>
        //         <div id="cart"><a href="/viewCart">View Cart</a></div>
        //     </div> */}
 <div className='container table-responsive-smtable-responsive-sm'> 
        <table  className="table table-hover content" >
            <thead className="thead-dark content ">
                <tr>
                    <th>Product image</th>
                    <th>Product name</th>
                    <th>Description</th>
                    <th>View</th>
                </tr>
            </thead>
            <tbody>
                    {products.map(v=>{
                        return(
                            <tr>
                                <td><img src={'data:image/jpeg;base64,${v.picture}'} width="100" height="100"/></td>
                                <td>{v.product_name}</td>
                                <td>{v.description}</td>
                                <td><a  href={v.product_name}>view product</a></td>
                            </tr>
                        )
                    
                    })}
            </tbody>
        </table>
        </div>
            
            <Routes>
                {/* <Route path="editProfile" element={<EditProfile />} /> 
                   <Route path="viewProfile" element={<ViewProfile />} />
                   <Route path="myOrders" element={<MyOrders />} />
                   <Route path="logOut" element={<Logout />} />
                   <Route path="viewCart" element={<Logout />} />
                */}
                 {products.map(v=>{
                                   return <Route path={v.product_name} element={<ViewProduct pid={v.id} uid={uid} />} />
                             })}
                
            </Routes>
        </div>
   )
}