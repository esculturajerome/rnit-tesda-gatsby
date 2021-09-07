import React from "react";
import { Accordion, Col, Container, Row, Table } from "react-bootstrap";

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
            <p>
              For K12 graduates, ALS Secondary Completers and College
              Undergraduates
            </p>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>CHECKLIST OF REQUIREMENTS</th>
                  <th>WHERE TO SECURE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Learner’s Profile / Enrolment Form (1 original)</td>
                  <td>Registrar’s Office </td>
                </tr>
                <tr>
                  <td>2. Birth Certificate (1 authenticated copy)</td>
                  <td>Philippine Statistics Authority</td>
                </tr>
                <tr>
                  <td>3. Transcript of Records (TOR) (1 photocopy)</td>
                  <td>Last School Attended</td>
                </tr>
                <tr>
                  <td>4. Form 138 (1 photocopy)</td>
                  <td>Last School Attended</td>
                </tr>
                <tr>
                  <td>5. Barangay Clearance (1 original)</td>
                  <td>Barangay Government Office</td>
                </tr>
                <tr>
                  <td>6. Medical Certificate (1 original)</td>
                  <td>Government Hospital</td>
                </tr>
              </tbody>
            </Table>

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
