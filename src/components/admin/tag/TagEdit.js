import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../shared/Loading";
import { getData, updateData } from "../../../utli/api";
export default function TagEdit() {
  const [name, setName] = useState("");
  const [isloading, setIsloading] = useState(false);

  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    loadTag();
  }, []);
  const loadTag = async () => {
    const resData = await getData(`/tags/${id}`);
    setName(resData.result.name);
  };
  const updatePost = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const resData = await updateData(`/tags/${id}`, { name }, userData.token);
    if (resData.con) {
      setIsloading(false);
      navigate("/admin/tags/all");
    } else {
      console.log(resData);
    }
  };

  return (
    <div className="col-md-8 offset-2 bg-dark p-5">
      {isloading && <Loading />}
      <h3 className="text-white">Update Category</h3>
      <form onSubmit={updatePost}>
        <div class="mb-3">
          <label htmlFor="name" class="form-label text-white">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Tag Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
