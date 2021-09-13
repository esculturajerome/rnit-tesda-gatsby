import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const Transparency = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Row className="mb-5">
          <Col className="mt-5 pt-5">
            <Img fluid={data.file.childImageSharp.fluid} />
            <h2 className="text-center text-md-start mt-3">Symbolism</h2>
            <p>
              A pearl buried inside a tightly-shut shell is practically
              worthless. Government information is a pearl, meant to be shared
              with the public in order to maximize its inherent value. The
              Transparency Seal, depicted by a pearl shining out of an open
              shell, is a symbol of a policy shift towards openness in access to
              government information. On the one hand, it hopes to inspire
              Filipinos in the civil service to be more open to citizen
              engagement; on the other, to invite the Filipino citizenry to
              exercise their right to participate in governance.
            </p>
            <p>
              This initiative is envisioned as a step in the right direction
              towards solidifying the position of the Philippines as the Pearl
              of the Orient – a shining example for democratic virtue in the
              region.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "TRANSPARENCY_SEAL.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2040, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;

export default Transparency;
