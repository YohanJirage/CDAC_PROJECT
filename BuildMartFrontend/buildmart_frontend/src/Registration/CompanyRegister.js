import "./shubham.css";

import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CompanyRegister() {
  const initialState = {
    cname: { value: "", hasError: false, error: "", touched: false },
    email: { value: "", hasError: true, error: "", touched: false },
    cno: { value: "", hasError: true, error: "", touched: false },
    uname: { value: "", hasError: true, error: "", touched: false },
    pwd: { value: "", hasError: true, error: "", touched: false },
    cpwd: { value: "", hasError: true, error: "", touched: false },
    qid: { value: 0, hasError: false, error: "", touched: false },
    ans: { value: "", hasError: false, error: "", touched: false },
    city: { value: 0, hasError: false, error: "", touched: false },
    area: { value: 0, hasError: false, error: "", touched: false },
    addline: { value: "", hasError: false, error: "", touched: false },
    isFormValid: false,
  };

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

  const [emails, setEmail] = useState([]);
  const [unames, setUname] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getCompEmails")
      .then((resp) => resp.json())
      .then((data) => setEmail(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/getusernames")
      .then((resp) => resp.json())
      .then((data) => setUname(data));
  }, []);

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

  const validateData = (name, value) => {
    let hasError = false;
    let error = "";
    switch (name) {
      case "email":
        emails.forEach((element) => {
          if (element === value) {
            hasError = true;
            error = "email already used";
          }
        });
        break;

      case "uname":
        unames.forEach((element) => {
          if (element === value) {
            hasError = true;
            error = "username already used";
          }
        });
        break;
      case "pwd":
        var exp1 =
          /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!,@,#,$,%,^,&,*])[\w\W]{8,}/;
        if (!exp1.test(value)) {
          hasError = true;
          error =
            "password should contain atleast one Capital,small letter,special char,number";
        }
        break;

      case "cno":
        var exp1 = /[\d]{10}/;
        if (!exp1.test(value)) {
          hasError = true;
          error = "invalid contact number";
        }
        break;

      case "cpwd":
        if (info.pwd.value != value) {
          hasError = true;
          error = "confirm password mismatched";
        }
        break;
      default:
    }
    return { hasError, error };
  };

  const [questions, setQuestion] = useState([]);

  const [cities, setCity] = useState([]);
  const [areas, setArea] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getcities")
      .then((resp) => resp.json())
      .then((data) => setCity(data));
  }, []);

  const editCity = (e) => {
    var cid = e.target.value;

    fetch("http://localhost:8080/getareas?cityid=" + cid)
      .then((resp) => resp.json())
      .then((data) => setArea(data));
  };

  useEffect(() => {
    fetch("http://localhost:8080/getquestions")
      .then((resp) => resp.json())
      .then((data) => setQuestion(data));
  }, []);

  const [info, dispatch] = useReducer(reducer, initialState);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const submitData = (e) => {
    e.preventDefault();

    const Obj = {
      cname: info.cname.value,
      email: info.email.value,
      cno: info.cno.value,
      uname: info.uname.value,
      pwd: info.pwd.value,
      qid: info.qid.value,
      ans: info.ans.value,
      city: info.city.value,
      area: info.area.value,
      addline: info.addline.value,
    };
    var reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Obj),
    };

    fetch("http://localhost:8080/companyRegister", reqOptions)
      .then((resp) => {
        if (resp.ok) return resp.text();
        else throw new Error("server error");
      })
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then((obj) => {
        if (Object.keys(obj).length === 0) {
          setMsg("Invalid username/password");
        } else {
          navigate("/successregister");
        }
      });
  };

  return (
    <div className="container">
      <form>
        <div>
          <label htmlFor="cname">Enter First name</label>
          <input
            className="form-control"
            type="text"
            id="cname"
            name="cname"
            value={info.cname.value}
            onChange={(e) => {
              handleChange("cname", e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="email">Enter Email id</label>
          <input
            type="text"
            id="email"
            name="email"
            value={info.email.value}
            onChange={(e) => {
              handleChange("email", e.target.value);
            }}
          />
          <div
            style={{
              display:
                info.email.touched && info.email.hasError ? "block" : "none",
            }}
          >
            {info.email.error}
          </div>
        </div>
        <div>
          <label htmlFor="cno">Enter Contact number</label>
          <input
            type="text"
            id="cno"
            name="cno"
            value={info.cno.value}
            onChange={(e) => {
              handleChange("cno", e.target.value);
            }}
          />
          <div
            style={{
              display: info.cno.touched && info.cno.hasError ? "block" : "none",
            }}
          >
            {info.cno.error}
          </div>
        </div>

        <div>
          <label htmlFor="city">Select City</label>
          <select id="city" name="city"    className="fs-4"  onChange={(e) => editCity(e)}>
            <option>Select city</option>
            {cities.map((v) => {
              return (
                <option key={v.id} value={v.id}>
                  {v.city_name}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="area">Select Area</label>
          <select
            id="area"
            name="area"
            className=" fs-4" 
            onChange={(e) => {
              handleChange("area", e.target.value);
            }}
          >
            {" "}
            <option>Select Area</option>
            {areas.map((v) => {
              return (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="addline">Enter Address line</label>
          <input
            type="text"
            id="addline"
            name="addline"
            value={info.addline.value}
            onChange={(e) => {
              handleChange("addline", e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="uname">Enter username</label>
          <input
            type="text"
            id="uname"
            name="uname"
            value={info.uname.value}
            onChange={(e) => {
              handleChange("uname", e.target.value);
            }}
          />
          <div
            style={{
              display:
                info.uname.touched && info.uname.hasError ? "block" : "none",
            }}
          >
            {info.uname.error}
          </div>
        </div>
        <div>
          <label htmlFor="pwd">Enter password</label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            value={info.pwd.value}
            onChange={(e) => {
              handleChange("pwd", e.target.value);
            }}
          />
          <div
            style={{
              display: info.pwd.touched && info.pwd.hasError ? "block" : "none",
            }}
          >
            {info.pwd.error}
          </div>
        </div>
        <div>
          <label htmlFor="cpwd">Confirm password</label>
          <input
            type="password"
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
        </div>
        <div>
          <label htmlFor="qid">Select Question for forget password</label>
          <select
            id="qid"
            name="qid"
            className=" fs-4" 
            onChange={(e) => {
              handleChange("qid", e.target.value);
            }}
          >
            <option className=" fs-4">Select Question</option>
            {questions.map((v) => {
              return (
                <option key={v.id} value={v.id}  className=" fs-4">
                  {v.question}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="ans"  className=" fs-4">Enter Answer</label>
          <input
            type="text"
            id="ans"
            name="ans"
            className=" fs-4"
            value={info.ans.value}
            onChange={(e) => {
              handleChange("ans", e.target.value);
            }}
          />
        </div>

        <input
          type="submit"
          className="btn btn-primary fs-4"
          disabled={!info.isFormValid}
          value="Register"
          onClick={(e) => {
            submitData(e);
          }}
        />
        <input
          type="reset"
          className="btn btn-secondary mx-2 fs-4"
          value="Reset"
          onClick={(e) => {
            dispatch({ type: "reset" });
          }}
        />
      </form>
      <div>{msg}</div>
    </div>
  );
}
