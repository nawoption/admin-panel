import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./shared/Loading";
import { userAdd, userRemove } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
export default function Login() {
  const [phone, setPhone] = useState("09200200200");
  const [password, setPassword] = useState("123123123");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const login = async (user) => {
    const response = await fetch("http://51.20.44.33:3000/users/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resData = await response.json();
    if (resData.con) {
      dispatch(userAdd(resData.result));
      navigate("/admin");
    } else {
      console.log(resData);
    }
    setIsLoading(false);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const user = { phone, password };
    setIsLoading(true);
    login(user);
  };
  return (
    <div className="container my-5">
      {isLoading && <Loading />}

      <div className="col-md-6 mt-5 offset-md-3 bg-dark p-5">
        <h1 className="text-white text-center">Login To Post</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label text-white">
              Phone
            </label>
            <input type="tel" className="form-control rounded-0 bg-dark text-white" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <input type="password" className="form-control rounded-0  bg-dark text-white" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberCheck" />
            <label className="form-check-label text-white" htmlFor="rememberCheck">
              Remember Me
            </label>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <Link to="/register">Not a member yet! Register herer</Link>
            <div>
              <button type="reset" className="btn btn-outline-warning btn-sm mx-2 text-white">
                Cancle
              </button>
              <button type="submit" className="btn btn-success btn-sm">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
