import { useState } from "react";
import "../styles/Project.css";
import Navbar from "./Navbar";
import { IoIosCodeWorking } from "react-icons/io";
export default function Poject() {
  const [tabindex, settabindex] = useState(1);
  function switchtab(n: number): any {
    settabindex(n);
    console.log(n);
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="projects-section-container">
        <div className="projects-container">
          <div className="projects-heading-container">
            <div className="project-icon">
              <IoIosCodeWorking
                size={55}
                //   stroke="5"
                color="var(--primarycolor)"
              />
            </div>
            <div className="projects-heading">Projects !</div>
          </div>
          <div className="project-container-content">
            <div className="project-content">
              Welcome to my <b>Project</b> page{" "}
              <span style={{ fontSize: "1.5rem" }}>&#128075;</span>!
              <br />
              <br />
              This section is a dedicated showcase of the projects that define
              my journey in the realms of frontend and backend development.
              <br />
              <br />
              From wielding coding languages to unleashing the potential of
              creative design tools, this space serves as a canvas for the
              passion and precision I infuse into every project.
              <br />
              <br />
              Take a plunge into the diverse technologies I work with, witness
              the proficiency I've cultivated, and experience the unwavering
              commitment I bring to elevating web experiences.
            </div>
          </div>
          <div className="project-showcase-heading">Project's Showcase</div>
          <div className="project-tabs-container">
            <div className="beginners-tab" onClick={() => switchtab(1)}>
              Beginner Level
            </div>
            <div className="advance-tab" onClick={() => switchtab(2)}>
              Advance Level
            </div>
          </div>
          <div className="project-showcase-contanier"></div>
        </div>
      </div>
    </>
  );
}
