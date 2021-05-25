import { Link } from "gatsby";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const ButtonRow = ({ text, direction }) => (
  <section className="py-md-10">
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={9} lg={8}>
          <Link
            className="btn w-100 btn-outline-gray-300 d-flex align-items-center"
            to={direction}
          >
            {text && <span className="mx-auto">{text}</span>}
          </Link>
        </Col>
      </Row>
    </Container>
  </section>
);

export default ButtonRow;
