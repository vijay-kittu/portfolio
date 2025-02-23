import "./App.css";
import React from "react";
import { Link } from "react-scroll";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { LandingPage } from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <div className="header">
        <nav className="nav">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </nav>
      </div>
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
