import React, { useEffect, useState } from "react";
import "../../css/MainPage.css";
import Actor from "../../components/Actor";
import Movie from "../../components/Movie";

function MainPage2() {
  return (
    <div id="main-container">
      <nav className="main-nav">
        <section className="todayactor">
          <div className="todayactor-text-wrapper">
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1300"
              data-aos-easing="ease-out"
              className="todayactor-text"
            >
              오늘의 배우
              <br />
            </div>
          </div>
          <div className="todayactor-images">
            <div className="todayactor-actor">
              <Actor />
            </div>
            <div className="todayactor-movies">
              <Movie />
              <Movie />
              <Movie />
            </div>
          </div>
        </section>
        <section className="main-bryta">
          <div className="main-bryta-name">Bryta란</div>
          <p className="main-bryta-about">필모깨기를 도와주는 Bryta</p>
        </section>
      </nav>
    </div>
  );
}

export default MainPage2;
