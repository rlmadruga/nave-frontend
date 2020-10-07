import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Update from "../pages/Update";
import { auth } from "../api/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/create" component={Create} />
        <PrivateRoute path="/update/:id" component={Update} />
      </Switch>
    </Router>
  );
}
