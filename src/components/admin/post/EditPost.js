import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getData, updateData } from "../../../utli/api";
export default function EditPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [cats, setCats] = useState([]);
  const [tags, setTags] = useState([]);
  const userData = useSelector((state) => state.userData);
  const { id } = useParams();
  const navigate = useNavigate();
  const loadSingePost = async () => {
    const resData = await getData(`/posts/${id}`);
    const current = resData.result;
    setTitle(current.title);
    setContent(current.desc);
    setCategory(current.category);
    setTag(current.tag);
  };
  const loadCategory = async () => {
    const resData = await getData("/category");
    setCats(resData.result);
  };
  const loadTag = async () => {
    const resData = await getData("/tags");
    setTags(resData.result);
  };
  useEffect(() => {
    loadSingePost();
    loadCategory();
    loadTag();
  }, []);
  const updatePost = async (e) => {
    e.preventDefault();
    const data = { title, desc: content, category, tag };
    const resData = await updateData(`/posts/${id}`, data, userData.token);
    if (resData.con) {
      navigate("/admin/posts/all");
    } else {
      console.log(resData);
    }
  };
  return (
    <div className="container">
      <form onSubmit={updatePost} className="bg-dark p-5">
        <h2 className="text-white text-center">Edit Post</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="title" className="form-label text-white">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label text-white">Category</label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setCategory(e.target.value)}
            >
              {cats.length > 0 &&
                cats.map((data) => (
                  <option
                    key={data._id}
                    value={data._id}
                    selected={data._id === category}
                  >
                    {data.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label text-white">Tag</label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setTag(e.target.value)}
            >
              {tags.length > 0 &&
                tags.map((data) => (
                  <option
                    key={data._id}
                    value={data._id}
                    selected={data._id === tag}
                  >
                    {data.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label text-white">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            rows="3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button type="reset" className="btn btn-outline-warning btn-sm me-2">
            Cancle
          </button>
          <button type="submit" className="btn btn-success btn-sm">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
