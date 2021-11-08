import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/MyPage.css";
import EditUserModal from "../components/EditUserModal";
import Favorite from "../components/Favorite";
import { getFavorite } from "../features/API/favoriteAPI";

function Mypage() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(getFavorite(isLogin)).unwrap();
  }, [dispatch, isLogin]);
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
          <Favorite />
        </div>
      </section>
    </div>
  );
}

export default Mypage;
