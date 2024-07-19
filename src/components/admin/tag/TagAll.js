import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData, deleteData, getImage } from "../../../utli/api";
export default function TagAll() {
  const [tags, setTags] = useState([]);
  const userData = useSelector((state) => state.userData);
  const loadTag = async () => {
    const resData = await getData("/tags");
    setTags(resData.result);
  };
  useEffect(() => {
    loadTag();
  }, []);
  const deleteTag = async (id) => {
    const resData = await deleteData(`/tags/${id}`, userData.token);
    loadTag();
  };
  const TagCard = ({ tag }) => {
    return (
      <div className="col-md-3 my-2">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <img src={getImage(tag.image)} width="100%" height="60px" />
              </div>
              <div className="col-md-6">
                <h6>{tag.name}</h6>
                <Link
                  to={`/admin/tags/edit/${tag._id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  <i className="fa fa-edit"></i>
                </Link>
                <Link
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteTag(tag._id)}
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
      <Link to="/admin/tags/add" className="btn btn-info btn-sm ">
        Add Tag
      </Link>
      <div className="row">
        {tags.length > 0 &&
          tags.map((tag) => <TagCard key={tag._id} tag={tag} />)}
      </div>
    </div>
  );
}
