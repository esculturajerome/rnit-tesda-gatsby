import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { Container, Row, Col, Card } from "react-bootstrap";
import ButtonRow from "../components/ButtonRow";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post) => (
      <Card
        style={{ width: "18rem" }}
        key={post.node.fields.slug}
        className="shadow-light-lg lift lift-lg"
      >
        <Link to={post.node.fields.slug}>
          <Card.Body>
            <Card.Title>{post.node.frontmatter.title}</Card.Title>
          </Card.Body>
        </Link>
      </Card>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with `;
    return (
      <Layout>
        <Container>
          <Row className="py-md-11">
            <Helmet title={`${tag} | ${title}`} />
            <h1 className="py-md-11">
              {tagHeader}
              <span className="text-primary">{tag}</span>
            </h1>
            {postLinks}
          </Row>
          <Row>
            <ButtonRow text="Browse all tags" direction="/tags/" />
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
