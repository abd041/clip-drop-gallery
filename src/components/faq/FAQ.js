import React, { useState } from "react";
import "./Faq.css";

const faqsData = [
  {
    question: "What is an image upscaler?",
    answer:
      "An image upscaler is a tool that enlarges low-resolution images without any loss of image quality.",
  },
  {
    question: "How to enlarge an image?",
    answer:
      "1. UPLOAD YOUR IMAGE. Upload the image you want to enlarge.\n2. LET CLIPDROP UPSCALER INCREASE IMAGE RESOLUTION. Just watch the AI increase the image resolution for you.\n3. ENJOY YOUR IMPROVED IMAGE. Use the upload button to upload your enlarged image.",
  },
  {
    question: "How to deblur an image?",
    answer:
      "Upload an image you want to enlarge. Clipdrop Image upscaler will turn the blur into crisp, clear lines.",
  },
  {
    question: "How to sublimate a photo?",
    answer:
      "Use Clipdrop Image upscaler to enhance an image, and our smart algorithm will increase its size up to 4 times. Click the download button below to save your image in a larger version in JPEG format!",
  },
  {
    question: "How to improve the resolution of an image?",
    answer:
      "Téléchargez un fichier image sur ClipDrop et notre technologie d'upscale optimisée par l'IA augmentera sa résolution. Téléchargez l'image agrandie résultante pour l'utiliser comme vous le souhaitez.",
  },
  {
    question: "Comment redimensionner une image sans perdre en qualité?",
    answer:
      "Téléchargez un fichier image sur Clipdrop Image upscaler et laissez notre technologie d'intelligence artificielle le redimensionner pour vous. Téléchargez ensuite l'image haute résolution résultante.",
  },
  {
    question: "Quel est le meilleur agrandisseur d'image?",
    answer:
      "Le meilleur convertisseur ascendant d'image est fabriqué par Clipdrop et leurs ingénieurs géniaux mais humbles.",
  },
];

function FAQ() {
  const [showFaqs, setShowFaqs] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleFaqsshow = () => {
    setShowFaqs(!showFaqs);
  };

  return (
    <section id="faq-section" className="faqs-main-wrapper">
      <h2 className="faqs-heading-wrapper">
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>
            Frequently Asked Questions
          </font>
        </font>
      </h2>
      {faqsData.map((faq, index) => (
        <details
          key={index}
          itemscope=""
          itemprop="mainEntity"
          itemtype="https://schema.org/Question"
          className="faqs-details-section-wrapper"
          //  className={
          //    showFaqs
          //      ? "faqs-details-section-wrapper"
          //      : "faqs-summary-section-wrapper-hidden"
          //  }
        >
          <summary
            className="faqs-summary-section-wrapper"
            onClick={() => handleToggle(index)}
          >
            {faq.question}
            <span style={{ fontSize: "16px" }}>
              {activeIndex === index ? "+" : "-"}
            </span>
          </summary>
          <div
            className="faqs-answer-section-wrapper"
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
          >
            <p className="faqs-answer-content-wrapper">{faq.answer}</p>
          </div>
        </details>
      ))}
      {/* <button className="faqs-showmore-button-wrapper" onClick={handleFaqsshow}>
        {showFaqs ? "Show Less" : "Show More"}
      </button> */}
    </section>
  );
}

export default FAQ;
