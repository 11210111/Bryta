import React, { useState } from "react";
import { Link } from "react-router-dom";
import KakaoLogin from "../components/Kakao";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import "../css/LoginPage.css";

function LoginPage({ userInfo, setUserInfo }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const onChangeLoginState = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        return setUsername(value);
      case "password":
        return setPassword(value);
      default:
    }
  };

  const onClickLogin = async (e) => {
    e.preventDefault();
    try {
      if (username === "" || password === "") {
        setErrMessage("빈칸을 입력하세요");
      } else {
        await dispatch(login({ username, password })).unwrap();
        window.location.replace("/");
      }
    } catch (err) {
      setErrMessage("아이디, 비밀번호를 확인해주세요.");
    }
  };

  return (
    <>
      <section className="login-container">
        <div className="loginFlex">
          <aside className="login-aside">
            <img
              src="https://images.unsplash.com/photo-1608871633488-65ae24f795d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2231&q=80"
              alt=""
            />
          </aside>
          <div className="login-main">
            <h2 className="title">LOGIN</h2>
            <form className="login-form">
              <div className="login-input">
                <label htmlFor="username">아이디</label>
                <input
                  type="text"
                  placeholder="username"
                  onChange={onChangeLoginState}
                  name="username"
                  required
                  value={username}
                />
              </div>
              <div className="login-input">
                <label htmlFor="password">비밀번호</label>
                <input
                  type="password"
                  placeholder="password"
                  onChange={onChangeLoginState}
                  name="password"
                  required
                  value={password}
                />
              </div>
              <button
                type="submit"
                className="login-btn"
                onClick={onClickLogin}
              >
                로그인
              </button>
              {errMessage ? (
                <div className="login-errMessage">{errMessage}</div>
              ) : null}
            </form>
            <div className="signup-path">
              <Link to="/signup">회원가입</Link>
            </div>

            <div className="login-oauth">
              <KakaoLogin className="kakaoOauth" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
