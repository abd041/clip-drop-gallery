import React from "react";

function DesignEnhance() {
  return (
    <section
      id="enhance-render"
      className="flex flex-1 w-full justify-center items-center mt-24 px-12"
    >
      <div className="justify-center items-center mt-24 max-w-[1600px] w-[calc(100vw-100px)] h-[calc(100vh-80px)] mb-9 overflow-hidden hidden">
        <div className="w-full h-full hidden relative">
          <div className="relative h-full rounded-xl overflow-hidden w-full">
            <div>
              <img
                className="w-full h-full rounded-xl object-contain transition-opacity"
                alt="Original"
                style={{ aspectRatio: "0/1" }}
              />
            </div>
            <div
              className="absolute top-0 bottom-0 left-0 right-0"
              style={{
                clipPath: "polygon(100% 0px, 100% 0px, 100% 100%, 100% 100%)",
              }}
            >
              <img
                className="absolute top-0 w-full h-full rounded-xl object-contain opacity-0"
                alt="Result"
                style={{ aspectRatio: "0/1" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignEnhance;
