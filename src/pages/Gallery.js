import React, { useState } from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import "../components/gallery/gallery.css";
import { Images } from "../components/gallery/ImageList";
import { HomePageClip, HomePageLogo, HomePageResponsvieClip, plusIcon } from "../data/SVG";
const Gallery = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [showTooltip, setShowTooltip] = useState(false);

    // Function to handle mouse move event
    const handleMouseMove = (e) => {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
    };

    // Function to handle mouse enter event
    const handleMouseEnterTooltip = () => {
        setShowTooltip(true);
    };

    // Function to handle mouse leave event
    const handleMouseLeaveTooltip = () => {
        setShowTooltip(false);
    };
    console.log(hoveredIndex, "hoveredIndex");
    const handleMouseEnter = (index) => {
        console.log(index, "indexindex");
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div>
            <Container fluid>
                <Row className="gallery-container-wrapper">
                    <Col lg={2}>
                        <div className="gallery-sidebar-wrapper">
                            <div>
                                <div class="d-flex align-items-center gap-2">

                                    <span className="d-none d-lg-block">{HomePageClip}</span>
                                    <span>
                                        <a
                                            href="/"
                                            class="d-flex align-items-center  opacity-100 text-decoration-none text-dark"
                                            style={{ transition: "all 0.2s ease" }}
                                        >
                                            <span class="d-none d-sm-inline font-weight-bold subpixel-antialiased">
                                                {HomePageResponsvieClip}
                                            </span>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <button className="sign-in-button side-bar-btn">
                                        <span className="sign-in-btn">Help</span>
                                    </button>
                                </div>
                                <div>
                                    <button className="sign-in-button side-bar-btn">
                                        <span className="sign-in-btn">Sign In</span>
                                    </button>
                                </div>
                                <div>
                                    <button className="sign-in-button side-bar-btn">
                                        <span className="sign-in-btn">Sign Up</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={10}>
                        <section class="gallery">
                            <div className="gallery-top-search" onMouseMove={handleMouseMove}
                                onMouseEnter={handleMouseEnterTooltip}
                                onMouseLeave={handleMouseLeaveTooltip}>
                                <input type="text" className="gallery-top-search-input" disabled placeholder="Imagine... (coming soon)" />
                                {showTooltip && (
                                    <div className="gallery-top-search-tooltip"
                                        style={{
                                            position: 'absolute',
                                            left: tooltipPosition.x - 300, // Add some offset from the mouse pointer
                                            top: tooltipPosition.y, // Add some offset from the mouse pointer
                                        }}>
                                        <h3>Lorem Ismum</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesettino make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>)}
                            </div>
                            {Images?.map((img, i) => {
                                return (
                                    <div class="image" key={i}>
                                        <img
                                            src={img.src}
                                            alt="image"
                                            className={i == hoveredIndex ? "hover" : ""}
                                            onMouseEnter={() => handleMouseEnter(i)}
                                            onMouseLeave={handleMouseLeave}
                                        />
                                        <div
                                            className={i == hoveredIndex ? "hover-effect" : "d-none"}
                                        >
                                            <h1>{img.title}</h1>
                                        </div>
                                    </div>
                                );
                            })}
                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Gallery;
