import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RouteGuard({ children }) {
  const userData = useSelector((state) => state.userData);
  if (userData) return children;
  else return <Navigate to="/login" />;
}
