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
  const [isCurrent, setIsCurrent] = useState(1);
  const [isPages, setIsPages] = useState(10);
  const modalHandler = () => {
    setModal(!modal);
  };
  useEffect(() => {
    axios
      .get("https://api.bryta.shop/noticeBoard")
      .then((res) => setIsPost([...res.data.post].reverse()));
  }, []);
  const boardWriteHandler = () => {
    history.push("/request");
  };

  const indexOfLast = isCurrent * isPages;
  const indexOfFirst = indexOfLast - isPages;
  function currentPosts(posts) {
    if (!isPost) {
      return;
    } else {
      return posts.slice(indexOfFirst, indexOfLast);
    }
  }

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(isPost?.length / isPages); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="board-container">
      <section className="board-section">
        <img
          className="logo-img"
          alt="icon"
          src={process.env.PUBLIC_URL + "/icon192.png"}
        />
        <div className="board-name">
          <h3>배우 추가 건의</h3>
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
        </div>
        <div className="board-postlist">
          {currentPosts(isPost)?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
          <ul className="board-pagination">
            {pageNumbers.map((number, i) => (
              <li key={i} className="board-page">
                <span
                  className="board-page-btn"
                  onClick={() => setIsCurrent(number)}
                >
                  {number}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
export default Board;
