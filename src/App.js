import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SiderDemo from "./components/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Register from "./components/Register";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <SiderDemo />
        </Router>
      </div>
    );
  }
}

export default App;
