import { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/Home.css";
import "../styles/Contact.css";
import Navbar from "./Navbar";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";

import Footer from "./Footer";
import Form from "./Form";

export default function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <div className="contact-container">
        <div className="contact-social-links-container">
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/simarjot-singh-75025725b/"
              className="linktosocial"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <CiLinkedin className="linkedIn-icon" size={50} />
            </a>
          </div>

          <div className="github_">
            <a
              href="https://github.com/simarjot0032"
              target="_blank"
              className="linktosocial"
              style={{ textDecoration: "none" }}
            >
              <FaGithub className="github-icon" size={50} />
            </a>
          </div>

          <div className="instagram">
            <a
              href="https://www.instagram.com/simarjot0032/"
              className="linktosocial"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <FaInstagram size={50} className="instagram-icon" />
            </a>
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
            <Form />
          </div>
        </div>
      </div>
      <div className="footer-section">
        <Footer></Footer>
      </div>
    </>
  );
}
