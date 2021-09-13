import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
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
        <Fragment>
          <Row>
            {index && (
              <Col md={4} className="d-flex  justify-content-center goal-title">
                <h1>Our Goals</h1>
                <p>
                  We believe in competence, integrity, high level of commitment,
                  transparency, 5S, strong desire for improvement, teamwork and
                  cooperation
                </p>
              </Col>
            )}

            <div className={index ? "col-md-8" : "col-md-12"}>
              <div className="horizontal-scroll">
                <div className="goal-container">
                  {data.markdownRemark.frontmatter.goals.goal.map(
                    (listGoal) => (
                      <div className="goal-text align-items-center">
                        <div>
                          <img src={listGoal.image.publicURL} alt="" />
                          <h3>{listGoal.title}</h3>
                        </div>
                        <p>{listGoal.text}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </Row>
        </Fragment>

        // <Row className="goal justify-content-md-center">
        //   {data.markdownRemark.frontmatter.goals.goal.map((listGoal) => (
        //     <Col md={3} key={listGoal.title} className="mb-5 goal-icon">
        //       <h3>{listGoal.title}</h3>
        //       <p>{listGoal.text}</p>
        //       {!index && (
        //         <Accordion defaultActiveKey="0" className="mb-md-8">
        //           <Card>
        //             <Accordion.Toggle as={Card.Header} eventKey="1">
        //               View Objectives
        //             </Accordion.Toggle>
        //             <Accordion.Collapse eventKey="1">
        //               <Card.Body>
        //                 <ul>
        //                   {listGoal.objectives.map((obj) => (
        //                     <li>
        //                       <p className="text-muted" key={v4()}>
        //                         {obj.text}
        //                       </p>
        //                     </li>
        //                   ))}
        //                 </ul>
        //               </Card.Body>
        //             </Accordion.Collapse>
        //           </Card>
        //         </Accordion>
        //       )}
        //     </Col>
        //   ))}
        // </Row>
      )}
    />
  );
}
