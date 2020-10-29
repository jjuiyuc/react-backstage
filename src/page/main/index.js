import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import VerifyPage from "./VerifyPage";
import AnnouncementPage from "./AnnouncementPage";
import AnnouncementAddPage from "./AnnouncementAddPage";
import AnnouncementEditPage from "./AnnouncementEditPage";

const MainRoute = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/success" component={SuccessPage} /> */}
        <Route path="/verify" component={VerifyPage} />
        <Route exact path="/announcement" component={AnnouncementPage} />
        <Route exact path="/announcement/add" component={AnnouncementAddPage} />
        <Route
          // path="/announcement/:announcementId?/edit"
          path="/announcement/edit"
          component={AnnouncementEditPage}
        />
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
