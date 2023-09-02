import './shubham.css';
import { useEffect, useReducer, useState } from "react"

export default function(){

    const[cities,setCity]=useState([]);
    const[areas,setArea]=useState([]);
    const[plans,setPlan]=useState([]);

    const initial={
         email : "",
         contactno : "",
         city : 0,
         area : 0,
         add_line : "",
         role : "",
         cust_fname : "",
         cust_lname : "",
         company_name : "",
         shop_name : "",
         plan : "",
         trans_id : "",
         lab_fname : "",
         lab_lname : "",
         experience : 0,
         stat : "",
         rates : 0,
         username : "",
         password : "",
         c_password : ""
    }

    const reducer = (state,action)=>{
          switch(action.type)
          {
               case 'update' : return{...state,[action.fld]:action.value};

               case 'reset' : return initial;
          }
    }

    const[user,dispatch]=useReducer(reducer,initial);

    useEffect(()=>{
     fetch("http://localhost:8080/getCities")
     .then(resp=>resp.json())
     .then(data=>setCity(data))
    },[])

    useEffect(()=>{
     fetch("http://localhost:8080/getPlans")
     .then(resp=>resp.json())
     .then(data=>setPlan(data))
    },[])


    const getArea=(v)=>{
         fetch("http://localhost:8080/getAreas?city="+v)
         .then(resp=>resp.json())
         .then(data=>setArea(data))
    }
     
    const submitData=(e)=>{
         e.preventDefault();

         var reqOptions= {
          method : "POST",
          headers : {'content-type':'application/json'},
          body : JSON.stringify(user)
         }

         fetch("")
    }
    return(
        <div>
            <h1>Registration</h1>
            <form>
                 E-mail address :
                 <input type="text" name="email" value={user.email} onChange={(e)=>{dispatch({type:'update', fld:'email', value: e.target.value})}}/><br/>

                 Contact number :
                 <input type="text" name="contact_number" value={user.contactno} onChange={(e)=>{dispatch({type:'update', fld:'contactno', value: e.target.value})}}/><br/>

                 Select city :
                 <select name="city" placeholder="Select city" required onChange={(e)=>{dispatch({type:'update', fld:'city', value: e.target.value})}}>
                    {   
                        cities.map(v=>{return <option value={v.id}>v.city</option>})
                    }
                    
                 </select><br/>

                 Select area :
                 <select name="area" placeholder="Select area" required onChange={(e)=>{dispatch({type:'update', fld:'area', value: e.target.value})}}>
                    { areas.map(v=>{return <option value={v.id}>v.area</option>})}
                 </select><br/>

                 Enter address line :
                 <input type="text" name="add_line" value={user.add_line} onChange={(e)=>{dispatch({type:'update', fld:'add_line', value: e.target.value})}}/><br/>

                 Select user type:
                 <select name="role" onChange={(e)=>{dispatch({type:'update', fld:'role', value: e.target.value})}}>
                    <option value="1">Individual customer</option>
                    <option value="2">Construction company</option>
                    <option value="3">Constructio material vendor</option>
                    <option value="4">Labour</option>
                 </select><br/>


                 <div style={{display:user.role.value=="1"?'block':'none'}}>
                      Enter First Name :
                      <input type="text" name="first_name" value={user.cust_fname} onChange={(e)=>{dispatch({type:'update', fld:'cust_fname', value: e.target.value})}}/><br/>
                      Enter Last Name :
                      <input type="text" name="last_name" value={user.cust_lname} onChange={(e)=>{dispatch({type:'update', fld:'cust_lname', value: e.target.value})}}/><br/>
                 </div>


                 <div style={{display:user.role.value=="2"?'block':'none'}}>
                      Enter Company Name :
                      <input type="text" name="company_name" value={user.company_name}  onChange={(e)=>{dispatch({type:'update', fld:'company_name', value: e.target.value})}}/><br/>
                     
                 </div>


                 <div style={{display:user.role.value=="3"?'block':'none'}}>
                      Enter Shop Name :
                      <input type="text" name="shop_name" value={user.shop_name} onChange={(e)=>{dispatch({type:'update', fld:'shop_name', value: e.target.value})}}/><br/>
                      
                      <h2>Plan Details</h2>
                      <table>
                         <thead><tr><th>Duration in months</th><th>price</th></tr></thead>
                         <tbody>
                            {plans.map(v=>{return <tr><td>v.duration</td><td>v.price</td></tr>})}
                         </tbody>
                      </table>
                      
                      Select plan :
                      <select name="plan" onChange={(e)=>{dispatch({type:'update', fld:'plan', value: e.target.value})}}>
                        <option value="1">1 month</option>
                        <option value="2">3 months</option>
                        <option value="3">6 months</option>
                        <option value="4">1 year</option>
                      </select>

                      Enter transaction id :
                      <input type="text" name="transaction_id" value={user.trans_id} onChange={(e)=>{dispatch({type:'update', fld:'trans_id', value: e.target.value})}}/>

                 </div>
                 <div style={{display:user.role.value=="4"?'block':'none'}}>
                      Enter First Name :
                      <input type="text" name="first_name" value={user.lab_fname} onChange={(e)=>{dispatch({type:'update', fld:'lab_fname', value: e.target.value})}}/><br/>
                      Enter Last Name :
                      <input type="text" name="last_name" value={user.lab_lname} onChange={(e)=>{dispatch({type:'update', fld:'lab_lname', value: e.target.value})}}/><br/>
                      Enter Experience(in years) :
                      <input type="number" name="experience" value={user.experience} onChange={(e)=>{dispatch({type:'update', fld:'experience', value: e.target.value})}}/><br/>
                      Enter status :
                      <input type="text" name="status" value={user.stat} onChange={(e)=>{dispatch({type:'update', fld:'stat', value: e.target.value})}}/><br/>
                      Enter labour charges per day :
                      <input type="number" name="rates" value={user.rates} onChange={(e)=>{dispatch({type:'update', fld:'rates', value: e.target.value})}}/><br/>
                 </div>

                 Enter username :
                 <input type="text" name="username" value={user.username} onChange={(e)=>{dispatch({type:'update', fld:'username', value: e.target.value})}}/><br/>

                 Enter password :
                 <input type="password" name="password" value={user.password} onChange={(e)=>{dispatch({type:'update', fld:'password', value: e.target.value})}}/><br/>
                 
                 Confirm password :
                 <input type="password" name="c_password" value={user.c_password} onChange={(e)=>{dispatch({type:'update', fld:'c_password', value: e.target.value})}}/><br/>

                 <input type="submit" value="Sign Up" onClick={(e)=>{submitData(e)}}/>
                 <input type="reset" value="Reset" onClick={()=>{dispatch({type:'reset'})}}/>

                 
            </form>
        </div>
    )

}