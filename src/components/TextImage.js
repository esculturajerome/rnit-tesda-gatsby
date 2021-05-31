import React from "react";
import { Col, Row } from "react-bootstrap";

import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export default ({ title, text, image }) => {
  console.log(image, "image");
  return (
    <Row className="align-items-center py-md-11">
      <Col
        xs={{ span: 12, order: 2 }}
        md={{ span: 7, order: 1 }}
        lg={{ span: 6, order: 1 }}
      >
        {title && <h2>{title}</h2>}
        {text && <p className="fs-lg text-muted mb-6">{text}</p>}
      </Col>

      <Col
        xs={{ span: 12, order: 1 }}
        md={{ span: 5, order: 2 }}
        lg={{ span: 6, order: 2 }}
        className="mb-3 "
      >
        <div className="position-relative">
          <PreviewCompatibleImage imageInfo={image} />
        </div>
      </Col>
    </Row>
  );
};
