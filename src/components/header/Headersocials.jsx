import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Headersocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/josephgabrielgvillanueva/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/josephvillanueva" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default Headersocials;
