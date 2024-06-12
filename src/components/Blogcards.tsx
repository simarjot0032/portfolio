import React from "react";
interface Props {
  heading: any;
  description: any;
}
export default function ({ heading, description }: Props) {
  return (
    <>
      <div className="each-blog-container">
        <div className="bheading-container">
          <div className="each-blog-heading">{heading}</div>
        </div>
        <div className="small-intro-container">
          <div className="small-intro">{description}</div>
        </div>
      </div>
    </>
  );
}
