import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reduxcomponents/slice";

import App from "../App.js";

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  localStorage.clear();
  dispatch(logout());
  const mystate = useSelector((state) => state.logged);
  //   alert(mystate.loggedIn);
  navigate("/");

  <Routes>
    <Route path="/" element={<App></App>}></Route>
  </Routes>;
}
