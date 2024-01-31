import React from "react";
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://x.com/shubham_2221" className="home__social-icon" target="_blank">
                <FiTwitter />
            </a>
            <a href="https://www.github.com/shubham21222" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/shubhamraikwar-shubhamraikwar/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;