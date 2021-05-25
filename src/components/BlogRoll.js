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
            <Col xs={12} md={4} key={post.id}>
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
                    <div className="mb-3">
                      <span className="badge rounded-pill bg-primary-soft">
                        <span className="h6 fw-bold text-uppercase">
                          {post.frontmatter.date}
                        </span>
                      </span>
                    </div>

                    <p className="text-muted">{post.excerpt}</p>
                  </div>
                  <div className="card-meta mt-auto">
                    <hr className="card-meta-divider" />

                    <h6 className="text-uppercase text-muted me-2 mb-3 text-center">
                      {post.frontmatter.date}
                    </h6>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        {/* {posts &&
          posts.map(({ node: post }) => (
            <Col xs={12} md={4} key={post.id}>
              <div
                className={`card shadow-light-lg lift lift-lg ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                {post.frontmatter.featuredimage ? (
                  <div className="card-img-top">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                    <div className="position-relative">
                      <div className="shape shape-bottom shape-fluid-x text-white">
                        <svg
                          viewBox="0 0 2880 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : null}
                <p className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                </p>
                <p className="text-muted">{post.excerpt}</p>
                <Link
                  className="btn btn-primary-soft lift"
                  to={post.fields.slug}
                >
                  Keep Reading →
                </Link>
              </div>
            </Col>
          ))} */}
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
