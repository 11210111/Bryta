import React, { useEffect, useState } from "react";
import axios from "axios";
import TodayActor from "../../components/TodayActor";
import "../../css/MainPage.css";

export default function MainPage3() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTodayActor, setIsTodayActor] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api.bryta.shop/actor/recommendation")
      .then((res) => {
        const data = res.data.actorMovie;
        setIsTodayActor(data);
        setIsLoading(false);
      })
      .catch((error) => {
        throw error;
      });
  }, []);
  return (
    <div className="background-main3">
      {/* <div id="main-container"> */}
      <nav className="main-nav">
        <section className="main-todayactor">
          {isLoading ? (
            <div>loading...</div>
          ) : (
            <TodayActor todayActor={isTodayActor} />
          )}
        </section>
      </nav>
    </div>
    // </div>
  );
}
