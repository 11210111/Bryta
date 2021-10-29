function SignUpPage() {
  return (
    <div className="main">
      <section className="signup-container">
        <div className="signupFlex">
          <div className="signup-main">
            <h2 className="title">SIGNUP</h2>
            <form className="signup-form">
              <div className="signup-input">
                <label>아이디</label>
                <input type="text" placeholder="username"></input>
              </div>
              <div className="signup-input">
                <label>이메일</label>
                <input type="email"></input>
              </div>
              <div className="signup-input">
                <label>비밀번호</label>
                <input type="password" placeholder="password"></input>
              </div>
              <div className="signup-input">
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
              src="https://img.insight.co.kr/static/2018/04/04/700/y1hkxoxpwxamps14n7b5.jpg"
              alt=""
            ></img>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default SignUpPage;
