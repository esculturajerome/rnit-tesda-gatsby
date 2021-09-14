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
            {/* <p>
              For K12 graduates, ALS Secondary Completers and College
              Undergraduates
            </p> */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>CHECKLIST OF REQUIREMENTS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Medical Certificate from RHU in your Municipality certifying
                    you are not PUM/PUI
                  </td>
                </tr>
                <tr>
                  <td> Photocopy of BIRTH CERTIFICATE</td>
                </tr>
                <tr>
                  <td>Photocopy of HS Card or DIPLOMA or ALS Certificate</td>
                </tr>
                <tr>
                  <td>Recent photo 1x1 I.D picture (4) pcs</td>
                </tr>
              </tbody>
            </Table>
            <p>Only those with complete requirements shall be accommodated</p>
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
