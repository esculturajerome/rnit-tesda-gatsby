import React from "react";
import { Col, Row } from "react-bootstrap";

import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const TextImage = ({ title, text, image }) => {
  return (
    <Row className="align-items-center">
      <Col
        xs={{ span: 12, order: 2 }}
        md={{ span: 7, order: 1 }}
        lg={{ span: 6, order: 1 }}
      >
        {title && <h2>{title}</h2>}
        {text && <p className="fs-lg text-muted mb-6">{text}</p>}
      </Col>
      {image && (
        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 5, order: 2 }}
          lg={{ span: 6, order: 2 }}
          className="mb-3 "
        >
          <div className="w-md-150 w-lg-130 position-relative">
            <PreviewCompatibleImage imageInfo={image} />
          </div>
        </Col>
      )}
    </Row>
  );
};

export default TextImage;
