import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import { Container, Col, Row } from "react-bootstrap";

import { Disqus } from "gatsby-plugin-disqus";

export const BlogPostTemplate = ({
  id,
  path,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  preview,
}) => {
  const PostContent = contentComponent || Content;

  let disqusConfig = {
    url: path,
    identifier: id,
    title: title,
  };

  return (
    <Container>
      <Row className="justify-content-center py-md-11">
        <Col xs={12} md={10} lg={9}>
          {helmet || ""}
          <h1 className="display-4 text-center mb-5">{title}</h1>
          <p>{description}</p>
          <PostContent content={content} />
          {tags && tags.length ? (
            <div className="mt-5 mb-5">
              <h6 className="fw-bold text-uppercase text-muted mb-0">Tags</h6>
              {tags.map((tag) => (
                <div
                  key={tag + `tag`}
                  className="badge rounded-pill bg-secondary-soft me-2"
                >
                  <Link
                    to={`/tags/${kebabCase(tag)}/`}
                    className="h6 text-uppercase"
                  >
                    {tag}
                  </Link>
                </div>
              ))}
            </div>
          ) : null}
          {!preview && <Disqus config={disqusConfig} />}
        </Col>
      </Row>
    </Container>
  );
};

BlogPostTemplate.propTypes = {
  id: PropTypes.string,
  path: PropTypes.string,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const url = post.fields.slug;
  const path = "https://rnit-tesda.netlify.app" + url;
  console.log(path, "path");

  return (
    <Layout>
      <BlogPostTemplate
        id={post.id}
        path={path}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
      fields {
        slug
      }
    }
  }
`;
