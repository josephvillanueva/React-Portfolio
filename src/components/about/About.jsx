import React from "react";
import "./about.css";
import ME from "../../assets/me-about (2).png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3 years working experience in Web Development</small>
              <small>
                2 years working experience in Business Management, Sales, and
                Strategic Marketing
              </small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Previous experience</h5>
              <small>Fontend Web Developer and Cloud Engineer</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>
                Blockchain, Optical Character Recognition, AI Object
                Recognition, and more
              </small>
            </article>
          </div>

          <p>
            An aspiring tech career-shifter that learned coding from the basics
            of HTML and CSS. He later transitioned to React.js while gaining
            experience in blockchain and cloud engineering development through
            work experience in Anteriore Solutions and Senti.ai respectively. He
            is now a Software Engineer - Frontend Developer for Mashup Garage
            Inc. and is currently maintaining a banking website that is used by
            thousands of people on a daily basis.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
