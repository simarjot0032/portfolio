import { Route, Router, HashRouter } from "react-router-dom";
import UnderCons from "./components/UnderCons";
import Navbar from "./components/Navbar";
import Site from "./components/Site";
function App() {
  return (
    <>
      <HashRouter>
        <Site />
      </HashRouter>
    </>
  );
}

export default App;
