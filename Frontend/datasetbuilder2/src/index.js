import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route
          path="/Data"
          component={(props) => (
            <Page1 timestamp={new Date().toString()} {...props} />
          )}
        />
        <Route path="/Upload" component={Page2} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
