import React from "react";
import { useHistory } from "react-router-dom";
import "../../css/MainPage.css";
import Background from "../../images/Mainpage-part1.jpg";
const MainPage1 = () => {
  const history = useHistory();

  return (
    <>
      <div
        className="part1-background"
        style={{
          backgroundImage: "url(" + { Background } + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="part1-text-wrapper">
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1300"
            data-aos-easing="ease-out"
            className="part1-text"
          >
            좋아하는 배우의 출연작을 보고 계시는 중이신가요?
            <br />
            Bryta가 도와드립니다!
          </div>
        </div>

        <div className="part1-button-wrapper">
          <button
            data-aos="fade"
            data-aos-delay="50"
            data--aos-easing="ease-in-out"
            className="part1-button"
            onClick={() => history.push("/actor")}
          >
            좋아하는 배우 찾으러 가기
          </button>
        </div>
        <div className="scroll-down">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </div>
    </>
  );
};

export default MainPage1;
