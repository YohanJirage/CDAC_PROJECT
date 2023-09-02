//import './Login.js'
export default function OrderSuccess(ps){
   
    const obj= JSON.parse(localStorage.getItem("orderid"))
    return(
        <div className="fs-4">
            <h2 className="text-success">Order placed Successfully!!!</h2>
            
            <a href="/customer" className="btn btn-outline-primary">back to home page</a>
        </div>
    )
}