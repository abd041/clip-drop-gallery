import React, { useState } from "react";

function FaqsSidebar() {
  const [isposition, setisposition] = useState("");
  return (
    <div
      class="faqs-page-sidebar-wrapper col-lg-10 col-10"
      style={{ position: isposition }}
    >
      <div class="">
        <div
          style={{
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "130%",
          }}
        >
          API documentation
        </div>
        <hr />
        <ul className="unordered-list-faqs-page">
          <li class="faqs-page-links-wraper-list">
            <a href="/api/docs">Getting Started</a>
          </li>
          <li class="faqs-page-links-wraper-list">
            <a href="/api/docs/changelog">Changelog</a>
          </li>
          <li class="faqs-page-links-wraper-list">
            <a href="/api/docs/why-choose-photoroom-api">
              Why Choose PhotoRoom's API?
            </a>
          </li>
          <li class="faqs-page-links-wraper-list">
            <a href="/api/docs/image-editing-api-documentation">
              Edit Image API [Beta]
            </a>
          </li>
          <li class="faqs-page-links-wraper-list">
            <a href="/api/docs/troubleshooting">Troubleshooting</a>
          </li>
          <li class="faqs-page-links-wraper-list">
            <a href="/api/docs/frequently-asked-questions">
              Frequently Asked Questions
            </a>
          </li>
          <li class="faqs-page-links-wraper-list">
            <a href="/api/docs/ios-app-tutorial">iOS / Swift Tutorial</a>
          </li>
          <li class="faqs-page-links-wraper-list">
            <a href="/api/docs/get-your-photoroom-api-key">Get your API Key</a>
          </li>
          <li class="faqs-page-links-wraper-list">
            <a href="/api/docs/reference">API Reference</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FaqsSidebar;
