import React, { useState, useEffect } from "react";
import { Images } from "../gallery/ImageList";
import "./GalleryDetail.css";
import { useParams } from "react-router-dom";
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
        setShowTooltip(true);
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
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnterTooltip}
                onMouseLeave={handleMouseLeaveTooltip}
            >
                <input
                    type="text"
                    className="gallery-top-search-input"
                    disabled
                    placeholder="Imagine... (coming soon)"
                />
                {showTooltip && (
                    <div
                        className="gallery-top-search-tooltip"
                        style={{
                            position: "absolute",
                            left: tooltipPosition.x - 300,
                            top: tooltipPosition.y,
                        }}
                    >
                        <h3>Lorem Ismum</h3>
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
            </div>
            <div className="gallery-right-side-box" style={{ display: "flex", height: "100vh", overflowY: "scroll" }} onScroll={handleScroll}>
                <div className="gallery-left-side-box">
                    <div className="gallery-left-side-image">
                        <img src={Images[currentImage].src} alt="image" />
                    </div>
                </div>
                <div className="gallery-side-images-main">
                    {Images?.map((img, i) => (
                        <div className={currentImage === i ? "gallery-side-images-scale" : "gallery-side-images"} key={i}>
                            <img src={img.src} alt="image" onClick={() => handleImageClick(i)} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryDetail;
