import React from "react";
import {
  HomePageTools,
  HomePageAllTools,
  HomePgaeClean,
  HomePageUpscaler,
  HomePageRemoveBg,
  HomePageRelight,
  HomePageReplaceBg,
  HomePageDifussion,
  HomePageReimagine,
  textRemover,
  HomePageGallery,
  HomePageAPI,
  HomePagePricing,
} from "../../data/SVG";

function MobileNavbar() {
  return (
    <>
      <div class="sign-in-alltools-main-div-tools">
        <div class="sign-in-alltools-div-tools">
          <button class="sign-in-alltools-main-tools">
            Tools
            {HomePageTools}
          </button>
        </div>
        <div class={"sign-in-alltools-main "}>
          <div class="sign-in-btn-icon-styling-alltoola">
            <p class="sign-in-btn-icon-styling ">
              <a class="sign-in-btn-icon-styling-text" href="/tools">
                {HomePageAllTools}
                All tools
              </a>
            </p>
            <p class="sign-in-btn-icon-styling ">
              <a class="sign-in-btn-icon-styling-text" href="/cleanup">
                {HomePgaeClean}
                Cleanup
              </a>
            </p>
            <p class="sign-in-btn-icon-styling ">
              <a class="sign-in-btn-icon-styling-text" href="/image-upscaler">
                {HomePageUpscaler}
                Image upscaler
              </a>
            </p>
            <p class="sign-in-btn-icon-styling ">
              <a class="sign-in-btn-icon-styling-text" href="/relight">
                {HomePageRelight}
                Relight
              </a>
            </p>
            <p class="sign-in-btn-icon-styling ">
              <a
                class="sign-in-btn-icon-styling-text"
                href="/remove-background"
              >
                {HomePageRemoveBg}
                Remove background
              </a>
            </p>
            <p class="sign-in-btn-icon-styling ">
              <a
                class="sign-in-btn-icon-styling-text"
                href="/replace-background"
              >
                {HomePageReplaceBg}
                Replace background
              </a>
            </p>
            <p class="sign-in-btn-icon-styling ">
              <a class="sign-in-btn-icon-styling-text" href="/stable-diffusion">
                {HomePageDifussion}
                Stable Diffusion
                <span class="sign-in-btn-icon-styling-new">New</span>
              </a>
            </p>
            <p class="sign-in-btn-icon-styling ">
              <a
                class="sign-in-btn-icon-styling-text"
                href="/stable-diffusion-reimagine"
              >
                {HomePageReimagine}
                Stable Diffusion reimagine
              </a>
            </p>
            <p class="sign-in-btn-icon-styling ">
              <a class="sign-in-btn-icon-styling-text" href="/text-remover">
                {textRemover}
                Text remover
              </a>
            </p>
            <p class="sign-in-btn-icon-styling ">
              <a class="sign-in-btn-icon-styling-text" href="/editor">
                {HomePageGallery}
                Gallery
              </a>
            </p>
          </div>
          <div class="sign-in-buttons-icons">
            <p class="sign-in-btn-icon-styling ">
              <a
                class="sign-in-btn-icon-styling-text block"
                target="_blank"
                rel="noopener noreferrer"
                href="/apis"
              >
                {HomePageAPI}
                API
              </a>
            </p>
            <p class="sign-in-btn-icon-styling ">
              <a class="sign-in-btn-icon-styling-text block" href="/pricing">
                {HomePagePricing}
                Pricing
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="pt-1">
        <button class="sign-in-buttons">
          <a class="hover:no-underline" href="/apis">
            API
          </a>
        </button>
      </div>
      <div class="pt-1">
        <button class="sign-in-buttons">
          <a class="hover:no-underline" href="/pricing">
            Pricing
          </a>
        </button>
      </div>
    </>
  );
}

export default MobileNavbar;
