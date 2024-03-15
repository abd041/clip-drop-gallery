import React, { useState } from "react";
import "./prompt.css";
import { PromptData, initialAspectsRatio } from "../../data/PromptData";

function Prompt() {
  const [buttonText, setbuttonText] = useState("No style");
  const [showStyles, setshowStyles] = useState(false);
  const [showtools, setShowtools] = useState(false);
  const [aspectText, setAspectText] = useState("Aspect Ratio");
  const handleTextChange = (data) => {
    setbuttonText(data.text);
    setshowStyles(false);
  };

  const handleNostyelTextChange = () => {
    setbuttonText("No style");
  };

  const handleAspectRatio = (data) => {
    console.log("hello");
    setAspectText(`${data.name} ${data.x} : ${data.y}`);
    setShowtools(false);
  };
  return (
    <section class="prompt-main-wrapper">
      <div class="prompt-form-main-wrapper ">
        <form autocomplete="off" class="prompt-form-wrapper">
          <div class="prompt-input-main-wrapper">
            <div class="prompt-input-wrapper">
              <input
                type="text"
                required=""
                name="input-prompt"
                placeholder="Enter your prompt"
                autocomplete="false"
                role="presentation"
                class="prompt-input-filed"
                value=""
              />
              <div class="prompt-both-btn-wrapper">
                <button
                  class="prompomy-style-button"
                  type="button"
                  style={{ position: "relative", top: "0" }}
                  onClick={() => setShowtools(!showtools)}
                >
                  {aspectText}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    width="20"
                    height="20"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                  <div
                    class={
                      showtools
                        ? "d-flex flex-column opacity-100  whitespace-nowrap rounded-xl overflow-y-auto shadow-lg customer"
                        : "d-none"
                    }
                    style={{
                      background: "white",
                      height: "300px",
                      overflowY: "scroll",
                      width: "max-content",
                    }}
                  >
                    <div className={"d-flex flex-column my-1"}>
                      {initialAspectsRatio.map((data) => {
                        return (
                          <button
                            className="sign-in-btn-icon-styling-prompt sign-in-btn-icon-styling-text"
                            type="button"
                            onClick={() => handleAspectRatio(data)}
                          >
                            {`${data.name} ${data.x} : ${data.y}`}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </button>
                <button class="prompomy-style-button" type="button">
                  Reset
                </button>
              </div>
              <div class="prompt-both-btn-wrapper">
                <button
                  class="prompomy-style-button"
                  type="button"
                  onClick={() => setshowStyles(!showStyles)}
                >
                  {buttonText}
                </button>
                <button class="prompt-generate-button" type="submit">
                  Generate
                </button>
              </div>
            </div>
            <div class={showStyles ? "prompt-card-box-main-wrapper" : "d-none"}>
              <button
                type="button"
                class="prompt-card-button-main-wrapper"
                onClick={handleNostyelTextChange}
              >
                <div
                  class="prompt-card-div-main-wrapper"
                  style={{
                    border:
                      buttonText == "No style"
                        ? "3px solid rgb(28 96 246)"
                        : "",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    width="32"
                    height="32"
                    style={{ color: "white" }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p class="prompt-card-para-main-wrapper ">No style</p>
              </button>
              {/* backgr "red" */}
              {PromptData.map((data) => {
                const { text } = data;
                return (
                  <button
                    type="button"
                    class="prompt-card-button-main-wrapper"
                    onClick={() => handleTextChange(data)}
                  >
                    <img
                      src={data.imagesource}
                      class="prompt-card-image-main-wrapper"
                      alt="example style"
                      style={{
                        border:
                          buttonText == data.text
                            ? "3px solid rgb(28 96 246)"
                            : "",
                      }}
                    />
                    <p class="prompt-card-para-main-wrapper ">{data.text}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </form>
      </div>
      <div class="prompt-click-icon">
        <div class="prompt-text-icon-wrapper">
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
          <p class="prompomt-headings-wrapper ">Or click on an example below</p>
        </div>
        <div class="prompt-all-text-wrapper">
          <button class="prompomt-button-wrapper ">
            <p class="prompomt-headings-wrapper ">
              Abstract shape Windows 42 wallpaper (No style)
            </p>
          </button>
          <button class="prompomt-button-wrapper ">
            <p class="prompomt-headings-wrapper ">Canyon desert (Cinematic)</p>
          </button>
          <button class="prompomt-button-wrapper ">
            <p class="prompomt-headings-wrapper ">Kingfisher (Origami)</p>
          </button>
          <button class="prompomt-button-wrapper ">
            <p class="prompomt-headings-wrapper ">
              Gourmet burger (Photographic)
            </p>
          </button>
          <button class="prompomt-button-wrapper ">
            <p class="prompomt-headings-wrapper ">
              Mecha fighting in space (Digital Art)
            </p>
          </button>
          <button class="prompomt-button-wrapper ">
            <p class="prompomt-headings-wrapper ">
              A hero with a sword (Fantasy Art)
            </p>
          </button>
          <button class="prompomt-button-wrapper ">
            <p class="prompomt-headings-wrapper ">
              Cozy furniture living room with plants, ikea style (No style)
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Prompt;
