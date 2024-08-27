import { useState } from "react";
import "../styles/Project.css";
import Navbar from "./Navbar";
import { IoIosCodeWorking } from "react-icons/io";
import ProjectCard from "./ProjectCard";
import skriper from "../images/Project/Screenshot from 2024-01-08 21-05-48.png";
import apple from "../images/Project/Screenshot from 2024-01-08 22-21-41.png";
import ball from "../images/Project/Screenshot from 2024-01-09 01-04-48.png";
import modal from "../images/Project/modal.png";
import counter from "../images/Project/counter.png";
import gk from "../images/Project/gk.png";
import fs from "../images/Project/fs.png";
import Footer from "./Footer";
export default function Poject() {
  const [tabindex, settabindex] = useState(1);
  function switchtab(n: number): any {
    settabindex(n);
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="projects-section-container">
        <div className="projects-container">
          <div className="projects-heading-container">
            <div className="project-icon">
              <IoIosCodeWorking size={55} color="var(--primarycolor)" />
            </div>
            <div className="projects-heading">Projects !</div>
          </div>
          <div className="project-container-content">
            <div className="project-content">
              Welcome to my <b>Project</b> page{" "}
              <span style={{ fontSize: "1.5rem" }}>&#128075;</span>!
            </div>
          </div>
          {/* <div className="project-showcase-heading">Project's Showcase</div> */}
          <div className="project-tabs-container">
            <div
              className={tabindex === 1 ? "beginners-tab" : "colorless-tab"}
              onClick={() => switchtab(1)}
            >
              Beginner Level
            </div>
            <div
              className={tabindex === 2 ? "advance-tab" : "colorless-tab"}
              onClick={() => switchtab(2)}
            >
              Advance Level
            </div>
          </div>
          <div
            className={
              tabindex === 1
                ? "content-display"
                : "project-showcase-container-beginner"
            }
          >
            <ProjectCard
              imagelink={apple}
              heading={"Apple Watch"}
              tags={["html"]}
              text="I have developed a Apple Watch landing page. This project not only allowed me to reinforce my skills in front-end development, also provided an opportunity to delve into design aesthetics."
              projectlink="https://simarjot0032.github.io/sampleproject/apple%20watch/html/index.html"
            ></ProjectCard>
            <ProjectCard
              imagelink={skriper}
              heading={"Skriper Clone"}
              tags={["html"]}
              text="
              I honed my HTML and CSS skills by creating a compact front-end clone of the Skriper website's home page. This project showcases my dedication to clean and responsive web design to make match it."
              projectlink="https://simarjot0032.github.io/sampleproject/skriper/html/index.html"
            ></ProjectCard>
            <ProjectCard
              imagelink={ball}
              heading={"Animation"}
              tags={["html"]}
              text="In my journey to expand my web development skills, I undertook a project focused on animation simple one but impactful ball animation designed.This helped me to delvelop animation in website. "
              projectlink=""
            ></ProjectCard>
            <ProjectCard
              imagelink={modal}
              heading={"Modals"}
              tags={["html"]}
              text="In an effort to enhance my JavaScript proficiency, I embarked on a project centered around creating a dynamic modal. This modal is designed to open and close at the user's command."
              projectlink="https://simarjot0032.github.io/sampleproject/jspractice/models/"
            ></ProjectCard>
            <ProjectCard
              imagelink={counter}
              heading={"Counter"}
              tags={["html"]}
              text="In my pursuit of honing my web development skills, I have crafted a dynamic counter utilizing HTML, CSS, and JavaScript, complete with an innovative sound feature. This project served as an immersive opportunity to develop my understanding of front-end development."
              projectlink="https://simarjot0032.github.io/sampleproject/jspractice/counter/"
            ></ProjectCard>
          </div>
          <div
            className={
              tabindex === 2
                ? "content-display"
                : "project-showcase-container-advance"
            }
          >
            <ProjectCard
              imagelink={gk}
              heading={"G.K. Enterprises"}
              tags={["html"]}
              text="In my advanced exploration of full-stack development, I undertook a comprehensive project named GK Enterprise, an innovative website that seamlessly integrates HTML, CSS, and JavaScript with Supabase."
              projectlink="https://gkenterprises.me/"
            ></ProjectCard>
            <ProjectCard
              imagelink={fs}
              heading={"Functional Science"}
              tags={["html"]}
              text="In the realm of education technology, I have made a website named 'Functional Science,' tailored specifically for coaching students in classes 9, 10, 11, and 12 with react with typescript for better performance."
              projectlink="https://simarjot0032.github.io/functional_science/"
            ></ProjectCard>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <Footer></Footer>
      </div>
    </>
  );
}
