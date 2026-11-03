import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeroShader from "./HeroShader";
import ME from "../../assets/me (2).png";
import Headersocials from "./Headersocials";

// Hero copy: edit these two strings. Headline is the outcome (about 7 words);
// the supporting line gives role, employer and proof (about 14 to 20 words).
const HERO_HEADLINE = "Product ownership that connects the business and the team";
const HERO_SUPPORT =
  "Systems Analyst and UI/UX Lead at SMITS, Inc., supporting Product Owner initiatives through backlog refinement, prioritization, client workshops and solution reviews.";

const Header = () => {
  return (
    <header>
      <HeroShader />
      <div className="container header_container">
        <h4>Hello I&apos;m</h4>
        <h1>Joseph Villanueva</h1>
        <p className="hero_headline">{HERO_HEADLINE}</p>
        <p className="hero_support">{HERO_SUPPORT}</p>
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

