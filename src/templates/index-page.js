import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Col, Row } from "react-bootstrap";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Img from "gatsby-image";

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
          <Img fluid={image.childImageSharp.fluid} />
        </Col>
      </Row>
    </div>

    <Row>
      <Col>
        <h1>{mainpitch.title}</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3>{mainpitch.description}</h3>
      </Col>
    </Row>

    <Row>
      <Col>
        <h3>{heading}</h3>
        <p>{description}</p>
      </Col>
    </Row>
    <Features gridItems={intro.blurbs} />
    <Link className="btn" to="/products">
      See all products
    </Link>

    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile"></div>
                  <div className="tile"></div>
                </div>
                <div className="columns">
                  <div className="column is-12"></div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered"></div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
