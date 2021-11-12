import { useState } from "react";
import { useSelector } from "react-redux";
import "../css/Movie.css";
import { BsCircleFill, BsCheckCircleFill } from "react-icons/bs"; // 본거안본거체크아이콘
import LoginErrorModal from "./LoginErrorModal";
import axios from "axios";
import Spinner from "../components/Spinner";

export default function Movie({ moviePayload, movie }) {
  const url = window.location.pathname;
  const isLogin = useSelector((state) => state.auth);
  const [modal, setModal] = useState(false);
  const [isWatch, setIsWatch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const actorId = moviePayload?.actorId;
  const movieId = movie?.id;

  const watchHandler = async (e) => {
    // e.preventDefault();

    if (!isLogin) {
      setModal(!modal);
    } else {
      if (!moviePayload?.watch) {
        try {
          setIsLoading(true);
          await axios
            .patch(
              `https://api.bryta.shop/favorite/${actorId}/${movieId}`,
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
              setIsLoading(false);
            });
        } catch (err) {
          console.log(err);
        }
      } else {
        setIsLoading(true);
        await axios
          .patch(
            `https://api.bryta.shop/favorite/${actorId}/${movieId}`,
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
            setIsLoading(false);
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
            style={{
              border: "1px solid black",
              borderRadius: "50px",
            }}
            className={url === `/detail/${actorId}` ? "hide" : "movie-checkBtn"}
          />
        ) : (
          <BsCheckCircleFill
            onClick={() => watchHandler()}
            color="#FFAA28"
            className={url === `/detail/${actorId}` ? "hide" : "movie-checkBtn"}
          />
        )}
        <span className="movie-name">{movie?.movieName}</span>
      </section>
      {isLoading ? <Spinner /> : ""}
      <LoginErrorModal modal={modal} setModal={setModal} />
    </div>
  );
}
