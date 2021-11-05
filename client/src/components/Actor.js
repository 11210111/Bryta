import "../css/Actor.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import LoginErrorModal from "./LoginErrorModal";
import { addFavorite, delFavorite } from "../features/API/favoriteAPI";

export default function Actor({ actor }) {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth);
  const isFavorite = useSelector((state) => state.favorite);
  const url = window.location.pathname;
  const actorId = actor?.id;
  const payload = {
    actorId,
    actor: { actorName: actor?.actorName, image: actor?.image },
  };
  const [modal, setModal] = useState(false);

  const checkFavorite = (id) => {
    return isFavorite.filter((favorite) => favorite.actorId === id);
  };
  const favoriteHandler = async (e) => {
    e.preventDefault();
    if (!isLogin) {
      setModal(!modal);
    } else {
      if (!checkFavorite(actorId).length) {
        await dispatch(addFavorite({ isLogin, payload })).unwrap();
      } else if (checkFavorite(actorId).length >= 1) {
        await dispatch(delFavorite({ isLogin, payload })).unwrap();
      }
    }
  };
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
      {!checkFavorite(actorId).length ? (
        <FaRegHeart
          className={url === "/search" ? "hide" : "myfav-btn emptyHeart"}
          onClick={favoriteHandler}
        />
      ) : (
        <FaHeart
          className={url === "/search" ? "hide" : "myfav-btn fullHeart"}
          onClick={favoriteHandler}
        />
      )}

      <LoginErrorModal modal={modal} setModal={setModal} />
    </div>
  );
}
