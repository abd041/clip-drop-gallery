import React, { useState, useEffect, useRef } from "react";
import { Images } from "../gallery/ImageList";
import "./GalleryDetail.css";
import { Link, useParams } from "react-router-dom";
import { boxIcon } from "../../data/SVG";
const GalleryDetail = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [showTooltip, setShowTooltip] = useState(false);
    const params = useParams();
    const { id } = params
    useEffect(() => {
        setCurrentImage(id)
    }, [
        id
    ])

    const handleImageClick = (ind) => {
        setCurrentImage(ind);
    };

    const handleMouseMove = (e) => {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
    };


    const handleMouseEnterTooltip = () => {
        setShowTooltip(true)
    };

    const handleMouseLeaveTooltip = () => {
        setShowTooltip(false);
    };

    const handleScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.target;
        const scrollFraction = scrollTop / (scrollHeight - clientHeight);
        const newIndex = Math.round((Images.length - 1) * scrollFraction);
        setCurrentImage(newIndex);
    };

    return (
        <section className="position-relative">
            <div
                className="gallery-top-search"

            >
                <div style={{ width: "100%" }} onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnterTooltip}
                    onMouseLeave={handleMouseLeaveTooltip}>
                    <input
                        type="text"
                        className="gallery-top-search-input"
                        disabled
                        placeholder="Imagine... (coming soon)"
                    />
                </div>
                {showTooltip && (
                    <div
                        className="gallery-top-search-tooltip"
                        style={{
                            position: "absolute",
                            left:
                                tooltipPosition.x > window.innerWidth - 500
                                    ? tooltipPosition.x - 700 // If tooltip position + 300px exceeds window width, set 'left' to 'auto'
                                    : tooltipPosition.x - 300, // Otherwise, set 'left' to tooltipPosition.x

                            top: tooltipPosition.y + "px",
                        }}


                    >
                        <h3 className="d-flex"><span style={{ width: "16px", height: "16px", marginRight: "8px" }}>{boxIcon}</span>Lorem Ismum</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesettino
                            make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                )}
                <div className="gallery-top-search-right">
                    <div className="cross-icon">
                        <Link to="/gallery">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" height="18" class=" shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>

                        </Link>
                    </div>
                </div>
            </div>

            <div className="gallery-right-side-box" style={{ display: "flex", height: "100vh", overflowY: "scroll", paddingTop: "16px" }} onScroll={handleScroll} >
                <div className="gallery-left-side-box">
                    <div className="gallery-left-side-image">
                        <img src={Images[currentImage].src} alt="image" />
                    </div>
                </div>
                <div className="gallery-left-side-box-text">
                    <div className="gallery-left-side-image-box">
                        <div className="galley-box-title">
                            <h1>hello world</h1>
                        </div>
                        <div className="galley-box-title">
                            <p>
                                vector drawing of a saturated black and white cute cat with big eyes on a white background, in the style of "Manu" and in a style similar to M frozen, a closeup shot, using simple flat vector shapes
                            </p>
                        </div>
                        <div className="galley-box-title">
                            <img src={Images[currentImage].src} alt="image" />
                        </div>
                        <div className="gallery-box-text-box">
                            <div className="gallery-box-text"><h4>chaos <span>12</span></h4></div>
                            <div className="gallery-box-text"><h4>ar <span>3:4</span></h4></div>
                            <div className="gallery-box-text"><h4>stylize <span>575</span></h4></div>
                        </div>
                    </div>
                </div>
                <div className="gallery-side-images-main">
                    {Images?.map((img, i) => (
                        <div className={currentImage === i ? "gallery-side-images-scale" : "gallery-side-images"} key={i} >
                            <img src={img.src} alt="image" onClick={() => handleImageClick(i)} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryDetail;
