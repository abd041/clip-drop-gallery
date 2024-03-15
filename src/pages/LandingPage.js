import React from "react";
import HeroSection from "../components/landingPage/HeroSection/HeroSection";
import IndustryReview from "../components/industryDetail/industryReview/IndustryReview";
import RoundImage from "./RoundImage";
import LandingReview from "../components/landingPage/LandingReview/LandingReview";
import Footer from "../components/footer/Footer";

function LandingPage() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <HeroSection />
      <IndustryReview
        text="CREATE STUNNING VISUALS
IN SECONDS"
        image="https://static.clipdrop.co/web/homepage/hero-video.webm#t=0.1"
        LandingPage={true}
        industryClass="industry-review-video-main-wrapper-landing"
        industryclassactive="industry-review-video-main-wrapper-playing-landing"
      />
      <RoundImage industry={true} />
      <LandingReview />
      <Footer/>
    </div>
  );
}

export default LandingPage;
