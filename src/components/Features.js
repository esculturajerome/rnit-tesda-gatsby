import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import { Col, Row } from "react-bootstrap";

const FeatureGrid = ({ gridItems }) => (
  <div className="py-8 py-md-11 border-bottom">
    <Row>
      {gridItems.map((item) => (
        <Col xs={12} md={4} key={item.text}>
          <div className="icon text-primary mb-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <path
                  d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z"
                  fill="#335EEA"
                ></path>
                <path
                  d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z"
                  fill="#335EEA"
                  opacity=".3"
                ></path>
              </g>
            </svg>
          </div>
          <div
            style={{
              width: "240px",
            }}
          >
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <p className="text-muted mb-6 mb-md-0">{item.text}</p>
        </Col>
      ))}
    </Row>
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
