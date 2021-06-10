import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand href="#home">Community Dataset Builder</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Data">
              <Nav.Link>Data</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Upload">
              <Nav.Link>Upload</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
