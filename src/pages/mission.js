import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Layout from "../components/Layout";
import { Col, Row } from "react-bootstrap";

import building from "../img/building.png";

export default function Mission({ index }) {
  return (
    <StaticQuery
      query={graphql`
        query missionQuery {
          markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
            frontmatter {
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
      `}
      render={(data) => (
        <Layout>
          <div
            className="welcome"
            style={{
              backgroundImage: `url(${building})`,
            }}
          >
            <div className="welcome__left">
              <h1>{data.markdownRemark.frontmatter.main.mission} </h1>
            </div>
          </div>
          <div
            className="welcome"
            style={{
              backgroundImage: `url(${data.markdownRemark.frontmatter.image.childImageSharp.fluid.src})`,
            }}
          >
            <div className="welcome__right">
              <h1>{data.markdownRemark.frontmatter.main.vision} </h1>
            </div>
          </div>

          {/* <Row>
            <Col md={12} className="d-flex  justify-content-center goal-title">
              <h1>{data.markdownRemark.frontmatter.main.mission}</h1>
              <h1>{data.markdownRemark.frontmatter.main.vision}</h1>
              <h1>{data.markdownRemark.frontmatter.main.blurbs.philosophy}</h1>
              <h1>{data.markdownRemark.frontmatter.main.blurbs.quality}</h1>
              <h1>{data.markdownRemark.frontmatter.main.blurbs.values}</h1>
            </Col>
          </Row> */}
        </Layout>
      )}
    />
  );
}
