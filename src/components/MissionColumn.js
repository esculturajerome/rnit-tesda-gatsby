import React, { Fragment } from "react";

import { Col, Row } from "react-bootstrap";

export default function MissionColumn({ index }) {
  mission = [
    {
      title: "Vision",
      text: "Skilling Romblon thru quality TVET Delivery for Peoples Prosperity.",
    },
    {
      title: "Mission",
      text: "Equipping the province with competent, flexible, economically stable and dignified human resources for domestic and global demands.",
    },
    {
      title: "Our Philosophy",
      text: "An institution that nurtures the total development of the Filipino youth, rich in knowledge, competent in their skills and imbued with positive attitude and work-values; whose program and services reflect the needs of its clientele and that of the greater community it servers; a school that is student centered enabling them to grow into producing, responsible,  and loving individuals.",
    },
    {
      title: "Values Statement",
      text: "We believe in competence, integrity, high level of commitment, transparency, 5S, strong desire for improvement, teamwork and cooperation.",
    },
  ];
  return (
    <Fragment>
      <Row>
        {index && (
          <Col md={4} className="d-flex  justify-content-center goal-title">
            <h1>Our Purpose</h1>
            <p>
              Our Mission, Vission, Philosophy and Values Statement here in
              Romblon National Institute of Technology
            </p>
          </Col>
        )}

        <div className={index ? "col-md-8" : "col-md-12"}>
          <div className="horizontal-scroll">
            <div className="goal-container">
              {mission.map((a) => (
                <div className="goal-text align-items-center">
                  <div>
                    <h3>{a.title}</h3>
                  </div>
                  <p>{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Row>
    </Fragment>
  );
}
