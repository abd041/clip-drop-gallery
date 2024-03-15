import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./IndustryReview.css";
import Footer from "../../footer/Footer";

function IndustryReview({
  text,
  image,
  LandingPage,
  industryClass,
  industryclassactive,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);

    return () => {
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlay = () => {
    const videoElement = videoRef.current;
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <div className="industry-review-heading col-lg-6 col-12">
              <h1>{text}</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center industry-video-main-wrapper">
            <div
              class={!isPlaying ?  industryClass  : industryclassactive }
            >
              <video
                ref={videoRef}
                src={image}
                class={
                  LandingPage
                    ? "industry-review-video-main-landing"
                    : !isPlaying
                    ? "industry-review-video"
                    : "industry-review-video-main"
                }
                loop={LandingPage ? true : false}
                autoPlay={LandingPage ? true : false}
                muted
              ></video>
              <div className="industry-button-video" onClick={togglePlay}>
                {LandingPage ? (
                  ""
                ) : !isPlaying ? (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42 20.536C44.6667 22.0756 44.6667 25.9246 42 27.4642L18 41.3206C15.3333 42.8602 12 40.9357 12 37.8565L12 10.1437C12 7.06446 15.3333 5.13996 18 6.67956L42 20.536Z"
                      fill="white"
                    ></path>
                  </svg>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {LandingPage ? null : <Footer />}
    </div>
  );
}

export default IndustryReview;
