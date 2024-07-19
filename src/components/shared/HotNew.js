import React from "react";

export default function HotNew({ post }) {
  return (
    <div className="col-md-6 mb-3">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <img src={`https://nodejs-media.onrender.com/uploads/${post.image}`} class="card-img-top" width="100%" height={150} />
            </div>
            <div className="col-md-6">
              <h4>{post.title}</h4>
              <p class="card-text">
                {post.desc.substring(0,30)+"..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
