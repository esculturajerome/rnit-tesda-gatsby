import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Col, Row } from "react-bootstrap";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import ButtonRow from "../components/ButtonRow";
import FullWidthText from "../components/FullWidthText";
import TextImage from "../components/TextImage";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  main,
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
          <h1 className="display-3 text-center text-md-start">{heading}</h1>
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
    <Row className="py-md-11">
      {intro.blurbs.map((goal) => (
        <Col xs={12} md={4}>
          <h3>{goal.title}</h3>
          <p className="text-muted mb-6 mb-md-0">{goal.text}</p>
        </Col>
      ))}
    </Row>
    <FullWidthText title={mainpitch.title} text={mainpitch.description} />
    <TextImage
      title={main.heading}
      text={main.description}
      image={main.image}
    />
    <FullWidthText title={intro.heading} text={intro.description} />
    {intro.blurbs === [] ? (
      <Row className="py-md-11 border-bottom">
        <Features gridItems={intro.blurbs} />
        <ButtonRow text="See all products" direction="/products" />
      </Row>
    ) : null}
    <Row className="py-md-11">
      <div className="title-container">
        <div className="left-panel">
          <h2 className="mb-0">
            Latest <span className="text-primary">Stories</span>
          </h2>
          <p>This is a subtitle</p>
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
  main: PropTypes.object,
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
        main={frontmatter.main}
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
        main {
          heading
          description
          image {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
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
            title
          }
          heading
          description
        }
      }
    }
  }
`;
