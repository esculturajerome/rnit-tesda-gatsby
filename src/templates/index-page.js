import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Button, Col, Row } from "react-bootstrap";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import ButtonRow from "../components/ButtonRow";
import FullWidthText from "../components/FullWidthText";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <>
    <div className="py-md-11">
      <Row className="align-items-center">
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 7, order: 1 }}
          lg={{ span: 6, order: 1 }}
        >
          <h1 className="display-3 text-center text-md-start">{title}</h1>
          <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
            {subheading}
          </p>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 5, order: 2 }}
          lg={{ span: 6, order: 2 }}
          className="mb-3"
        >
          <img
            src={
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            }
            className="img-fluid"
          />
        </Col>
      </Row>
    </div>
    <FullWidthText title={mainpitch.title} text={mainpitch.description} />

    <Row>
      <Col>
        <h3>{heading}</h3>
        <p>{description}</p>
      </Col>
    </Row>
    <Row className="py-md-11 border-bottom">
      <Features gridItems={intro.blurbs} />
      <ButtonRow text="See all products" direction="/products" />
    </Row>
    <Row className="py-md-11">
      <div className="title-container">
        <div className="left-panel">
          <h2 className="mb-0">
            Latest <span className="text-primary">Stories</span>
          </h2>
          <p>this is a subtitle</p>
        </div>
        <div className="right-panel">
          <Link
            to="/blog"
            className="btn-outline-gray-300 d-flex align-items-center btn"
          >
            View All
          </Link>
        </div>
      </div>
      <BlogRoll />
      {/* <ButtonRow text="Read more" direction="/blog" /> */}
    </Row>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
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
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
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
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
