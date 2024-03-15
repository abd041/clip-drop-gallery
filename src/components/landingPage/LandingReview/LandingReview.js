import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import star_image from "../../../assest/media/star.png";
import "./LandingReview.css";
function LandingReview() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <div className="industry-review-heading col-lg-6 col-12">
            <h1>They love PhotoRoom</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={3} className="mx-auto">
          <div className="lainding-review-main-image-wrapper">
            <div className="lainding-review-main-image">
              <img src={star_image} alt="..." />
            </div>
            <div className="lainding-review-main-haeding">
              <h1>Affordable and efficient</h1>
            </div>
            <div className="lainding-review-main-para-text">
              <p>
                PhotoRoom has turned my one-bedroom apartment into a
                professional photo studio. Rather than spending hours or
                thousands of dollars editing photos, PhotoRoom allows me to
                create pro photos in seconds, so not only does it make my photos
                look great, but it’s affordable & efficient.
              </p>
            </div>
            <div className="d-flex align-items-center lainding-review-main-customer">
              <div className="lainding-review-main-customer-image">
                <img src="https://storyblok-cdn.photoroom.com/f/191576/80x80/1a9f8f848b/sebastian-pilch.png/m/filters:quality(75)" />
              </div>
              <div className="lainding-review-main-customer-heading-wrapper">
                <div className="lainding-review-main-customer-heading">
                  <h5>Sebastian Pilch</h5>
                </div>
                <div className="lainding-review-main-customer-job">
                  <h4>Reseller on eBay</h4>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={3} className="mx-auto">
          <div className="lainding-review-main-image-wrapper">
            <div className="lainding-review-main-image">
              <img src={star_image} alt="..." />
            </div>
            <div className="lainding-review-main-haeding">
              <h1>Affordable and efficient</h1>
            </div>
            <div className="lainding-review-main-para-text">
              <p>
                PhotoRoom has turned my one-bedroom apartment into a
                professional photo studio. Rather than spending hours or
                thousands of dollars editing photos, PhotoRoom allows me to
                create pro photos in seconds, so not only does it make my photos
                look great, but it’s affordable & efficient.
              </p>
            </div>
            <div className="d-flex align-items-center lainding-review-main-customer">
              <div className="lainding-review-main-customer-image">
                <img src="https://storyblok-cdn.photoroom.com/f/191576/80x80/1a9f8f848b/sebastian-pilch.png/m/filters:quality(75)" />
              </div>
              <div className="lainding-review-main-customer-heading-wrapper">
                <div className="lainding-review-main-customer-heading">
                  <h5>Sebastian Pilch</h5>
                </div>
                <div className="lainding-review-main-customer-job">
                  <h4>Reseller on eBay</h4>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={3} className="mx-auto">
          <div className="lainding-review-main-image-wrapper">
            <div className="lainding-review-main-image">
              <img src={star_image} alt="..." />
            </div>
            <div className="lainding-review-main-haeding">
              <h1>Affordable and efficient</h1>
            </div>
            <div className="lainding-review-main-para-text">
              <p>
                PhotoRoom has turned my one-bedroom apartment into a
                professional photo studio. Rather than spending hours or
                thousands of dollars editing photos, PhotoRoom allows me to
                create pro photos in seconds, so not only does it make my photos
                look great, but it’s affordable & efficient.
              </p>
            </div>
            <div className="d-flex align-items-center lainding-review-main-customer">
              <div className="lainding-review-main-customer-image">
                <img src="https://storyblok-cdn.photoroom.com/f/191576/80x80/1a9f8f848b/sebastian-pilch.png/m/filters:quality(75)" />
              </div>
              <div className="lainding-review-main-customer-heading-wrapper">
                <div className="lainding-review-main-customer-heading">
                  <h5>Sebastian Pilch</h5>
                </div>
                <div className="lainding-review-main-customer-job">
                  <h4>Reseller on eBay</h4>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingReview;
