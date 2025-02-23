import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
export const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <a
        href="https://www.instagram.com/vijay.kittu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/vijay-krishna-4b7295253/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/vijay-kittu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
    </div>
  );
};
