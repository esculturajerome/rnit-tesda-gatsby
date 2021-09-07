import React from "react";
import { Link } from "gatsby";
import logo from "../img/RNIT-logo.webp";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

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
            <NavDropdown title="Online Services" id="basic-nav-dropdown">
              <Link to="/enrol">
                <div className="dropdown-item">Online Enrolment</div>
              </Link>
              <Link to="/assessment">
                <div className="dropdown-item">Online Assessment</div>
              </Link>
            </NavDropdown>
            <Link className="nav-link lift" to="/blog">
              Blogs
            </Link>
            <Link className="nav-link lift" to="/programs">
              Programs & Services
            </Link>

            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <Link to="/about">
                <div className="dropdown-item">Meet our Team</div>
              </Link>
              <Link to="/about/#org-chart">
                <div className="dropdown-item" href="#action/3.1">
                  Organizational Chart
                </div>
              </Link>
              <NavDropdown.Divider />
              <Link to="/about/#mission">
                <div className="dropdown-item" href="#action/3.1">
                  Mission Statement
                </div>
              </Link>
              <Link to="/about/#vission">
                <div className="dropdown-item" href="#action/3.2">
                  Vision Statement
                </div>
              </Link>
              <Link to="/about/#policy">
                <div className="dropdown-item" href="#action/3.3">
                  Our Philosophy
                </div>
              </Link>
              <Link to="/about/#policy">
                <div className="dropdown-item" href="#action/3.3">
                  Quality Policy
                </div>
              </Link>
              <Link to="/about/#policy">
                <div className="dropdown-item" href="#action/3.4">
                  Values Statement
                </div>
              </Link>
            </NavDropdown>
            <Link className="nav-link lift" to="/contact">
              Contact
            </Link>
            {/* <Link className="nav-link lift" to="/contact/examples">
              Form Examples
            </Link> */}
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
