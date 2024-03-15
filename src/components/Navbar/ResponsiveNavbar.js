import React from "react";
import { ResponsiveNavbarData } from "../../data/ResponsiveNavbarData";
function ResponsiveNavbar() {
  return (
    <>
      {ResponsiveNavbarData.map((data, index) => {
        return (
          <p className="sign-in-btn-icon-styling " key={index}>
            <a className="sign-in-btn-icon-styling-text" href="#">
              {data.icons}
              {data.name}
            </a>
          </p>
        );
      })}
    </>
  );
}

export default ResponsiveNavbar;
