import React from "react";

export default function EmptyFavorite() {
  return (
    <div className="empty-favorite-container">
      <section className="empty-favorite-section">
        <div>좋아하는 영화배우가 없습니다.</div>
        <img alt="empty" src="" />
      </section>
    </div>
  );
}
