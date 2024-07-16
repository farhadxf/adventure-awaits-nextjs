import "./Credit.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Credit = () => {
  return (
    <div className="credit-container">
      <div className="credit">
        <span>Crafted by Farhad </span>
        <a
          href="https://www.linkedin.com/in/farhadxf/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="icon" />
        </a>
      </div>

      <div className="source-code">
        <span>Source code:</span>
        <a
          href="https://github.com/farhadxf/adventure-awaits-nextjs.git"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
        >
          <FaGithub className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Credit;
