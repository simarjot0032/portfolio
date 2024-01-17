import { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/Home.css";
import "../styles/Contact.css";
import Navbar from "./Navbar";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Formf from "./Formf";
import Footer from "./Footer";

export default function Contact() {
  const { register, handleSubmit } = useForm();
  // console.log(register("name"));
  // const nameRef = useRef<HTMLInputElement>(null); //use ref
  // const emailRef = useRef<HTMLInputElement>(null); //use ref
  // const [person, setperson] = useState({ //noremal with use state
  //   name: "",
  //   email: "",
  // });
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   // console.log(person);
  //   // console.log(nameRef.current?.value);
  //   // console.log(emailRef.current?.value);
  // };
  return (
    <>
      {/* <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="name-div">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            className="name"
            id="name"
            autoComplete="off"
            // onChange={(e) => {
            //   setperson({
            //     ...person,
            //     name: e.target.value,
            //   });
            // }}

            {...register("name")}
            placeholder="Enter Your Name"
            // ref={nameRef}
          />
        </div>
        <div className="email-div">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            id="email"
            className="email"
            placeholder="Enter your email"
            autoComplete="off"
            // onChange={(e) => {
            //   setperson({
            //     ...person,
            //     email: e.target.value,
            //   });
            // }}
            // ref={emailRef}
          />
        </div>
        <div className="btn">
          <button type="submit" className="connect">
            Submit
          </button>
        </div>
      </form>  praactice*/}
      <Navbar></Navbar>
      <div className="contact-container">
        <div className="lines-container">
          <div className="line-container">
            <div className="line"></div>
            <div className="linkedin">
              {" "}
              <a
                href="https://www.linkedin.com/in/simarjot-singh-75025725b/"
                className="linktosocial"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <CiLinkedin className="linkedIn-icon" size={48} />
              </a>
            </div>
          </div>
          <div className="line2-container">
            <div className="line2"></div>
            <div className="github_">
              <a
                href="https://github.com/simarjot0032"
                target="_blank"
                className="linktosocial"
                style={{ textDecoration: "none" }}
              >
                <FaGithub className="github-icon" size={42} />
              </a>
            </div>
          </div>
          <div className="line3-container">
            <div className="line3"></div>
            <div className="instagram">
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
            <Formf></Formf>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <Footer></Footer>
      </div>
    </>
  );
}
