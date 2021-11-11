import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiSearch } from "react-icons/bi";
import "../css/Nav.css";
import LoginErrorModal from "./LoginErrorModal";
import { logout } from "../features/authSlice";

function Nav() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth);

  const [searchInput, setSearchInput] = useState("");
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(!modal);
  };

  // const onKeyHandler = (e) => {
  //   if (e.key === "Enter") {
  //     searchInputHandler(e);
  //   }
  // };
  const searchInputHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const logoutHandler = async () => {
    await dispatch(logout(isLogin)).unwrap();
    history.push("/");
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
            // onKeyPress={(e) =>
            //   e.key === "Enter" ? searchInputHandler(e) : null
            // }
          />
          <Link
            to={{
              pathname: "/search",
              state: { value: { searchInput } },
            }}
          >
            <BiSearch className="nav-search-icon" />
          </Link>
        </div>
        {isLogin ? (
          <div className="nav-right">
            <Link to="/board">게시판</Link>
            <Link to="/mypage">
              <div className="nav-mypage">mypage</div>
            </Link>
            <div className="nav-logout" onClick={logoutHandler}>
              logout
            </div>
          </div>
        ) : (
          <div className="nav-right">
            <Link to="/board">게시판</Link>
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
