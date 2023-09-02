import "./script.js";

import "./style.css";

import images from "./images";
import Home from "./MainHome/Home.js";

import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

// Importing ForntAwsome for icon and symbols
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBars,
  faInfoCircle,
  faSearch,
  faUser,
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

import {
  faFacebookF as fabFacebookF,
  faTwitter as fabTwitter,
  faInstagram as fabInstagram,
  faLinkedin as fabLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import CompanyRegister from "./Registration/CompanyRegister.js";
import { useState } from "react";
import CustomerRegister from "./Registration/CustomerRegister.js";
import VendorRegister from "./Registration/VendorRegister.js";
import LabourRegister from "./Registration/LabourRegister.js";
import Login from "./MainHome/Login.js";
import LoginSuccess from "./MainHome/LoginSuccess.js";
import { useSelector } from "react-redux";
import CustomerHomepage from "./CustomerComponent/CustomerHomepage.js";
import VendorHome from "./VendorComponent/VendorHome.js";
import EditProfileCustomer from "./CustomerComponent/EditProfileCustomer.js";
import ViewCart from "./CustomerComponent/ViewCart.js";
import Logout from "./MainHome/Logout.js";
import ViewProfile from "./CustomerComponent/ViewProfile.js";
import Mailer from "./MainHome/Mailer.js";
import EditProduct from "./VendorComponent/EditProduct.js";
import MyOreders from "./CustomerComponent/MyOrders.js";
import OrderSuccess from "./CustomerComponent/OrderSuccess.js";
import ForgotPassword from "./MainHome/ForgotPassword.js";
import AdminHome from "./CustomerComponent/AdminHome.js";
import AdminViewCategories from "./CustomerComponent/AdminViewCategories.js";
import AdminViewCustomer from "./CustomerComponent/AdminViewCustomer.js";
import AdminViewVendor from "./CustomerComponent/AdminViewVendor.js";
import AdminViewAllVendors from "./CustomerComponent/AdminViewAllVendors.js";
import AdminViewAllCustomers from "./CustomerComponent/AdminViewAllCustomers.js";
import AdminAddCategory from "./CustomerComponent/AdminAddCategory.js";

import AddCategorySuccess from "./CustomerComponent/AddCategorySuccess.js";
import VendorOrderItems from "./VendorComponent/VendorOrderItems.js";

import {useNavigate } from "react-router-dom";
import OrderHistory from "./VendorComponent/OrderHistory.js";
library.add(faStar);

function App() {
  const [role, setRole] = useState("");
  const mystate = useSelector((state) => state.logged);
  const navigate=useNavigate();

  // alert(mystate.loggedIn);
  return (
    <div className="App">
      <header style={{backgroundColor:"InfoBackground"}} className="header container-fluid">
        <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
          <ul className="nav navbar">
         <li className="nav-link logo">
              <Link to="/home" className="nav-link" style={{ fontSize: 40 }}>
                Build<span className="text-warning">Mart</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/home" className="nav-link fs-4">
                HOME
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/login" className="nav-link fs-4">
                Login
              </Link>
            </li>
            <li>
            <select name="role" className="nav-link fs-4" onChange={(e)=>{navigate(e.target.value)}}>
                <option><p className="fs-4">New Here? Register</p></option>
                <option value="/custregister"><a href="/custregister" >
                                              Customer Registration</a>
                </option>
                <option value="/companyregister"><a href="/companyregister" className="nav-link">
                                             Company Registration</a>
                </option>
                <option value="/vendorregister"><a href="/vendorregister" className="nav-link">
                                          Vendor Registration</a>
                </option>
                <option value="/labourregister"><a href="/labourregister" className="nav-link">
                                            Labour Registration</a>
                </option>
              </select>
            </li>
          </ul>
        </div>
      </header>
      <body>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/custregister" element={<CustomerRegister />}></Route>
          <Route path="/companyregister" element={<CompanyRegister />}></Route>
          <Route path="/vendorregister" element={<VendorRegister />}></Route>
          <Route path="/labourregister" element={<LabourRegister />}></Route>
          <Route path="/customer" element={<CustomerHomepage />}></Route>
          <Route path="/editprofilecust" element={<EditProfileCustomer />} />
          <Route path="/viewProfile" element={<ViewProfile />} />
          <Route path="/viewCart" element={<ViewCart />} />
          <Route path="/feedback" element={<Mailer />} />
          <Route path="/editproduct" element={<EditProduct />}>
            {" "}
          </Route>
          <Route path="/myOrders" element={<MyOreders />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          {/* <Route path="/check" element={<VendorHome/>}></Route> */}
          <Route path="/vendor" element={<VendorHome />}></Route>
          <Route path="/admin" element={<AdminHome />}></Route>
          <Route path="/ordersuccess" element={<OrderSuccess />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/v_categories" element={<AdminViewCategories />}></Route>
          <Route path="/add_category" element={<AdminAddCategory />}></Route>
          <Route path="/v_vendors" element={<AdminViewAllVendors />}></Route>
          <Route path="/v_customers" element={<AdminViewAllCustomers />}></Route>
          <Route path="/viewCustomer/:id/" element={<AdminViewCustomer />}></Route>
          <Route path="/categoryaddsuccess" element={<AddCategorySuccess />}></Route>
          <Route path="/viewVendor/:id/" element={<AdminViewVendor />}></Route>
          <Route path="/addnewcategory" element={<AdminAddCategory />}></Route>
          <Route path="/vieworderitems" element={<VendorOrderItems />}></Route>
          <Route path="/emps" element={<OrderHistory />}></Route>

        </Routes>
      </body>
      <footer>
       

        <section className="footer">
          

          <div className="credit text-center">
            {" "}
            Created by{" "}
            <span className="text-warning">
              | ANUP PATIL | SAGAR PATIL | YOHAN JIRAGE | SHUBHAM SWAMI |
            </span>{" "}
            all rights reserved!{" "}
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
