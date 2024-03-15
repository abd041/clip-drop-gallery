import React, { useState, useRef, useEffect } from "react";
import "./FAQs.css";
import { Container, Row, Col } from "react-bootstrap";
import FaqsSidebar from "../faq/FaqsSidebar";
function FAQ() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isposition, setisposition] = useState("");
  const mainWrapperRef = useRef(null);

  useEffect(() => {
    if (scrollPosition > 1500) {
      setisposition("relative");
    } else {
      setisposition("relative");
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
                  <span style={{ maxWidth: "1072px" }} className="faqs-page-second-col-main-wrapper">
                    <span class="faqs-faqs-main-heading">
                      Frequently Asked Questions
                    </span>
                  </span>
                </h1>
              </div>
              <div class="documentation-article-prose">
                <span class="faqs-page-Table-Content-heading">
                  <h2>Table of Content</h2>
                  <ul className="faqs-page-unordered-list">
                    <li className="faqs-page-link-list">
                      <p>
                        <a
                          href="#what-is-the-latency-to-return-the-processed-image-is-there-a-rate-limit"
                          target="_self"
                        >
                          What is the latency to return the processed image? Is
                          there a rate limit?
                        </a>
                      </p>
                    </li>
                    <li className="faqs-page-link-list">
                      <p>
                        <a
                          href="#are-the-images-sent-to-the-api-stored-by-photoroom-can-i-ask-to-delete-them"
                          target="_self"
                        >
                          Are the images sent to the API stored by PhotoRoom?
                          Can I ask to delete them?
                        </a>
                      </p>
                    </li>
                    <li className="faqs-page-link-list">
                      <p>
                        <a href="#where-is-your-server-located" target="_self">
                          Where is your server located?
                        </a>
                      </p>
                    </li>
                    <li className="faqs-page-link-list">
                      <p>
                        <a
                          href="#what-are-preview-images-in-the-api"
                          target="_self"
                        >
                          What are preview images in the API?
                        </a>
                      </p>
                    </li>
                    <li className="faqs-page-link-list">
                      <p>
                        <a
                          href="#what-is-the-max-resolution-of-the-image"
                          target="_self"
                        >
                          What is the max resolution of the image?
                        </a>
                      </p>
                    </li>
                    <li className="faqs-page-link-list">
                      <p>
                        <a
                          href="#can-i-train-a-machine-learning-model-using-images-edited-with-the-api-or-photoroom"
                          target="_self"
                        >
                          Can I train a machine learning model using images
                          edited with the API or PhotoRoom?
                        </a>
                      </p>
                    </li>
                    <li className="faqs-page-link-list">
                      <p>
                        <a href="#is-there-a-rate-limiting" target="_self">
                          Is there a rate-limiting?
                        </a>
                      </p>
                    </li>
                    <li className="faqs-page-link-list">
                      <p>
                        <a
                          href="#what-should-photoroom-logo-look-like-within-your-app-with-the-api-partner-plan"
                          target="_self"
                        >
                          What should the PhotoRoom logo look like within your
                          app with the API partner plan?
                        </a>
                      </p>
                    </li>
                    <li className="faqs-page-link-list">
                      <p>
                        <a href="#i-have-another-question" target="_self">
                          I have another question
                        </a>
                      </p>
                    </li>
                  </ul>
                  <hr />
                  <p>
                    <span id="what-is-the-latency-to-return-the-processed-image-is-there-a-rate-limit">
                      <b>
                        Q: What is the latency to return the processed image? Is
                        there a rate limit?
                      </b>
                    </span>
                  </p>
                  <p>
                    A:{" "}
                    <span style={{ color: "rgb(55, 65, 81)" }}>
                      The median latency (number of seconds it will take to
                      remove the background) to return the processed image is
                      350 ms for PhotoRoom Remove Background API.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "rgb(55, 65, 81)" }}>
                      The default rate limit is 500 images per minute. For
                      special use cases, it can be updated.
                    </span>
                  </p>
                  <hr />
                  <p>
                    <span id="are-the-images-sent-to-the-api-stored-by-photoroom-can-i-ask-to-delete-them">
                      <b>
                        <span style={{ color: "rgb(55, 65, 81)" }}>
                          Q: Are the images sent to the API stored by PhotoRoom?
                          Can I ask to delete them?
                        </span>
                      </b>
                    </span>
                  </p>
                  <p>
                    <span style={{ color: "rgb(55, 65, 81)" }}>
                      A: PhotoRoom doesn’t save the images that are processed
                      through PhotoRoom API.
                    </span>
                  </p>
                  <hr />
                  <p>
                    <span id="where-is-your-server-located">
                      <b>Q: Where is your server located?</b>
                    </span>
                  </p>
                  <p>A: The server is located in Eastern USA.</p>
                  <hr />
                  <p>
                    <span id="what-are-preview-images-in-the-api">
                      <b>Q: What are preview images in the API?</b>
                    </span>
                  </p>
                  <p>
                    A: Preview images are small resolution images, up to 0.25
                    megapixels (e.g. 625 × 400 pixels). They require 0.25 credit
                    to be processed through PhotoRoom API instead of 1 credit
                    for higher resolution.
                  </p>
                  <p>
                    In terms of implementation, the API{" "}
                    <a
                      href="https://www.photoroom.com/api/docs/reference/59f92162efcb6-remove-background-from-an-image"
                      target="_self"
                    >
                      size parameter
                    </a>{" "}
                    should be set to preview to be charged 0.25 credit.
                  </p>
                  <hr />
                  <p>
                    <span id="what-is-the-max-resolution-of-the-image">
                      <b>Q: What is the max resolution of the image?</b>
                    </span>
                  </p>
                  <p>
                    A: We recommend limiting to 25MP, although there is no
                    specific limitation. If the file is too large and your
                    connection is too slow, it might time out.
                  </p>
                  <hr />
                  <p>
                    <span id="can-i-train-a-machine-learning-model-using-images-edited-with-the-api-or-photoroom">
                      <b>
                        Q: Can I train a machine learning model using images
                        edited with the API or PhotoRoom?
                      </b>
                    </span>
                  </p>
                  <p>
                    A: No, according to{" "}
                    <a href="/legal/terms-and-conditions" target="_self">
                      our terms
                    </a>
                    , you can’t train a machine learning model using the
                    PhotoRoom API.
                  </p>
                  <hr />
                  <p>
                    <span id="is-there-a-rate-limiting">
                      <b>Q: Is there a rate-limiting?</b>
                    </span>
                  </p>
                  <p>
                    A: The default rate limit is 500 images per minute. For
                    special use cases, it can be updated.
                  </p>
                  <hr />
                  <p>
                    <span id="what-should-photoroom-logo-look-like-within-your-app-with-the-api-partner-plan">
                      <b>
                        Q: What should the PhotoRoom logo look like within your
                        app with the API partner plan?
                      </b>
                    </span>
                  </p>
                  <p>
                    A:{" "}
                    <span style={{ color: "rgb(26, 26, 26)" }}>
                      Below are a few examples of a well-done partnership on an
                      upload image interface. Typically users benefiting from
                      the background removal must see the PhotoRoom logo and be
                      able to click on it.
                    </span>
                  </p>
                  <p className="FAQS-PAGE-loom-link">
                    <a href="https://www.loom.com/share/fe97c7e645d94e0586465d98c7326042">
                      https://www.loom.com/share/fe97c7e645d94e0586465d98c7326042
                    </a>
                  </p>
                  <p>From a technical standpoint:</p>
                  <ol>
                    <li className="faqs-page-link-list">
                      <p>
                        <b>Where should you put the logo in your app?</b> <br />
                        The best place to show the PhotoRoom logo is on your
                        upload-images UI if you have one. This way creators and
                        resellers can learn about PhotoRoom. If you don't have
                        such a UI, you can display the attribution logo next to
                        the images you're showing on your application.
                        <br />
                      </p>
                    </li>
                    <li className="faqs-page-link-list">
                      <p>
                        <b>Which logo should you use?</b> The PhotoRoom logo to
                        add is the following one:
                      </p>
                      <p>
                        We offer several versions of the logo (.svg for Android
                        &amp; Web, .pdf for iOS, and .png), a version with no
                        tagline so you can localize "Background Removed by" and
                        a dark version. They are available with the below link:
                      </p>
                      <p>
                        <a
                          href="https://photoroom.notion.site/All-PhotoRoom-API-attributions-version-2-b6c90dad9188427bbe6a44c05a91db1b"
                          target="_blank"
                        >
                          <u>All PhotoRoom API attributions version</u>
                        </a>
                      </p>
                      <p>
                        You can add a thin layer with white background and
                        transparency behind our logo, so it works well on all
                        images.
                        <br />
                      </p>
                    </li>
                    <li className="faqs-page-link-list">
                      <p>
                        <b>Which link should you set?</b>
                      </p>
                      <p>
                        Always wrap those images with a link to{" "}
                        <a href="https://www.photoroom.com" target="_self">
                          <u>https://photoroom.com</u>
                        </a>{" "}
                        for web and email,{" "}
                        <a href="https://apps.apple.com/us/app/photoroom-studio-photo-editor/id1455009060">
                          <u>
                            https://apps.apple.com/us/app/photoroom-studio-photo-editor/id1455009060
                          </u>
                        </a>{" "}
                        for iOS apps,{" "}
                        <a href="https://play.google.com/store/apps/details?id=com.photoroom.app&amp;hl=en&amp;gl=US">
                          <u>
                            https://play.google.com/store/apps/details?id=com.photoroom.app&amp;hl=en&amp;gl=US
                          </u>
                        </a>{" "}
                        for Android apps
                      </p>
                    </li>
                  </ol>
                  <hr />
                  <p>
                    <span id="i-have-another-question">
                      <b>Q: I have another question</b>
                    </span>
                  </p>
                  <p>
                    A: For any other questions, please check our{" "}
                    <a
                      href="https://www.photoroom.com/api#faq-block"
                      target="_self"
                    >
                      pricing FAQ
                    </a>{" "}
                    or reach out to us in our{" "}
                    <a
                      href="https://join.slack.com/t/photoroomapicommunity/shared_invite/zt-1tlv7t2nq-6IgjksQObyCMW6rPKCksjg"
                      target="_self"
                    >
                      <b>Slack Community</b>
                    </a>
                    .
                  </p>
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FAQ;
