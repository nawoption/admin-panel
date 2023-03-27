import React from "react";
import { useSelector } from "react-redux";
import DComponent from "./DComponent";
export default function AComponent() {
  const account = useSelector((state) => state.account);
  return (
    <div>
      <h2>AComponent</h2>
      <h3>{account}</h3>
      <hr />
      <DComponent></DComponent>
    </div>
  );
}
