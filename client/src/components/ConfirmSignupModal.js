import React from "react";
import { Link } from "react-router-dom";
import "../css/ConfirmSignupModal.css";

export function ConfirmSignupModal({ signupModal, setSignupModal }) {
  return (
    <>
      {signupModal ? (
        <section className="confirm-signup-modal-section">
          <div className="confirm-signup-modal-container">
            <p className="confirm-signup-modal-text">회원가입되었습니다.</p>
            <Link to="/">
              <button
                className="confirm-signup-modal-btn"
                onClick={() => setSignupModal(!signupModal)}
              >
                확인
              </button>
            </Link>
            <Link to="/login">
              <button className="confirm-signup-modal-btn">
                로그인하러 가기
              </button>
            </Link>
          </div>
        </section>
      ) : null}
    </>
  );
}

export function ConfirmErrorModal({ errorModal, setErrorModal }) {
  return (
    <>
      {errorModal ? (
        <section className="confirm-signup-modal-section">
          <div className="confirm-signup-modal-container">
            <p className="confirm-signup-modal-text">
              이미 존재하는 아이디입니다.
            </p>
            <button
              className="confirm-signup-modal-btn"
              onClick={() => setErrorModal(!errorModal)}
            >
              확인
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}
