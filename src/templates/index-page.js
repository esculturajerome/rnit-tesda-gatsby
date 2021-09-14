import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Container, Col, Row } from "react-bootstrap";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import FullWidthText from "../components/FullWidthText";
import TextImage from "../components/TextImage";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import { v4 } from "uuid";
import GoalsColumn from "../components/GoalsColumn";

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  main,
  mainImage,
  intro,
  preview,
}) => (
  <>
    <Container className="py-md-11 mt-10">
      <Row className="align-items-center">
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 7, order: 1 }}
          lg={{ span: 6, order: 1 }}
          className="mt-2"
        >
          <h1 className="display-4 text-center text-md-start">{title}</h1>
          <p className="lead text-center text-md-start mb-6 mb-lg-8">
            {subheading}
          </p>

          <div className="text-center text-md-start">
            <Link to="/enrol" className="btn btn-primary lift me-1">
              Online Enrolment
            </Link>
            <Link to="/assessment" className="btn btn-primary-soft lift">
              Online Assessment
            </Link>
          </div>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 5, order: 2 }}
          lg={{ span: 6, order: 2 }}
          className="mb-3 "
        >
          <div>
            <PreviewCompatibleImage imageInfo={image} />
          </div>
        </Col>
      </Row>
    </Container>
    {/* <FullWidthText title={intro.heading} text={intro.description} /> */}

    <div className="py-md-11 bg-blue">
      <Container>
        {!preview ? (
          <GoalsColumn index="true" />
        ) : (
          <p className="text-center italic">Goals Here</p>
        )}
      </Container>
    </div>

    <div className="bg-gradient-light-white index-blogs">
      <Container>
        <Row className="pt-5">
          <div className="title-container">
            <div className="left-panel">
              <h2 className="mb-0">
                Latest <span className="text-primary">Stories</span>
              </h2>
              {/* <p>This is a subtitle</p> */}
            </div>
            <div className="right-panel">
              <Link
                to="/blog"
                className="d-flex align-items-center btn btn-primary"
              >
                View All
              </Link>
            </div>
          </div>
        </Row>
        {!preview ? (
          <BlogRoll />
        ) : (
          <p className="text-center italic">Blogs Here</p>
        )}
        <TextImage
          title={main.heading}
          text={main.description}
          image={mainImage}
        />
      </Container>
    </div>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  main: PropTypes.object,
  mainImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        main={frontmatter.main}
        mainImage={frontmatter.main.image}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        main {
          heading
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        intro {
          heading
          description
        }
      }
    }
  }
`;
