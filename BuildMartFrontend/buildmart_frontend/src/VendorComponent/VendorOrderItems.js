import { useEffect, useState } from "react"

export default function VendorOrderItems()
{
  const [vendor,setVendor] = useState((JSON.parse(localStorage.getItem("VendorUser"))))
  const [vendorOrderList,setvendorOrderList] = useState((JSON.parse(localStorage.getItem("orders"))))
 
    const viewOrders=()=>{
        fetch("http://localhost:8080/getVendorOrderItems?vid="+vendor.id)
        .then((resp) => resp.json())
        .then((data) => setvendorOrderList(data)
        );

        
    }

    // useEffect(()=>
    // {
    //   fetch("http://localhost:8080/getVendorOrderItems?vid="+vendor.id)
    //     .then((resp) => resp.json())
    //     .then((data) => setvendorOrderList(data)
    //     );
    //     console.log(vendorOrderList)
    // },[])

  

    const changestatus = (v) =>{
        fetch("http://localhost:8080/changeOrderStatus?oid="+v)
        .then(
            alert("Order Status Changed")
        )
    }


    return (
        <div className="fs-4" >
          <button type="button" onClick={()=>{viewOrders()}}>View Orders</button>
        <div className="container table-responsive-smtable-responsive-sm">
        <table className="table table-hover content ">
          <thead className="thead-dark content ">
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>      
            <th scope="col">Address Line</th>
            <th scope="col">Area</th>
            <th scope="col">City</th>
            <th scope="col">Order Date</th>
            <th scope="col">Order Status</th>
            <th scope="col">Total Price</th>
          </thead>
          <tbody>
            
            {vendorOrderList.map((v) => {
              return (
                <tr>
                  <td>{v.vendorProduct.product.productName}</td>
                  <td>{v.quantity}</td>
                  {/* <td>{v.vendorProduct.price}</td> */}
                  {/* <td>{v.order.address.add_line}</td> */}
                  {/* <td>{v.order.address.area.name}</td>
                 <td>{v.order.address.area.city.city_name}</td>
                  <td>{v.order.orderDate}</td> */}
                  {/* <td>{v.order.order_Status.status}</td>
                  <td>{(v.quantity) * (v.vendorProduct.price) }</td>  */}
                  <td>
                    <button
                      type="button"
                      id={v.id}
                      
                      onClick={() => changestatus(v.order.id)}
                    >
                        CHANGE STATUS TO DELIVERED
                    </button>
                  </td>
                </tr>
              );
            })}
          
          </tbody>
        </table>
      </div>
  </div>
    
    )
}
