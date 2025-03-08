import "./App.css";
import React from "react";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Slider } from "./components/Slider";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="name"></div>
      <div className="landing-content">
        <p>
          Hi, I'm <br />
          <span>Vijaya Krishna</span>
        </p>
        <p>
          A final year student at IIT Bombay. I aim to deepen my understanding
          in various areas of technology and product development.{" "}
        </p>
      </div>

      <Header />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
