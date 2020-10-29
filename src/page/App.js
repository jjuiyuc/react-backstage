import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainRoute from "./main";

//component
import { Navbar } from "@component";
import { MainContent } from "@component";
// import { Footer } from "@component";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MainContent>
          <Switch>
            <Route path="/" component={MainRoute} />
          </Switch>
        </MainContent>
        {/* <Footer /> */}
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
