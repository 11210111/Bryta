import { useState } from "react";
import { useSelector } from "react-redux";
import "../css/Movie.css";
import { BsCircleFill, BsCheckCircleFill } from "react-icons/bs"; // 본거안본거체크아이콘
import LoginErrorModal from "./LoginErrorModal";
import axios from "axios";

export default function Movie({ moviePayload, movie }) {
  const url = window.location.pathname;
  const isLogin = useSelector((state) => state.auth);
  const [modal, setModal] = useState(false);
  const [isWatch, setIsWatch] = useState(false);

  const actorId = moviePayload?.actorId;
  const movieId = movie?.id;
  const watchHandler = async (e) => {
    // e.preventDefault();
    if (!isLogin) {
      setModal(!modal);
    } else {
      if (!moviePayload?.watch) {
        // console.log(moviePayload?.watch);
        try {
          await axios
            .patch(
              `http://localhost:8080/favorite/${actorId}/${movieId}`,
              { watch: true },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${isLogin.accessToken}`,
                },
                withCredentials: true,
              }
            )
            .then((res) => {
              setIsWatch(true);
            });
        } catch (err) {
          console.log(err);
        }
      } else {
        await axios
          .patch(
            `http://localhost:8080/favorite/${actorId}/${movieId}`,
            { watch: false },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${isLogin.accessToken}`,
              },
              withCredentials: true,
            }
          )
          .then((res) => {
            setIsWatch(false);
          });
      }
    }
  };
  return (
    <div id="movie-container">
      <section className="movie-info">
        <img
          src={movie?.movieImage}
          alt={movie?.movieName}
          className="movie-image"
        />
        {!moviePayload.watch && !isWatch ? (
          <BsCircleFill
            onClick={() => watchHandler()}
            color="#fff"
            className={url === `/detail/${actorId}` ? "hide" : "movie-checkBtn"}
          />
        ) : (
          <BsCheckCircleFill
            onClick={() => watchHandler()}
            color="#D94E43"
            className={url === `/detail/${actorId}` ? "hide" : "movie-checkBtn"}
          />
        )}
        <span className="movie-name">{movie?.movieName}</span>
      </section>
      <LoginErrorModal modal={modal} setModal={setModal} />
    </div>
  );
}
