import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EditProfileCustomer from "./EditProfileCustomer";

export default function ViewProfileCustomer() {
  const [role, setRole] = useState("");
  // const[ruser,setRuser]=useState();
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [user1, setUser1] = useState({});
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("loggedUser"));
    setUser(u);

    fetch("http://localhost:8080/getUserById?id=" + u.id)
      .then((resp) => resp.json())
      .then((obj) => {
        setUser(obj);

        if (obj.role.id === 1) {
          setCustomer(obj.customer);
          setRole("Customer");
        } else if (obj.role.id === 2) {
          setRole("Company");
        } else if (obj.role.id === 3) {
          setRole("Vendor");
        } else if (obj.role.id === 4) {
          setRole("Labour");
        }
      });
  }, []);

  //   useEffect(() => {
  //     fetch("http://localhost:8080/getUserById?id=" + user1.id)
  //       .then((resp) => resp.json())
  //       .then((obj) => {
  //         setUser(obj);
  //         if (user.role.id == 1) {
  //           setRole("Customer");
  //           //fetch("http://localhost:8080/getCustomerByUid"+user.id)
  //           //.then(resp=>resp.json())
  //           //.then(data=>setRuser(data))
  //           //ruser=user.customer;
  //         } else if (user.role.id == 2) {
  //           setRole("Company");
  //           //fetch("http://localhost:8080/getCompanyByUid"+user.id)
  //           //.then(resp=>resp.json())
  //           //.then(data=>setRuser(data))
  //           //ruser=user.company;
  //         } else if (user.role.id == 3) {
  //           setRole("Vendor");
  //           //fetch("http://localhost:8080/getVendorByUid"+user.id)
  //           //.then(resp=>resp.json())
  //           //.then(data=>setRuser(data))
  //           // ruser=user.vendor;
  //         } else if (user.role.id == 4) {
  //           setRole("Labour");
  //           //fetch("http://localhost:8080/getLabourByUid"+user.id)
  //           //.then(resp=>resp.json())
  //           //.then(data=>setRuser(data))
  //           //ruser=user.labour;
  //         }
  //       });
  //   }, []);

  return (
    <div className="fs-4" style={{ display: role === "Customer" ? "block" : "none" }}>
      <div>
        <table className="table table-striped table-bordered table-info">
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Contact number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.email}</td>
              <td>{customer.contact_number}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={(e) => {
            navigate("/editprofilecust");
          }}
        >
          edit profile
        </button>
      </div>

      {/* <div style={{ display: role === "Vendor" ? "block" : "none" }}>
        <table>
          <thead>
            <tr>
              <th>Vendor name</th>

              <th>Email</th>
              <th>Contact number</th>
              <th>Membership expiry date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user && user.vendor.shopName}</td>
              <td>{user && user.vendor.email}</td>
              <td>{user && user.vendor.contactNumber}</td>
              <td>{user && user.vendor.membership_payment.expiry_date}</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          onClick={(e) => {
            navigate("/editprofilevendor");
          }}
        >
          edit profile
        </button>
      </div>

      <div style={{ display: role === "Company" ? "block" : "none" }}>
        <table>
          <thead>
            <tr>
              <th>Company name</th>
              <th>Email</th>
              <th>Contact number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user && user.customer.company_name}</td>
              <td>{user && user.customer.email}</td>
              <td>{user && user.customer.contact_number}</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          onClick={(e) => {
            navigate("/editprofilecompany");
          }}
        >
          edit profile
        </button>
      </div>

      <div style={{ display: role === "Labour" ? "block" : "none" }}>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Contact number</th>
              <th>Experience</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user && user.labour.first_name}</td>
              <td>{user && user.labour.last_name}</td>
              <td>{user && user.labour.email}</td>
              <td>{user && user.labour.contact_number}</td>
              <td>{user && user.labour.experience}</td>
              <td>{user && user.labour.status}</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          onClick={(e) => {
            navigate("/editprofilelabour");
          }}
        >
          edit profile
        </button>
      </div> */}

     
        
        {/* <Route path="/editprofilecompany" element={<EditProfileCompany user={ps.user} />} />
                 <Route path="/editprofilevendor" element={<EditProfileVendor user={ps.user} />} />
                 <Route path="/editprofilelabour" element={<EditProfileLabour user={ps.user} />} /> */}
      
    </div>
  );
}
