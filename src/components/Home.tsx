import "../styles/Home.css";
import Navbar from "./Navbar";
import Image from "../images/fotor-ai-20231228474-removebg-preview.png";
import resume from "../assets/Simarjot's Resume (5).pdf";
import { FaArrowRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
export default function Site() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <div id="Home" className="home">
          <div className="image-div">
            <img src={Image} alt="" className="image" />
          </div>
          {/* <div className="line"></div> */}
          <div className="self-main-container">
            {/* <div className="self-name">Simarjot Singh</div>
            <div className="web-dev">Web Developer</div>
            <div className="social-links">
              <div className="githubLink">
                <a
                  href="https://github.com/simarjot0032"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FaGithub className="github-icon" size={45} />
                </a>
              </div>
              <div className="linkedInLink">
                <a
                  href="https://www.linkedin.com/in/simarjot-singh-75025725b/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <CiLinkedin className="linkedIn-icon" size={50} />
                </a>
              </div>
            </div> */}
            <div className="self-container">
              <div className="self-container-line">HI I AM</div>
              <div className="self-container-secondline">Simarjot Singh</div>
              <div className="self-container-lastline">Web Developer</div>
            </div>
            <div className="hireme-resume">
              <button className="hireme">
                Hire Me!{" "}
                <FaArrowRight color="white" style={{ marginLeft: "5px" }} />
              </button>
              <a href={resume} className="linktoresume" download={true}>
                <button className="resume">
                  Resume{" "}
                  <FaDownload color="white" style={{ marginLeft: "5px" }} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
