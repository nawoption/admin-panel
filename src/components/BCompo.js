import React, { useContext } from "react";
import { TitleContext } from "./TestContext";
export default function BCompo() {
  const { title } = useContext(TitleContext);
  return (
    <>
      <h1>B Component title : {title} </h1>
    </>
  );
}
