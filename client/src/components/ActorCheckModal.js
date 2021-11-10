import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delFavorite } from "../features/API/favoriteAPI";
import "../css/ActorCheckModal.css";

export default function ConfirmSignupModal({
  checkModal,
  setCheckModal,
  payload,
}) {
  const isLogin = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      {checkModal ? (
        <section className="actor-check-modal-section">
          <div className="actor-check-modal-container">
            <p className="actor-check-modal-text">좋아요를 취소하시겠어요?</p>
            <button
              className="actor-check-modal-btn"
              onClick={() => {
                setCheckModal(!checkModal);
                dispatch(delFavorite({ isLogin, payload })).unwrap();
                window.location.replace("/mypage");
              }}
            >
              확인
            </button>
            <button
              className="actor-check-modal-btn"
              onClick={() => {
                setCheckModal(!checkModal);
                window.location.replace("/mypage");
              }}
            >
              취소
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}
