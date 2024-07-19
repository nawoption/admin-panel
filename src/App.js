import React from "react";
import Home from "./components/Home";
import Nav from "./components/shared/Nav";
import Footer from "./components/shared/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/admin/admin";
import RouteGuard from "./components/shared/RouteGuard";
import FallbackRoute from "./components/shared/FallbackRoute";
import AllCat from "./components/admin/category/AllCat";
import AddCat from "./components/admin/category/AddCat";
import EditCat from "./components/admin/category/EditCat";
import TagAll from "./components/admin/tag/TagAll";
import TagAdd from "./components/admin/tag/TagAdd";
import TagEdit from "./components/admin/tag/TagEdit";
import AddPost from "./components/admin/post/AddPost";
import AllPost from "./components/admin/post/AllPost";
import EditPost from "./components/admin/post/EditPost";
import CategoryPost from "./components/CategoryPost";

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catPost" element={<CategoryPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={
            <RouteGuard>
              <Admin />
            </RouteGuard>
          }
        >
          <Route path="cats">
            <Route path="all" element={<AllCat />} />
            <Route path="add" element={<AddCat />} />
            <Route path="edit/:id" element={<EditCat />} />
          </Route>
          <Route path="tags">
            <Route path="all" element={<TagAll />} />
            <Route path="add" element={<TagAdd />} />
            <Route path="edit/:id" element={<TagEdit />} />
          </Route>
          <Route path="posts">
            <Route path="all" element={<AllPost />} />
            <Route path="add" element={<AddPost />} />
            <Route path="edit/:id" element={<EditPost />} />
          </Route>
        </Route>
        <Route path="*" element={<FallbackRoute />} />
      </Routes>
      <Footer />
    </div>
  );
}
