import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {login,logout} from './reduxToolkit/loginReducers'
export default function App() {
  const loginedIn = useSelector(state => state.login);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{loginedIn.value ? "Member" : "Guest"}</h3>
      <button onClick={() => dispatch(login(true))}>Login</button>
      <button onClick={() => dispatch(logout(false))}>Logout</button>
    </div>
  );
}
