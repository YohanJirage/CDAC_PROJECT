import "../Registration/shubham.css";
import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../reduxcomponents/slice";

export default function Login() {
  const initialState = {
    username: "",
    password: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.value };

      case "reset":
        return initialState;
      default:
    }
  };

  const [info, dispatch] = useReducer(reducer, initialState);
  const reduxaction=useDispatch();

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const checkLogin = (e) => {
    e.preventDefault();

    var reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    };

    fetch("http://localhost:8080/checkLogin", reqOptions)
      .then((resp) => {
        if (resp.ok) return resp.text();
        else throw new Error("server error");
      })
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then((obj) => {
        if (Object.keys(obj).length === 0) {
          setMsg("Invalid username/password");
        } else {

          reduxaction(login())
          localStorage.setItem("loggedUser",JSON.stringify(obj));
          if (obj.role.id === 1) {
            localStorage.setItem("CustomerUser",JSON.stringify(obj.customer));
            navigate("/customer");
          } else if (obj.role.id === 2) {
            localStorage.setItem("CompanyUser",JSON.stringify(obj.company));
            navigate("/company");
          } else if (obj.role.id === 3) {
            localStorage.setItem("VendorUser",JSON.stringify(obj.vendor));
            navigate("/vendor");
          } else if (obj.role.id === 4) {
            localStorage.setItem("LabourUser",JSON.stringify(obj.labour));
            navigate("/labour");
          }
        }
      })
      .catch((error) => alert("server error. Try again"));
  };
  return (
    <div className="container">
      <form>
        <div>
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => {
              dispatch({
                type: "update",
                fld: "username",
                value: e.target.value,
              });
            }}
          />
          <br />
        </div>
        <div>
          <label htmlFor="password">password :</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => {
              dispatch({
                type: "update",
                fld: "password",
                value: e.target.value,
              });
            }}
          />
          <br />
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={(e) => checkLogin(e)}
        >
          Login
        </button>
        <a href="">forget password</a> <br />
      </form>
      <div>{msg}</div>
    </div>
  );
}
