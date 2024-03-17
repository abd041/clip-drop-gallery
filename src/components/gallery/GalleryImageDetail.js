import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GallerySidebar from "../../components/gallery/GallerySidebar";
import GalleryDetail from "../gallerydetail/GalleryDetail";

const GalleryImageDetail = () => {
    return (
        <div style={{height:"100vh" , overflow:"hidden"}}> 
            <Container fluid>
                <Row className="gallery-container-wrapper">
                    <Col lg={2}>
                        <GallerySidebar />
                    </Col>
                    <Col lg={10}>
                        <GalleryDetail />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GalleryImageDetail