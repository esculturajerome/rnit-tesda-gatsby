import React from "react";
import { graphql, StaticQuery } from "gatsby";

import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Gallery = ({ data }) => {
  const { allFile: images } = data;

  return (
    <div className="horizontal-scroll">
      <div className="image-container">
        {images.edges.map((image) => (
          <div className="image-name">
            <PreviewCompatibleImage imageInfo={image.node} />
            <p>{image.node.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function EmployeesGallery(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(
            filter: {
              extension: { regex: "/(jpg)|(jpeg)|(png)/" }
              relativeDirectory: { eq: "employees-gallery" }
            }
            sort: { fields: base, order: ASC }
          ) {
            edges {
              node {
                name
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => <Gallery data={data} {...props} />}
    />
  );
}
