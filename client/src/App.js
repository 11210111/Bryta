import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "../src/components/Nav";
import MainPage from "../src/pages/MainPage";

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
