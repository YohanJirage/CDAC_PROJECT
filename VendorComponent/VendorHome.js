import React, { useReducer, useState, useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router";

import "../style.css";
import EditExistingProduct from "./EditExistingProduct";
import { Link } from "react-router-dom";

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

function VendorHome() {
  const initialState = {
    category_id: 0,
    product_id: 0,
    quantity: 0,
    price: 0,
    offer_percentage: 0,
    offer_valid_date: "",
    vid: 0,
  };

  const [user, setUser] = useState({});
  const [vendor, setVendor] = useState({});
  const [role, setRole] = useState("");

  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setproducts] = useState([]);
  const [flag, setflag] = useState(true);
  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("loggedUser"));

    fetch("http://localhost:8080/getUserById?id=" + u.id)
      .then((resp) => resp.json())
      .then((obj) => {
        setUser(obj);
        setVendor(obj.vendor);

        dispatch({
          type: "update",
          fid: "vid",
          value: u.id,
        });
      });

    fetch("http://localhost:8080/getVendorProductsVendors?uid=" + u.id)
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          setProductList(data); // Fix: Set the fetched data to the state
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fid]: action.value };
      case "reset":
        return initialState;
      default:
    }
  };

  const [newproduct, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/getCategories")
      .then((resp) => resp.json())
      .then((data) => setCategories(data));
  }, []);

  const editProduct = (e) => {
    dispatch({ type: "update", fid: "category_id", value: e.target.value });

    fetch("http://localhost:8080/getProductsByCid?cid=" + e.target.value)
      .then((resp) => resp.json())
      .then((data) => setproducts(data));
  };

  const reLoadProducts = () => {
    fetch("http://localhost:8080/getVendorProductsVendors?uid=" + user.id)
      .then((resp) => resp.json())
      .then((data) => setProductList(data));
  };

  const deleteProduct = (productId) => {
    if (window.confirm("Are you sure to delete?")) {
      fetch("http://localhost:8080/deleteVendorProduct?vpid=" + productId)
        .then((resp) => resp.json())
        .then((data) => {
          if (data > 0) {
            alert("Product Deleted");
            reLoadProducts();
          } else alert("Failed to Delete Product");
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    }
  };

  const addProduct = (e) => {
    var reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newproduct),
    };

    fetch("http://localhost:8080/addVendorProduct", reqOptions).then((resp) => {
      if (resp) {
        alert("Product added successfully");
        reLoadProducts();
      } else alert("Failed to add product");
    });

    if (flag === true) setflag(false);
    else setflag(true);
  };

  const addnewProductfrom = () => {
    if (flag === true) setflag(false);
    else setflag(true);
  };

  const editExistingProduct = (v) => {
    // edit form for edit existinng product
    // return <EditExistingProduct value={v}></EditExistingProduct>
  };
  const chooseCat = (e) => {
    dispatch({
      type: "update",
      fid: "product_id",
      value: e,
    });

    fetch("http://localhost:8080/getProductsByCid?cid=" + e)
      .then((resp) => resp.json())
      .then((data) => setproducts(data));
  };

  const editProductForm = (v) => {
    // alert(v.id);
    console.log(v);
    // console.log(v.id);
    localStorage.setItem("v", v); // Convert to JSON string
    // console.log("nav....");
   alert(v)
    navigate("/editproduct",{state :{v}});
  };

  return (
    <div className="home">
      <header className="header container-fluid">
        <ul className="nav navbar">
          <li className="nav-link logo">
            <Link to="/home" className="nav-link" style={{ fontSize: 40 }}>
              Build<span>Mart</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/home" className="nav-link">
              HOME
            </Link>
          </li>

          <li className="nav-link">
            <Link to="/about" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/emps" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/emps" className="nav-link">
              Order History
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/information" className="nav-link">
              <div className="icon-container">
                <FontAwesomeIcon icon={faInfoCircle} />
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link">
              <div className="icon-container">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <div className="icon-container">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">
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

      <body>
        <div className="container table-responsive-smtable-responsive-sm">
          <table className="table table-hover content ">
            <thead className="thead-dark content ">
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Delete Product</th>
              <th scope="col">Edit Product</th>
            </thead>
            <tbody>
              {productList.map((v) => {
                return (
                  <tr>
                    {<td>{v.product.productName}</td>}
                    <td>{v.quantity}</td>
                    <td>{v.price}</td>
                    <td>
                      <input
                        type="button"
                        id={v.id}
                        value={"Delete"}
                        onClick={() => deleteProduct(v.id)}
                      ></input>
                    </td>
                    <td>
                      <a
                        href="#"
                        onClick={() => {
                          editProductForm(v.id);
                        }}
                      >
                        edit
                      </a>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={5}>
                  <input
                    className="btnn"
                    type="button"
                    id="addbt"
                    value={"Add New Product"}
                    onClick={addnewProductfrom}
                  ></input>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="container mt-5  formfild"
          style={{ display: flag ? "none" : "block" }}
        >
          <h1>Add Product</h1>
          <form>
            <div>
              <label htmlFor="category_id" class="form-label">
                Select Category
              </label>
              <select
                id="category_id"
                name="category_id"
                class="form-control"
                onChange={(e) => {
                  editProduct(e);
                }}
              >
                <option>Select Category</option>
                {categories.map((v) => {
                  return (
                    <option key={v.id} value={v.id}>
                      {v.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label htmlFor="product_id" class="form-label">
                Select Product
              </label>
              <select
                id="product_id"
                name="product_id"
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fid: "product_id",
                    value: e.target.value,
                  });
                }}
              >
                <option>Select Product</option>
                {products.map((v) => {
                  return (
                    <option key={v.id} value={v.id}>
                      {v.productName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label htmlFor="price" class="form-label">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={newproduct.price}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fid: "price",
                    value: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="quantity" class="form-label">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={newproduct.quantity}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fid: "quantity",
                    value: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="offer_percentage" class="form-label">
                Offer Percentage
              </label>
              <input
                type="number"
                id="offer_percentage"
                name="offer_percentage"
                value={newproduct.offerPercentage}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fid: "offer_percentage",
                    value: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="offer_valid_date" class="form-label">
                Offer Valid Date
              </label>
              <input
                type="date"
                id="offer_valid_date"
                name="offer_valid_date"
                value={newproduct.offerValidDate}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fid: "offer_valid_date",
                    value: e.target.value,
                  });
                }}
              />
            </div>

            <button
              type="button"
              className=" btnn"
              onClick={(e) => addProduct(e)}
            >
              Add Product
            </button>
          </form>
        </div>
      </body>
      {/* <Routes>
        {productList.map((v) => {
          return (
            <Route path={v.id} element={<EditExistingProduct vpid={v.id} />} />
          );
        })}
      </Routes> */}

      <Outlet />
    </div>
  );
}

export default VendorHome;
