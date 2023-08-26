import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
export default function LabourHomepage(){
         const navigate= useNavigate();
         const user= JSON.parse(localStorage.getItem('loggedUser'));
         useEffect(() => {
          
            
            fetch("http:localhost:8080/getRequests?id="+user.id)
            .then(resp=>resp.json())
            .then(data=>setRequests(data))
        }, []);
          const [availability, setAvailability] = useState(user.labour.status);
          const [requests, setRequests] = useState([]);
          const [newRate, setNewRate] = useState(user.labour.rates);

        
        
          const handleAvailabilityChange = (newStatus) => {
           
               fetch("http://localhost:8080/labourStaus?id="+user.labour.id+"&status="+newStatus)
               .then(resp=>resp.json())
               .then(data=>alert("Status updated successfully"))
          };
        
          const handleRateUpdate = () => {
           
            fetch("http://localhost:8080/updateLabourRate?id="+user.labour.id+"&newrate="+newRate)
            .then(resp=>resp.json())
            .then(data=>alert("Rate updated successfully"))
          };    

    return(
    
       
              <div className="App">
                <div id="operations">
                    <select name="ops" onChange={(e)=>{navigate(e.target.value)}}>
                        <option >Labour operations</option>
                        <option value="/laboureditProfile">Edit profile</option>
                        <option value="/labourviewProfile">View Profile</option>
                        <option value="/logOut">Log out</option>
                    </select>
                </div>
        
              <div>
                <h2> Updated Availability Status</h2>
                <p>Current Status: {availability}</p>
                <button onClick={() => handleAvailabilityChange('Available')}>Set Available</button>
                <button onClick={() => handleAvailabilityChange('Not Available')}>Set Not Available</button>
              </div>
        
              <div>
                <h2>Company Requests</h2>
                <ul>
                  {requests.map((request, index) => (
                    <li key={index}>{request}</li>
                  ))}
                </ul>
              </div>
        
              <div>
                <h2>Update rate</h2>
                <input
                  type="number"
                  value={newRate}
                  onChange={(e) => setNewRate(e.target.value)}
                />
                <button onClick={handleRateUpdate}>Update Rate</button>
              </div>
            </div>
          );
        };