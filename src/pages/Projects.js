import React from "react";
import ButtonBottom from "../components/ButtonBottom";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

export const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <ButtonBottom left={"/"} right={"/project1"} />
      </div>
    </main>
  );
};
export const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <ButtonBottom left={"/project2"} right={"/project3"} />
      </div>
    </main>
  );
};
export const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <ButtonBottom left={"/project3"} right={"/project4"} />
      </div>
    </main>
  );
};
export const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={4} />
        <ButtonBottom left={"/project4"} right={"contact"} />
      </div>
    </main>
  );
};
