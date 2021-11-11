import React from "react";
import { Link } from "react-router-dom";
import "../css/Error.css";

export default function Error() {
  return (
    <div className="error-page-container">
      <h3 className="error-page-message">웹페이지를 찾을 수 없습니다</h3>
      <Link to="/board">
        <button className="error-page-btn">메인으로 가기</button>
      </Link>
    </div>
  );
}
