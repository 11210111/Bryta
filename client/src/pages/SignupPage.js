import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ConfirmSignupModal,
  ConfirmErrorModal,
} from "../components/ConfirmSignupModal";
import { signup } from "../features/authSlice";
import "../css/Signup.css";
import axios from "axios";

function SignUpPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [signupModal, setSignupModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [emailCode, setEmailCode] = useState("");
  const [emailInput, setEmailInput] = useState(false);
  const [isCode, setIsCode] = useState("");
  const [confirm, setConfirm] = useState(true);

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
      case "emailCode":
        return setEmailCode(value);
      default:
    }
  };

  const emailCheck =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  const onClickSignup = async (e) => {
    e.preventDefault();
    try {
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
  const codeHandler = (e) => {
    e.preventDefault();
    if (isCode !== emailCode || !isCode.length) {
      setErrMessage("인증 코드를 확인해주세요.");
    } else {
      setErrMessage("인증이 확인되었습니다.");
      setEmailInput(false);
      setConfirm(false);
    }
  };

  const onClickEmail = async (e) => {
    e.preventDefault();
    if (!email.length || !emailCheck.test(email)) {
      setErrMessage("올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailInput(true);
      await axios
        .post(
          "http://localhost:8080/auth/validateEmail",
          { email: String(email) },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((res) => setIsCode(res.data.data.verificationCode));
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

                <div className="input-email-check">
                  <label htmlFor="email">이메일</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@example.com"
                    value={email}
                    required
                    onChange={onChangeValue}
                  ></input>
                  {confirm ? (
                    <button
                      className="login-email-checkBtn"
                      onClick={onClickEmail}
                    >
                      인증
                    </button>
                  ) : null}
                </div>
                {emailInput ? (
                  <div className="input-email-check">
                    <label htmlFor="text">이메일 인증 코드</label>
                    <input
                      type="text"
                      placeholder="이메일 인증코드를 입력해주세요."
                      onChange={onChangeValue}
                      name="emailCode"
                      value={emailCode}
                    ></input>
                    <button
                      className="login-email-checkBtn"
                      onClick={codeHandler}
                    >
                      확인
                    </button>
                  </div>
                ) : null}
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
