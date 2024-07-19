import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData, deleteData, getImage } from "../../../utli/api";
export default function AllCat() {
  const [categories, setCategory] = useState([]);
  const userData = useSelector((state) => state.userData);
  const loadCategory = async () => {
    const resData = await getData("/category");
    setCategory(resData.result);
  };
  useEffect(() => {
    loadCategory();
  }, []);
  const deleteCategory = async (id) => {
    const resData = await deleteData(`/category/${id}`, userData.token);
    resData.con && loadCategory();
  };
  const CateCard = ({ category }) => {
    return (
      <div className="col-md-3 my-2">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={getImage(category.image)}
                  width="100%"
                  height="60px"
                />
              </div>
              <div className="col-md-6">
                <h6>{category.name}</h6>
                <Link
                  to={`/admin/cats/edit/${category._id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  <i className="fa fa-edit"></i>
                </Link>
                <Link
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteCategory(category._id)}
                >
                  <i className="fa fa-trash"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Link to="/admin/cats/add" className="btn btn-info btn-sm ">
        Add Cat
      </Link>
      <div className="row">
        {categories.length > 0 &&
          categories.map((category) => (
            <CateCard key={category._id} category={category} />
          ))}
      </div>
    </div>
  );
}
