import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { acitonCreator } from "../actionCreators";
export default function DComponent() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { add, remove } = bindActionCreators(acitonCreator, dispatch);
  return (
    <div>
      <h1>DComponent</h1>
      <h3>{account}</h3>
      <button onClick={() => add(50)}>Add</button>
      <button onClick={() => remove(50)}>Remove</button>
    </div>
  );
}
