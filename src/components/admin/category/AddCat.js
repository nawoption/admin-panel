import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../shared/Loading";
import { postForm } from "../../../utli/api";
export default function AddCat() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [isloading, setIsloading] = useState(false);
  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const addPost = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    const resData = await postForm("/category", formData, userData.token);
    if (resData.con) {
      setIsloading(false);
      navigate("/admin/cats/all");
    } else {
      console.log(resData);
    }
  };

  return (
    <div className="col-md-8 offset-2 bg-dark p-5">
      {isloading && <Loading />}
      <h3 className="text-white">Create Category</h3>
      <form onSubmit={addPost}>
        <div class="mb-3">
          <label htmlFor="name" class="form-label text-white">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="formFile" class="form-label text-white">
            Category Image
          </label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            onChange={onFileChange}
          />
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
