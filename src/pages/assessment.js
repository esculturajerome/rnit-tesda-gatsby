import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

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
            <h2 className="text-center text-md-start">
              Requirements for Enrolment
            </h2>
            <p>
              Those who are interested to take the assessment in the different
              qualifications offered by the TESDA Administered School
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
                  <td>1. Duly accomplished Application Form (1 original)</td>
                  <td>Applicant </td>
                </tr>
                <tr>
                  <td>2. Self-Assessment Guide</td>
                  <td>Office of the Administrator/CAC Processing Officer</td>
                </tr>
                <tr>
                  <td>
                    3. Picture, passport size, white background with collar (2
                    copies){" "}
                  </td>
                  <td>Applicant</td>
                </tr>
                <tr>
                  <td>4. Birth Certificate (1 photocopy)</td>
                  <td>Philippine Statistics Authority</td>
                </tr>
                <tr>
                  <td>5. Employment Certificate (1 original)</td>
                  <td>Company</td>
                </tr>
                <tr>
                  <td>6. Training Certificate (1 photocopy)</td>
                  <td>Training Center Attended</td>
                </tr>
              </tbody>
            </Table>

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
