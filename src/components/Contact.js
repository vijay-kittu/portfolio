import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Resume } from "./Resume";
export const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contacts">
        <div className="contact-links">
          <div>
            <a
              href="https://www.instagram.com/vijay.kittu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.instagram.com/vijay.kittu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/vijay-krishna-4b7295253/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/in/vijay-krishna-4b7295253/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>

          <div>
            <a
              href="https://github.com/vijay-kittu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/vijay-kittu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
        <a
          href="resume/RenderCV_EngineeringResumes_Theme (6).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume"
        >
          View my Resume
        </a>
      </div>
    </div>
  );
};
