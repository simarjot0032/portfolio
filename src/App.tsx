import { Route, Router, HashRouter } from "react-router-dom";
import UnderCons from "./components/UnderCons";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <HashRouter>
        <Navbar></Navbar>
        {/* <div style={{ height: "100vh", backgroundColor: "black" }}></div> */}
      </HashRouter>
    </>
  );
}

export default App;
