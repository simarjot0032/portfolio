import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import image from "../images/fotor-ai-20231228474-removebg-preview.png";
export default function Navbar() {
  const [visiblity, setvisiblity] = useState(false);
  function onclicked() {
    setvisiblity(!visiblity);
  }
  function onclosed() {
    setvisiblity(false);
  }

  return (
    <>
      <div className="navbar">
        <div className="navleft">
          <img src={image} alt="" className="navbarimage" />
          <p className="name-navbar">Simarjot Singh</p>
        </div>
        <RiMenu4Fill
          size={35}
          onClick={onclicked}
          className="openbtn"
          color="white"
        ></RiMenu4Fill>
        <div className={"navright" + " " + `${visiblity ? "open" : ""}`}>
          <AiOutlineCloseCircle
            color="white"
            size={35}
            className="closebtn"
            onClick={onclosed}
          ></AiOutlineCloseCircle>
          <Link to="#Home" className="link">
            <li className="link-navbar" onClick={onclosed}>
              Home
            </li>
          </Link>
          <Link to="#Skills" className="link">
            <li className="link-navbar" onClick={onclosed}>
              Skills
            </li>
          </Link>
          <Link to="#Project" className="link">
            <li className="link-navbar" onClick={onclosed}>
              Project
            </li>
          </Link>
          <Link to="#Contact" className="link">
            <li className="link-navbar" onClick={onclosed}>
              Contact
            </li>
          </Link>
        </div>
      </div>
    </>
  );
}
