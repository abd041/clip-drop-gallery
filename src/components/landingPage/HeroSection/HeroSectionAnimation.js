import React, { useState, useEffect } from "react";

function HeroSectionAnimation() {
  const imageArray = [
    "https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000",
    "https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-generative-fill-0-mobile-600x600?$pjpeg$&jpegSize=100&wid=600",
    "https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-effects-0-desktop-1000x1000?$pjpeg$&jpegSize=200&wid=1000",
  ];
  const TextArray = [ "Generate text to image" ,  "Generate Generative Fill" , "Generate Text Effects"
     ];
  const [imageBtn, setimageBtn] = useState(1);
  const [currentImage, setCurrentImage] = useState(imageArray[imageBtn - 1]);
  const [currentText,setCurrentText]=useState(TextArray[imageBtn - 1])

  useEffect(() => {
    const imageChangeTimeout = setTimeout(() => {
      setCurrentImage(imageArray[imageBtn - 1]);
      setCurrentText(TextArray[imageBtn - 1])
    }, 200); // Adjust the delay as needed for a smooth transition

    return () => clearTimeout(imageChangeTimeout);
  }, [imageBtn, imageArray]);

  return (
    <div className="col-12">
      <div className="hero-section-animation-image d-xl-flex justify-content-center hero-section-animation-main-wrapper">
        <img
          key={imageBtn}
          src={currentImage}
          alt={`Image ${imageBtn}`}
          className="image-transition"
        />
        <div className="hero-section-input-text-main-wrapper col-xl-8 col-11">
          <div>
            <input
              style={{ width: "100%" }}
              className="hero-section-input-text-area"
              placeholder={currentText}
            ></input>
            <button
              style={{ position: "absolute", top: "8px", right: "10px" }}
              className="hero-section-input-text-main-button"
            >
              Generate
            </button>
          </div>
        </div>
        <div className="hero-section-animation-text">
          <div>
            <button
              className={`d-flex hero-section-button-main-wrapper ${
                imageBtn === 1 ? "hero-section-button-main-wrapper-active" : ""
              }`}
              onClick={() => setimageBtn(1)}
            >
              Text to image
            </button>
          </div>
          <div>
            <button
              className={`d-flex hero-section-button-main-wrapper ${
                imageBtn === 2 ? "hero-section-button-main-wrapper-active" : ""
              }`}
              onClick={() => setimageBtn(2)}
            >
              Generative Fill
            </button>
          </div>
          <div>
            <button
              className={`d-flex hero-section-button-main-wrapper ${
                imageBtn === 3 ? "hero-section-button-main-wrapper-active" : ""
              }`}
              onClick={() => setimageBtn(3)}
            >
              Text Effects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionAnimation;
