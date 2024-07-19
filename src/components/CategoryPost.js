import React, { useEffect, useState } from "react";
import HotNew from "./shared/HotNew";
import { useSelector } from "react-redux";

export default function CategoryPost() {
  const [catnews, setCatnews] = useState([]);
  const { type, id , title } = useSelector((state) => state.pageData);
  console.log(type, id);
  useEffect(() => {
    loadCategoryPost();
  }, [id]);
  const loadCategoryPost = async () => {
    const response = await fetch(
      `https://nodejs-media.onrender.com/posts/${type}/${id}`
    );
    const resData = await response.json();
    setCatnews(resData.result);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="my-3 bg-dark p-2 d-flex justify-content-between">
          <button className="btn btn-danger btn-sm rounded-0">{title}</button>
        </div>
        {catnews.length > 0 &&
          catnews.map((post) => <HotNew key={post._id} post={post} />)}
      </div>
    </div>
  );
}
