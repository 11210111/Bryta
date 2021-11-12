import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ConfirmSignupModal,
  ConfirmErrorModal,
} from "../components/ConfirmSignupModal";
import { signup } from "../features/authSlice";
import "../css/Signup.css";

function SignUpPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [signupModal, setSignupModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const onChangeValue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "email":
        return setEmail(value);
      case "username":
        return setUsername(value);
      case "password":
        return setPassword(value);
      case "confirmPassword":
        return setConfirmPassword(value);
      default:
    }
  };

  const onClickSignup = async (e) => {
    e.preventDefault();
    try {
      const emailCheck =
        /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*]).{8,16}$/;
      if (email === "" || password === "") {
        setErrMessage("빈칸을 입력하세요");
      } else if (!emailCheck.test(email)) {
        setErrMessage("올바른 이메일 형식이 아닙니다");
      } else if (!passwordCheck.test(password)) {
        setErrMessage("8~16자의 영문 소문자, 숫자, 특수문자를 사용해주세요.");
      } else if (password !== confirmPassword) {
        setErrMessage("비밀번호가 맞지 않습니다.");
      } else {
        setErrMessage("");
        await dispatch(signup({ username, email, password })).unwrap();
        setSignupModal(!signupModal);
      }
    } catch (err) {
      setErrorModal(!errorModal);
    }
  };
  return (
    <>
      <div className="main">
        <section className="signup-container">
          <div className="signupFlex">
            <div className="signup-main">
              <h2 className="title">SIGNUP</h2>
              <form className="signup-form" onSubmit={onClickSignup}>
                <div className="input-box">
                  <label htmlFor="username">아이디</label>
                  <div className="input-wrapper">
                    <input
                      className="inputlong"
                      type="text"
                      name="username"
                      placeholder="username"
                      required
                      value={username}
                      onChange={onChangeValue}
                    ></input>
                  </div>
                </div>
                <div className="input-box">
                  <label htmlFor="email">이메일</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      name="email"
                      placeholder="example@example.com"
                      value={email}
                      required
                      onChange={onChangeValue}
                    ></input>
                  </div>
                </div>
                <div className="input-box">
                  <label htmlFor="password">비밀번호</label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                    value={password}
                    onChange={onChangeValue}
                  ></input>
                </div>
                <div className="input-box">
                  <label>비밀번호 확인</label>
                  <input
                    type="password"
                    placeholder="confirm password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onChangeValue}
                  ></input>
                </div>
                <div className="signup-error">{errMessage}</div>
                <button type="submit" className="signup-btn">
                  회원가입
                </button>
                {signupModal ? (
                  <ConfirmSignupModal
                    signupModal={signupModal}
                    setSignupModal={setSignupModal}
                  />
                ) : (
                  <ConfirmErrorModal
                    errorModal={errorModal}
                    setErrorModal={setErrorModal}
                  />
                )}
              </form>
            </div>
            <aside className="login-aside">
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2059&q=80"
                alt=""
              ></img>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}

export default SignUpPage;
