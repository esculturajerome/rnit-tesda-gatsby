import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { DiscussionEmbed } from "disqus-react";

// import {DiscussionEmbed} from 'disqus-react';

export const BlogPostTemplate = ({
  id,
  path,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  const baseUrl = "https://rnit-tesda.netlify.app/";

  const disqusShortname = "rnit-tesda";
  const disqusConfig = {
    identifier: id,
    title: title,
    url: baseUrl + path,
  };

  return (
    <div className="row justify-content-center py-md-11">
      <div className="col-12 col-md-10 col-lg-9 col-xl-8">
        {helmet || ""}
        <h1 className="display-4 text-center mb-5">{title}</h1>
        <p>{description}</p>
        <PostContent content={content} />
        {tags && tags.length ? (
          <div style={{ marginTop: `4rem` }}>
            <h4>Tags</h4>
            <ul className="taglist">
              {tags.map((tag) => (
                <li
                  key={tag + `tag`}
                  className="badge rounded-pill bg-primary-soft"
                >
                  <Link
                    to={`/tags/${kebabCase(tag)}/`}
                    className="h6 fw-bold text-uppercase"
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        id={post.id}
        path={post.fields.path}
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
