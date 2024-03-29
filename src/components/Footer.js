import React from "react";

import email from "../img/social/email.svg";
import phone from "../img/social/phone-call.svg";
import map from "../img/social/maps-and-flags.svg";
import { graphql, Link, useStaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "transparencylogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <footer className="py-8 py-md-11 bg-gray-200">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
            <Link to="/">
              <h2 className="text-primary mb-0">
                <b>RNIT</b>
              </h2>
            </Link>

            <p className="text-gray-700 mb-4">
              Skilling Romblon thru quality TVET Delivery for Peoples
              Prosperity.
            </p>

            <ul className="list-unstyled list-inline list-social mb-4">
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
              <li className="mt-5">
                <h6>Copyright © 2022 RNIT</h6>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-8 col-lg-8">
            <PreviewCompatibleImage imageInfo={data.file} />
            <p className="pt-3">
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
  );
};

export default Footer;
