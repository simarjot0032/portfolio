import { Route, Router, HashRouter } from "react-router-dom";
import UnderCons from "./components/UnderCons";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Preload from "./components/Preload";
import { useState } from "react";
function App() {
  const [showpreload, setpreload] = useState(true);
  const [showhome, sethome] = useState(false);
  setTimeout(() => {
    setpreload(false);
    sethome(true);
  }, 2950);
  return (
    <>
      <HashRouter>
        {showpreload && <Preload></Preload>}
        {showhome && <Home />}
      </HashRouter>
    </>
  );
}
export default App;
