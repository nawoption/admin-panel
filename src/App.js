import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { acitonCreator } from "./store/actionCreators";
import AComponent from "./store/components/AComponent";
export default function App() {
  const account = useSelector((state) => state.account);
  const users = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { add, remove, insert, drop } = bindActionCreators(
    acitonCreator,
    dispatch
  );

  const nameRef = useRef();
  const phoneRef = useRef();
  const addUser = (e) => {
    e.preventDefault();
    const user = { name: nameRef.current.value, phone: phoneRef.current.value };
    insert(user);
    nameRef.current.value = "";
    phoneRef.current.value = "";
  };

 

  return (
    <>
      <h1>{account}</h1>
      <button onClick={() => add(50)}>Add</button>
      <button onClick={() => remove(50)}>Remove</button>
      <br />
      <br />
      {users.map((user) => (
        <p onClick={()=>drop(user)}>
          {user.name} : {user.phone}{" "}
        </p>
      ))}
      <br />
      <form onSubmit={addUser}>
        <input type={"text"} ref={nameRef} />
        <br />
        <input type={"text"} ref={phoneRef} />
        <br />
        <input type={"submit"} title="submit" />
      </form>
      <hr />
      <AComponent></AComponent>
    </>
  );
}
