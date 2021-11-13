import React from "react";
import { useState } from "react";
import { EditCheckModal, DelCheckModal } from "./EditCheckModal";
import "../css/EditUserModal.css";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function UserEditModal({ modal, setModal }) {
  const [editModal, setEditModal] = useState(false);
  const [delModal, setDelModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const onChangeValue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "username":
        return setUsername(value);
      case "password":
        return setPassword(value);
      case "confirmPassword":
        return setConfirmPassword(value);
      default:
    }
  };

  const onClickEdit = (e) => {
    e.preventDefault();
    const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*]).{8,16}$/;

    if (username === "" || password === "") {
      setErrMessage("빈칸을 입력하세요");
    } else if (!passwordCheck.test(password)) {
      setErrMessage("8~16자의 영문 소문자, 숫자, 특수문자를 사용해주세요.");
    } else if (password !== confirmPassword) {
      setErrMessage("비밀번호가 맞지 않습니다.");
    } else {
      setEditModal(!editModal);
    }
  };

  return (
    <>
      {modal ? (
        <section className="user-edit-modal-section">
          <div className="user-edit-modal-container">
            <form className="user-edit-form">
              <div className="user-modal-close">
                <DelCheckModal delModal={delModal} setDelModal={setDelModal} />

                <IoCloseCircleOutline
                  style={{ size: "2em" }}
                  type="button"
                  onClick={() => setModal(!modal)}
                />
              </div>
              <p className="user-edit-modal-text">정보수정</p>
              <div className="user-edit-container">
                <div className="user-edit-input">
                  <label>아이디</label>
                  <input
                    className="user-edit-write"
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={onChangeValue}
                  />
                </div>
                <div className="user-edit-input">
                  <label>비밀번호</label>
                  <input
                    className="user-edit-write"
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={onChangeValue}
                  />
                </div>
                <div className="user-edit-input">
                  <label>비밀번호 확인</label>
                  <input
                    className="user-edit-write"
                    type="password"
                    placeholder="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onChangeValue}
                  />
                </div>
              </div>

              <div className="user-btn-lap">
                <button
                  type="button"
                  onClick={onClickEdit}
                  className="user-edit-btn"
                >
                  수정하기
                </button>

                <EditCheckModal
                  editModal={editModal}
                  setEditModal={setEditModal}
                  data={{ username, password }}
                  setModal={setModal}
                />

                <button
                  className="user-edit-delete-btn"
                  type="button"
                  onClick={() => setDelModal(!delModal)}
                >
                  계정 삭제하기
                </button>
              </div>
              <div className="user-input-errMessage">{errMessage}</div>
            </form>
          </div>
        </section>
      ) : null}
    </>
  );
}
