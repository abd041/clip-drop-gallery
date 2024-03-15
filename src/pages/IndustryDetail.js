import React from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import IndustryDescription from "../components/industryDetail/industryDescription/IndustryDescription";
import IndustryReview from "../components/industryDetail/industryReview/IndustryReview";
import RoundImage from "./RoundImage";
function IndustryDetail() {
  return (
    <div>
      <NavigationBar />
      <IndustryDescription />
      <RoundImage industry={true} />
      <IndustryReview
        text="How PhotoRoom helped Barbie go viral"
     
       image="https://a.storyblok.com/f/191576/x/b3466a31f0/warner-bro-barbie-case-study.mp4"
       industryClass="industry-review-video-main-wrapper"
       industryclassactive="industry-review-video-main-wrapper-playing"
       LandingPage={false}
    />
    </div>
  );
}

export default IndustryDetail;
