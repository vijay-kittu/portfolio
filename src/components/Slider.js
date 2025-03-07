import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Slider = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="slider">
      <button className="hamburger-btn" onClick={() => setIsOpen(true)}>
        <Menu size={20} />
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <X size={30} />
        </button>

        <nav>
          <Link
            to="skills"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};
