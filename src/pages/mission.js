import React, { Fragment } from "react";
import { graphql, StaticQuery } from "gatsby";

import { Col, Row } from "react-bootstrap";

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
            }
          }
        }
      `}
      render={(data) => (
        <Fragment>
          <Row>
            <Col md={12} className="d-flex  justify-content-center goal-title">
              <h1>{data.markdownRemark.frontmatter.main.mission}</h1>
              <h1>{data.markdownRemark.frontmatter.main.vission}</h1>
              <h1>{data.markdownRemark.frontmatter.main.blurbs.philosophy}</h1>
              <h1>{data.markdownRemark.frontmatter.main.blurbs.quality}</h1>
              <h1>{data.markdownRemark.frontmatter.main.blurbs.values}</h1>
            </Col>
          </Row>
        </Fragment>
      )}
    />
  );
}
