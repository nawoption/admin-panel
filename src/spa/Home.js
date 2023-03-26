import React from "react";
import Nav from "./Nav";
import highwawImg from "../images/high-way.jpeg";
import styled from "styled-components";
import { Button } from "../styles/Share";
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #f2f2f2;
`;
const Flex = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <>
      <Nav />
      <FlexDiv>
        <Flex>
          <h1>CU Meiktla</h1>
          <h4 style={{ marginTop: "10px" }}>
            University of Computer Studies Meiktla
          </h4>
          <Button>Download Apk</Button>
        </Flex>
        <Flex>
          <img src={highwawImg} width="200px" height="100px" />
        </Flex>
      </FlexDiv>
      <FlexDiv>
        <Flex>
          <img src={highwawImg} width="200px" heigh="100px" />
        </Flex>
        <Flex>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            asperiores dolore omnis unde assumenda quam, facere atque ea. Eos
            culpa omnis animi incidunt libero excepturi facere nam mollitia qui
            non.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            asperiores dolore omnis unde assumenda quam, facere atque ea. Eos
            culpa omnis animi incidunt libero excepturi facere nam mollitia qui
            non.
          </p>
        </Flex>
      </FlexDiv>
      <FlexDiv>
        <Flex>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            asperiores dolore omnis unde assumenda quam, facere atque ea. Eos
            culpa omnis animi incidunt libero excepturi facere nam mollitia qui
            non.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            asperiores dolore omnis unde assumenda quam, facere atque ea. Eos
            culpa omnis animi incidunt libero excepturi facere nam mollitia qui
            non.
          </p>
        </Flex>
        <Flex>
          <img src={highwawImg} width="200px" heigh="100px" />
        </Flex>
      </FlexDiv>
    </>
  );
}
