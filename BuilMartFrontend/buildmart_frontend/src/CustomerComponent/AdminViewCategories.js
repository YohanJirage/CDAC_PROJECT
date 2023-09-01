import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AdminViewCategories(){
   
    const[categories,setCategories]=useState([]);
    const navigate= useNavigate();

    useEffect(()=>{
        fetch("http://localhost:8080/getCategories")
        .then(resp=>resp.json())
        .then(data=>setCategories(data))
    },[])
   
    return(
          <div className="fs-4">
               <h1>List of all categories</h1>
               <table  className="table table-bordered table-responsive table-striped table-info">
                   <thead>
                        <tr>
                            <th>Category name</th>
                            <th>Description</th>
                        </tr>
                   </thead>
                   <tbody>
                        {categories.map((v)=>{
                            return(
                              <tr>
                                <td>{v.name}</td>
                                <td>{v.description}</td>
                              </tr>)
                        }) }
                   </tbody>
               </table>
               <button type="button" className="btn btn-outline-primary" onClick={()=>{navigate("/addnewcategory")}}>Add new Category</button>
               <button type="button" className="btn btn-outline-primary" onClick={()=>{navigate("/admin")}}>Back to homepage</button>
          </div>
    )
}