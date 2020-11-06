import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import VerifyPage from "./VerifyPage";
import AnnouncementPage from "./AnnouncementPage";
import AnnouncementAddPage from "./AnnouncementAddPage";
import AnnouncementEditPage from "./AnnouncementEditPage";
import EventPage from "./EventPage";
import EventAddPage from "./EventAddPage";

import SchedulePage from "./SchedulePage";
import MedicinePage from "./MedicinePage";

const MainRoute = () => {
  return (
    // <Router>
    <Switch>
      {/* <Route path="/success" component={SuccessPage} /> */}
      <Route path="/verify" component={VerifyPage} />
      <Route exact path="/announcement" component={AnnouncementPage} />
      <Route exact path="/event" component={EventPage} />
      <Route exact path="/schedule" component={SchedulePage} />
      <Route exact path="/medicine" component={MedicinePage} />

      <Route exact path="/announcement/add" component={AnnouncementAddPage} />
      <Route
        // path="/announcement/:announcementId?/edit"
        exact
        path="/announcement/edit"
        component={AnnouncementEditPage}
      />
      <Route exact path="/event/add" component={EventAddPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
    // </Router>
  );
};

const HomePage = () => (
  <Fragment>
    <LandingPage />
    <SignUpPage />
  </Fragment>
);

export default MainRoute;
