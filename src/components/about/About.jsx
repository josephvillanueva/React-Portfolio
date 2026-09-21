import React from "react";
import "./about.css";
import ME from "../../assets/me-about-portrait.jpg";
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
              <small>7+ years across engineering and product</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Current Role</h5>
              <small>Systems Analyst &amp; UI/UX Lead at SMITS (San Miguel Corporation)</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Domains</h5>
              <small>Enterprise, banking, retail, and blockchain</small>
            </article>
          </div>

          <p>
            I started as an engineer and moved toward product. Today I work as a
            Systems Analyst and UI/UX Lead, translating business needs into
            functional requirements, user flows, prioritized backlogs, and
            acceptance criteria — and supporting Product Owner initiatives
            through backlog refinement, feature prioritization, client
            workshops, and solution reviews.
          </p>
          <p>
            The technical background is the reason I am useful in that seat.
            Having shipped React and Next.js applications, cloud tooling, and
            design systems myself, I can size feasibility with engineers
            honestly, write requirements that survive implementation, and keep
            business value, usability, and technical reality aligned rather than
            trading one off against the others.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
