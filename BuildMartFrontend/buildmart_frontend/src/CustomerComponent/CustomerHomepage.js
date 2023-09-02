import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Products from "./Products";

import "../style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBars,
  faInfoCircle,
  faSearch,
  faUser,
  faShoppingCart,
  faTimes,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function CustomerHomepage() {
  const [categories, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [vendorproducts, setVendorProducts] = useState([]);
  const [msg, setMsg] = useState("");
  const [qty, setQty] = useState(0);

  const [data, setData] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [addedToCart, setAddedToCart] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const [productid, setProductid] = useState(1);

  const navigate = useNavigate();

  const uid = (JSON.parse(localStorage.getItem("loggedUser"))).id;
  const user = (JSON.parse(localStorage.getItem("loggedUser")));


  useEffect(() => {
    
    fetch("http://localhost:8080/getCategories")
      .then((resp) => resp.json())
      .then((data) => setCategory(data));
  }, []);

  const showProduct = (e) => {
    fetch("http://localhost:8080/getAvailableProducts?cid=" + e.target.value)
      .then((resp) => resp.json())
      .then((data) => setProducts(data));

      setCatflag(true);
  };

  const viewProduct = (v) => {
    // alert(productid);
    fetch("http://localhost:8080/getVendorProductsCustomer?pid=" + v)
      .then((resp) => resp.json())
      .then((data) => setVendorProducts(data));

      setPrdflag(true);
    //   $(document).ready(() => {
    //   $("#prd").hide("fast");
    // });
  };

  // const addToCart = (product) => {
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //   cart.push(product);
  //   localStorage.setItem("cart", JSON.stringify(cart));

  //   setSuccessMessage("Item added to cart successfully!");
  //   setAddedToCart((prevState) => ({
  //     ...prevState,
  //     [product.p_id]: true,
  //   }));
  // };

  const addToCart1 = (vpid, uid, qty) => {
    fetch(
     
      "http://localhost:8080/addToCart?vpid=" +
        vpid +
        "&uid=" +
        uid +
        "&qty=" +
        qty
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data !== null) {
          setMsg("successfully added to cart");
        } else {
          setMsg("something went wrong");
        }
      });
      // alert(qty);
  };

  const[catflag,setCatflag]=useState(false);
  const[prdflag,setPrdflag]=useState(false);

  return (
    <div className="App fs-4">
      <header className="header container-fluid">
        <ul className="nav navbar">
          <li className="nav-link logo">
            <Link to="/home" className="nav-link" style={{ fontSize: 40 }}>
              Build<span className="text-warning">Mart</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/customer" className="nav-link">
              HOME
            </Link>
          </li>

          
          <li className="nav-link">
            <Link to="/myOrders" className="nav-link">
              Order History
            </Link>
          </li>

          
        
          
          <li className="nav-item">
            <Link to="/viewCart" className="nav-link">
              <div className="icon-container">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/viewProfile" className="nav-link">
              <div className="icon-container">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/logout" className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
      </header>

      <div  id="operations">
      
        {/* <div className="search-bar">
          <input
            type="text"
            placeholder="Search by product name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div> */}
        <h5 className="text-info text-center">Welcome <span >{user.customer.first_name} {user.customer.last_name}</span></h5>
        {/* <select
          name="ops"
          onChange={(e) => {
            navigate(e.target.value);
          }}
        >
          <option>user operations</option>
           <option value="/editProfile">Edit profile</option>
          <option value="/viewProfile">View Profile</option>
          <option value="/myOrders">My orders</option>
          <option value="/logOut">Log out</option>
        </select>
         */}
      </div>
      <div id="cart">
        {/* <button
          type="button"
          className="btnn"
          onClick={() => {
            navigate("/viewCart");
          }}
        >
          View Cart
        </button> */}
      </div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li>
              <select name="categories" onChange={(e) => showProduct(e)}>
                <option>select Catagories</option>
                {categories.map((v) => {
                  return <option value={v.id}>{v.name}</option>;
                })}
              </select>
            </li>
            {/* {categories.map(v=>{return <li className="nav-item"><Link to={v.name} className="nav-link">{v.name}</Link></li>})} */}
          </ul>
        </div>
      </nav>
      <div style={{display:catflag?"block":"none"}} className="table-responsive">
        <table id="prd" className="table table-striped table-primary">
          <thead className="thead-dark">
            <tr>
              <th>
                {" "}
                <h2>Product image</h2>
              </th>
              <th>
                {" "}
                <h2>Product name</h2>
              </th>
              <th>
                {" "}
                <h2>Description</h2>
              </th>
              <th>
                {" "}
                <h2>View</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((v) => {
              return (
                <tr key={v.id}>
                  <td>
                    <img
                      src={`data:image/png;base64,${v.picture}`}
                      alt="Product"
                      className="img-thumbnail"
                      style={{ maxWidth: "300px", height: "300px" }}
                    />
                  </td>
                  <td className="product-details">
                    <h3>{v.productName}</h3>
                  </td>
                  <td className="product-details">
                    <h3>{v.description}</h3>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        setProductid(v.id);
                        viewProduct(v.id);
                      }}
                      className="btn btn-outline-warning"
                    >
                      View Product
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
   <div  style={{display:prdflag?"block":"none"}}>
      <table  className="table table-striped table-responsive table-success">
        <thead>
          <tr>
            <th>
              <h2>Image</h2>
            </th>
            <th>
              <h2>Product name</h2>
            </th>
            <th>
              <h2>Description</h2>
            </th>
            <th>
              <h2>Vendor name</h2>
            </th>
            <th>
              <h2>Price</h2>
            </th>
            
            <th>
              <h2>Cart ops</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {vendorproducts.map((v) => {
            return (
              <tr>
                <td>
                  <img
                    src={`data:image/png;base64,${v.product.picture}`}
                    alt="Product"
                    className="img-thumbnail"
                    style={{ maxWidth: "300px", height: "300px" }}
                  />
                </td>
                <td>
                  <h3>{v.product.productName}</h3>
                </td>
                <td>
                  <h3>{v.product.description}</h3>
                </td>
                <td>
                  <h3>{v.vendor.shopName}</h3>
                </td>
                <td>
                  <h3> {v.price}</h3>
                </td>
                <td>
                  <div className="input-group">
                   
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-warning"
                        type="button"
                        onClick={() => addToCart1(v.id, uid, qty)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <label htmlFor="qty">Enter quantity</label>
        <input
                      type="number"
                      className="form-control"
                      id="qty"
                      name="qty"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    />
      </div>
      </div>
      
      <div className="text-success">{msg}</div>
      <Outlet />
    </div>
  );
}
