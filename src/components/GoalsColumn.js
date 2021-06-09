import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { v4 } from "uuid";

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

export default function GoalsColumn({ index }) {
  return (
    <StaticQuery
      query={graphql`
        query GoalsQuery {
          markdownRemark(frontmatter: { templateKey: { eq: "program-page" } }) {
            frontmatter {
              title
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
      `}
      render={(data) => (
        <Row>
          {data.markdownRemark.frontmatter.goals.goal.map((listGoal) => (
            <Col md={6} key={listGoal.title} className="mb-5 goal-icon pe-5">
              <img src={listGoal.image.publicURL} alt="" />
              <h3>{listGoal.title}</h3>
              <p className="text-gray-800 mb-6">{listGoal.text}</p>
              {!index && (
                <Accordion defaultActiveKey="0" className="mb-md-8">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      View Objectives
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <ul>
                          {listGoal.objectives.map((obj) => (
                            <li>
                              <p className="text-gray-800" key={v4()}>
                                {obj.text}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              )}
            </Col>
          ))}
        </Row>
      )}
    />
  );
}
