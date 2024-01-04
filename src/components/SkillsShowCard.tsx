import React from "react";
interface Props {
  imagelink: string;
  skillcadheading: string;
  textcontent: string;
}
export default function SkillsShowCard({
  imagelink,
  skillcadheading,
  textcontent,
}: Props) {
  return (
    <>
      <div className="skillsshowcasecard-container">
        <div className="skillcard">
          <div className="skillcard-image">
            <img src={imagelink} alt="" className="skillcardimage" />
          </div>
          <div className="skillcard-content">
            <div className="skillcard-content-headings">{skillcadheading}</div>
            <div className="skillcard-content-text">{textcontent}</div>
          </div>
        </div>
      </div>
    </>
  );
}
