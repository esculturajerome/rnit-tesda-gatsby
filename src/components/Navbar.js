import React from "react";
import { Link } from "gatsby";
import logo from "../img/RNIT-logo.webp";

import { Navbar, Container, Nav } from "react-bootstrap";

export default () => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" width="80" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link lift" to="/about">
              About
            </Link>
            <Link className="nav-link lift" to="/products">
              Products
            </Link>
            <Link className="nav-link lift" to="/blog">
              Blog
            </Link>
            <Link className="nav-link lift" to="/contact">
              Contact
            </Link>
            <Link className="nav-link lift" to="/contact/examples">
              Form Examples
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>

    // <div className="container">
    //   <div className="navbar-brand">
    //     <Link to="/" className="navbar-item" title="Logo">
    //       <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
    //     </Link>
    //     {/* Hamburger menu */}
    //     <div
    //       className={`navbar-burger burger ${this.state.navBarActiveClass}`}
    //       data-target="navMenu"
    //       onClick={() => this.toggleHamburger()}
    //     >
    //       <span />
    //       <span />
    //       <span />
    //     </div>
    //   </div>
    //   <div
    //     id="navMenu"
    //     className={`navbar-menu ${this.state.navBarActiveClass}`}
    //   >
    //     <div className="navbar-start has-text-centered">
    // <Link className="navbar-item" to="/about">
    //   About
    // </Link>
    // <Link className="navbar-item" to="/products">
    //   Products
    // </Link>
    // <Link className="navbar-item" to="/blog">
    //   Blog
    // </Link>
    // <Link className="navbar-item" to="/contact">
    //   Contact
    // </Link>
    // <Link className="navbar-item" to="/contact/examples">
    //   Form Examples
    // </Link>
    //     </div>

    //   </div>
    // </div>
  );
};
