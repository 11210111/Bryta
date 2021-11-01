import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import LoginErrorModal from "./LoginErrorModal";
import "../css/Nav.css";

function Nav({ isLogin }) {
  const [searchInput, setSearchInput] = useState("");
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };
  const searchInputHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <header>
      <nav className="nav">
        <Link to="/">
          <div className="nav-logo">
            <img
              className="logo-img"
              alt="icon"
              src={process.env.PUBLIC_URL + "/icon192.png"}
            />
            <span className="logo-text">Bryta</span>
          </div>
        </Link>
        <div className="nav-search">
          <input
            type="text"
            placeholder="  배우를 검색해주세요."
            onChange={(e) => searchInputHandler(e)}
          />
          <Link to={{ pathname: "/search", state: { value: { searchInput } } }}>
            <BiSearch className="nav-search-icon" />
          </Link>
        </div>
        {isLogin ? (
          //로그인상태
          <div className="nav-right">
            <Link to="/mypage">
              <div className="nav-mypage">mypage</div>
            </Link>
            <div className="nav-logout">logout</div>
          </div>
        ) : (
          //로그아웃상태
          <div className="nav-right">
            <div className="nav-mypage" onClick={modalHandler}>
              mypage
            </div>
            <LoginErrorModal modal={modal} setModal={setModal} />
            <Link to="/login">
              <div className="nav-login">login</div>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Nav;
