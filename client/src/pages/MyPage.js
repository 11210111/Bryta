import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/MyPage.css";
import EditUserModal from "../components/EditUserModal";
import Actor from "../components/Actor";
import Movie from "../components/Movie";

function Mypage() {
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(!modal);
  };
  return (
    <div className="mypage-container">
      <section className="mypage">
        <div className="mypage-user">
          <div className="mypage-username">
            <h3>{`유저네임`}</h3>
            <span> 님</span>
          </div>
          <div className="mypage-edituser-btn">
            <button onClick={modalHandler}>정보수정</button>
            <EditUserModal modal={modal} setModal={setModal} />
          </div>
        </div>
        <Link to="/" />
        <div className="mypage-favorite">
          <div className="mypage-favActor-container">
            <div className="mypage-favActortext">좋아하는 배우</div>
            <div className="mypage-favActor">
              <Actor actor />
            </div>
          </div>
          <div className="mypage-favActor-movies">
            <div className="mypage-favActor-watched-movies">
              <div>본 영화</div>
              <Movie />
            </div>
            <div className="mypage-favActor-unwatched-movies">
              <div>안 본 영화</div>
              <Movie />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mypage;
