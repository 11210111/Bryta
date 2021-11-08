import React from "react";
import "../css/TodayActor.css";
import { useHistory } from "react-router";

export default function TodayActor({ todayActor }) {
  const history = useHistory();
  const id = todayActor?.id;
  const actorClick = () => {
    history.push({
      pathname: `detail/${id}`,
      state: {
        id: todayActor?.id,
      },
    });
  };
  return (
    <>
      <div>
        <section className="todayactor-section">
          <div
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1300"
            data-aos-easing="ease-out"
            className="todayactor-text"
          >
            오늘의 추천배우
          </div>
          <div className="todayactor-images">
            <div className="todayactor-actor" onClick={actorClick}>
              <img
                src={todayActor?.image}
                alt={todayActor?.actorName}
                className="todayactor-img"
              />
              <div className="actor-name">{todayActor?.actorName}</div>
            </div>
            <div className="todayactor-movies">
              {todayActor?.actor_movies.map((actor_movie) => (
                <div key={actor_movie.id} className="todayactor-movie">
                  <img
                    src={actor_movie.movie.movieImage}
                    alt={actor_movie.movie.movieName}
                    className="movie-image"
                  />
                  <div className="movie-name">
                    {actor_movie.movie.movieName}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
