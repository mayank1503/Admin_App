import React from "react";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import "./styles.css";
import Home from "./components/Home";
export default function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route
        path="/home"
        render={(props) => <Home display={true} {...props} />}
      />
      <Redirect to="/login" />
    </Switch>
  );
}
