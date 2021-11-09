import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 160px;
  height: 160px;
`;

const Logo = styled.img`
  width: 27px;
`;

const Text = styled.span`
  font-size: 23px;
  color: #ffaa28;
  animation: fade 3s infinite linear;
  @keyframes fade {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 160px;
  height: 160px;
  animation: rotate 3s infinite linear;
  border: 2px solid transparent;
  border-top: 2px solid #ffaa28;
  border-bottom: 2px solid #ffaa28;
  border-radius: 100%;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;

const LodingPage = () => (
  <Container>
    <Box>
      <Logo src={process.env.PUBLIC_URL + "/icon192.png"} />
      <Text>LOADING</Text>
      <Loader />
    </Box>
  </Container>
);

export default LodingPage;
