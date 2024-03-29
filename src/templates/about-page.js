import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from "../components/Gallery";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import FullWidthText from "../components/FullWidthText";

export const AboutPageTemplate = ({ title, desc, image, preview }) => {
  return (
    <>
      <div className="bg-blue">
        <Container className="py-md-11">
          <Row>
            <Col md={4} className="d-flex  justify-content-center goal-title">
              <h1>{title}</h1>
              <p className="lead mb-7 mb-md-9">{desc}</p>
            </Col>
            <Col md={8}>
              {!preview ? (
                <Gallery />
              ) : (
                <p className="text-center italic">Team Gallery here</p>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-5" id="org-chart">
        <Row>
          <h2 className="display-4 mb-4 text-center">Organizational Chart</h2>
        </Row>
      </Container>
      <Row>
        <PreviewCompatibleImage imageInfo={image} />
      </Row>
    </>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  desc: PropTypes.string,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        desc={post.frontmatter.description}
        image={post.frontmatter.image}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
