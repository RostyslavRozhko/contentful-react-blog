import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Header from "./Header";
import List from "../routes/List.js";
import Article from "../routes/Article";
import ReadLater from "../routes/ReadLater";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/readlater" component={ReadLater} />
          <Route path="/:id" component={Article} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
