import React from "react";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import email from "../img/social/email.svg";
import phone from "../img/social/phone-call.svg";
import map from "../img/social/maps-and-flags.svg";
import transparency from "../img/transparencylogo.png";

export default () => {
  return (
    <footer className="py-8 py-md-11 bg-gray-200">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
            <h2 className="text-primary">RNIT</h2>

            <p className="text-gray-700 mb-2">Get in touch</p>

            <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
              <li className=" list-social-item me-3 mb-2">
                <a href="#!" className="text-decoration-none">
                  <img
                    src={map}
                    alt="location"
                    style={{ width: "1em", height: "1em", marginRight: "4px" }}
                  />
                  <span>Poblacion, Alcantara, Romblon</span>
                </a>
              </li>
              <li className=" list-social-item me-3 mb-2">
                <a
                  href="mailto:ant@tesda.gov.ph"
                  className="text-decoration-none"
                >
                  <img
                    src={email}
                    alt="email"
                    style={{ width: "1em", height: "1em", marginRight: "4px" }}
                  />
                  <span>ant@tesda.gov.ph</span>
                </a>
              </li>
              <li className=" list-social-item me-3 mb-2">
                <a href="tel:09985731845" className="text-decoration-none">
                  <img
                    src={phone}
                    alt="phone"
                    style={{ width: "1em", height: "1em", marginRight: "4px" }}
                  />
                  <span>09985731845</span>
                </a>
              </li>
              <li className=" list-social-item me-3 mb-2">
                <a href="tel:09487705807" className="text-decoration-none">
                  <img
                    src={phone}
                    alt="phone"
                    style={{ width: "1em", height: "1em", marginRight: "4px" }}
                  />
                  <span>09487705807</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-8 col-lg-8">
            <img src={transparency} alt="Transparency Logo" />
            <p className="text-muted pt-3">
              A Transparency Seal, prominently displayed on the main page of the
              website of a particular government agency, is a certificate that
              it has complied with the requirements of Section 93. This Seal
              links to a page within the agency’s website which contains an
              index of downloadable items of each of the above-mentioned
              documents.
            </p>
          </div>
        </div>
      </div>
    </footer>
    /*     
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer> */
  );
};
