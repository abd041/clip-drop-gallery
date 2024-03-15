import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./RoundImage.css";
// import RoundImage from "/images/round_profil_picture_1.webp";
function RoundImageComponent({ order1, order2, title, text, img }) {
  return (
    <Container className="round-image-container">
      <Row>
        <Col lg={6} className={`d-flex justify-content-center order-${order1}`}>
          <div className="round-image-wrapper">
            <img src={img} alt="..." />
          </div>
        </Col>
        <Col
          lg={6}
          className={`round-image-second-col order-${order2} d-flex justify-content-center px-0`}
        >
          <div className="col-lg-9 col-10">
            <div className="round-image-main-heading">
              <h4>{title}</h4>
            </div>
            <div className="round-image-main-para">
              <p>{text}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RoundImageComponent;
