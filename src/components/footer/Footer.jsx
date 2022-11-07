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
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebook className="footer_socials_icon"/></a>
        <a href="https://github.com"><FaGithub className="footer_socials_icon"/></a>
        <a href="https://linkedin.com"><FaLinkedin className="footer_socials_icon"/></a>
      </div>

      <div className="footer_copyright"><small>&copy; Joseph Villanueva. All rights reserved</small></div>
    </footer>
  );
};

export default Footer;
