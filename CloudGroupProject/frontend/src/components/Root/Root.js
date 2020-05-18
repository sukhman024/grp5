import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import SignIn from "./SignIn/index";
import SignUp from "./Register/index";
import VisitProfile from "./VisitProfile";
import Profile from "./Profile";
import Group from "./Group";
import Students from "./Students";
import UserDashboard from "../Root/Home/UserDashboard";

const Root = () => {
  return (
    <div>
      <Switch>
        <Route component={About} path="/about" />
        <Route component={Home} path="/Home" />
        <Route component={Profile} path="/Profile" />
        <Route component={Group} path="/Group"/>
        <Route component={Students} path="/Students"/>
        <Route component={UserDashboard} path="/UserDashboard"/>
        <Route component={SignUp} path="/signup" />
        <Route component={SignIn} exact path="/" />
      </Switch>
    </div>
  );
};

export default Root;
