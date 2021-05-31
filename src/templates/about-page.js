import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from "../components/Gallery";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import FullWidthText from "../components/FullWidthText";

export const AboutPageTemplate = ({
  title,
  desc,
  content,
  contentComponent,
  mission,
  vision,
  main,
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

        <Row>
          {!preview ? (
            <Gallery />
          ) : (
            <p className="text-center italic">Team Gallery here</p>
          )}
        </Row>
      </Container>
      <div className="bg-gradient-light-white">
        <Container className="py-md-11">
          <Row>
            <FullWidthText title="Mission Statement" text={mission} />
          </Row>
          <Row className="mb-5">
            <FullWidthText title="Vision Statement" text={vision} />
          </Row>
          <Row className="mb-4 mt-5">
            <Col xs={12} md={4} className="mt-2">
              <h3>Philosophy</h3>
              <p className="text-muted mb-6 mb-md-0">{main.philosophy}</p>
            </Col>
            <Col xs={12} md={4} className="mt-2">
              <h3>Quality Policy</h3>
              <p className="text-muted mb-6 mb-md-0">{main.quality}</p>
            </Col>
            <Col xs={12} md={4} className="mt-2">
              <h3>Values Statement</h3>
              <p className="text-muted mb-6 mb-md-0">{main.values}</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <Container className="py-md-11 about">
        <Row>
          <PageContent className="content" content={content} />
        </Row>
      </Container> */}
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
  mission: PropTypes.string,
  vision: PropTypes.string,
  main: PropTypes.object,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        desc={post.frontmatter.description}
        image={post.frontmatter.image}
        mission={post.frontmatter.main.mission}
        vision={post.frontmatter.main.vision}
        main={post.frontmatter.main.blurbs}
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
        main {
          mission
          vision
          blurbs {
            philosophy
            quality
            values
          }
        }
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
