import React from "react";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="skills" smooth duration={500}>
          Skills
        </Link>
        <Link to="projects" smooth duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth duration={500}>
          Contact
        </Link>
      </div>
    </div>
  );
};
