import "../styles/Site.css";
import Navbar from "./Navbar";
import Image from "../images/1701358933349.webp";
export default function Site() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <div id="Home">
          <div className="home-img">
            <div className="image-div">
              <img src={Image} alt="" className="image" />
            </div>
            <div className="line"></div>
            <div className="self-name">Simarjot Singh</div>
          </div>
        </div>
      </div>
    </>
  );
}
