import React from "react";
import { useHistory } from "react-router";
import "../css/EditCheckModal.css";
import { logout } from "../features/API/authAPI";
import { useSelector, useDispatch } from "react-redux";
import { deleteInfo, editInfo } from "../features/API/userAPI";

export function EditCheckModal({ editModal, setEditModal, data }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth);
  const payload = {
    id: isLogin.data.id,
    email: data.email,
    username: isLogin.data.username,
  };

  const editHandler = async (e) => {
    if (isLogin.email !== payload.email) {
      const password = data.password;
      await dispatch(editInfo({ isLogin, payload, password })).unwrap();
    } else {
      history.push("/mypage");
    }
  };
  return (
    <>
      {editModal ? (
        <section className="edit-check-modal-section">
          <div className="edit-check-modal-container">
            <div className="edit-check-modal-message">수정하시겠습니까?</div>
            <div className="edit-check-modal-btns">
              <button className="edit-check-ok" onClick={editHandler}>
                확인
              </button>
              <button
                className="edit-check-no"
                onClick={() => setEditModal(!editModal)}
              >
                취소
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export function DelCheckModal({ delModal, setDelModal }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth);

  const deleteHandler = async (e) => {
    if (isLogin) {
      Promise.all([
        dispatch(deleteInfo(isLogin)).unwrap(),
        dispatch(logout(isLogin)).unwrap(),
      ]);
    }
    history.replace("/");
  };

  return (
    <>
      {delModal ? (
        <section className="edit-check-modal-section">
          <div className="edit-check-modal-container">
            <div className="edit-check-modal-message">삭제하시겠습니까?</div>
            <div className="edit-check-modal-btns">
              <button className="edit-check-ok" onClick={deleteHandler}>
                확인
              </button>
              <button
                className="edit-check-no"
                onClick={() => setDelModal(!delModal)}
              >
                취소
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
