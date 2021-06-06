import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const ProgramPageTemplate = ({ title }) => <h1>{title}</h1>;

ProgramPageTemplate.propTypes = {
  title: PropTypes.string,
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // heading: PropTypes.string,
  // description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
  // main: PropTypes.shape({
  //   heading: PropTypes.string,
  //   description: PropTypes.string,
  //   image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  //   image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  //   image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // }),
  // testimonials: PropTypes.array,
  // fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // pricing: PropTypes.shape({
  //   heading: PropTypes.string,
  //   description: PropTypes.string,
  //   plans: PropTypes.array,
  // }),
};

const ProgramPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProgramPageTemplate
        title={frontmatter.title}

        // image={frontmatter.image}
        // heading={frontmatter.heading}
        // description={frontmatter.description}
        // intro={frontmatter.intro}
        // main={frontmatter.main}
        // testimonials={frontmatter.testimonials}
        // fullImage={frontmatter.full_image}
        // pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

ProgramPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProgramPage;

export const ProgramPageQuery = graphql`
  query ProgramPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

// export const ProgramPageQuery = graphql`
//   query ProgramPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         title
//         image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         heading
//         description
//         intro {
//           blurbs {
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//         main {
//           heading
//           description
//           image1 {
//             alt
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 526, quality: 92) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           image2 {
//             alt
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 526, quality: 92) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           image3 {
//             alt
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 1075, quality: 72) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//         testimonials {
//           author
//           quote
//         }
//         full_image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         pricing {
//           heading
//           description
//           plans {
//             description
//             items
//             plan
//             price
//           }
//         }
//       }
//     }
//   }
// `;
