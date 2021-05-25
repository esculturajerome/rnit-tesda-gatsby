import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import { Col, Row } from "react-bootstrap";

const FeatureGrid = ({ gridItems }) => (
  <>
    {gridItems.map((item) => (
      <Col xs={12} md={4} key={item.text}>
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
  </>
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
