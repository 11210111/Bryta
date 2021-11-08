import React from "react";
import "../css/EmptyFavorite.css";

export default function EmptyFavorite() {
  return (
    <div className="empty-favorite-container">
      <section className="empty-favorite-section">
        <b>좋아하는 영화배우가 없습니다.</b>
        <img alt="empty" src="" />
      </section>
    </div>
  );
}
