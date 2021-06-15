import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Layout from "../components/Layout";

import JotformEmbed from "react-jotform-embed";

const OnlineAssessment = () => {
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
            <h3 className="text-center text-md-start">
              Requirements for Regular Student
            </h3>
            <ul className="mt-3">
              <li>
                3 pcs ID Picture <br />
                (Passport size ID with white background and collar)
              </li>
            </ul>
            <h3 className="text-center text-md-start mt-5">
              Requirements for Walk-in Applicant
            </h3>
            <ul className="mt-3">
              <li>Certificate of Employment</li>
              <li>
                3 pcs ID Picture <br />
                (Passport size ID with white background and collar) ​
              </li>
            </ul>
            <button
              className="btn mt-5 btn-primary d-flex align-items-center "
              type="submit"
            >
              <span className="mx-auto">Download Assessment Form</span>
            </button>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 7, order: 2 }}
            lg={{ span: 7, order: 2 }}
            className="mb-3 "
          >
            <JotformEmbed
              src="https://form.jotform.com/202118431802039"
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

export default OnlineAssessment;
