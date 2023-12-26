import "../styles/Site.css";
import Navbar from "./Navbar";
import Image from "../images/1701812591483 (1).jpg";
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
          <div className="self-container">
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
            <div className="self-container-line">HI I AM</div>
            <div className="self-container-secondline">Simarjot Singh</div>
            <div className="self-container-lastline">Web Developer</div>
          </div>
        </div>
      </div>
    </>
  );
}
