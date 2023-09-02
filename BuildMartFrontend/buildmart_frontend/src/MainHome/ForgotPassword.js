
import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {

    const initialState = {
        pwd: { value: "", hasError: false, error: "", touched: false },
        cpwd: { value: "", hasError: false, error: "", touched: false },
        isFormValid : false
    }

    const navigate= useNavigate();

    const reducer = (state, action) => {
        switch (action.type) {
          case "update":
            const { name, value, hasError, error, touched, isFormValid } =
              action.data;
            return {
              ...state,
              [name]: { value, hasError, error, touched },
              isFormValid,
            };
    
          case "reset":
            return initialState;
          default:
        }
      };

const [info,dispatch]= useReducer(reducer,initialState)
const [user,setUser]= useState({});
const [answer, setAnswer] = useState("");
const [username,setUsername]=useState("");
const [securityQuestion, setSecurityQuestion] = useState("");
const [userAnswer,setUserAnswer] = useState("")
const [message, setMessage] = useState("");
const [msg,setMsg]=useState("");
const [quediv,setQueDiv] = useState(false);
const [passdiv,setPassDiv]=useState(false);
const[flag,setFlag]=useState(false);



const checkUserName = () => {
    fetch("http://localhost:8080/getUserByUsername?username=" + username)
    .then(resp => resp.json())
    .then((obj) => {
        console.log(obj);
        if (obj!=null) {
            setUsername(obj.username);
            setSecurityQuestion(obj.question.question);
            setAnswer(obj.answer);
            setQueDiv(true);
            setFlag(true);
            setMsg(""); // Clear any previous error messages
        } else {
            setMsg("Invalid username");
            setQueDiv(false); // Hide the security question div
        }
    })
    .catch(error => {
        console.error("Invalid username:", error);
        setMsg("Invalid username");
        setQueDiv(false); // Hide the security question div
    });
};


  const handleChange = (name, value) => {
    //a. call validation logic
    const { hasError, error } = validateData(name, value);

    //b. check form validity status
    let isFormValid = true;
    for (const key in info) {
      // console.log(key+" : "+emp[key].hasError )
      if (info[key].hasError === true) {
        isFormValid = false;
        break;
      }
    }

    //c. call dispatch method
    dispatch({
      type: "update",
      data: { name, value, hasError, error, touched: true, isFormValid },
    });
  };

  const  validateData = (name, value) =>{
    let hasError = false;
    let error = "";
    switch (name) {
    case  "pwd":
        var exp1 =
          /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!,@,#,$,%,^,&,*])[\w\W]{8,}/;
        if (!exp1.test(value)) {
          hasError = true;
          error= "password should contain atleast one Capital,small letter,special char,number";
           
        }
        break;

    case "cpwd":
            if (info.pwd.value !== value) {
              hasError = true;
              error = "confirm password mismatched";
            }
            break;
          default:

    }
    return { hasError, error };
  };
 



const checkAnswer = () =>{
 
    
    if(userAnswer === answer)
    {
        setPassDiv(true);
        //setQueDiv(false);
        setFlag(false);
        setMsg("")
    }
    else
      setMsg("Answer Is Wrong");
};
 
const submitData1 = () => {
//  e.preventDefault();
// alert("hi")

   const password = info.pwd.value;
    // const username=info.use
    // alert(username);
    // alert(password);
    
    fetch("http://localhost:8080/changePassword?username=" + username + "&password=" + password)
    .then(resp => resp.json()) // Parse the response as JSON
    .then(responseObj => {
        if (responseObj.success) {
            alert("Password change failed");
            navigate("/login")
        } else {
            alert("Password change successful");
            navigate("/login")
        }
    })
    .catch(error => {
        console.error("Error changing password:", error);
        alert("An error occurred while changing the password");
    });
};





  return (
    <div className="fs-4">
        <div style={{display : quediv?  "none":"block"}} >
          <h2>Forgot Password</h2>
          <form>
            <label htmlFor="username" >Enter User Name</label>
            <input type="text" id="username"  name="username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
            <input type="button" className="btnn" value="Submit" 
            onClick={()=>checkUserName()}
            
            ></input>
            <h4>{msg}</h4>
          </form>
        
        </div>
        <div style={{display : flag?  "block": "none"}}>
         
          <h3>{securityQuestion}</h3>

          <label htmlFor="username" >Enter Your Answer</label>
            <input type="text" id="answer"  name="answer" value={userAnswer} onChange={(e)=>setUserAnswer(e.target.value)}></input>
            <input type="button" className="btnn" value="Submit" 
            onClick={()=>checkAnswer()}
            
            ></input>
             <h4>{msg}</h4>
        </div>
        <div style={{display : passdiv? "block" : "none"}}>
          <form>
              <div>
                <label htmlFor="pwd">Enter password</label>
                <input
                  type="text"
                  id="pwd"
                  name="pwd"
                  value={info.pwd.value}
                  onChange={(e) => {
                    handleChange("pwd", e.target.value);
                  }}
                />
                <div
                  style={{
                    display: info.pwd.touched && info.pwd.hasError ? "block" : "none"
                  }}
                >
                  {info.pwd.error}
                </div>
              </div>
              <div>
                <label htmlFor="cpwd">Confirm password</label>
                <input
                  type="text"
                  id="cpwd"
                  name="cpwd"
                  value={info.cpwd.value}
                  onChange={(e) => {
                    handleChange("cpwd", e.target.value);
                  }}
                />
                <div
                  style={{
                    display:
                      info.cpwd.touched && info.cpwd.hasError ? "block" : "none",
                  }}
                >
                  {info.cpwd.error}
                </div>
                <button
                type="button"
                className="btnn "
                 disabled={!info.isFormValid}
                onClick={() => {
                   submitData1();
                }}
              >Change</button>
              </div>
        </form>
      </div>
     </div>
  );

}
export default ForgotPassword;