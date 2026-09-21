import React from "react";
import "./about.css";
import ME from "../../assets/me-about-portrait.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <div className="flex flex-col space-y-2">
                <small>7+ years in engineering, UX, and product</small>
                <small>2 years in business management and marketing</small>
              </div>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Current Role</h5>
              <small>Systems Analyst &amp; UI/UX Lead at SMITS, Inc.</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Domains</h5>
              <small>Enterprise, banking, retail, and blockchain</small>
            </article>
          </div>
        </div>
        <div className="about_bio">
          <div className="about_content_p_content">
            <p>
              I am a <strong>Systems Analyst and UI/UX Lead</strong> at{" "}
              <strong>SMITS, Inc.</strong>, the IT company of San Miguel
              Corporation, where I translate business needs into functional
              requirements, user flows, acceptance criteria, and delivery-ready
              feature scopes. I support <strong>Product Owner</strong>{" "}
              initiatives through backlog refinement, feature prioritization,
              requirements validation, client workshops, and solution reviews,
              keeping business value, usability, and technical feasibility
              aligned rather than trading one against the others.
            </p>
            <p>
              I came to product through engineering, and that is the part I lean
              on most. Having shipped <strong>React.js</strong> and{" "}
              <strong>Next.js</strong> applications, cloud tooling, and design
              systems myself, I can size feasibility honestly with developers,
              write requirements that survive implementation, and ask the
              question that surfaces the edge case before it reaches a sprint.
            </p>
            <p>
              Before this, as a <strong>Frontend Developer</strong> at{" "}
              <strong>Mashup Garage</strong>, I led the redesign and performance
              optimization of Metrobank&apos;s branding website, aligning
              business requirements and success measures with user experience
              and product goals. As a <strong>Junior Cloud Engineer</strong> at{" "}
              <strong>Senti.ai</strong>, I contributed requirements for OCR and
              Google Cloud services on a finance processing portal that
              digitizes over 50,000 files monthly. At{" "}
              <strong>Anteriore Solutions</strong> I developed{" "}
              <strong>Playible.io</strong> and led its technical transition to
              NEAR Protocol and GraphQL.
            </p>
            <p>
              I also plan internal UI/UX training and help govern the SMITS
              design system, contributing UX standards, reusable patterns, and
              documentation. Those are the same habits that make a backlog
              legible to everyone reading it.
            </p>
            <p>
              I am currently looking to move fully into a{" "}
              <strong>Product Owner</strong> role, where the combination of
              business analysis, user-centered design, and hands-on engineering
              is the whole job rather than three separate ones.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
