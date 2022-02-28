import React, { Fragment } from "react";
import { graphql, StaticQuery } from "gatsby";

import { Col, Row } from "react-bootstrap";

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

            <div className={index ? "col-md-8 index" : "col-md-12"}>
              <div className="horizontal-scroll">
                <div className="goal-container">
                  {data.markdownRemark.frontmatter.goals.goal.map(
                    (listGoal) => (
                      <div className="goal-text align-items-center">
                        <div>
                          <h3>{listGoal.title}</h3>
                        </div>
                        <p>{listGoal.text}</p>
                        <ul>
                          {!index &&
                            listGoal.objectives.map((a) => <li>{a.text}</li>)}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </Row>
        </Fragment>
      )}
    />
  );
}
