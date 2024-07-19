import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postForm, getData } from "../../../utli/api";
export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [cats, setCats] = useState([]);
  const [tags, setTags] = useState([]);
  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const loadCategory = async () => {
    const resData = await getData("/category");
    setCats(resData.result);
    setCategory(resData.result[0]._id);
  };
  const loadTag = async () => {
    const resData = await getData("/tags");
    setTags(resData.result);
    setTag(resData.result[0]._id);
  };
  useEffect(() => {
    loadCategory();
    loadTag();
  }, []);
  const addPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", content);
    formData.append("file", file);
    formData.append("category", category);
    formData.append("tag", tag);
    const resData = await postForm("/posts", formData, userData.token);
    if (resData.con) {
      navigate("/admin/posts/all");
    } else {
      console.log(resData);
    }
  };
  return (
    <div className="container">
      <form onSubmit={addPost} className="bg-dark p-5">
        <h2 className="text-white text-center">Create Post</h2>
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
                  <option key={data._id} value={data._id}>
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
                  <option key={data._id} value={data._id}>
                    {data.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="formFile" class="form-label text-white">
                Post Image
              </label>
              <input
                class="form-control"
                type="file"
                id="formFile"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
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
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button type="reset" className="btn btn-outline-warning btn-sm me-2">
            Cancle
          </button>
          <button type="submit" className="btn btn-success btn-sm">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
