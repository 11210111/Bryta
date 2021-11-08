import React from "react";
import { useState } from "react";
import { EditCheckModal, DelCheckModal } from "./EditCheckModal";
import "../css/EditUserModal.css";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function UserEditModal({ modal, setModal }) {
  const [editModal, setEditModal] = useState(false);
  const [delModal, setDelModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const onChangeValue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      case "confirmPassword":
        return setConfirmPassword(value);
      default:
    }
  };

  const onClickEdit = (e) => {
    e.preventDefault();
    const emailCheck =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*]).{8,16}$/;

    if (email === "" || password === "") {
      setErrMessage("빈칸을 입력하세요");
    } else if (!emailCheck.test(email)) {
      setErrMessage("올바른 이메일 형식이 아닙니다");
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
              <p className="user-edit-modal-text">정보수정</p>
              <div className="user-edit-input">
                <label>이메일</label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  value={email}
                  onChange={onChangeValue}
                />
              </div>
              <div className="user-edit-input">
                <label>비밀번호</label>
                <input
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
                  type="password"
                  placeholder="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onChangeValue}
                />
              </div>

              <button
                type="button"
                onClick={onClickEdit}
                className="user-edit-btn"
              >
                수정하기
              </button>
              <div className="user-input-errMessage">{errMessage}</div>
              <EditCheckModal
                editModal={editModal}
                setEditModal={setEditModal}
                data={{ email, password }}
              />

              <button type="button" onClick={() => setDelModal(!delModal)}>
                계정 삭제하기
              </button>
              <DelCheckModal delModal={delModal} setDelModal={setDelModal} />
              <IoCloseCircleOutline
                style={{ size: "2em" }}
                type="button"
                onClick={() => setModal(!modal)}
              />
            </form>
          </div>
        </section>
      ) : null}
    </>
  );
}
