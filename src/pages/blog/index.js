import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container className="py-md-11">
          <Row>
            <Col>
              <h1 className="mb-0">
                Latest <span className="text-primary">Stories</span>
              </h1>
              {/* <p className="mb-3">This is a subtitle</p> */}
              <BlogRoll />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
