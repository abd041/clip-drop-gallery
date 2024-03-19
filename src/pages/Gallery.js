import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/gallery/gallery.css";
import GalleryImages from "../components/gallery/GalleryImages";
import GallerySidebar from "../components/gallery/GallerySidebar";
const Gallery = () => {
  return (
    <div>
      <Container fluid>
        <Row className="gallery-container-wrapper">
          <Col lg={2}>
            <GallerySidebar className="px-0" />
          </Col>
          <Col lg={10}>
            <GalleryImages />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
