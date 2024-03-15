import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Documentaion.css";
function APIDocumentation() {
  return (
    <Container className="getting-started-main-wrapper">
      <Row className="getting-started-box-wrapper">
        <Col>
          <div>
            <div className="docmuent-main-heading">
              <h4>What is the Remove Background API?</h4>
            </div>
          </div>
          <div className="api-doucment-explain-para">
            <p>
              The Remove Background API provides the service of removing the
              background from an image automatically via an API. It allows
              developers to integrate this functionality into their own
              applications or websites to ensure a fast and easy workflow. With
              the Remove Background API from The Remove Background API provides
              the service of removing the background from an image automatically
              via an API. It allows developers to integrate this functionality
              into their own applications or websites to ensure a fast and easy
              workflow. With the Remove Background API from
            </p>
          </div>
        </Col>
      </Row>
      <Row className="getting-started-second-box-wrapper">
        <Col lg={6} className="geeting-started-first-box">
          <div>
            <div className="docmuent-main-heading-seond">
              <h4> Easy to integrate</h4>
            </div>
            <div className="api-doucment-implement-para">
              <p>
                Implement our fast Remove Background API in your website or
                native app using your favorite language.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={6} className="api-doucment-code-wraper">
          <div className="docmuent-main-heading-seond">
            <h4>Make your first HTTP Call</h4>
          </div>
          <div className="api-doucment-implement-para-code ">
            <code class="language-bash">
              curl -H 'x-api-key: abc123def456' \ -f
              https://sdk.photoroom.com/v1/segment \ -F
              'image_file=@/absolute/path/to/image.jpg' \ -o
              photoroom-result.png
            </code>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default APIDocumentation;
