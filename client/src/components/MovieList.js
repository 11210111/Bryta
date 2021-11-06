import React from "react";

export default function MovieList() {
  return (
    <div>
      <div className="movielist-watch-true">
        <div>본 영화</div>
        {/* 영화 */}
      </div>
      <div className="movielist-watch-false">
        <div>안 본 영화</div>
        {/* 영화 */}
      </div>
    </div>
  );
}
