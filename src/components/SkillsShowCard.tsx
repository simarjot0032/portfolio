import React from "react";
// import { ImHtmlFive2 } from "react-icons/im";
interface Props {
  // linktoimageoricon: any;
  // skillcadheading: string;
  // textcontent: string;
  icon: any;
  classname: string;
  skillname: string;
}
export default function SkillsShowCard({
  // linktoimageoricon,
  // skillcadheading,
  // textcontent,
  icon,
  classname,
  skillname,
}: Props) {
  return (
    <>
      {/* <div className="skillcard">
          <div className="skillcard-image">{linktoimageoricon}</div>
          <div className="skillcard-content">
            <div className="skillcard-content-headings">{skillcadheading}</div>
            <div className="skillcard-content-text">{textcontent}</div>
          </div>
        </div> */}
      <div className="skill-show-containers">
        <div className={"skill-show" + " " + classname}>{icon}</div>
        <div className="skill-name">{skillname}</div>
      </div>
    </>
  );
}
