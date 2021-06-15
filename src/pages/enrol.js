import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Layout from "../components/Layout";

import JotformEmbed from "react-jotform-embed";

const OnlineEnrolment = () => {
  return (
    <Layout>
      <Container>
        <Row className="mb-5">
          <Col
            xs={{ span: 12, order: 2 }}
            md={{ span: 5, order: 1 }}
            lg={{ span: 5, order: 1 }}
            className="mt-5 pt-5"
          >
            <h2 className="text-center text-md-start">
              Requirements for Enrolment
            </h2>
            <ul className="mt-5">
              <li>Birth Certificate (Photo copy)</li>
              <li>HS Card / Diploma</li>
              <li>Good Moral Character - NCAE / Aptitude Test</li>
              <li>Brgy. Clearance</li>
              <li>Medical Certificate</li>
              <li>Police Clearance</li>
              <li>
                Recent photo 4pcs 1x1 ID <br /> Only those with complete
                requirements <br /> shall be accommodated
              </li>
            </ul>
            <button
              className="btn mt-5 btn-primary d-flex align-items-center "
              type="submit"
            >
              <span className="mx-auto">Download Enrolment Form</span>
            </button>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 7, order: 2 }}
            lg={{ span: 7, order: 2 }}
            className="mb-3 "
          >
            <JotformEmbed
              src="https://form.jotform.com/201838122431042"
              scrolling="true"
            />
            {/* <div>
          <PreviewCompatibleImage imageInfo={image} />
        </div> */}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default OnlineEnrolment;
