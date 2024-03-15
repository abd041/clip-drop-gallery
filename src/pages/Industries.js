import React from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import IndustryDescription from "../components/industryDetail/industryDescription/IndustryDescription";
import {Container ,Row , Col} from "react-bootstrap"
import Footer from "../components/footer/Footer";
function Industries() {
  return (
    <div>
      <NavigationBar />
      <div className="indystries-description-wrapper">
      <Container>
        <Row style={{marginBlock:"40px"}}>
          <Col className="indystry-description-col-wrapper">
            <div
              class="d-flex flex-column align-items-center justify-content-center"
            >
              <h1 class="d-flex flex-column align-items-center">
                <span class="indystry-description-first-heading">
                  PhotoRoom for film and entertainment
                </span>
                <span class="sr-only"> </span>
                <span class="indystry-description-second-heading-wrapper">
                  <span class="indystry-description-second-heading">
                    Images as iconic as your brand
                  </span>
                </span>
              </h1>
              <div class="indystry-description-third-heading">
                Create viral moments that captivate your fans, and capture the
                cultural zeitgeist.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
            <Col lg={4} className="d-flex justify-content-center">
                <div className="industries-card-main-wrapper mx-auto">
                    <div className="industries-image-wrapper">
                        <img src="https://storyblok-cdn.photoroom.com/f/191576/1764x882/6bd4773dbf/fashion.png/m/filters:quality(75)" />
                    </div>
                    <div className="p-4">
                        <div className="industries-photroom-wrap mb-2"><h1>Photoroom for clothing and apparel</h1></div>
                        <div className="industries-photroom-desc"><h2>See how clothing and apparel brands and resellers use Photoroom.</h2></div>
                    </div>
                </div>
            </Col>
            <Col lg={4} className="d-flex justify-content-center">
                <div className="industries-card-main-wrapper mx-auto">
                    <div className="industries-image-wrapper">
                        <img src="https://storyblok-cdn.photoroom.com/f/191576/1764x882/6bd4773dbf/fashion.png/m/filters:quality(75)" />
                    </div>
                    <div className="p-4">
                        <div className="industries-photroom-wrap mb-2"><h1>Photoroom for clothing and apparel</h1></div>
                        <div className="industries-photroom-desc"><h2>See how clothing and apparel brands and resellers use Photoroom.</h2></div>
                    </div>
                </div>
            </Col>
            <Col lg={4} className="d-flex justify-content-center">
                <div className="industries-card-main-wrapper mx-auto">
                    <div className="industries-image-wrapper">
                        <img src="https://storyblok-cdn.photoroom.com/f/191576/1764x882/6bd4773dbf/fashion.png/m/filters:quality(75)" />
                    </div>
                    <div className="p-4">
                        <div className="industries-photroom-wrap mb-2"><h1>Photoroom for clothing and apparel</h1></div>
                        <div className="industries-photroom-desc"><h2>See how clothing and apparel brands and resellers use Photoroom.</h2></div>
                    </div>
                </div>
            </Col>
            <Col lg={4} className="d-flex justify-content-center">
                <div className="industries-card-main-wrapper mx-auto">
                    <div className="industries-image-wrapper">
                        <img src="https://storyblok-cdn.photoroom.com/f/191576/1764x882/6bd4773dbf/fashion.png/m/filters:quality(75)" />
                    </div>
                    <div className="p-4">
                        <div className="industries-photroom-wrap mb-2"><h1>Photoroom for clothing and apparel</h1></div>
                        <div className="industries-photroom-desc"><h2>See how clothing and apparel brands and resellers use Photoroom.</h2></div>
                    </div>
                </div>
            </Col>
            <Col lg={4} className="d-flex justify-content-center">
                <div className="industries-card-main-wrapper mx-auto">
                    <div className="industries-image-wrapper">
                        <img src="https://storyblok-cdn.photoroom.com/f/191576/1764x882/6bd4773dbf/fashion.png/m/filters:quality(75)" />
                    </div>
                    <div className="p-4">
                        <div className="industries-photroom-wrap mb-2"><h1>Photoroom for clothing and apparel</h1></div>
                        <div className="industries-photroom-desc"><h2>See how clothing and apparel brands and resellers use Photoroom.</h2></div>
                    </div>
                </div>
            </Col>
            <Col lg={4} className="d-flex justify-content-center">
                <div className="industries-card-main-wrapper mx-auto">
                    <div className="industries-image-wrapper">
                        <img src="https://storyblok-cdn.photoroom.com/f/191576/1764x882/6bd4773dbf/fashion.png/m/filters:quality(75)" />
                    </div>
                    <div className="p-4">
                        <div className="industries-photroom-wrap mb-2"><h1>Photoroom for clothing and apparel</h1></div>
                        <div className="industries-photroom-desc"><h2>See how clothing and apparel brands and resellers use Photoroom.</h2></div>
                    </div>
                </div>
            </Col>
            <Col lg={4} className="d-flex justify-content-center">
                <div className="industries-card-main-wrapper mx-auto">
                    <div className="industries-image-wrapper">
                        <img src="https://storyblok-cdn.photoroom.com/f/191576/1764x882/6bd4773dbf/fashion.png/m/filters:quality(75)" />
                    </div>
                    <div className="p-4">
                        <div className="industries-photroom-wrap mb-2"><h1>Photoroom for clothing and apparel</h1></div>
                        <div className="industries-photroom-desc"><h2>See how clothing and apparel brands and resellers use Photoroom.</h2></div>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
          <Col className="indystry-description-col-wrapper">
            <div
              class="d-flex flex-column align-items-center justify-content-center"
            >
              <h1 class="d-flex flex-column align-items-center">

                <span class="indystry-description-second-heading-wrapper">
                  <span class="indystry-description-second-heading">
                  Ready to make more sales?
                  </span>
                </span>
              </h1>
              <div class="indystry-description-third-heading">
              Get started with Photoroom, and get better-looking product photos in minutes.
              </div>
              <div class="">
            
                  <div class="">
                    <button className="industrry-description-free-trail">
                      Start your free trial
                    </button>
                  </div>
               
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer />
    </div>
  );
}

export default Industries;
