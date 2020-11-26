import React from "react";
import "./Navigation.css";
import * as ReactBootStrap from "react-bootstrap";

class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <ReactBootStrap.Navbar.Brand href="/">Tarea 5</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/verCookies">Ver estado del tiempo</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

export default Navigation;
