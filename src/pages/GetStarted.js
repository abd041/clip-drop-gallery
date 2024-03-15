import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FaqsSidebar from "../components/faq/FaqsSidebar";
import NavigationBar from "../components/Navbar/NavigationBar";
import Footer from "../components/footer/Footer";
function GetStarted() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isposition, setisposition] = useState("fixed");
  const mainWrapperRef = useRef(null);

  useEffect(() => {
    if (scrollPosition > 1500) {
      setisposition("relative");
    } else {
      setisposition("fixed");
    }
  }, [scrollPosition]);

  useEffect(() => {
    const handleScroll = () => {
      if (mainWrapperRef.current) {
        setScrollPosition(mainWrapperRef.current.scrollTop);
      }
    };

    if (mainWrapperRef.current) {
      mainWrapperRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainWrapperRef.current) {
        mainWrapperRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <>
      <NavigationBar />
      <Container className="faqs-page-main-wrapper" ref={mainWrapperRef}>
        <Row>
          <Col lg={3} className="px-0 mx-0 d-flex justify-content-center">
            <FaqsSidebar />
          </Col>
          <Col
            lg={9}
            className="d-flex justify-content-center faqs-page-main-second-col-wrapper"
          >
            <div class="col-lg-10 col-10">
              <div class="">
                <div
                  class=""
                  data-translation-key="fbf91ba1-7d90-449c-8c93-06b11a2a9194"
                >
                  <h1 class="d-flex flex-column text-center">
                    <span class="max-w-[1072px] faqs-API-documentation-heading">
                      API documentation
                    </span>
                    <span class="sr-only"> </span>
                    <span
                      style={{ maxWidth: "1072px", marginBottom: "2.5rem" }}
                    >
                      <span class="faqs-faqs-main-heading">
                        Getting Started
                      </span>
                    </span>
                  </h1>
                </div>
                <div class="documentation-article prose">
                  <span class="[&amp;_*[id]]:scroll-mt-20 [&amp;_a]:text-accent [&amp;_a]:hover:text-accent-hover [&amp;_a]:focus:text-accent-hover [&amp;_a]:active:text-accent-down">
                    <p>
                      Our free Remove Background API is a <b>fast</b> and{" "}
                      <b>efficient</b> API that allows you to remove backgrounds
                      from your images. We offer white background, transparent
                      background, and custom color backgrounds.
                    </p>
                    <h2>
                      <b>Quick start</b>
                    </h2>
                    <h3>Get your API Key</h3>
                    <p>
                      To get started you need first to activate the API for your
                      account and get your API key{" "}
                      <a
                        href="https://app.photoroom.com/api-dashboard"
                        target="_blank"
                      >
                        by following this link
                      </a>
                      .
                    </p>
                    <h3>Make your first HTTP Call</h3>
                    <p>
                      Remove the background of any image by running the
                      following code in your terminal:
                    </p>
                    <pre>
                      <code class="language-bash">
                        {`curl -H 'x-api-key: abc123def456' \\
  -f https://sdk.photoroom.com/v1/segment \\
  -F 'image_file=@/absolute/path/to/image.jpg' \\
  -o photoroom-result.png`}
                      </code>
                    </pre>
                    <p>
                      For more details, visit the{" "}
                      <a
                        href="https://www.photoroom.com/api/docs/reference/59f92162efcb6-remove-background-from-an-image"
                        target="_blank"
                      >
                        API Reference playground
                      </a>{" "}
                      to experiment with all the available parameters (
                      <code>format</code>, <code>channels</code>,{" "}
                      <code>bg_color</code>, <code>size</code>,{" "}
                      <code>crop</code>
                      ).
                    </p>
                    <h2>
                      <b>Support and Help</b>
                    </h2>
                    <h3>Slack Community Support</h3>
                    <p>
                      Ask our engineers in our community forum about how to use
                      the PhotoRoom API:
                    </p>
                    <p>
                      <a
                        href="https://join.slack.com/t/photoroomapicommunity/shared_invite/zt-1tlv7t2nq-6IgjksQObyCMW6rPKCksjg"
                        target="_blank"
                      >
                        Join our Slack Community
                      </a>
                    </p>
                    <h3>Support for billing and payment issues</h3>
                    <p>
                      <span style={{ color: "rgba(38, 38, 38, 0.9)" }}>
                        Contact us at&nbsp;
                      </span>
                      <a href="mailto:api-help@photoroom.com">
                        api-help@photoroom.com
                      </a>
                      <span style={{ color: "rgba(38, 38, 38, 0.9)" }}>
                        &nbsp;to get help on billing or payments.
                      </span>
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default GetStarted;
