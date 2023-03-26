import React from "react";
import Logo from "../images/hill.jpeg";
import styled from "styled-components";
import { useLoginContext } from "./loginContextApi";
import { useNavigate } from "react-router-dom";

const FlexDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors};
  align-items: center;
  padding: 0 10px;
  height: 50px;
  border: 0.3px solid rgba(0, 0, 0, 0.1);
`;

const LeftDiv = styled.div`
  display: flex;
`;
const RightDiv = styled.div`
  flex: 1;
  align-items: center;
`;
const FlexUl = styled.ul`
  display: flex;
  justify-content: flex-end;
`;
const H1_Style = {
  marginLeft: "10px",
  color: "#ff8800",
};
const ATAG_Style = {
  color: "hotpink",
};
const LIStyle = styled.li`
  padding: 0 10px;
  &:after {
    content: "";
    display: block;
    height: 5px;
    background-color: hotpink;
    transform: scaleX(0);
    transition: 300ms;
  }
  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;

export default function Nav() {
  const { loginIn, setLoginIn } = useLoginContext();
  const navigate = useNavigate();
  const logout = () => {
    setLoginIn(false);
    navigate("/");
  };
  return (
    <FlexDiv>
      <LeftDiv>
        <img src={Logo} width="40px" height="40px" />
        <strong style={H1_Style}>CU Mtla</strong>
      </LeftDiv>
      <RightDiv>
        <FlexUl>
          <LIStyle>
            <a style={ATAG_Style}>Download</a>
          </LIStyle>
          <LIStyle>
            <a style={ATAG_Style} onClick={logout}>
              {loginIn ? "Louout" : "Login"}
            </a>
          </LIStyle>
        </FlexUl>
      </RightDiv>
    </FlexDiv>
  );
}
