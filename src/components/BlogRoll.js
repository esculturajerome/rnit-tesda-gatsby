import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

import { Col, Row } from "react-bootstrap";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Row>
        {posts &&
          posts.map(({ node: post }) => (
            <Col xs={12} md={4} key={post.id} className="mb-3">
              <Link to={post.fields.slug} className="btn-primary-soft lift">
                <div
                  className={`card shadow-light-lg lift lift-lg ${
                    post.frontmatter.featuredpost ? "is-featured" : ""
                  }`}
                >
                  {post.frontmatter.featuredimage ? (
                    <>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                        className="card-img-top"
                      />
                    </>
                  ) : (
                    ""
                  )}

                  <div className="card-body">
                    <h4>{post.frontmatter.title} </h4>
                    <p className="mb-3 mt-3 text-muted">
                      {post.frontmatter.date}
                    </p>
                    <p className="text-muted">{post.excerpt}</p>
                    <div className="mb-3">
                      {post.frontmatter.tags.length > 1 ? (
                        post.frontmatter.tags.map((tag) => (
                          <span className="badge me-1 rounded-pill bg-primary-soft">
                            <span className="h6 fw-bold text-uppercase">
                              {tag}
                            </span>
                          </span>
                        ))
                      ) : (
                        <span className="badge rounded-pill bg-primary-soft">
                          <span className="h6 fw-bold text-uppercase">
                            {post.frontmatter.tags}
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
      </Row>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                tags
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
