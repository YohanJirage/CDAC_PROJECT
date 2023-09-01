import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react"
import { json } from "react-router-dom";

export default function OrderHistory()
{
    const [vendor,setVendor] = useState((JSON.parse(localStorage.getItem("VendorUser"))))
    const [vendorOrderList,setvendorOrderList] = useState([])
    const[flag,setFlag]=useState(false);
 
    const showAllOrder=()=>{
    alert("hi")
      
      fetch("http://localhost:8080/getVendorOrderItems?vid="+vendor.id)
      .then((resp) => resp.json())
      .then((data) => setvendorOrderList(data));
      alert(vendor.id);
      alert(JSON.stringify(vendorOrderList));
      setFlag(true);
  };

    return (
        <div>
        <div className="container table-responsive-smtable-responsive-sm" style={{display:flag?"block":"none"}}>
        <table className="table table-hover content table-info table-striped ">
          <thead className="thead-dark content  ">
            <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>      
            <th scope="col">Address Line</th>
            <th scope="col">Area</th>
            <th scope="col">City</th>
            <th scope="col">Order Date</th>
            <th scope="col">Order Status</th>
            <th scope="col">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {vendorOrderList.map((v) => {
              return (
                <tr>
                  <td>{v.vendorProduct.product.productName}</td>
                  <td>{v.quantity}</td>
                  <td>{v.vendorProduct.price}</td>
                  <td>{v.order.address.add_line}</td>
                  <td>{v.order.address.area.name}</td>
                  <td>{v.order.address.area.city.city_name}</td>
                  <td>{v.order.orderDate}</td>
                  <td>{v.order.order_Status.status}</td>
                  <td>{(v.quantity) * (v.vendorProduct.price) }</td>
                 
                </tr>
              );
            })}
           
          </tbody>
        </table>
      </div>
      <button style={{position:faAlignCenter}} type="button" className="btn btn-outline-primary" onClick={showAllOrder}>View orders</button>  
  </div>
    
    )
}
