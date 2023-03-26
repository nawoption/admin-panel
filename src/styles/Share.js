import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width:1024px;
`;
export const Button = styled.button`
  background-color: hotpink;
  color: #fff;
  padding: 10px 20px;
  border-radius: 3px;
  border: none;
  margin-top: 20px;

  &:hover {
    background-color: indigo;
  }
`;