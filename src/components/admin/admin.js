import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function admin() {
  return (
    <div className="container " >
      <div className="row my-3">
        <div className="col-md-3">
          <ul className="list-group">
            <Link to="/admin/cats/all" className="list-group-item">Categoryies</Link>
            <Link to="/admin/tags/all" className="list-group-item">Tags</Link>
            <Link to="/admin/posts/all" className="list-group-item">Posts</Link>
          </ul>
        </div>
        <div className="col-md-9">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
