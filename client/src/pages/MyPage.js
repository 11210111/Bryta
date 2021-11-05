import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "../css/MyPage.css";
import EditUserModal from "../components/EditUserModal";
import Actor from "../components/Actor";
import Movie from "../components/Movie";
import { useSelector } from "react-redux";

function Mypage() {
  const history = useHistory();
  const username = useSelector((state) => state.auth.data.username);
  const isFavorite = useSelector((state) => state.favorite);
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };
  return (
    <div className="mypage-container">
      <section className="mypage">
        <div className="mypage-user">
          <div className="mypage-username">
            <h3>{username}</h3>
            <span> 님</span>
          </div>
          <div className="mypage-edituser-btn">
            <button onClick={modalHandler}>정보수정</button>
            <EditUserModal modal={modal} setModal={setModal} />
          </div>
        </div>
        <div className="mypage-favorite">
          <div className="mypage-favActor-container">
            {!isFavorite.length ? (
              <div>좋아하는 배우가 아직 없습니다.</div>
            ) : (
              <ul className="mypage-favActor">
                {isFavorite.map((favorite) => (
                  <li
                    key={Math.random()}
                    onClick={() => history.push(`/detail/${favorite.actorId}`)}
                  >
                    <Actor actor={favorite.actor} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mypage-favActor-movies">
            <div className="mypage-favActor-watched-movies">
              <div>본 영화</div>
              <Movie />
            </div>
            <div className="mypage-favActor-unwatched-movies">
              <div>안 본 영화</div>
              <Movie />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mypage;
