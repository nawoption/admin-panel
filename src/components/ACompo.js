import React, { useContext } from "react";
import { TitleContext } from "./TestContext";
export default function ACompo() {
  const { title, changeTitle } = useContext(TitleContext);
  return (
    <>
      <h1>A Component title :{title} </h1>
      <button onClick={changeTitle}>Change A compo</button>
    </>
  );
}
