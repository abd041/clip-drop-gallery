import React, { useState } from "react";
import "./prompt.css";
import { PromptData, initialAspectsRatio } from "../../data/PromptData";

function ExamplePrompt() {
  const wrapperStyle = {
    display: "inline-flex",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingTop: "0.5rem",
    width: "100%",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    backgroundColor: "rgb(244, 244, 245)",
    borderTop: "2px solid white",
  };

  const hidewrapperStyle = {
    display: "none",
  };
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
                <button class="prompomy-style-button" type="button">
                  Reset
                </button>
                <button class="prompt-generate-button" type="submit">
                  Generate
                </button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: "0.5rem",
              }}
            >
              <button
                class="prompomy-style-button-next"
                type="button"
                style={{ position: "relative", top: "0" }}
                onClick={() => {
                  setShowtools(!showtools);
                }}
              >
                {aspectText}
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
                {/* <div
                  class={
                    showtools
                      ? "d-flex flex-column opacity-100 whitespace-nowrap rounded-xl overflow-y-auto shadow-lg customer"
                      : "d-none"
                  }
                  style={{
                    background: "white",
                    height: "300px",
                    overflowY: "scroll",
                  }}
                >
                  <div className={"d-flex flex-column my-1"}>
                    {initialAspectsRatio.map((data) => {
                      return (
                        <button
                          type="button"
                          class="prompt-card-button-main-wrapper"
                          onClick={() => handleAspectRatio(data)}
                        >
                          {`${data.name} ${data.x} : ${data.y}`}
                          <p class="prompt-card-para-main-wrapper "></p>
                        </button>
                      );
                    })}
                  </div>
                </div> */}
              </button>
              <button
                class="prompomy-style-button-next"
                type="button"
                onClick={() => setshowStyles(!showStyles)}
              >
                {buttonText}
              </button>
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
            <div
              class={showtools ? "prompt-card-box-aspect-wrapper" : "d-none"}
              style={{ verticalAlign: "middle" }}
            >
              {/* backgr "red" */}
              {initialAspectsRatio.map((data) => {
                return (
                  <button
                    type="button"
                    // class="prompt-card-button-main-wrapper"
                    style={{ verticalAlign: "middle" }}
                    onClick={() => handleAspectRatio(data)}
                  >
                    <div
                      class="prompt-card-aspect-ratio-main-wrapper p-1 "
                      alt="example style"
                      style={{ verticalAlign: "middle" }}
                      // style={{
                      //   border:
                      //     buttonText == data.text
                      //       ? "3px solid rgb(28 96 246)"
                      //       : "",
                      // }}
                    >
                      {`${data.name} ${data.x} : ${data.y}`}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ExamplePrompt;
