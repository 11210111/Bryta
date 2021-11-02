import "../css/Actor.css";
import { useState } from "react";
import LoginErrorModal from "./LoginErrorModal";
export default function Actor({ actor, isLogin }) {
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(!modal);
  };
  return (
    <div id="actor-container">
      <img
        src={actor && actor?.image}
        alt={actor && actor?.actorName}
        className="actor-image"
      />
      <div className="actor-name">{actor && actor?.actorName}</div>
      {isLogin ? (
        <button className="actor-favbtn">즐겨찾기</button>
      ) : (
        <>
          <button className="actor-favbtn" onClick={modalHandler}>
            즐겨찾기
          </button>
          <LoginErrorModal modal={modal} setModal={setModal} />
        </>
      )}
    </div>
  );
}
