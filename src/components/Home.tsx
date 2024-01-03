import "../styles/Home.css";
import Image from "../images/memoji_auto_x2 (2).png";
import resume from "../assets/Simarjot's Resume (8).pdf";
import introimage from "../images/1701812591483 (1).jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import Form from "../components/Form";
import Footer from "./Footer";

export default function Site() {
  // const honcontextmenu = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <div className="main-container">
        <div id="Home" className="home">
          <div className="container-image-self">
            <div className="image-div">
              <img src={Image} alt="" className="image" />
            </div>

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
          </div>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-100}
            href="#aboutme"
            className="linktodown"
          >
            <HiChevronDown color="teal" size={60} className="linktodownbtn" />
          </Link>
          <div className="intro-container" id="aboutme">
            <div className="intro-container-header">
              <div className="intro-container-header-content">About Me!</div>
            </div>
            <div className="intro-container-content">
              <div className="intro-container-content-image-links">
                <div className="intro-container-image">
                  <img src={introimage} alt="" className="intro-image" />
                </div>
                <div className="intro-container-links">
                  <a
                    href="https://www.linkedin.com/in/simarjot-singh-75025725b/"
                    className="linktosocial"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <CiLinkedin className="linkedIn-icon" size={48} />
                  </a>
                  <a
                    href="https://github.com/simarjot0032"
                    target="_blank"
                    className="linktosocial"
                    style={{ textDecoration: "none" }}
                  >
                    <FaGithub className="github-icon" size={42} />
                  </a>

                  <a
                    href="https://www.instagram.com/simarjot0032/"
                    className="linktosocial"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <FaInstagram size={42} className="instagram-icon" />
                  </a>
                </div>
              </div>
              <div className="intro-container-text">
                Hey Hello <span className="emoji">👋</span>
                <br />
                <br />
                I'm Simarjot Singh a passionate web developer on a journey of
                exploration and innovation in the vast realm of technology.
                Currently pursuing a Diploma in Computer Science, I am immersed
                in the dynamic world of coding and design.
                <br />
                <br />
                🚀 As a web developer, I thrive on turning ideas into
                interactive and engaging digital experiences. My journey in the
                realm of technology has been a fascinating exploration, filled
                with continuous learning and growth. I am enthusiastic about
                leveraging my skills to create solutions that not only meet but
                exceed expectations.
                <br />
                <br />
                🛠️ Let's build something incredible together! Feel free to
                explore my portfolio and get in touch if you have a project in
                mind or if you simply want to connect. I'm always eager to take
                on new challenges and contribute to the ever-evolving landscape
                of web development.
              </div>
            </div>
          </div>
          <div className="lets-connect">
            <div className="lets-connect-header">Let's Connect!</div>
            <div className="lets-connect-content">
              I believe in the power of collaboration and open communication.
              Whether you have an exciting project in mind, want to discuss the
              latest trends in technology, or just want to say hello, I'm always
              eager to connect with like-minded individuals.
            </div>
            <div className="lets-connect-form">
              {/* <form
                action="https://formspree.io/f/xwkgkeyn"
                method="post"
                className="lets-connect"
              >
                <div className="name-div">
                  <label htmlFor="name" className="label">
                    Name:
                  </label>
                  <input
                    type="text"
                    name=""
                    id="name"
                    className="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                  />
                </div>
                <div className="email-div">
                  <label htmlFor="email" className="label">
                    Email:
                  </label>
                  <input
                    type="email"
                    name=""
                    id="email"
                    className="email"
                    placeholder="Enter your email address"
                    autoComplete="off"
                  />
                </div>
               
                  <button type="submit" className="connect">
                    Connect!
                  </button>
                </div>
              </form> */}
              {/* <form onSubmit={handleSubmit}>
                <div className="name-div">
                  <label htmlFor="name" className="label">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                  />
                </div>

                <ValidationError
                  prefix="name"
                  field="name"
                  errors={state.errors}
                />
                <div className="email-div">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="email"
                    placeholder="Enter your email address"
                    autoComplete="off"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="btn">
                  <button
                    type="submit"
                    className="connect"
                    disabled={state.submitting}
                  >
                    Submit
                  </button>
                </div>
              </form> */}
              <Form></Form>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </>
  );
}
