import { Route, Router, HashRouter } from "react-router-dom";
import UnderCons from "./components/UnderCons";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Preload from "./components/Preload";
import { useState } from "react";
function App() {
  const [showpreload, setpreload] = useState(true);
  setTimeout(() => {
    setpreload(false);
  }, 2950);
  return (
    <>
      <HashRouter>
        {/* {showpreload && <Preload></Preload>} */}
        <Home />
      </HashRouter>
    </>
  );
}
export default App;
