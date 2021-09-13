import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import TableData from "../components/TableData";

import { v4 } from "uuid";

import { assessmentData } from "../data/assessmentData";
import { programsData } from "../data/programsData";
import { UTPRASData } from "../data/UTPRASData";
import TextImage from "../components/TextImage";
import GoalsColumn from "../components/GoalsColumn";

export const ProgramPageTemplate = ({ image, title, description, goals }) => (
  <>
    <Container>
      <TextImage title={title} text={description} image={image} />
    </Container>

    <div className="py-md-11 bg-blue">
      <Container>
        <GoalsColumn />
      </Container>
    </div>
    <div className="bg-gradient-light-white ">
      <Container className="py-md-11">
        <Row className="py-md-11">
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Accredited Assessments">
              <TableData data={assessmentData} />
            </Tab>
            <Tab eventKey="programs" title="Accredited Programs">
              <TableData data={programsData} />
            </Tab>
            <Tab eventKey="utpras" title="UTPRAS">
              <TableData data={UTPRASData} />
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  </>
);

ProgramPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  goals: PropTypes.object,
};

const ProgramPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <ProgramPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        goals={frontmatter.goals.goal}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        goals {
          goal {
            objectives {
              text
            }
            text
            title
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`;
