import React, { createContext, useState } from "react";

export const TitleContext = createContext();

function TitleContextProvider(props) {
  const [title, setTitle] = useState("");
  const changeTitle = () => {
    var title = "testing " + Math.ceil(Math.random(1, 10) * 1000);
    setTitle(title);
  };
  var data = { title, changeTitle };
  return (
    <TitleContext.Provider value={data}>{props.children}</TitleContext.Provider>
  );
}

export default TitleContextProvider;
