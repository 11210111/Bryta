import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import Post from "../components/Post";
import LoginErrorModal from "../components/LoginErrorModal";
import "../css/Board.css";

function Board() {
  const history = useHistory();
  const isLogin = useSelector((state) => state.auth);
  const [isPost, setIsPost] = useState(null);
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(!modal);
  };
  useEffect(() => {
    axios
      .get("https://api.bryta.shop/noticeBoard")
      .then((res) => setIsPost(res.data.post));
  }, []);
  const boardWriteHandler = () => {
    history.push("/request");
  };

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
        {isLogin ? (
          <button className="board-writebtn" onClick={boardWriteHandler}>
            게시물 작성
          </button>
        ) : (
          <>
            <button className="board-writebtn" onClick={modalHandler}>
              게시물 작성
            </button>
            <LoginErrorModal modal={modal} setModal={setModal} />
          </>
        )}

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
