import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "../src/components/Nav";
import MainPage from "../src/pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <MainPage>Hello World<MainPage/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
