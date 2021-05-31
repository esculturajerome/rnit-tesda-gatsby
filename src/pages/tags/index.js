import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import { Container, Row } from "react-bootstrap";

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
        <div>
          {group.map((tag) => (
            <div
              key={tag.fieldValue}
              className="badge rounded-pill bg-secondary-soft me-2"
            >
              <Link
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
                className="h6 text-uppercase"
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </div>
          ))}
        </div>
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
