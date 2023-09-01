import { useEffect, useState } from "react"
import'../style.css';
import '../Registration/shubham.css';
export default function ViewProduct(ps){

    const [vproduct,setVproduct]=useState([]);
    const [msg,setMsg]=useState([]);
    const [pid,setPid]=useState(ps.pid);
    const [uid,setUid]=useState(ps.uid);
    const [qty,setQty] =useState(0);
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    

    useEffect(()=>{
        fetch("http://localhost:8080/getVendorProducts?productid="+pid)
        .then(resp=>resp.json())
        .then(data=>setVproduct(data))
    },[])

    const addToCart=(uid,vpid,qty)=>{
        fetch("http://localhost:8080/addToCart?vpid="+vpid+"&userid="+uid+"&qty="+qty)
        .then(resp=>resp.json())
        .then(data=>setMsg("successfully added to cart"))
    }
    return(
        <div className='container table-responsive-smtable-responsive-sm fs-4'>
            <table className="table table-hover content ">
                <thead className="thead-dark content ">
                    <tr>
                        <th scope="col">Product name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Vendor name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Cart ops</th>
                    </tr>
                </thead>
                <tbody>
                    {vproduct.map(v=>{
                        return <tr>
                            <td>{v.products.name}</td>
                            <td>{v.products.description}</td>
                            <td>{v.construction_material_vendor.shop_name}</td>
                            <td>{v.price}</td>
                            <td><input type="number" name="qty" value={qty}  onChange={e=>setQty(e.target.value)}/></td>
                            <td> <button type="button" className="btnn" onClick={addToCart(uid,v.id, qty)}>Add to cart</button></td>
                            
                            </tr>})}
                </tbody>
            </table>
            <p>{msg}</p>
        </div>
    )
}