import React from "react";
import "./IndustryDesc.css";
import { Col, Container, Row } from "react-bootstrap";

function IndustryDescription() {
  return (
    <div className="indystry-description-wrapper">
      <Container>
        <Row>
          <Col className="indystry-description-col-wrapper">
            <div
              class="d-flex flex-column align-items-center justify-content-center"
            >
              <h1 class="d-flex flex-column align-items-center">
                <span class="indystry-description-first-heading">
                  PhotoRoom for film and entertainment
                </span>
                <span class="sr-only"> </span>
                <span class="indystry-description-second-heading-wrapper">
                  <span class="indystry-description-second-heading">
                    Images as iconic as your brand
                  </span>
                </span>
              </h1>
              <div class="indystry-description-third-heading">
                Create viral moments that captivate your fans, and capture the
                cultural zeitgeist.
              </div>
              <div class="">
            
                  <div class="">
                    <button className="industrry-description-free-trail">
                      Start your free trial
                    </button>
                  </div>
               
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IndustryDescription;
