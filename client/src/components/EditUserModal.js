import React from "react";
import "../css/EditUserModal.css";

export default function UserEditModal({ modal, setModal }) {
  return (
    <>
      {modal ? (
        <section className="user-edit-modal-section">
          <div className="user-edit-modal-container">
            <form className="user-edit-form">
              <p className="user-edit-modal-text">정보수정</p>
              <div className="user-edit-input">
                <label>Email</label>
                <input type="text" placeholder="email" name="email" />
              </div>
              <div className="user-edit-input">
                <label>Password</label>
                <input type="password" placeholder="password" name="password" />
              </div>
              <div className="user-edit-input">
                <label>Confirm Password</label>
                <input type="password" placeholder="password" name="password" />
              </div>
              <button onClick={() => setModal(!modal)}>수정하기</button>
              {/* 수정하시겠습니까 모달  : */}
              <button>계정 삭제하기</button>
              {/* 삭제하시겠습니까 모달  */}
            </form>
          </div>
        </section>
      ) : null}
    </>
  );
}
