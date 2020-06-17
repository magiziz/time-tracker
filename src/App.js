import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./components/Home";
import { Route, NavLink, Switch } from "react-router-dom";
import "./scss/stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/TimerCount.css";
import Tracker from "./components/Tracker";
import Signup from "./components/Signup";
import Login from "./components/LoginPage";
class componentName extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="white" expand="lg">
          <div className="container homeSection">
            <NavLink to="/">
              <Navbar.Brand className="navText">Time Tracker</Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto" />
              <Nav>
                <NavLink to="/">
                  <button className="btn homeBtn">Home</button>
                </NavLink>
                <NavLink to="/tracker">
                  <button className="btn btnNav">Go To Tracker</button>
                </NavLink>
                <NavLink to="/Login">
                  <button className="btn btnNav">Log in</button>
                </NavLink>
                <NavLink to="/Signup">
                  <button className="btn btnNav">Sign Up</button>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tracker" component={Tracker} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default componentName;
