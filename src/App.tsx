import { Route, Router, HashRouter, Routes } from "react-router-dom";
import UnderCons from "./components/UnderCons";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Preload from "./components/Preload";
import { useState } from "react";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
function App() {
  const [showpreload, setpreload] = useState(true);
  const [showhome, sethome] = useState(false);
  setTimeout(() => {
    setpreload(false);
    sethome(true);
  }, 2850);
  return (
    <>
      <HashRouter>
        <div style={{ backgroundColor: "black" }}>
          {showpreload && <Preload></Preload>}
          {/* <Navbar></Navbar> */}
          {showhome && (
            <Routes>
              <Route path="" element={<Home />}></Route>
              <Route path="/Skills" element={<Skills />}></Route>
              <Route path="/Project" element={<UnderCons />}></Route>
              <Route path="/Contact" element={<UnderCons />}></Route>
            </Routes>
          )}
        </div>
      </HashRouter>
    </>
  );
}
export default App;
