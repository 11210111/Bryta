import "../css/Actor.css";
import { useState } from "react";
import LoginErrorModal from "./LoginErrorModal";
import { useSelector } from "react-redux";

export default function Actor({ actor }) {
  const isLogin = useSelector((state) => state.auth);
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(!modal);
  };
  const url = window.location.pathname;

  return (
    <div id="actor-container">
      <div className={url === "/mypage" ? "actorimg-crop" : ""}>
        <img
          src={actor && actor?.image}
          alt={actor && actor?.actorName}
          className={url === "/mypage" ? "favActor-image" : "actor-image"}
        />
      </div>
      <div className="actor-name">{actor && actor?.actorName}</div>
      {isLogin ? (
        <button className={url === "/mypage" ? "hide" : "actor-favbtn"}>
          즐겨찾기
        </button>
      ) : (
        <>
          <button
            className={url === "/mypage" ? "hide" : "myfav-btn"}
            onClick={modalHandler}
          >
            즐겨찾기
          </button>
          <LoginErrorModal modal={modal} setModal={setModal} />
        </>
      )}
    </div>
  );
}
