import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from "../components/Gallery";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const AboutPageTemplate = ({
  title,
  desc,
  content,
  contentComponent,
  image,
  preview,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <Container className="py-md-11">
        <Row className="justify-content-center mb-5">
          <Col className="col-12 col-md-10 col-lg-8 text-center">
            <h1 className="display-2">{title}</h1>
            <p className="lead text-muted mb-7 mb-md-9">{desc}</p>
          </Col>
        </Row>
        {!preview && (
          <Row>
            <Gallery />
          </Row>
        )}
      </Container>

      <Container className="py-md-11 about">
        <Row>
          <PageContent className="content" content={content} />
        </Row>
      </Container>
      <Container className="mt-5">
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
        desc={post.frontmatter.description}
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
