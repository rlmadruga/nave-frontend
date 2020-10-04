import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}
