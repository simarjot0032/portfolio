import { FaArrowRight, FaDownload } from "react-icons/fa";
import "../styles/Footer.css";
import resume from "../assets/Simarjot's Resume (8).pdf";
import { Link } from "react-router-dom";
export default function Footer(this: any) {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <div className="footer-container">
        <div className="logo-tagline">
          <p className="logo">
            &lt;/&gt;
            <span
              style={{ display: "inline-block", width: "5px", height: "2px" }}
            ></span>
            SJS
          </p>
          <p className="tagline">
            Elevating Web Experiences with Passion and Precision.
          </p>
        </div>
        <div className="navigation-container">
          <p className="navigation-heading">Navigations</p>
          <div className="navigation">
            <Link to="#" className="link--footer">
              <li className="link-footer">Home</li>
            </Link>
            <Link to="Skills" className="link--footer">
              <li className="link-footer">Skills</li>
            </Link>
            <Link to="Project" className="link--footer">
              <li className="link-footer">Project</li>
            </Link>
            <Link to="Contact" className="link--footer">
              <li className="link-footer">Contact</li>
            </Link>
          </div>
        </div>
        <div className="social-links-container">
          <p className="navigation-heading">Connect!</p>
          <a
            href=" https://www.linkedin.com/in/simarjot-singh-75025725b/"
            target="blank"
            className="link--footer"
          >
            <li className="link-footer">LinkedIn</li>
          </a>
          <a
            href="https://github.com/simarjot0032"
            className="link--footer"
            target="_blank"
          >
            <li className="link-footer">Github</li>
          </a>
          <a
            href="https://www.instagram.com/simarjot0032/"
            className="link--footer"
            target="_blank"
          >
            <li className="link-footer">Instagram</li>
          </a>
          <a href="mailto:devsimarjs@gmail.com" className="link--footer">
            <li className="link-footer">Mail</li>
          </a>
        </div>
        <div className="hireme-resume-footer">
          <a href="mailto:devsimarjs@gmail.com" className="linktohireme">
            <button className="hireme">
              Hire Me!{" "}
              <FaArrowRight
                color="white"
                style={{ marginLeft: "5px" }}
                size={20}
              />
            </button>
          </a>
          <a href={resume} className="linktoresume" download={true}>
            <button className="resume">
              Resume{" "}
              <FaDownload
                color="white"
                style={{ marginLeft: "5px" }}
                size={20}
              />
            </button>
          </a>
        </div>
      </div>
      <div className="ccrights">Simarjot Singh &#169; 2023-{year}</div>
    </>
  );
}
