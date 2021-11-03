import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
/*** Components ***/
import Nav from "./components/Nav";
import MainPage from "./pages/Mainpages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import Loading from "./pages/LoadingPage";
import Detail from "./pages/Detail";
import Board from "./pages/Board";
import Request from "./pages/Request";
import MyPage from "./pages/MyPage";

function App() {
  const [loader, setLoader] = useState(true);
  const [userInfo, setUserInfo] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    AOS.init();
    if (window.sessionStorage.getItem("accessToken")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    console.log(isLogin);
    setTimeout(() => setLoader(false), 1000);
  }, []);

  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <header>
            <Nav />
          </header>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/login">
              <LoginPage userInfo={userInfo} setUserInfo={setUserInfo} />
            </Route>
            <Route exact path="/signup">
              <SignUpPage />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/board">
              <Board />
            </Route>
            <Route path="/request">
              <Request />
            </Route>
            <Route path="/mypage">
              <MyPage />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
