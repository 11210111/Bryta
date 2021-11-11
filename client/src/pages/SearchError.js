import React from "react";
import { Link } from "react-router-dom";
import "../css/SearchError.css";

export default function SearchError() {
  return (
    <div className="search-error-container">
      <section className="search-error-section">
        <h3>찾으시는 배우가 없습니다.</h3>
        <div>게시판에 요청사항을 남겨주세요.</div>
        <Link to="/board">
          <button>게시판</button>
        </Link>
      </section>
    </div>
  );
}
