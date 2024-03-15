import React from "react";
import "./HeroSection.css";
import { Container, Row, Col } from "react-bootstrap";
import HeroSectionAnimation from "./HeroSectionAnimation";
function HeroSection() {
  return (
    <div className="wrap-hero-section">
      <Container className="hero-section-main-container">
        <Row>
          <Col lg={6} className="d-flex align-items-center text-xl-start text-center">
            <div className="col-12">
              <div className="col-xl-10 col-12 ">
                <div className="d-flex align-items-center hero-section-mobile-center">
                  <div className="hero-section-heading-image">
                    <img src="https://www.adobe.com/content/dam/www/us/en/sensei/firefly/6-sep/firefly_appicon_256.svg" />
                  </div>
                  <div className="hero-section-heading">
                    <h6>Adobe Firefly</h6>
                  </div>
                </div>
                <div className="hero-section-main-heading">
                  <h1>Your imagination’s new best friend.</h1>
                </div>
                <div className="hero-section-description">
                  <p>
                    Use generative AI and simple text prompts to create the
                    highest-quality output — beautiful images, text effects, and
                    fresh color palettes. Make all-new content from reference
                    images and explore more possibilities, more quickly.
                  </p>
                </div>
              </div>
              <div className="hero-section-desc-btn">
                <button>Get Firefly free</button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <HeroSectionAnimation />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
