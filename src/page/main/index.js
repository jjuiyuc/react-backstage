import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import VerifyPage from "./VerifyPage";
import AnnouncementPage from "./AnnouncementPage";

const MainRoute = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/success" component={SuccessPage} /> */}
        <Route path="/verify" component={VerifyPage} />
        <Route path="/announcement" component={AnnouncementPage} />
        {/* <Route path="/incomplete" component={IncompletePage} /> */}
        {/* <Route path="/recovery/password" component={RecoveryPasswordPage} /> */}
        {/* <Route path="/recovery" component={RecoveryPage} /> */}
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

const HomePage = () => (
  <Fragment>
    <LandingPage />
    <SignUpPage />
  </Fragment>
);

export default MainRoute;
