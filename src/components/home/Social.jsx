import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.upwork.com/freelancers/~01feef15139fa7a489"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        title="Upwork — Top Rated"
      >
        <SiUpwork />
      </a>
      <a
        href="https://www.github.com/shubham21222"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/shubhamraikwar-shubhraikwar/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        title="LinkedIn"
      >
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Social;
