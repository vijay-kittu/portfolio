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
      {/*<nav className="nav"></nav>*/}
      <div className="header">
        {/*<Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>*/}
      </div>
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
