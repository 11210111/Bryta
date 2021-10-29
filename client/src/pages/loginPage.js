import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import KakaoLogin from "../components/kakao";

function LoginPage() {
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
    if (username === "" || password === "") {
      setErrMessage("빈칸을 입력하세요");
    } else {
      const url = "http://localhost:8080/auth/login";
      await axios
        .post(
          url,
          {
            username,
            password,
          },
          {
            "Content-Type": "application/json",
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res.data);
          window.sessionStorage.setItem("token", res.data.accessToken);
          console.log(sessionStorage);
          // window.location.replace("/");
        });
    }
  };

  return (
    <div className="main">
      <section className="login-container">
        <div className="loginFlex">
          <div className="login-main">
            <h2 className="title">LOGIN</h2>
            <form className="login-form">
              <div className="login-input">
                <label>아이디</label>
                <input
                  type="text"
                  placeholder="username"
                  onChange={onChangeLoginState}
                  name="username"
                  value={username}
                ></input>
              </div>
              <div className="login-input">
                <label>비밀번호</label>
                <input
                  type="password"
                  placeholder="password"
                  onChange={onChangeLoginState}
                  name="password"
                  value={password}
                ></input>
              </div>
              <button
                type="submit"
                className="login-btn"
                onClick={onClickLogin}
              >
                로그인
              </button>
              {errMessage ? (
                <div className="errMessage">{errMessage}</div>
              ) : null}
            </form>
            <Link to="/signup">
              <div>회원가입</div>
            </Link>
            <div>
              <button>구글 로그인</button>
              <KakaoLogin />
            </div>
          </div>
          <aside className="login-aside">
            <img src="https://img.insight.co.kr/static/2018/04/04/700/y1hkxoxpwxamps14n7b5.jpg"></img>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
