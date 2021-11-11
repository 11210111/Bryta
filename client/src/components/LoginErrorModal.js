import React from "react";
import { Link } from "react-router-dom";
import "../css/LoginErrorModal.css";

function LoginErrorModal({ modal, setModal }) {
  return (
    <>
      {modal ? (
        <section className="login-error-modal-section">
          <div className="login-error-modal-container">
            <p className="login-error-modal-text">로그인을 해주세요!</p>
            <Link to="/login">
              <button
                className="login-error-modal-btn"
                onClick={() => setModal(!modal)}
              >
                로그인하기
              </button>
            </Link>
            <button
              className="login-error-modal-btn modal-right-btn"
              onClick={() => setModal(!modal)}
            >
              확인
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default LoginErrorModal;
