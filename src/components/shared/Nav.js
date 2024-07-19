import React, { useEffect, useState } from "react";
import logoImg from "../../statics/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRemove, changeCat } from "../../redux/action";
export default function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  const [cats, setCats] = useState([]);
  useEffect(() => {
    loadCategory();
  }, []);
  const logoutUser = () => {
    dispatch(userRemove(null));
    navigate("/login");
  };
  const loadCategory = async () => {
    const response = await fetch("https://nodejs-media.onrender.com/category");
    const resData = await response.json();
    setCats(resData.result);
  };
  const pageChange = (type, id,title) => {
    dispatch(changeCat({ type, id ,title}));
    navigate("/catPost");
  };
  return (
    <div className="contaner-fluid bg-dark">
      <nav className="container navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <img src={logoImg} alt="bm logo" width="30" height="30" />
          <Link to="/" className="navbar-brand text-white ms-2">
            BM Media
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {cats.length > 0 &&
                cats.map((data) => (
                  <li
                    key={data._id}
                    className="nav-item"
                    onClick={() => pageChange("cat", data._id,data.name)}
                  >
                    <a
                      className="nav-link text-white"
                      aria-current="page"
                      style={{ cursor: "pointer" }}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}

              {userData && (
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/admin">
                    Admin Panel
                  </Link>
                </li>
              )}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-user"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {!userData && (
                    <li>
                      <Link to="/login" className="dropdown-item">
                        Login
                      </Link>
                    </li>
                  )}
                  {!userData && (
                    <li>
                      <Link to="/register" className="dropdown-item">
                        Register
                      </Link>
                    </li>
                  )}
                  {userData && (
                    <li>
                      <a
                        className="dropdown-item linkDisable"
                        onClick={logoutUser}
                      >
                        Logout
                      </a>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
