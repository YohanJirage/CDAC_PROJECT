import { useEffect, useReducer, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

export default function EditProfileCustomer() {
  const [us, setUs] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("loggedUser"));
    setUs(u);
  }, []);
  alert(us);

  useEffect(() => {
    fetch("http://localhost:8080/getUserById?id=" + us.id)
      .then((resp) => resp.json())
      .then((data) => setUser(data));
  }, [us]);

  const initialState = {
    uid: { value: user.id, hasError: false, error: "", touched: false },
    fname: {
      value: user.customer.first_name,
      hasError: false,
      error: "",
      touched: false,
    },
    lname: {
      value: user.customer.last_name,
      hasError: false,
      error: "",
      touched: false,
    },
    email: {
      value: user.customer.email,
      hasError: true,
      error: "",
      touched: false,
    },
    cno: {
      value: user.customer.contact_number,
      hasError: true,
      error: "",
      touched: false,
    },
    uname: { value: user.username, hasError: true, error: "", touched: false },
    pwd: { value: user.password, hasError: true, error: "", touched: false },
    cpwd: { value: user.password, hasError: true, error: "", touched: false },
    qid: {
      value: user.question.id,
      hasError: false,
      error: "",
      touched: false,
    },
    ans: { value: user.answer, hasError: false, error: "", touched: false },
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
    fetch("http://localhost:8080/getemails")
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
        if (value === user.customer.email) {
          hasError = false;
          error = "";
        } else {
          emails.forEach((element) => {
            if (element === value) {
              hasError = true;
              error = "email already used";
            }
          });
        }
        break;

      case "uname":
        if (value === user.username) {
          hasError = false;
          error = "";
        } else {
          unames.forEach((element) => {
            if (element === value) {
              hasError = true;
              error = "username already used";
            }
          });
        }
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
        if (info.pwd != value) {
          hasError = true;
          error = "confirm password mismatched";
        }
        break;
      default:
    }
    return { hasError, error };
  };

  const [questions, setQuestion] = useState([]);

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

    var reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    };

    fetch("http://localhost:8080/editCustomer", reqOptions)
      .then((resp) => {
        if (resp.ok) return resp.text();
        else throw new Error("server error");
      })
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then((obj) => {
        if (Object.keys(obj).length === 0) {
          setMsg("Invalid username/password");
        } else {
          navigate("/editsucces");
        }
      });
  };

  return (
    <div className="container fs-4">
      <form>
        <div className="mb-3">
          <label htmlFor="fname">Enter First name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={info.fname.value}
            onChange={(e) => {
              handleChange("fname", e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="lname">Enter Last name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={info.lname.value}
            onChange={(e) => {
              handleChange("lname", e.target.value);
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
              display: info.pwd.touched && info.pwd.hasError ? "block" : "none",
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
        </div>
        <div>
          <label htmlFor="qid">Select Question for forget password</label>
          <select
            id="qid"
            name="qid"
            onChange={(e) => {
              handleChange("qid", e.target.value);
            }}
          >
            {questions.map((v) => {
              return (
                <option key={v.id} value={v.id}>
                  {v.question}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="ans">Enter Answer</label>
          <input
            type="text"
            id="ans"
            name="ans"
            value={info.ans.value}
            onChange={(e) => {
              handleChange("ans", e.target.value);
            }}
          />
        </div>

        <input
          type="submit"
          className="btn btn-primary"
          disabled={!info.isFormValid}
          value="Update"
          onClick={(e) => {
            submitData(e);
          }}
        />
        <input
          type="reset"
          className="btn btn-secondary mx-2"
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
