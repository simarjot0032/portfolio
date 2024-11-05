import { Route, Router, HashRouter, Routes } from "react-router-dom";
import UnderCons from "./components/UnderCons";

import Home from "./components/Home";
import Preload from "./components/Preload";
import { useRef, useState } from "react";
import Skills from "./components/Skills";
import Project from "./components/Project";
// import Cursor from "./components/Cursor";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Whatweb from "./components/Blogrender/Whatweb";
// import Whatiswebdeb from "./components/Blogrender/Whatweb";
type Cordinates = {
  x: number;
  y: number;
};
function App() {
  const [showpreload, setpreload] = useState(true);
  const [showhome, sethome] = useState(false);
  const [cordinates, setcordinates] = useState<Cordinates>({ x: 0, y: 0 });
  setTimeout(() => {
    setpreload(false);
    sethome(true);
  }, 2850);
  const routes = [
    {
      path: "/What is web",
      element: <Whatweb />,
    },
  ];
  const handleMouseMove = (e: any) => {
    setcordinates({ x: e.pageX, y: e.pageY });
  };
  // window.addEventListener("scroll", () => {
  //   let newY = window.scrollY;
  //   setcordinates({ ...cordinates, y: newY });
  // });
  // console.log(cordinates);
  return (
    <>
      <HashRouter>
        <div style={{ backgroundColor: "black" }} onMouseMove={handleMouseMove}>
          <div
            className="cursor-animation"
            style={{
              position: "absolute",
              inset: "0",
              top: `${cordinates?.y}px`,
              left: `${cordinates?.x}px`,
            }}
          ></div>
          {showpreload && <Preload></Preload>}
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
