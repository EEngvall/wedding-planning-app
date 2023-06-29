import React from "react";
import { Navbar, Container, Nav, Link } from "react-bootstrap";
import mediumLogo from "../assets/MediumSquareLogo.png";

const WelcomePage = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid className="ms-0 me-0">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          {" "}
          <img
            src={mediumLogo}
            width="80"
            height="80"
            className="d-inline-block align-top me-2"
            alt="ModRoots"
          />
          <span className="fs-4 ms-2">ModRoots</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="mx-3" href="/">
              Home
            </Nav.Link>
            <Nav.Link to="/pricing" className="mx-3" href="/pricing">
              Pricing
            </Nav.Link>
            <Nav.Link to="/booking" className="mx-3" href="/booking">
              Booking
            </Nav.Link>
            <Nav.Link to="/reviews" className="ms-3" href="/reviews">
              Reviews
            </Nav.Link>
            <Nav.Link to="/vendors" className="ms-3" href="/vendors">
              Vendors
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default WelcomePage;
