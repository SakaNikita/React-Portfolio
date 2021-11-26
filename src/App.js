import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Project1, Project2, Project3, Project4 } from "./pages/Projects";
import Skills from "./pages/Skills";

const App = () => {
  const location = useLocation();
  let history = useNavigate();

  useEffect(() => {
    const handleScrollToElement = (e) => {
      console.log(e.wheelDeltaY);
      const url = window.location.origin + "/";

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 500);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 500);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push("projet-1");
            }, 500);
          }
          break;
        case url + "projet1":
          wheelRouter("projet2", "");
          break;
        case url + "projet2":
          wheelRouter("projet3", "projet1");
          break;
        case url + "projet3":
          wheelRouter("projet4", "projet2");
          break;
        case url + "projet4":
          wheelRouter("contact", "projet3");
          break;
        case url + "contact":
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push("projet4");
            }, 500);
          }
          break;
        default:
          console.log("nothing");
      }
    };
    window.addEventListener("wheel", handleScrollToElement);
  }, [history]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Navigate to="/" />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
