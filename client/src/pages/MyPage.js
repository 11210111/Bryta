import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../css/MyPage.css";
import EditUserModal from "../components/EditUserModal";
import Favorite from "../components/Favorite";
import EmptyFavorite from "../components/EmptyFavorite";

function Mypage() {
  const isLogin = useSelector((state) => state.auth);
  const isFavorite = useSelector((state) => state.favorite);
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };
  return (
    <div className="mypage-container">
      <section className="mypage">
        <div className="mypage-user">
          <div className="mypage-username">
            <h3>{isLogin.data.username}</h3>
            <span> 님</span>
          </div>
          <div className="mypage-edituser-btn">
            <button onClick={modalHandler}>정보수정</button>
            <EditUserModal modal={modal} setModal={setModal} />
          </div>
        </div>
        <div className="mypage-favorite">
          {!isFavorite.length ? <EmptyFavorite /> : <Favorite />}
        </div>
      </section>
    </div>
  );
}

export default Mypage;
