import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "../css/MovieList.css";
import Movie from "./Movie";

export default function MovieList({ actorId }) {
  const isLogin = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const [isMovies, setIsMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.bryta.shop//favorite/${actorId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${isLogin.accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        const movies = res.data.data;
        setIsLoading(false);
        setIsMovies(movies);
      });
    setIsLoading(true);
  }, [actorId, isLogin.accessToken]);

  return (
    <div className="movielist-container">
      <section className="movielist-section">
        <div className="movielist-watched">
          <div className="movielist-text">본 영화</div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <ul className="movielist-movies">
              {isMovies.map((movie, idx) =>
                movie.watch === true ? (
                  <li key={idx}>
                    <Movie
                      moviePayload={movie}
                      movie={movie.movie}
                      // watchHandler={watchHandler}
                    />
                  </li>
                ) : (
                  []
                )
              )}
            </ul>
          )}
        </div>
        <div className="movielist-not-watched">
          <div className="movielist-text">안 본 영화</div>
          {isLoading ? (
            <div>loading...</div>
          ) : (
            <ul className="movielist-movies">
              {isMovies.map((movie) =>
                movie.watch === false ? (
                  <li key={Math.random()}>
                    <Movie
                      moviePayload={movie}
                      movie={movie.movie}
                      isMovies={isMovies}
                      // watchHandler={watchHandler}
                    />
                  </li>
                ) : (
                  []
                )
              )}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
