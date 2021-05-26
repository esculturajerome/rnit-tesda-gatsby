import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthText from "../components/FullWidthText";
import { Container, Row, Col } from "react-bootstrap";

export const AboutPageTemplate = ({
  title,
  image,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <Container className="py-md-11 about">
      <Row className="mb-5">
        <Col>
          <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
            {title}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <PageContent className="content" content={content} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthText title="Organizational Chart" />
          <img
            src={
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            }
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
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
      html
      frontmatter {
        title
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
