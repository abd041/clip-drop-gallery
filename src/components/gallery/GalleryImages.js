import React, { useState } from "react";
import { Images } from "./ImageList";
const GalleryImages = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseMove = (e) => {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnterTooltip = () => {
        setShowTooltip(true);
    };

    const handleMouseLeaveTooltip = () => {
        setShowTooltip(false);
    };
    const handleMouseEnter = (index) => {
        console.log(index, "indexindex");
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <section class="gallery-section-wrap">
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
            {Images?.map((img, i) => {
                return (
                    <div class="gallery-image-wrapper" key={i}>
                        <img
                            src={img.src}
                            alt="image"
                            className={i == hoveredIndex ? "images-hover" : ""}
                            onMouseEnter={() => handleMouseEnter(i)}
                            onMouseLeave={handleMouseLeave}
                        />
                        <div className={i == hoveredIndex ? "hover-effect" : "d-none"}>
                            <h1>{img.title}</h1>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default GalleryImages;
