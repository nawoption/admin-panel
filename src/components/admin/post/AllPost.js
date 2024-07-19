import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData, deleteData, getImage } from "../../../utli/api";
export default function AllPost() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const userData = useSelector((state) => state.userData);
  const loadPosts = async () => {
    const resData = await getData(`/posts/paginate/${page}`);
    setPosts(resData.result);
  };
  useEffect(() => {
    loadPosts();
  }, [page]);
  const incresePage = () => {
    setPage((prev) => prev + 1);
  };
  const decresePage = () => {
    if (page >= 2) {
      setPage((prev) => prev - 1);
    }
  };
  const deletePost = async (id) => {
    const resData = await deleteData(`/posts/${id}`, userData.token);
    console.log(resData);
    loadPosts();
  };
  const PostCard = ({ post }) => {
    return (
      <div className="col-md-3 my-2">
        <div className="card">
          <div className="card-body">
            <img src={getImage(post.image)} width="100%" height="100px" />
            <h6>{post.title}</h6>
            <h6>{post.desc.substring(0, 30)}</h6>
            <Link
              to={`/admin/posts/edit/${post._id}`}
              className="btn btn-warning btn-sm me-2"
            >
              <i className="fa fa-edit"></i>
            </Link>
            <Link
              className="btn btn-danger btn-sm"
              onClick={() => deletePost(post._id)}
            >
              <i className="fa fa-trash"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>
          <Link to="/admin/posts/add" className="btn btn-info btn-sm ">
            Add Post
          </Link>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination pagination-sm">
            <button className="page-item page-link" onClick={decresePage}>
              Previous
            </button>
            <button className="page-item page-link" onClick={incresePage}>
              Next
            </button>
          </ul>
        </nav>
      </div>

      <div className="row">
        {posts.length > 0 &&
          posts.map((post) => <PostCard key={post._id} post={post} />)}
      </div>
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination pagination-sm">
            <button className="page-item page-link" onClick={decresePage}>
              Previous
            </button>
            <button className="page-item page-link" onClick={incresePage}>
              Next
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
}
