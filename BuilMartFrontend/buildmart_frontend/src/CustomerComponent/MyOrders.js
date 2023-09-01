import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyOreders(){

    const navigate=useNavigate();
    var uid=(JSON.parse(localStorage.getItem("loggedUser"))).id;
   
    
    const[orderitems,setOrderItems]=useState([]);
    const showOrder=()=>{
    
        console.log(uid);
        fetch("http://localhost:8080/getOrderItemByUid?uid="+uid)
        .then(resp=>resp.json())
        .then(data=>{setOrderItems(data);console.log(JSON.stringify(orderitems))})
        console.log(JSON.stringify(orderitems))
    };
    return(
        <div className="fs-4">
            <h1 className="display-1 text-info">Your orders details </h1>
            <table className="table table-bordered table-stripped table-responsive table-warning">
                <thead>
                    <tr>
                        <th>Product name</th>
                        <th>Quantity</th>
                        <th>Payment amount done</th>
                        <th>Delivery city name</th>
                        <th>Delivery area name</th>
                        <th>Delivery address line</th>
                        <th>Order placed date</th>
                        <th>Order status</th>
                    </tr>
                </thead>
                <tbody>
                    {orderitems.map((v)=>{return(
                        <tr>
                               <td>{v.vendorProduct.product.productName}</td>  
                           <td>{v.quantity}</td>
                           <td>{v.order.initialPaymentAmount}</td>
                          <td>{v.order.address.area.city.city_name}</td> 
                           <td>{v.order.address.area.name}</td>
                            <td>{v.order.address.add_line}</td>
                            <td>{v.order.orderDate}</td>
                          <td>{v.order.order_Status.status}</td> 
                        </tr>)
                    })} 
                </tbody>
            </table>
            <button style={{position:faAlignCenter}} type="button" className="btn btn-outline-primary" onClick={showOrder}>View orders</button>
            <button style={{position:faAlignCenter}} type="button" className="btn btn-outline-primary" onClick={()=>{navigate("/customer")}}>Back to home</button>
        </div>
    )
}