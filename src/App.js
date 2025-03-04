import "./App.css";
import React from "react";
import { Link } from "react-scroll";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { LandingPage } from "./components/LandingPage";
import { Slider } from "./components/Slider";

function App() {
  return (
    <div className="App">
      <div className="landing-page-text">
        <p>Hi, I'm ,</p>
      </div>
      <span>Vijay Krishna</span>

      <div className="landing-page-text">
        <p>an aspiring Web Developer </p>
      </div>
      <div className="header"></div>
      <Slider />
      <LandingPage />
      <Skills id="skills" />
      <Projects id="projects" />
      <div className="footer">
        <h2>Footer</h2>
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;
