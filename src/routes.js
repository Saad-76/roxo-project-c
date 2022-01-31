import React from "react";
import HomePage from "./HomePage/homePage";
import Login from "./HomePage/login"
import SignUp from "./HomePage/signUp"

import Dashboard from "./Dashboard/dashboard";
import NftDashboard from "./NFT-Dashboard/nftDashboard"

import { BrowserRouter as Router, Route, Redirect ,Switch} from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/homepage" component={HomePage}>
          <HomePage />
        </Route>
        <Route path="/signUp" component={SignUp}>
          <SignUp />
        </Route>
        <Route path="/login" component={Login}>
          <Login />
        </Route>
        {/* -----------------Private-------- */}
        <Route path="/dashboard" component={Dashboard}>
          <Dashboard />
        </Route>
        <Route path="/nftdashboard" component={NftDashboard}>
          <NftDashboard />
        </Route>
        <Redirect  to="/homepage" />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
