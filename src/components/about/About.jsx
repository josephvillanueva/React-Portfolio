import React from "react";
import "./about.css";
import ME from "../../assets/me-about (2).png";
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
                <small>3+ years in Web Development</small>
                <br />
                <small>
                  2 years in Business Management, Sales, and Strategic Marketing
                </small>
              </div>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Previous Roles</h5>
              <small>Frontend Web Developer & Cloud Engineer</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>
                Focused on Frontend Development with Blockchain, Optical
                Character Recognition, and AI Object Recognition.
              </small>
            </article>
          </div>
          <div className="about_content_p_content">
            <p className="about_content_p_first">
              I am a results-driven Front-end Software Developer at{" "}
              <strong>Mashup Garage</strong>, specializing in enhancing user
              engagement on a high-traffic banking platform that serves
              thousands daily. In my current role, I lead the redesign and
              optimization of the platform, leveraging advanced UI/UX strategies
              and performance improvements. I excel at engineering and launching
              interactive features that enhance user satisfaction and developing
              scalable, reusable UI components with <strong>React.js</strong>,{" "}
              <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>.
            </p>
            <p>
              I have a strong foundation in collaborative environments, working
              closely with cross-functional teams to standardize development
              practices and ensure a seamless experience across all devices.
            </p>
            <p>
              Previously, as a <strong>Junior Cloud Engineer</strong> at{" "}
              <strong>Senti.ai</strong>, I improved development efficiency by
              implementing Fastify and Terraform, and I contributed to the
              successful delivery of a finance processing portal that digitizes
              over 50,000 files monthly. My role required a keen eye for detail,
              focusing on bug fixes and participating in technical sprints.
            </p>
            <p>
              At <strong>Anteriore Solutions</strong>, I developed{" "}
              <strong>Playible.io</strong>, a blockchain web application that
              integrates decentralized finance with traditional gaming markets,
              showcasing my ability to innovate and adapt in a rapidly evolving
              tech landscape.
            </p>
            <p>
              With a robust skill set in web development, cloud engineering, and
              a passion for creating user-centered solutions, I am committed to
              delivering high-quality, impactful projects that drive user
              engagement and satisfaction.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
