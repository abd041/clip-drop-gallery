import React, { useState } from "react";
import "./usecases.css";
function UseCasesMainPage() {
  const [firstImage, setFirstImage] = useState(true);
  const [secondImage, setSecondImage] = useState(false);
  const [thirdImage, setthirdImage] = useState(false);

  const handlefirstImage = () => {
    setFirstImage(true);
    setSecondImage(false);
    setthirdImage(false);
  };
  const handleSecondImage = () => {
    setFirstImage(false);
    setSecondImage(true);
    setthirdImage(false);
  };

  const handleThirdImage = () => {
    setFirstImage(false);
    setSecondImage(false);
    setthirdImage(true);
  };
  return (
    <section
      id="use-cases-section"
      style={{
        display: "flex",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        marginTop: "6rem",
        paddingTop: "6rem",
        marginBottom: "1.5rem",
        backgroundColor: "#E5E7EB",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div className="usecasesmainpage-wrapper">
        <h2 className="text-3xl fw-bold text-gray-800  text-uppercase text-center mb-12">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Use case</font>
          </font>
        </h2>
        <div className="usecasesmainpage-firstimage-wrapper">
          <div className="d-flex flex-column gap-6">
            <div className="d-flex gap-3 flex-wrap flex-row justify-content-center">
              <button
                onClick={handlefirstImage}
                className="usecasesmainpage-firstimage--main-wrapper"
              >
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Eliminate compression
                  </font>
                </font>
              </button>
              <button
                onClick={handleSecondImage}
                className="usecasesmainpage-secondimage--main-wrapper"
              >
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>denoise</font>
                </font>
              </button>
              <button
                onClick={handleThirdImage}
                className="usecasesmainpage-thirdimage--main-wrapper"
              >
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Sharpness</font>
                </font>
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-hidden d-flex flex-col flex-wrap">
            <div
              className={
                firstImage
                  ? "w-100 h-100 transition-transform duration-700"
                  : "d-none"
              }
              style={{ transform: "translateX(0%)" }}
            >
              <div className="h-100 d-flex flex-column justify-content-start">
                <p className="usecasemainpage-clipdrop">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      ClipDrop Image upscaler can improve image quality from
                      compressed images
                    </font>
                  </font>
                </p>
                <div className="usecasemainpage-clipdrop-wrapper">
                  <div className="position-relative h-100 rounded-xl overflow-hidden">
                    <div>
                      <img
                        alt="ClipDrop product photography use case"
                        loading="lazy"
                        width="1069"
                        height="800"
                        decoding="async"
                        data-nimg="1"
                        className="usecasesmainpage-images"
                        src="https://static.clipdrop.co/web/enhance/use-cases/use-case-1-original.jpg"
                        style={{
                          height: "auto",
                          width: "100%",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div
                      className="position-absolute top-0 bottom-0 left-0 right-0"
                      style={{
                        clipPath:
                          "polygon(13.56% 0px, 100% 0px, 100% 100%, 13.56% 100%)",
                      }}
                    >
                      <img
                        alt="Product photography use case result"
                        loading="lazy"
                        width="1069"
                        height="800"
                        decoding="async"
                        data-nimg="1"
                        className="usecasesmainpage-images"
                        src="https://static.clipdrop.co/web/enhance/use-cases/use-case-1-result.jpg"
                        style={{
                          color: "transparent",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                    <div
                      className="absolute w-0.5 bg-white h-full top-0"
                      style={{ left: "calc(13.56% - 1px)" }}
                    ></div>
                    {/* <input
                      className="image-comparison-slider"
                      type="range"
                      step="0.01"
                      min="0"
                      max="100"
                      value="90"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                secondImage
                  ? "w-100 h-100 transition-transform duration-700"
                  : "d-none"
              }
              style={{ transform: "translateX(0%)" }}
            >
              <div className="h-100 d-flex flex-column justify-content-start">
                <p className="usecasemainpage-clipdrop">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      ClipDrop denoises images by increasing resolution with
                      minimal loss of sharpness and fidelity.
                    </font>
                  </font>
                </p>
                <div className="usecasemainpage-clipdrop-wrapper">
                  <div className="position-relative h-100 rounded-xl overflow-hidden">
                    <div>
                      <img
                        alt="ClipDrop product photography use case"
                        loading="lazy"
                        width="1001"
                        height="755"
                        decoding="async"
                        data-nimg="1"
                        className="usecasesmainpage-images"
                        src="https://static.clipdrop.co/web/enhance/use-cases/use-case-2-original.jpg"
                        style={{
                          color: "transparent",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                    <div
                      className="position-absolute top-0 bottom-0 left-0 right-0"
                      style={{
                        clipPath:
                          "polygon(45.4% 0px, 100% 0px, 100% 100%, 45.4% 100%)",
                      }}
                    >
                      <img
                        alt="Product photography use case result"
                        loading="lazy"
                        width="1001"
                        height="755"
                        decoding="async"
                        data-nimg="1"
                        className="usecasesmainpage-images"
                        src="https://static.clipdrop.co/web/enhance/use-cases/use-case-2-result.jpg"
                        style={{
                          color: "transparent",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                    <div
                      className="absolute w-0.5 bg-white h-full top-0"
                      style={{ left: "calc(45.4% - 1px)" }}
                    ></div>
                    {/* <input
                      className="image-comparison-slider"
                      type="range"
                      step="0.01"
                      min="0"
                      max="100"
                      value="90"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                thirdImage
                  ? "w-100 h-100 transition-transform duration-700"
                  : "hidden"
              }
              style={{ transform: "translateX(0%)" }}
            >
              <div className="h-100 d-flex flex-column justify-content-start">
                <p className="usecasemainpage-clipdrop">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      ClipDrop Image upscaler makes images, especially photos
                      and screenshots, look crisper and cleaner and less
                      pixelated.{" "}
                    </font>
                    <font style={{ verticalAlign: "inherit" }}>
                      And it's super easy to use.{" "}
                    </font>
                    <font style={{ verticalAlign: "inherit" }}>
                      Just drop your image and that's it!
                    </font>
                  </font>
                </p>
                <div className="usecasemainpage-clipdrop-wrapper">
                  <div className="position-relative h-100 rounded-xl overflow-hidden">
                    <div>
                      <img
                        alt="ClipDrop product photography use case"
                        loading="lazy"
                        width="512"
                        height="686"
                        decoding="async"
                        data-nimg="1"
                        className="usecasesmainpage-images"
                        src="https://static.clipdrop.co/web/enhance/use-cases/use-case-3-original.jpg"
                        style={{
                          color: "transparent",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                    <div
                      className="position-absolute top-0 bottom-0 left-0 right-0"
                      style={{
                        clipPath:
                          "polygon(44.5813% 0px, 100% 0px, 100% 100%, 44.5813% 100%)",
                      }}
                    >
                      <img
                        alt="Product photography use case result"
                        loading="lazy"
                        width="512"
                        height="686"
                        decoding="async"
                        data-nimg="1"
                        className="usecasesmainpage-images"
                        src="https://static.clipdrop.co/web/enhance/use-cases/use-case-3-result.jpg"
                        style={{
                          color: "transparent",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                    <div
                      className="absolute w-0.5 bg-white h-full top-0"
                      style={{ left: "calc(44.5813% - 1px)" }}
                    ></div>
                    {/* <input
                      className="image-comparison-slider"
                      type="range"
                      step="0.01"
                      min="0"
                      max="100"
                      value="90"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseCasesMainPage;
