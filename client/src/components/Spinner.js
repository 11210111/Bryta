import React from "react";
import styled from "styled-components";

const SpinnerSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 160px;
  height: 160px;
`;

const MiniSpinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
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
export default function Spinner() {
  return (
    <SpinnerSection>
      <SpinnerContainer>
        <MiniSpinner />
        {window.location.replace("/mypage")}
      </SpinnerContainer>
    </SpinnerSection>
  );
}
