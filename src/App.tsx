import { Route, Router, HashRouter, Routes } from "react-router-dom";
import UnderCons from "./components/UnderCons";

import Home from "./components/Home";
import Preload from "./components/Preload";
import { useState } from "react";
import Skills from "./components/Skills";
import Project from "./components/Poject";
import Cursor from "./components/Cursor";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
function App() {
  const [showpreload, setpreload] = useState(true);
  const [showhome, sethome] = useState(false);
  setTimeout(() => {
    setpreload(false);
    sethome(true);
  }, 2850);
  const routes = [
    {
      path: "What is web",
      element: <UnderCons></UnderCons>,
    },
  ];
  return (
    <>
      {/* <Cursor></Cursor> */}
      <HashRouter>
        <div style={{ backgroundColor: "black" }}>
          {showpreload && <Preload></Preload>}
          {/* <Navbar></Navbar> */}
          {showhome && (
            <Routes>
              <Route path="" element={<Home />}></Route>
              <Route path="/Skills" element={<Skills />}></Route>
              <Route path="/Project" element={<Project />}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
              <Route path="/Blog" element={<Blog />}></Route>
              {routes.map((route): any => {
                return <Route path={route.path} element={route.element} />;
              })}
            </Routes>
          )}
        </div>
      </HashRouter>
    </>
  );
}
export default App;
