import React from "react";
import "../css/Signup.css";

function SignUpPage() {
  return (
    <>
      <div className="main">
        <section className="signup-container">
          <div className="signupFlex">
            <div className="signup-main">
              <h2 className="title">SIGNUP</h2>
              <form className="signup-form">
                <div className="input-box">
                  <label htmlFor="username">아이디</label>
                  <div className="input-wrapper">
                    <input
                      className="inputlong"
                      type="text"
                      name="username"
                      placeholder="username"
                      required
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
                      required
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
                  ></input>
                </div>
                <div className="input-box">
                  <label>비밀번호 확인</label>
                  <input type="password" placeholder="confirm password"></input>
                </div>
                <button type="submit" className="signup-btn">
                  회원가입
                </button>
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
