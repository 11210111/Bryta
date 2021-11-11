import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./Router";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainPage from "./pages/Mainpages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import Loading from "./pages/LoadingPage";
import Detail from "./pages/Detail";
import Board from "./pages/Board";
import Request from "./pages/Request";
import MyPage from "./pages/MyPage";
import Search from "./pages/Search";
import SearchError from "./pages/SearchError";
import Error from "./pages/Error";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    AOS.init();
    setTimeout(() => setLoader(false), 500);
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
            <Route component={MainPage} path="/" exact />
            <PublicRoute component={LoginPage} path="/login" />
            <PublicRoute component={SignUpPage} path="/signup" />
            <Route component={Search} path="/search" />
            <Route component={SearchError} path="/searcherror" />
            <Route component={Detail} path="/detail/:id" />
            <Route component={Board} path="/board" />
            <PrivateRoute component={Request} path="/request" />
            <PrivateRoute component={MyPage} path="/mypage" />
            <Route component={Error} />
          </Switch>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
