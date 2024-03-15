import React from "react";
import "./services.css";

function Services() {
  return (
    <section className="services-main-wrapper">
      <div className="services-main-wrapper-center">
        <h2 className="services-main-heading">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>
              Everything you need to create stunning visuals
            </font>
          </font>
        </h2>
        <div className="services-main-links-wrapper">
          <a className="services-main-main-wrapper" href="/cleanup">
            <div
              className="services-main-videp-wrapper"
              style={{ height: "13rem" }}
            >
              <video
                className="services-main-video-dimension"
                loop=""
                playsinline=""
              >
                <source
                  src="https://static.clipdrop.co/web/homepage/tools/Cleanup.webm#t=0.1"
                  type="video/webm"
                />
                <source
                  src="https://static.clipdrop.co/web/homepage/tools/Cleanup.mp4#t=0.1"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="services-main-clean-dimension">
              <div
                className="services-main-clean-round"
                style={{ width: "0px" }}
              >
                <div className="services-line-cllimp-backgound ">
                  <div
                    className="services-text-styling "
                    style={{ opacity: 0 }}
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>To clean</font>
                    </font>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-icons-styling-icos ">
              <div className="services-icons-div-styling">
                <svg
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.1665 39.5833H43.7499V43.75H24.9999L16.6707 43.7541L3.15611 30.2395C2.76555 29.8489 2.54614 29.319 2.54614 28.7666C2.54614 28.2142 2.76555 27.6844 3.15611 27.2937L25.2499 5.19579C25.4433 5.00209 25.6731 4.84843 25.926 4.74358C26.1789 4.63874 26.45 4.58478 26.7238 4.58478C26.9976 4.58478 27.2687 4.63874 27.5216 4.74358C27.7745 4.84843 28.0043 5.00209 28.1978 5.19579L44.4019 21.4C44.7925 21.7906 45.0119 22.3204 45.0119 22.8729C45.0119 23.4253 44.7925 23.9551 44.4019 24.3458L29.1665 39.5833ZM29.929 33.05L39.9832 22.8729L26.7249 9.61454L16.6707 19.7917L29.929 33.05Z"
                    fill="currentcolor"
                  ></path>
                </svg>
                <div className="line-clamp-1">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Cleanup</font>
                  </font>
                </div>
              </div>
              <p className="line-clamp-2 services-line-cllimp">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Remove objects or flaws from your images
                    automatically.
                  </font>
                </font>
              </p>
            </div>
          </a>
          <a className="services-main-main-wrapper" href="/remove-background">
            <div
              className="services-main-videp-wrapper"
              style={{ height: "13rem" }}
            >
              <video
                className="services-main-video-dimension"
                loop=""
                playsinline=""
              >
                <source
                  src="https://static.clipdrop.co/web/homepage/tools/RemoveBG.webm#t=0.1"
                  type="video/webm"
                />
                <source
                  src="https://static.clipdrop.co/web/homepage/tools/RemoveBG.mp4#t=0.1"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="services-main-clean-dimension">
              <div
                className="services-main-clean-round"
                style={{ width: "0px" }}
              >
                <div className="services-line-cllimp-backgound ">
                  <div
                    className="services-text-styling "
                    style={{ opacity: 0 }}
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Remove background
                      </font>
                    </font>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-icons-styling-icos ">
              <div className="services-icons-div-styling">
                <svg
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.9854 30.0146L21.7521 33.2479C22.7872 34.9922 23.1506 37.0541 22.7743 39.0472C22.3979 41.0403 21.3075 42.8277 19.7075 44.0743C18.1075 45.3209 16.1078 45.9413 14.0832 45.819C12.0586 45.6967 10.1481 44.8402 8.7098 43.41C7.27152 41.9798 6.40422 40.0742 6.27047 38.0503C6.13672 36.0264 6.7457 34.0232 7.98327 32.4162C9.22084 30.8092 11.002 29.7087 12.9929 29.3211C14.9838 28.9334 17.0478 29.2852 18.7979 30.3104L22.0375 27.0688L15.5292 20.5583C14.9433 19.9723 14.6142 19.1776 14.6142 18.349C14.6142 17.5203 14.9433 16.7256 15.5292 16.1396L16.2667 15.4021L24.9854 24.1208L33.7125 15.3938L34.4479 16.1313C35.0331 16.7172 35.3618 17.5115 35.3618 18.3396C35.3618 19.1677 35.0331 19.962 34.4479 20.5479L27.9312 27.0688L31.1833 30.3188C32.9305 29.2886 34.9935 28.931 36.9855 29.313C38.9775 29.695 40.7618 30.7904 42.0039 32.3939C43.246 33.9974 43.8607 35.9989 43.7326 38.0232C43.6046 40.0474 42.7427 41.9555 41.3085 43.3897C39.8742 44.824 37.9662 45.6859 35.9419 45.8139C33.9176 45.9419 31.9162 45.3273 30.3127 44.0851C28.7092 42.843 27.6138 41.0588 27.2317 39.0667C26.8497 37.0747 27.2073 35.0118 28.2375 33.2646L24.9854 30.0146V30.0146ZM39.5833 27.0833V10.4167H10.4167V27.0833H6.25V8.33333C6.25 7.7808 6.46949 7.25089 6.86019 6.86019C7.25089 6.46949 7.7808 6.25 8.33333 6.25H41.6667C42.2192 6.25 42.7491 6.46949 43.1398 6.86019C43.5305 7.25089 43.75 7.7808 43.75 8.33333V27.0833H39.5833ZM14.5833 41.6667C15.6884 41.6667 16.7482 41.2277 17.5296 40.4463C18.311 39.6649 18.75 38.6051 18.75 37.5C18.75 36.3949 18.311 35.3351 17.5296 34.5537C16.7482 33.7723 15.6884 33.3333 14.5833 33.3333C13.4783 33.3333 12.4185 33.7723 11.6371 34.5537C10.8557 35.3351 10.4167 36.3949 10.4167 37.5C10.4167 38.6051 10.8557 39.6649 11.6371 40.4463C12.4185 41.2277 13.4783 41.6667 14.5833 41.6667V41.6667ZM35.4167 41.6667C36.5217 41.6667 37.5815 41.2277 38.3629 40.4463C39.1443 39.6649 39.5833 38.6051 39.5833 37.5C39.5833 36.3949 39.1443 35.3351 38.3629 34.5537C37.5815 33.7723 36.5217 33.3333 35.4167 33.3333C34.3116 33.3333 33.2518 33.7723 32.4704 34.5537C31.689 35.3351 31.25 36.3949 31.25 37.5C31.25 38.6051 31.689 39.6649 32.4704 40.4463C33.2518 41.2277 34.3116 41.6667 35.4167 41.6667V41.6667Z"
                    fill="currentcolor"
                  ></path>
                </svg>
                <div className="line-clamp-1">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Remove background
                    </font>
                  </font>
                </div>
              </div>
              <p className="line-clamp-2 services-line-cllimp">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Cut out the main subject of your photos with incredible
                    quality.
                  </font>
                </font>
              </p>
            </div>
          </a>
          <a className="services-main-main-wrapper" href="/relight">
            <div
              className="services-main-videp-wrapper"
              style={{ height: "13rem" }}
            >
              <video
                className="services-main-video-dimension"
                loop=""
                playsinline=""
              >
                <source
                  src="https://static.clipdrop.co/web/homepage/tools/Relight.webm#t=0.1"
                  type="video/webm"
                />
                <source
                  src="https://static.clipdrop.co/web/homepage/tools/Relight.mp4#t=0.1"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="services-main-clean-dimension">
              <div
                className="services-main-clean-round"
                style={{ width: "0px" }}
              >
                <div className="services-line-cllimp-backgound ">
                  <div
                    className="services-text-styling "
                    style={{ opacity: 0 }}
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Rekindle</font>
                    </font>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-icons-styling-icos ">
              <div className="services-icons-div-styling">
                <svg
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.109 38.5833H25.3293C24.8652 36.5626 22.7715 34.9101 21.9121 33.8212C20.4405 31.9533 19.5183 29.7011 19.2516 27.324C18.9849 24.9469 19.3846 22.5416 20.4047 20.3852C21.4248 18.2288 23.0237 16.4091 25.0173 15.1355C27.011 13.862 29.3181 13.1865 31.6731 13.1869C34.0281 13.1873 36.3351 13.8635 38.3283 15.1377C40.3216 16.4119 41.9199 18.2322 42.9393 20.3889C43.9588 22.5456 44.3577 24.951 44.0903 27.3281C43.8228 29.7051 42.8999 31.957 41.4277 33.8244C40.5683 34.9117 38.4777 36.5642 38.0136 38.5833H33.234V30.6464H30.109V38.5833ZM37.9215 41.7581V43.3455C37.9215 44.1875 37.5922 44.995 37.0062 45.5904C36.4201 46.1857 35.6253 46.5202 34.7965 46.5202H28.5465C27.7177 46.5202 26.9228 46.1857 26.3367 45.5904C25.7507 44.995 25.4215 44.1875 25.4215 43.3455V41.7581H37.9215Z"
                    fill="currentcolor"
                  ></path>
                  <path
                    d="M18.3496 3.05319C18.8915 2.79595 19.5134 2.76452 20.0785 2.96582C20.6436 3.16711 21.1055 3.58464 21.3628 4.12655L24.2725 10.2564C24.5298 10.7983 24.5612 11.4202 24.3599 11.9853C24.1586 12.5504 23.7411 13.0124 23.1992 13.2696C22.6573 13.5268 22.0353 13.5583 21.4703 13.357C20.9052 13.1557 20.4432 12.7382 20.186 12.1962L17.2762 6.06639C17.019 5.52448 16.9875 4.90258 17.1888 4.33749C17.3901 3.77241 17.8077 3.31043 18.3496 3.05319ZM17.8323 28.3356C18.0896 28.8775 18.121 29.4994 17.9197 30.0645C17.7184 30.6296 17.3009 31.0916 16.759 31.3488L10.6291 34.2586C10.0872 34.5158 9.46532 34.5472 8.90024 34.3459C8.33515 34.1446 7.87318 33.7271 7.61594 33.1852C7.3587 32.6433 7.32727 32.0214 7.52856 31.4563C7.72986 30.8912 8.14739 30.4292 8.6893 30.172L14.8191 27.2622C15.3611 27.005 15.983 26.9736 16.548 27.1749C17.1131 27.3762 17.5751 27.7937 17.8323 28.3356ZM17.3941 19.6906C17.1927 20.2555 16.7753 20.7174 16.2335 20.9746C15.6917 21.2318 15.0699 21.2632 14.5049 21.0621L8.11689 18.7865C7.55162 18.5854 7.08941 18.168 6.83192 17.626C6.57444 17.0841 6.54279 16.4621 6.74392 15.8968C6.94506 15.3315 7.36251 14.8693 7.90444 14.6118C8.44637 14.3543 9.06839 14.3227 9.63366 14.5238L16.0226 16.8014C16.5876 17.0027 17.0494 17.4202 17.3066 17.962C17.5638 18.5038 17.5953 19.1256 17.3941 19.6906Z"
                    fill="currentcolor"
                  ></path>
                </svg>
                <div className="line-clamp-1">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Relight</font>
                  </font>
                </div>
              </div>
              <p className="line-clamp-2 services-line-cllimp">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Re-illuminate your images with sublime lights.
                  </font>
                </font>
              </p>
            </div>
          </a>
          <a className="services-main-main-wrapper" href="/stable-diffusion">
            <div
              className="services-main-videp-wrapper"
              style={{ height: "13rem" }}
            >
              <video
                className="services-main-video-dimension"
                loop=""
                playsinline=""
              >
                <source
                  src="https://static.clipdrop.co/web/homepage/tools/StableDiffusion.webm#t=0.1"
                  type="video/webm"
                />
                <source
                  src="https://static.clipdrop.co/web/homepage/tools/StableDiffusion.mp4#t=0.1"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="services-main-clean-dimension">
              <div
                className="services-main-clean-round"
                style={{ width: "0px" }}
              >
                <div className="services-line-cllimp-backgound ">
                  <div
                    className="services-text-styling "
                    style={{ opacity: 0 }}
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Generate an image
                      </font>
                    </font>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-icons-styling-icos ">
              <div className="services-icons-div-styling">
                <svg
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_28_724)">
                    <path
                      d="M8.399 3L12.799 14H10.644L9.443 11H5.353L4.154 14H2L6.399 3H8.399ZM7.399 5.885L6.152 9H8.644L7.399 5.885Z"
                      fill="currentcolor"
                    ></path>
                    <path
                      d="M7.625 12.5V20.3932C7.625 20.6611 7.73835 20.9131 7.93181 21.0951C8.12449 21.2765 8.38154 21.3748 8.6448 21.375H20.3552L20.358 21.375C20.6201 21.373 20.8751 21.2744 21.0669 21.0939C21.2594 20.9127 21.373 20.6625 21.375 20.3959V10.6068C21.375 10.0439 20.8969 9.625 20.3552 9.625H12.6646L13.4535 11.5972H19.325V16.471L16.5157 13.8249C16.322 13.6428 16.0639 13.5442 15.7993 13.5442C15.5348 13.5442 15.2766 13.6428 15.0829 13.8249L9.675 18.9104V15.6245L8.4278 12.5H7.625Z"
                      fill="currentcolor"
                    ></path>
                    <path
                      d="M17.8284 4.17157C17.0783 3.42143 16.0609 3 15 3H12V5H15C15.5304 5 16.0391 5.21071 16.4142 5.58579C16.7893 5.96086 17 6.46957 17 7V8.5H19V7C19 5.93913 18.5786 4.92172 17.8284 4.17157Z"
                      fill="currentcolor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_28_724">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div className="line-clamp-1">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Stable Spread
                    </font>
                  </font>
                </div>
              </div>
              <p className="line-clamp-2 services-line-cllimp">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Generate high resolution realistic images with our AI
                  </font>
                </font>
              </p>
            </div>
          </a>
          <a className="services-main-main-wrapper" href="/replace-background">
            <div
              className="services-main-videp-wrapper"
              style={{ height: "13rem" }}
            >
              <video
                className="services-main-video-dimension"
                loop=""
                playsinline=""
              >
                <source
                  src="https://static.clipdrop.co/web/homepage/tools/ReplaceBackground.webm#t=0.1"
                  type="video/webm"
                />
                <source
                  src="https://static.clipdrop.co/web/homepage/tools/ReplaceBackground.mp4#t=0.1"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="services-main-clean-dimension">
              <div
                className="services-main-clean-round"
                style={{ width: "0px" }}
              >
                <div className="services-line-cllimp-backgound ">
                  <div
                    className="services-text-styling "
                    style={{ opacity: 0 }}
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Replace background
                      </font>
                    </font>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-icons-styling-icos ">
              <div className="services-icons-div-styling">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1.5rem"
                  height="1.5rem"
                >
                  <path fill="none" d="M0 0H24V24H0z"></path>
                  <path
                    fill="currentcolor"
                    d="M20 3c.552 0 1 .448 1 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.327 1.327-.006 4.239 4.246.006 1.33-1.33L18.899 19H19v-2.758l2-2V20c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zm1.778 4.808l1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S14 9.328 14 8.5 14.672 7 15.5 7z"
                  ></path>
                </svg>
                <div className="line-clamp-1">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Replace background
                    </font>
                  </font>
                </div>
              </div>
              <p className="line-clamp-2 services-line-cllimp">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Teleport your items anywhere with our AI
                  </font>
                </font>
              </p>
            </div>
          </a>
          <a className="services-main-main-wrapper" href="/text-remover">
            <div
              className="services-main-videp-wrapper"
              style={{ height: "13rem" }}
            >
              <video
                className="services-main-video-dimension"
                loop=""
                playsinline=""
              >
                <source
                  src="https://static.clipdrop.co/web/homepage/tools/TextRemover.webm#t=0.1"
                  type="video/webm"
                />
                <source
                  src="https://static.clipdrop.co/web/homepage/tools/TextRemover.mp4#t=0.1"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="services-main-clean-dimension">
              <div
                className="services-main-clean-round"
                style={{ width: "0px" }}
              >
                <div className="services-line-cllimp-backgound ">
                  <div
                    className="services-text-styling "
                    style={{ opacity: 0 }}
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Text Remover
                      </font>
                    </font>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-icons-styling-icos ">
              <div className="services-icons-div-styling">
                <svg
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_289_4784)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5607 8.01319L8.11066 2H5.88823L1 14H3.39356L4.7259 10.7273H7.90134L10.5607 8.01319ZM5.61376 8.54545L6.99944 5.14727L8.38291 8.54545H5.61376Z"
                      fill="currentcolor"
                    ></path>
                    <path
                      d="M16.6567 20.2963H22.4948V21.9983H14.9887L11.6544 22L6.24419 16.4795C6.08783 16.3199 6 16.1035 6 15.8779C6 15.6522 6.08783 15.4358 6.24419 15.2762L15.0888 6.24959C15.1663 6.17047 15.2582 6.1077 15.3595 6.06487C15.4607 6.02204 15.5693 6 15.6789 6C15.7885 6 15.897 6.02204 15.9982 6.06487C16.0995 6.1077 16.1915 6.17047 16.2689 6.24959L22.7558 12.8687C22.9122 13.0283 23 13.2447 23 13.4704C23 13.696 22.9122 13.9124 22.7558 14.072L16.6567 20.2963ZM16.962 17.6276L20.9869 13.4704L15.6793 8.05457L11.6544 12.2118L16.962 17.6276Z"
                      fill="currentcolor"
                    ></path>
                  </g>
                </svg>
                <div className="line-clamp-1">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      text remover
                    </font>
                  </font>
                </div>
              </div>
              <p className="line-clamp-2 services-line-cllimp">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Remove text from any image using AI tool
                  </font>
                </font>
              </p>
            </div>
          </a>
          <a
            className="services-main-main-wrapper"
            href="/stable-diffusion-reimagine"
          >
            <div
              className="services-main-videp-wrapper"
              style={{ height: "13rem" }}
            >
              <video
                className="services-main-video-dimension"
                loop=""
                playsinline=""
              >
                <source
                  src="https://static.clipdrop.co/web/homepage/tools/ImageVariation.webm#t=0.1"
                  type="video/webm"
                />
                <source
                  src="https://static.clipdrop.co/web/homepage/tools/ImageVariation.mp4#t=0.1"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="services-main-clean-dimension">
              <div
                className="services-main-clean-round"
                style={{ width: "0px" }}
              >
                <div className="services-line-cllimp-backgound ">
                  <div
                    className="services-text-styling "
                    style={{ opacity: 0 }}
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Stable Diffusion reimagines
                      </font>
                    </font>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-icons-styling-icos ">
              <div className="services-icons-div-styling">
                <svg
                  width="1.5rem"
                  height="1.5rem"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15.195 8.33334L15.5328 9.06703C15.7578 9.55574 16.1089 9.98524 16.555 10.3173C16.8144 10.5104 17.1012 10.6671 17.4063 10.7835V9.53572L22 12.1012L17.4063 14.6667V13.037C16.6083 12.8634 15.8571 12.5334 15.2037 12.0671C14.7103 11.7149 14.2831 11.2924 13.9367 10.8172C13.9367 10.8172 13.5824 10.3173 13.3462 9.83029C13.1099 9.34326 12.6783 8.33334 12.6783 8.33334L12.3405 7.59964C12.0731 7.01866 11.7864 6.66367 11.5 6.38462C11 5.89744 10.5 5.5 9.5 5.5H5V13.3026L9 9.40513L18.899 19.0513H19V15.2851L21 14.1282V20.0256C21 20.5635 20.552 21 20 21H4C3.448 21 3 20.5635 3 20.0256V4.4359C3 3.89805 3.448 3.46154 4 3.46154H9C10.8608 3.46154 11.6094 3.62969 12.7 4.4359C13.3102 4.88695 13.5132 5.26885 13.9365 5.84951C14.2829 5.37411 14.7103 4.95153 15.2038 4.59934C15.8572 4.13312 16.6084 3.80324 17.4063 3.62969V2L22 4.56548L17.4063 7.13095V5.88315C17.1012 5.99953 16.8144 6.15624 16.555 6.34935C16.1089 6.68143 15.7578 7.11088 15.5328 7.59959L15.195 8.33334Z"
                    fill="currentcolor"
                  ></path>
                </svg>
                <div className="line-clamp-1">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      SD Reimagine
                    </font>
                  </font>
                </div>
              </div>
              <p className="line-clamp-2 services-line-cllimp">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Create multiple variants of an image
                  </font>
                </font>
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
