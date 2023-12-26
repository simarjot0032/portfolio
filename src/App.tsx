import { Route, Router, HashRouter } from "react-router-dom";
import UnderCons from "./components/UnderCons";
import Navbar from "./components/Navbar";
import Site from "./components/Site";
import Preload from "./components/Preload";
import { useState } from "react";
function App() {
  const [showpreload, setpreload] = useState(true);
  setTimeout(() => {
    setpreload(false);
  }, 3800);
  return (
    <>
      <HashRouter>
        {showpreload && <Preload></Preload>}
        <Site />
      </HashRouter>
    </>
  );
}
export default App;
