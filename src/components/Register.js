import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./shared/Loading";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const apiRegister = async (user) => {
    console.log(user);
    const response = await fetch("http://51.20.44.33:3000/users/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resData = await response.json();
    setIsLoading(false);
    if (resData.con) {
      navigate("/login");
    } else console.log(resData);
  };
  const registerUser = async (e) => {
    e.preventDefault();
    const user = { name, email, phone, password };
    setIsLoading(true);
    apiRegister(user);
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };
  return (
    <div className="container my-5">
      {isLoading && <Loading />}
      <div className="col-md-6 mt-5 offset-md-3 bg-dark p-5">
        <h1 className="text-white text-center">Register To Be A Member</h1>
        <form onSubmit={registerUser}>
          <div className="input-group mt-5 my-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-user"></i>
            </span>
            <input type="text" className="form-control" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} required minLength={6} />
          </div>
          <div className="input-group mt-4 mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-envelope"></i>
            </span>
            <input type="email" className="form-control" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group mt-4 mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-phone"></i>
            </span>
            <input type="tel" className="form-control" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="input-group mt-4 mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-lock"></i>
            </span>
            <input type="password" className="form-control" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="d-flex justify-content-between mt-4">
            <Link to="/login">Already member! login here</Link>
            <div>
              <button type="reset" className="btn btn-outline-warning btn-sm mx-2 text-white">
                Cancle
              </button>
              <button type="submit" className="btn btn-success btn-sm">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
