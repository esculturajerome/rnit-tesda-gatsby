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

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  main,
  mainImage,
  intro,
}) => (
  <>
    <Container className="mb-5">
      <Row className="align-items-center">
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 7, order: 1 }}
          lg={{ span: 6, order: 1 }}
          className="mt-2"
        >
          <h1 className="display-3 text-center text-md-start">{title}</h1>
          <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
            {subheading}
          </p>

          <div className="text-center text-md-start">
            <Link to="/" className="btn btn-primary lift me-1">
              Enrol Now
            </Link>
            <Link to="/" className="btn btn-primary-soft lift">
              Read More
            </Link>
          </div>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 5, order: 2 }}
          lg={{ span: 6, order: 2 }}
          className="mb-3 "
        >
          <div className="w-md-150 w-lg-130 position-relative">
            <PreviewCompatibleImage imageInfo={image} />
          </div>
        </Col>
      </Row>
    </Container>
    <Container className="py-md-11">
      <Row className="mb-4">
        {intro.blurbs.map((goal) => (
          <Col xs={12} md={4} key={v4()} className="mt-2">
            {goal.image && (
              <img
                src={goal.image.publicURL}
                alt="goal-icon"
                className="goal-icon"
              />
            )}
            <h3>{goal.title}</h3>
            <p className="text-muted mb-6 mb-md-0">{goal.text}</p>
          </Col>
        ))}
      </Row>
    </Container>
    <Container>
      <FullWidthText title={intro.heading} text={intro.description} />
    </Container>
    <div className="bg-gradient-light-white ">
      <Container>
        <Row className="pt-5">
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
                className="d-flex align-items-center btn btn-primary"
              >
                View All
              </Link>
            </div>
          </div>
          {/* <ButtonRow text="Read more" direction="/blog" /> */}
        </Row>
        <BlogRoll />
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
          blurbs {
            image {
              publicURL
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
