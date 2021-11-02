import "../css/MainPage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TodayActor from "../components/TodayActor";
function MainPage() {
  const [isTodayActor, setIsTodayActor] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/actor/recommendation")
      .then((res) => {
        const data = res.data.actorMovie;
        setIsTodayActor(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="main-container">
      <nav className="main-nav">
        <section className="main-todayactor">
          <TodayActor todayActor={isTodayActor} />
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
