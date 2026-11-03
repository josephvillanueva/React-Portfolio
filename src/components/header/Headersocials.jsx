import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Headersocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/josephgabrielgvillanueva/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <BsLinkedin aria-hidden="true" />
      </a>
      <a href="https://github.com/josephvillanueva" target="_blank" rel="noreferrer" aria-label="GitHub">
        <BsGithub aria-hidden="true" />
      </a>
    </div>
  );
};

export default Headersocials;
