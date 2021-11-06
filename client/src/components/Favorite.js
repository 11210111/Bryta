import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Actor from "./Actor";

export default function Favorite() {
  const isFavorite = useSelector((state) => state.favorite);
  const [favOne, setFavOne] = useState(isFavorite[0].actorId);
  return (
    <div className="favorite-container">
      <section className="favorite-section">
        <ul className="favorite-actors">
          {isFavorite.map((favorite) => (
            <li key={favorite.actorId}>
              <Actor key={Math.random()} actor={favorite.actor} />
            </li>
          ))}
        </ul>
      </section>
      <section className="favorite-actor-movies">
        <MovieList />
      </section>
    </div>
  );
}
