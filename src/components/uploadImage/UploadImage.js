import React, { useState, useRef } from "react";
import DislikeModal from "../modals/DislikeModal";
import "./uploadImage.css";
function UploadImage() {
  const [ImageUpload, setImageUpload] = useState(
    "https://static.clipdrop.co/web/enhance/example/example-1-original.jpeg"
  );
  const [ImageChange, setImageChange] = useState("");
  const [dislikemodal, setDislikemodal] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const myRef = useRef(null);
  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImageChange(reader.result);
      };

      reader.readAsDataURL(file);
    }

    // do something with the selected file
  }

  const handleModalOpen = () => {
    setDislikemodal(true);
  };

  const handMoalClose = () => {
    setDislikemodal(false);
  };

  console.log(ImageChange);
  const handleImageUpload = (img) => {
    setImageUpload(img);
  };

  const handleImageChange = () => {
    setImageUpload(ImageChange);
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section class="uploadImage-wrapper">
        <div class="uploadImage-div-wrapper">
          <div class="uploadImage-Image-wrapper">
            <div class="uploadImage-Image-change-wrapper">
              {ImageChange ? (
                <img src={ImageChange} height={40} width={40} />
              ) : (
                <p class="uploadImage-text-wrapper">
                  Cliquez ou faites glisser et déposez une image de vos fichiers
                  pour commencer
                </p>
              )}

              <input
                // multiple=""
                type="file"
                class="uploadImage-input-wrapper"
                style={{ opacity: 0 }}
                // accept="image/png,image/jpeg,image/webp"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div class="uploadImage-lowe-banner-wrapper">
            <div class="uploadImage-mobile-lowe-banner-wrapper">
              <div
                class="uploadImage-lower-flex-wrapper"
                style={{ width: "160px", height: "36px" }}
              >
                <div
                  class="uploadImage-drop-shadow"
                  style={{
                    width: "86px",
                    transform: "translateX(-3px) translateZ(0px)",
                  }}
                ></div>
                <button
                  class="uploadImage-drop-btn"
                  style={{ width: "80px", left: "0px" }}
                >
                  Smooth
                </button>
                <button
                  class="uploadImage-drop-btn-detailed"
                  style={{ width: "80px", left: "80px" }}
                >
                  Detailed
                </button>
              </div>
            </div>
            <div class="uploadImage-small-btn-detailed">
              <div
                class="uploadImage-lower-flex-wrapper"
                style={{ width: "200px", height: "36px" }}
              >
                <div
                  class="uploadImage-first-btn-detailed"
                  style={{
                    width: "56px",
                    transform: " translateX(-3px) translateZ(0px)",
                  }}
                ></div>
                <button
                  class="uploadImage-drop-btn"
                  style={{ width: "50px", left: "0px" }}
                >
                  x2
                </button>
                <button
                  class="uploadImage-drop-btn-detailed"
                  style={{ width: "50px", left: "50px" }}
                >
                  x4
                </button>
                <button
                  class="uploadImage-drop-btn-detailed"
                  style={{ width: "50px", left: "100px" }}
                >
                  x8
                </button>
                <button
                  class="uploadImage-drop-btn-detailed"
                  style={{ width: "50px", left: "150px" }}
                >
                  x16
                </button>
              </div>
            </div>
            <div class="uploadImage-small-btn-detailed justify-content-sm-end">
              <button
                class="uploadImage-upscale-btn-detailed"
                onClick={handleImageChange}
              >
                Upscale
              </button>
            </div>
          </div>
          <div class="uploadImage-example-btn-detailed ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              width="32"
              height="32"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 13l-5 5m0 0l-5-5m5 5V6"
              ></path>
            </svg>
            <p
              style={{
                color: "#4B5563",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                fontWeight: "500",
              }}
            >
              Ou essayez avec un exemple
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              height: "100px",
              width: "100%",
              overflowX: "hidden",

              height: "130px",
            }}
          >
            <img
              alt="example-1"
              loading="lazy"
              width="130px"
              height="130px"
              decoding="async"
              data-nimg="1"
              class="uploadImage-handleImageupload"
              src="https://static.clipdrop.co/web/enhance/example/example-1-original.jpeg"
              style={{ color: "transparent", overflowX: "hidden" }}
              onClick={() =>
                handleImageUpload(
                  "https://static.clipdrop.co/web/enhance/example/example-1-original.jpeg"
                )
              }
            />
            <img
              alt="example-2"
              loading="lazy"
              width="130px"
              height="130px"
              decoding="async"
              data-nimg="1"
              class="uploadImage-handleImageupload"
              src="https://static.clipdrop.co/web/enhance/example/example-2-original.jpeg"
              style={{ color: "transparent", overflowX: "hidden" }}
              onClick={() =>
                handleImageUpload(
                  "https://static.clipdrop.co/web/enhance/example/example-2-original.jpeg"
                )
              }
            />
            <img
              alt="example-3"
              loading="lazy"
              width="130px"
              height="130px"
              decoding="async"
              data-nimg="1"
              class="uploadImage-handleImageupload"
              src="https://static.clipdrop.co/web/enhance/example/example-3-original.jpeg"
              style={{ color: "transparent", overflowX: "hidden" }}
              onClick={() =>
                handleImageUpload(
                  "https://static.clipdrop.co/web/enhance/example/example-3-original.jpeg"
                )
              }
            />
            <img
              alt="example-4"
              loading="lazy"
              width="130px"
              height="130px"
              decoding="async"
              data-nimg="1"
              class="uploadImage-handleImageupload"
              src="https://static.clipdrop.co/web/enhance/example/example-4-original.jpeg"
              style={{ color: "transparent", overflowX: "hidden" }}
              onClick={() =>
                handleImageUpload(
                  "https://static.clipdrop.co/web/enhance/example/example-4-original.jpeg"
                )
              }
            />
          </div>
        </div>
      </section>

      <section
        id="enhance-render"
        style={{
          display: "flex",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          marginTop: "6rem",
          flex: "1 1 0%",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        ref={myRef}
      >
        <div class="image-upload-main-wrapper">
          <div
            // class="w-full h-full flex relative"
            style={{
              display: "flex",
              position: "relative",
              width: "100%",
              height: "445px",
            }}
            // style="width: 740px;height: 445px"
          >
            <div
              // class="relative h-full rounded-xl overflow-hidden w-full"
              style={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "0.75rem",
              }}
            >
              <img
                // class="w-full h-full rounded-xl object-contain transition-opacity"
                style={{
                  objectFit: "contain",
                  height: "100%",
                  borderRadius: "0.75rem",
                }}
                alt="Original"
                // style="aspect-ratio: 1.6645 / 1; clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%);"
                src={ImageUpload}
              />
              {/* <div>
              
              </div> */}
              <div
                // class="absolute top-0 bottom-0 left-0 right-0"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  bottom: "0",
                  left: "0",
                }}
                // style="clip-path: polygon(87.75% 0px, 100% 0px, 100% 100%, 87.75% 100%);"
              >
                {/* <img
                  // class="absolute top-0 w-full h-full rounded-xl object-contain opacity-100"
                  style={{
                    objectFit: "contain",
                    position: "absolute",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    borderRadius: "0.75rem",
                    opacity: "1",
                  }}
                  alt="Result"
                  // style="aspect-ratio: 1.6645 / 1;"
                  src="https://clipdrop.co/59607845-4aef-4d6e-8b63-da0bae9cf7fd"
                /> */}
              </div>
              <div
                // class="absolute w-0.5 bg-white h-full top-0"
                style={{
                  position: "absolute",
                  top: "0",
                  // backgroundColor: "#ffffff",
                  width: "0.125rem",
                  height: "100%",
                  left: "calc(87.75% - 1px)",
                }}
                // style=""
              ></div>
            </div>
            <button
              class=""
              style={{
                display: "flex",
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
                padding: "0",
                transitionProperty: "all",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                fontWeight: "500",
                justifyContent: "center",
                alignItems: "center",
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "0.75rem",
                userSelect: "none",
                gap: "0.375rem",
                background: "rgb(201 215 245)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="4"
                stroke="currentColor"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div
              class=""
              style={{
                position: "absolute",
                right: "0.75rem",
                bottom: "0.75rem",
              }}
            >
              <div
                class=""
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  class=""
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div class="" style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      class=""
                      style={{
                        display: "flex",
                        padding: "0",
                        transitionProperty: "all",
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                        fontWeight: "500",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "0.75rem",
                        userSelect: "none",
                        gap: "0.375rem",
                        background: "rgb(201 215 245)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        height="24"
                        width="24"
                      >
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                      </svg>
                    </button>
                    <button
                      class=""
                      style={{
                        display: "flex",
                        padding: "0",
                        transitionProperty: "all",
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                        fontWeight: "500",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "0.75rem",
                        userSelect: "none",
                        gap: "0.375rem",
                        background: "rgb(201 215 245)",
                      }}
                      onClick={handleModalOpen}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        height="24"
                        width="24"
                      >
                        <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="position-relative">
                    <div>
                      <button
                        class=""
                        style={{
                          display: "flex",
                          padding: "0",
                          transitionProperty: "all",
                          fontSize: "0.875rem",
                          lineHeight: "1.25rem",
                          fontWeight: "500",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "2.5rem",
                          height: "2.5rem",
                          borderRadius: "0.75rem",
                          userSelect: "none",
                          gap: "0.375rem",
                          background: "rgb(201 215 245)",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          width="24"
                          height="24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <button
                    class=""
                    style={{
                      // background: "rgb(201 215 245)",
                      background: "rgb(28 96 246)",
                      display: "flex",
                      paddingTop: "0.75rem",
                      paddingBottom: "0.75rem",
                      paddingLeft: "1.25rem",
                      paddingRight: "1.25rem",
                      transitionProperty: "all",
                      color: "#F3F4F6",
                      fontSize: "0.875rem",
                      lineHeight: "1.25rem",
                      fontWeight: "500",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "2.5rem",
                      borderRadius: "0.75rem",
                      userSelect: "none",
                      gap: "0.375rem",
                    }}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                right: "0.5rem",
                top: "-3.25rem",
              }}
            >
              <div className={`switch-button ${isChecked ? "checked" : ""}`}>
                <input
                  type="checkbox"
                  id="switch"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <label htmlFor="switch"></label>
              </div>
            </div>
          </div>
        </div>
        <DislikeModal
          dislikemodal={dislikemodal}
          handMoalClose={handMoalClose}
          handleModalOpen={handleModalOpen}
        />
      </section>
    </>
  );
}

export default UploadImage;
