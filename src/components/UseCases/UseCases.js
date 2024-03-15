import React, { useState } from "react";
import "./usecases.css";

import { UseCasesData, UseCaseMainData } from "../../data/UseCasesData";
function UseCases() {
  const [anarray, setArray] = useState(
    "An explosion of colorful powder (No style)"
  );
  const [newImage, setNewImage] = useState(
    "https://static.clipdrop.co/web/stable-diffusion/use-cases/1_2.jpg"
  );

  const [showImageBox, setShowImageBox] = useState([
    {
      id: 1,
      title:
        "You will never need to take photos again, create as many images as you want. It is possible to generate the exact image you need.",
      image:
        "https://static.clipdrop.co/web/stable-diffusion/use-cases/1_2.jpg",
      imageText: "An explosion of colorful powder (No style)",
      image1:
        "https://static.clipdrop.co/web/stable-diffusion/use-cases/1_1.jpg",
      image2:
        "https://static.clipdrop.co/web/stable-diffusion/use-cases/2_1.jpg",
      image3:
        "https://static.clipdrop.co/web/stable-diffusion/use-cases/1_2.jpg",
      image4:
        "https://static.clipdrop.co/web/stable-diffusion/use-cases/1_4.jpg",
    },
  ]);

  const handleButtonChange = (data) => {
    const updatedArray = UseCaseMainData.filter((da) => da.id === data.id);
    const updatedImageText = updatedArray[0].imageText;
    setArray(updatedImageText);
    const updatedImage = updatedArray[0].image;
    setNewImage(updatedImage);
    setShowImageBox(updatedArray);
  };

  return (
    <section id="text-to-image-usecase" class="use-cases-main-wrapper">
      <div class="useCases-heigth-weight">
        <h2 class="useCases-text-heading">Use-cases</h2>
        <div class="useCase-main-button-wrapper">
          <div class="useCase-main-button-main">
            <div class="usecaes-data-map">
              {UseCasesData.map((data, index) => {
                return (
                  <button
                    className="usecases-data-map-button"
                    key={index}
                    onClick={() => handleButtonChange(data)}
                  >
                    {data.heading}
                  </button>
                );
              })}
            </div>
          </div>
          <div class="imagebox-main-wrapper">
            {showImageBox.length != 0
              ? showImageBox.map((data, key) => {
                  return (
                    <div
                      class="title-main-wrapper"
                      // style={{ transform: "translateX(-400%)" }}
                    >
                      <div class="title-second-wrapper">
                        <p class="title-wrapper">{data.title}</p>
                        <div class="usecases-image-main-wrapper">
                          <img
                            src={newImage}
                            alt="An explosion of colorful powder"
                            class="usecases-image-main-tag"
                            style={{
                              position: "absolute",
                              objectFit: "contain",
                              borderRadius: "0.75rem",
                              opacity: "1",
                            }}
                          />
                        </div>
                        <div class="usecase-input-field">
                          <p class="usecase-input-filed-text">{anarray}</p>
                          <button class="usecase-try-it-class py-3 px-3">
                            Try it
                          </button>
                        </div>
                        <div class="usecase-image1-main-wrapper">
                          <button class="usecase-image1-button-main-wrapper">
                            <div>
                              <img
                                alt="An explosion of colorful powder"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                class="object-cover relative"
                                style={{
                                  color: "transparent",
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "cover",
                                  position: "relative",
                                  border: "1px solid",
                                  borderRadius: "10%",
                                }}
                                src={data.image1}
                                onClick={() => setNewImage(data.image1)}
                              />
                            </div>
                          </button>
                          <button class="usecase-image1-button-main-wrapper">
                            <div>
                              <img
                                alt="An explosion of colorful powder"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                class="object-cover relative"
                                style={{
                                  color: "transparent",
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "cover",
                                  position: "relative",
                                  border: "1px solid",
                                  borderRadius: "10%",
                                }}
                                src={data.image2}
                                onClick={() => setNewImage(data.image2)}
                              />
                            </div>
                          </button>
                          <button class="usecase-image1-button-main-wrapper">
                            <div>
                              <img
                                alt="An explosion of colorful powder"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                class="object-cover relative"
                                style={{
                                  color: "transparent",
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "cover",
                                  position: "relative",
                                  border: "1px solid",
                                  borderRadius: "10%",
                                }}
                                src={data.image3}
                                onClick={() => setNewImage(data.image1)}
                              />
                            </div>
                          </button>
                          <button class="usecase-image1-button-main-wrapper">
                            <div>
                              <img
                                alt="An explosion of colorful powder"
                                loading="lazy"
                                width="64"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                class="object-cover relative"
                                style={{
                                  color: "transparent",
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "cover",
                                  position: "relative",
                                  border: "1px solid",
                                  borderRadius: "10%",
                                }}
                                src={data.image4}
                                onClick={() => setNewImage(data.image1)}
                              />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseCases;
