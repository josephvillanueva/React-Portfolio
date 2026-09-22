/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        JOSEPH GABRIEL G. VILLANUEVA
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">References</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/bracezz" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FaFacebook className="footer_socials_icon" />
        </a>
        <a href="https://github.com/josephvillanueva" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub className="footer_socials_icon" />
        </a>
        <a href="https://www.linkedin.com/in/josephgabrielgvillanueva/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="footer_socials_icon" />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Joseph Villanueva. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
