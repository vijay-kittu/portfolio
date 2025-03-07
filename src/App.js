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
      {/*<div className="landing-image">
        <img src="images/trading-image.jpeg" />
      </div>*/}
      <div className="landing-content">
        <p>Hi, I'm</p>
        <p>an aspiring Web Developer </p>
        {/*<div className="landing-content-1">
          
        </div>*/}
      </div>

      <div className="name">Vijay Krishna</div>
      {/*<div className="landing-content-2">
        
      </div>*/}
      <Header />
      {/*<Slider />*/}
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
