import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Img from "gatsby-image";

import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Gallery = ({ data }) => {
  const { allFile: images } = data;

  return (
    <div className="horizontal-scroll">
      <div className="image-container">
        {images.edges.map((image) => (
          <div className="image-name">
            <PreviewCompatibleImage imageInfo={image.node} />
            <p className="text-muted">{image.node.name}</p>
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
                  fluid(maxWidth: 200) {
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

// export const employeesGalleryQuery = graphql`
// query EmployeesGallery {
//   allFile(
//     filter: {
//       extension: { regex: "/(jpg)|(jpeg)|(png)/" }
//       relativeDirectory: { eq: "employees-gallery" }
//     }
//   ) {
//     edges {
//       node {
//         name
//         childImageSharp {
//           fluid(maxWidth: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// }
// `;
