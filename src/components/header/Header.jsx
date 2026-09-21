import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me (2).png";
import Headersocials from "./Headersocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I&apos;m</h4>
        <h1>Joseph Villanueva</h1>
        <h4 className="text-light">
          Full-Stack Developer and Business Manager
        </h4>
        <CTA />
        <Headersocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
