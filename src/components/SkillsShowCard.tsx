import React from "react";
// import { ImHtmlFive2 } from "react-icons/im";
interface Props {
  linktoimageoricon: any;
  skillcadheading: string;
  textcontent: string;
}
export default function SkillsShowCard({
  linktoimageoricon,
  skillcadheading,
  textcontent,
}: Props) {
  return (
    <>
      <div className="skillsshowcasecard-container">
        <div className="skillcard">
          <div className="skillcard-image">{linktoimageoricon}</div>
          <div className="skillcard-content">
            <div className="skillcard-content-headings">{skillcadheading}</div>
            <div className="skillcard-content-text">{textcontent}</div>
          </div>
        </div>
      </div>
    </>
  );
}
