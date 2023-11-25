import { Route, Router, HashRouter } from "react-router-dom";
import UnderCons from "./components/UnderCons";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <HashRouter>
        <Navbar></Navbar>
      </HashRouter>
    </>
  );
}

export default App;
