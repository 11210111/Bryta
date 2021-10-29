import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "../src/components/Nav";
import MainPage from "./pages/MainPage";
import LoginPage from "../src/pages/loginPage";
import SignUpPage from "../src/pages/signupPage";
import Detail from "../src/pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
