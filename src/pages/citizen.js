import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

import Layout from "../components/Layout";

const CitizenCharter = () => {
  return (
    <Layout>
      <Container>
        <Row className="mb-5">
          <Col className="mt-5 pt-5">
            <h2 className="text-center text-md-start">
              Download Citizen's Charter PDF
            </h2>
            <a
              className="btn btn-primary align-items-center"
              href={`/files/citizens-charter.pdf`}
              download
            >
              <span className="mx-auto">Download</span>
            </a>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default CitizenCharter;
