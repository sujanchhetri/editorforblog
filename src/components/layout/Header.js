import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";

export default () => {
  return (
    <Navbar toggleable="lg" type="dark" variant="light">
      <Navbar.Brand href="#">
        <h1>Editor</h1>
      </Navbar.Brand>

      <Navbar.Toggle target="nav-collapse"></Navbar.Toggle>
    </Navbar>
  );
};
