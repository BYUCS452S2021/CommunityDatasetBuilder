import React from "react";
import { useState } from "react";
import Table from "./Components/Table.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { browserHistory, Router, Route } from "react-router";
import ReactDOM from "react-dom";
import Page1 from "./Components/Page1";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Community Dataset Builder!</h1>
      </div>
    );
  }
}
