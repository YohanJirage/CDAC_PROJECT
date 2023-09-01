import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAddCategory(){

    const initialState={
        name : "",
        description : ""
    }

    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'update' :
                 return { ...state, [action.fld]:action.value};

             case 'reset' : return initialState;
        }
  }

  const navigate= useNavigate();
  const[info,dispatch]=useReducer(reducer,initialState);

  const addCategory=()=>{
       
      const reqOptions={
        method : "POST",
        headers : {'content-type':'application/json'},
        body : JSON.stringify(info)
      }

      fetch("http://localhost:8080/addCategory",reqOptions)
      .then(resp=>{
        if(resp.ok)
        {
            navigate("/categoryaddsuccess");
        }
        else
             throw new Error("Server error");
      }
        )
        .catch((error)=>{
            alert("updation failed");
        })
  }
    return(
        <div className="fs-4">
            <h1>Category details form</h1>
            <form>
                <label htmlFor="name">Enter category name</label>
                <input type="text" id="name" name="name" value={info.name} onChange={(e)=>{dispatch({type:'update', fld:'name', value:e.target.value})}} />
                <label htmlFor="description">Enter description</label>
                <input type="text" id="description" name="description" value={info.description} onChange={(e)=>{dispatch({type:'update', fld:'description', value:e.target.value})}} />
                <button type="button" onClick={()=>{addCategory()}} >Add category</button>
                <button type="button" onClick={()=>{navigate("/admin")}} >Back</button>
            </form>
        </div>
    )
}