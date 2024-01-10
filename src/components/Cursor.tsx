import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  return (
    <>
      <AnimatedCursor
        innerSize={12}
        outerSize={60}
        innerScale={1.2}
        outerScale={2}
        outerAlpha={0}
        // hasBlendMode={true}

        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        innerStyle={{
          backgroundColor: "rgb(6, 200, 200)",
        }}
        outerStyle={{
          background: "rgba(6, 200, 200, 0.248)",
        }}
      />
      {/* <div className="dot">.</div> */}
    </>
  );
}
