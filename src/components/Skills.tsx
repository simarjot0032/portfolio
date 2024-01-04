import Contact from "./Contact";
import "../styles/Skills.css";
import { FaRegLightbulb } from "react-icons/fa";
import SkillsShowCard from "./SkillsShowCard";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3 } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import Navbar from "./Navbar";

export default function Skills() {
  return (
    <>
      <Navbar></Navbar>
      <div className="skills">
        <div className="skill-container" style={{ backgroundColor: "black" }}>
          <div className="skill-container-header">
            <p className="header-content">
              <FaRegLightbulb color="var(--primarycolor)" size={35} />
              Skills!
            </p>
          </div>
          <div className="skill-container-content-container">
            <p className="skill-container-content">
              {" "}
              Welcome to my Skills Page{" "}
              <span style={{ fontSize: "1.5rem" }}>&#128075;</span>!
              <br />
              <br />
              I'm thrilled to have you here exploring my personal portfolio.
              This page is a showcase of the skills and expertise that define my
              journey in the world of web development and design.
              <br />
              <br />
              From coding languages to creative design tools, this space
              encapsulates the passion and precision I bring to every project.
              Dive in to discover the technologies.
              <br />
              <br />I work with, the proficiency I've honed, and the commitment
              I have to elevating web experiences. Whether you're here for
              curiosity or seeking a collaborator, I hope this page provides
              valuable insights into my capabilities.
            </p>
          </div>
          {/* <SkillsShowCard
            linktoimageoricon={
              <ImHtmlFive2
                size={100}
                color="#FD5F3D 
            "
              />
            }
            skillcadheading="HTML"
            textcontent=" 
            I strategically place HTML tags for seamless, accessible content. From text structure to multimedia embedding."
          ></SkillsShowCard> */}
          <div className="skillsshowcasecard-container">
            <SkillsShowCard
              icon={<ImHtmlFive2 size={65} color="white" />}
              classname="html"
              skillname="HTML"
            ></SkillsShowCard>
            <SkillsShowCard
              icon={<FaCss3 color="white" size={65} />}
              classname="css"
              skillname="CSS"
            ></SkillsShowCard>
            <SkillsShowCard
              icon={<RiJavascriptLine color="white" size={80} />}
              classname="js"
              skillname="JAVASCRIPT"
            ></SkillsShowCard>
          </div>
        </div>
      </div>
    </>
  );
}
