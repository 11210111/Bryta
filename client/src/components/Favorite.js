import React, { useState, useEffect } from "react";
import "../css/Favorite.css";
import { useDispatch, useSelector } from "react-redux";
import { getFavOne } from "../features/API/favOneAPI";
import MovieList from "./MovieList";
import Actor from "./Actor";
import EmptyFavorite from "./EmptyFavorite";

export default function Favorite() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth);
  const isFavorite = useSelector((state) => state.favorite);
  const [favOne, setFavOne] = useState(isFavorite && isFavorite[0]?.actorId);
  const getId = (data) => {
    setFavOne(data);
  };

  useEffect(() => {
    const id = favOne;
    dispatch(getFavOne({ isLogin, id })).unwrap();
  });

  return (
    <>
      {isFavorite === null || !isFavorite.length ? (
        <EmptyFavorite />
      ) : (
        <div className="favorite-container">
          <section className="favorite-section">
            <ul className="favorite-actors">
              {!isFavorite[0]
                ? null
                : isFavorite.map((favorite) => (
                    <li key={favorite.actorId}>
                      <Actor
                        getId={getId}
                        key={Math.random()}
                        actor={favorite.actor}
                      />
                    </li>
                  ))}
            </ul>
          </section>
          <section className="favorite-actor-movies">
            {!isFavorite[0] ? null : <MovieList actorId={favOne} />}
          </section>
        </div>
      )}
    </>
  );
}
