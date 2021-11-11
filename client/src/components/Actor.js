import "../css/Actor.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import LoginErrorModal from "./LoginErrorModal";
import ActorCheckModal from "./ActorCheckModal";
import { addFavorite } from "../features/favoriteSlice";

export default function Actor({ getId, actor }) {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth);
  const isFavorite = useSelector((state) => state.favorite);
  const url = window.location.pathname;
  const actorId = actor?.id;
  const [modal, setModal] = useState(false);
  const [checkModal, setCheckModal] = useState(false);

  const payload = {
    actorId,
    actor: { id: actor?.id, actorName: actor?.actorName, image: actor?.image },
  };

  const actorClick = () => {
    getId(actorId);
  };

  const checkFavorite = (id) => {
    if (isFavorite && isFavorite.find((favorite) => favorite.actorId === id)) {
      return true;
    } else return false;
  };
  const [emptyHeart, setEmptyHeart] = useState(!checkFavorite(actorId));

  const favoriteHandler = async (e) => {
    e.preventDefault();
    if (!isLogin) {
      setModal(!modal);
    } else {
      // emptyHeart
      // ? await dispatch(addFavorite({ isLogin, payload })).unwrap()
      // : await dispatch(delFavorite({ isLogin, payload })).unwrap();
      // setCheckModal(!checkModal);
      if (emptyHeart) {
        await dispatch(addFavorite({ isLogin, payload })).unwrap();
        setEmptyHeart((heart) => !heart);
      } else {
        setCheckModal(!checkModal);
        // await dispatch(delFavorite({ isLogin, payload })).unwrap();
        setEmptyHeart((heart) => !heart);
      }
    }
  };

  return (
    <div id="actor-container" onClick={url === "/mypage" ? actorClick : null}>
      <div className={url === "/mypage" ? "actorimg-crop" : ""}>
        <img
          src={(actor && actor?.image) || actor?.actorImage}
          alt={actor && actor?.actorName}
          className={url === "/mypage" ? "favActor-image" : "actor-image"}
        />
      </div>
      <div className="actor-name">{actor && actor?.actorName}</div>
      {emptyHeart ? (
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
      <ActorCheckModal
        checkModal={checkModal}
        payload={payload}
        setCheckModal={setCheckModal}
      />

      <LoginErrorModal
        setEmptyHeart={setEmptyHeart}
        modal={modal}
        setModal={setModal}
      />
    </div>
  );
}
