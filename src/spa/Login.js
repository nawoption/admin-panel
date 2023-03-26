import React, { useRef } from "react";
import Nav from "./Nav";
import styled from "styled-components";
import { Button } from "../styles/Share";
import { useLoginContext } from "./loginContextApi";
import { useNavigate } from "react-router-dom";
const SectionDiv = styled.div`
  background-color: aliceblue;
  display: flex;
  width: 600px;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
`;
const input = {
  display: "block",
  width: "250px",
  border: "none",
  padding: "15px 10px",
  paddingBottom: "20px",
};
export default function Login() {
  const phoneRef = useRef();
  const passwordRef = useRef();
  const { setLoginIn } = useLoginContext();
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    const user = {
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
    };
    setLoginIn(true);
    navigate("/home");
    phoneRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <>
      <Nav></Nav>
      <SectionDiv>
        <h1 style={{ marginBottom: "10px", color: "#ff8800" }}>
          Login To Viewe Home Page
        </h1>
        <form onSubmit={login}>
          <input
            style={input}
            type={"tel"}
            placeholder="phone"
            ref={phoneRef}
          />
          <input
            style={input}
            type={"password"}
            placeholder="password"
            ref={passwordRef}
          />
          <Button type="submit">Loign</Button>
        </form>
      </SectionDiv>
    </>
  );
}
