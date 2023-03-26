import React, { useRef } from "react";

export default function UserAdd(props) {
  const nameRef = useRef();
  const passwordRef = useRef();

  const addUser = (e) => {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
    };
    nameRef.current.value = "";
    passwordRef.current.value = "";
    props.add(user);
  };

  return (
    <>
      <form onSubmit={addUser}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" ref={nameRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="password"
            ref={passwordRef}
          />
        </div>

        <button type="submit" className="btn btn-primary float-end">
          Submit
        </button>
      </form>
    </>
  );
}
