import Working from "../images/man-working-at-computer-vector-3789594-removebg-preview.png";
import Clock from "../images/Alarm_Clock_Animation_High_Res.png";
import "../styles/Undercons.css";
export default function UnderCons() {
  return (
    <>
      {" "}
      <div className="App">
        <div className="heading">WEBSITE</div>
        <div className="secondary">Under Construction</div>
        <img src={Working} alt="" className="img" />
        <img src={Clock} alt="" className="imgclock" />
        <h2 className="heading-launch">Launching Soon!</h2>
      </div>
      <div className="footer">Simarjot Singh &copy; 2023</div>
    </>
  );
}
