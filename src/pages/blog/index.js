import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Row className="py-md-11">
            <Col>
              <h1 className="mb-5">
                Latest <span className="text-primary">Stories</span>
              </h1>
              <BlogRoll />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
