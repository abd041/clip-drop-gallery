import React, { useState, useRef, useEffect } from "react";
import "./NavigationBar.css";
import {
  HomePageLogo,
  HomePageClip,
  HomePageResponsvieClip,
  HomePageOutlis,
  HomePageAPI,
  HomePageTarfs,
  HomePageSignIn,
  HomePageSignUp,
} from "../../data/SVG";
import ResponsiveNavbar from "./ResponsiveNavbar";
import MobileNavbar from "./MobileNavbar";

function NavigationBar() {
  
  const [showtools, setShowtools] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowtools(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleUtilsChange = () => {
    setShowtools(!showtools);
  };
  return (
    <div
      id="initml-layout_header"
      class="fixed-top w-100"
      style={{
        transition: "transform 0.2s ease-in-out 0s",
        transform: "translateY(0px)",
        zIndex: 30,
      }}
    >
      <header
        class="px-4 py-4 py-sm-2 d-flex align-items-center justify-content-between gap-4 bg-white text-black transition-shadow"
        style={{ height: "60px" }}
      >
        <div class="d-flex align-items-center justify-content-lg-between gap-2 flex-grow-1">
          <div class="d-flex align-items-center gap-2">
            <span
              className="text-gray-900 d-block d-lg-none navbar-custom-size"
              onClick={() => setShowNavbar(!showNavbar)}
            >
              {HomePageLogo}
            </span>
            <span className="d-none d-lg-block">{HomePageClip}</span>
            <span>
              <a
                href="/"
                class="d-flex align-items-center  opacity-100 text-decoration-none text-dark"
                style={{ transition: "all 0.2s ease" }}
              >
                <span class="d-none d-sm-inline font-weight-bold subpixel-antialiased">
                  {HomePageResponsvieClip}
                </span>
              </a>
            </span>
          </div>
          <div class="d-none d-lg-flex align-items-center justify-content-end z-index-10 flex-row gx-1 overflow-y-visible">
            <div class="position-relative-lg" ref={dropdownRef}>
              <div class="d-none d-lg-block cursor-pointer">
                <button
                  onClick={handleUtilsChange}
                  class=" outlis-background-color"
                >
                  Outils
                  {HomePageOutlis}
                </button>
              </div>
              <div
                class="d-flex flex-column position-relative opacity-100 mb-6 whitespace-nowrap pointer-events-none opacity-0 position-absolute top-100%  rounded-xl max-h-100vh overflow-y-auto shadow-lg"
                style={{ background: "white" }}
              >
                <div
                  className={showtools ? "d-flex flex-column my-1" : "d-none"}
                >
                  <ResponsiveNavbar />
                </div>
                <div className="sign-in-buttons-icons">
                  <p className="sign-in-btn-icon-styling">
                    <a
                      className="sign-in-btn-icon-styling-text block"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/apis"
                    >
                      {HomePageAPI}
                      API
                    </a>
                  </p>
                  <p className="sign-in-btn-icon-styling ">
                    <a
                      className="sign-in-btn-icon-styling-text d-block"
                      href="/fr/pricing"
                    >
                      {HomePageTarfs}
                      Tarifs
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <button className="sign-in-buttons">
                <a className="hover:no-underline" href="/apis">
                  API
                </a>
              </button>
            </div>
            <div className="">
              <button className="sign-in-buttons">
                <a className="hover:no-underline" href="/fr/pricing">
                  Tarifs
                </a>
              </button>
            </div>
          </div>
          <div
            class={showNavbar ? "sign-in-showNavbar" : "d-none"}
            style={{
              top: "60px",
              overflow: "auto",
              transform: "translateX(0%) translateZ(0px)",
            }}
          >
            <MobileNavbar />
          </div>
        </div>
        <button className="sign-in-button-icon" disabled="">
          {HomePageSignIn}
        </button>
        <button className="sign-in-button">
          <span className="sign-in-btn">Sign-in / Sign-up</span>
          <span className="navbar-after-signin">{HomePageSignUp}</span>
        </button>
      </header>
    </div>
  );
}

export default NavigationBar;
