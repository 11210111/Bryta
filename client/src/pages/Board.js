import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Post from "../components/Post";

function Board() {
  const [isPost, setIsPost] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/noticeBoard/post")
      .then((res) => setIsPost(res.data.post));
  }, []);

  return (
    <div className="board-container">
      <section className="board-section">
        <div className="board-name">
          <img
            className="logo-img"
            alt="icon"
            src={process.env.PUBLIC_URL + "/icon192.png"}
          />
          <h3>배우 추가 건의</h3>
        </div>
        <Link to="/request">
          <button className="board-writebtn">게시물 작성</button>
        </Link>
        <div className="board-postlist">
          {isPost?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default Board;
