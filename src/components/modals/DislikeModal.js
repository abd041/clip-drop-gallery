import React from "react";
import "./DislikeModal.css";
function DislikeModal({ dislikemodal, handMoalClose, handleModalOpen }) {
  const handleDislikeModalClose = () => {
    handMoalClose();
  };
  return (
    <div id="initml-feedback-modal">
      <span class={dislikemodal ? "dislike-modal-main-wrapper" : "d-none"}>
        <div class="dislike-modal-wrapper">
          <button
            class="dislike-modal-wrapper-button"
            onClick={handleDislikeModalClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              height="24"
              width="24"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <form class="dislike-modal-wrapper-heading">
            <h4 class="dislike-modal-heading-fonts ">
              Pouvez-vous nous donner plus d'informations&nbsp;?
            </h4>
            <div class="dislike-modal-checkbox-wrapper">
              <label>
                <input type="checkbox" id="color-shift" />
                <span class="dislike-modal-checkbox-fonts">
                  problème de changement de couleur par rapport à l'original
                </span>
              </label>
              <label>
                <input type="checkbox" id="texture-loss" />
                <span class="dislike-modal-checkbox-fonts">
                  la texture n'est pas cohérente par rapport à l'original
                </span>
              </label>
              <label>
                <input type="checkbox" id="low-image-quality" />
                <span class="dislike-modal-checkbox-fonts">
                  L'image comporte des artefacts ou est trop floue
                </span>
              </label>
              <label>
                <input type="checkbox" id="other" />
                <span class="dislike-modal-checkbox-fonts">Autre</span>
              </label>
            </div>
            <div class="dislike-modal-textHeading-wrapper">
              <p class="dislike-modal-textHeading-fonts ">
                Is the result usable?
              </p>
              <div style={{ position: "relative" }}>
                <input
                  type="checkbox"
                  id="toggleB"
                  class="peer sr-only"
                  checked=""
                />
                <div class="dislike-modal-non-text-headings"></div>
                <div class="dislike-modal-non-text-wrapper"></div>
                <div class="dislike-modal-non-text-main-wrapper">Non</div>
                <div class="dislike-modal-oui-text-main-wrapper">Oui</div>
              </div>
            </div>
            <div class="comment-div-main-wrapper">
              <label class="comment-label-main-wrapper">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Another comment to share?{" "}
                  </font>
                  <font style={{ verticalAlign: "inherit" }}>(optional)</font>
                </font>
                <textarea maxLength={500} class="custom-textarea"></textarea>
                <p class="dislike-custom-text"></p>
              </label>
              <p class="dislike-custom-text-fonts">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>0 </font>
                </font>
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>/ 500</font>
                </font>
              </p>
            </div>
            <button class="dislike-send-comment" type="submit">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Send a comment</font>
              </font>
            </button>
          </form>
        </div>
      </span>
    </div>
  );
}

export default DislikeModal;
