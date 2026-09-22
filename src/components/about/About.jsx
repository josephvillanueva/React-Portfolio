import React from "react";
import "./about.css";
import ME from "../../assets/me-about-portrait.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
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
              <FaAward className="about_icon" aria-hidden="true" />
              <div>
                <h5>Experience</h5>
                <small>7+ years in software, plus an e-commerce business since 2020</small>
              </div>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" aria-hidden="true" />
              <div>
                <h5>Current Role</h5>
                <small>Systems Analyst &amp; UI/UX Lead at SMITS, Inc.</small>
              </div>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" aria-hidden="true" />
              <div>
                <h5>Domains</h5>
                <small>Enterprise, banking, retail, e-commerce, and blockchain</small>
              </div>
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
              requirements validation, client workshops, and solution reviews.
              Most of the job is keeping what the business wants and what the
              team can build in the same conversation.
            </p>
            <p>
              I came to product through engineering, and that&apos;s the part I
              lean on most. I&apos;ve shipped <strong>React.js</strong> and{" "}
              <strong>Next.js</strong> apps and cloud tooling myself, so when a
              developer says something will take two sprints I can usually tell
              why, and I write acceptance criteria that catch the edge case
              before it reaches one.
            </p>
            <p>
              Before this, as a <strong>Software Developer (Frontend)</strong> at{" "}
              <strong>Mashup Garage</strong>, I led the redesign and performance
              optimization of Metrobank&apos;s branding website, aligning
              business requirements and success measures with user experience
              and product goals. As a <strong>Junior Cloud Engineer</strong> at{" "}
              <strong>Senti AI</strong>, I contributed requirements for OCR and
              Google Cloud services on a finance processing portal that
              digitizes over 50,000 files monthly. At{" "}
              <strong>Anteriore</strong> I developed{" "}
              <strong>Playible.io</strong> and led its technical transition to
              NEAR Protocol and GraphQL.
            </p>
            <p>
              I also run internal UI/UX training, so far for 50 colleagues
              across business analysis, project management, systems analysis,
              development, and QA, and help govern the SMITS design system,
              writing the standards and component guidance that project teams
              build from.
            </p>
            <p>
              Next, I want a <strong>Product Owner</strong> role, where the
              analysis and the engineering background stop being side skills
              and become the job.
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
