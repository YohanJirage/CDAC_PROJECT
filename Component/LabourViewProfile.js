import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";

export default  function  LabourViewProfile() {

    
const navigate=useNavigate();   
const [user,setUser]=useState({});
 useEffect(() => {
        const u = JSON.parse(localStorage.getItem("loggedUser"));
        setUser(u);

      });

    render(
        <div >
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

        <Routes>
        <Route path="/editprofilecust" element={<EditProfileLabour />} />
        </Routes>


      </div>


    )
};

