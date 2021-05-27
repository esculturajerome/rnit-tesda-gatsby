import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Container className="Container">
      <Helmet title={`Tags | ${title}`} />
      <Row className="py-md-11">
        <h1>Tags</h1>
        <ul className="taglist">
          {group.map((tag) => (
            <li
              key={tag.fieldValue}
              className="badge rounded-pill bg-primary-soft"
            >
              <Link
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
                className="h6 fw-bold text-uppercase"
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Row>
    </Container>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
