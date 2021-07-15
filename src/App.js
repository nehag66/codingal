import React from "react";
import "./App.css";
import Main from "./containers/Main/main";
import Posts from "./containers/Post/posts";
import { Route, Switch } from "react-router-dom";

function App() {
  let routes = (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
    </Switch>
  );
  return <div className="App">{routes}</div>;
}

export default App;
