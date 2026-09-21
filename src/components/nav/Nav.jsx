import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBrain } from "react-icons/bi";
import { MdWorkOutline, MdOutlineFolderOpen } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { BsChatQuote } from "react-icons/bs";

const links = [
  { href: "#", label: "Home", Icon: AiOutlineHome },
  { href: "#about", label: "About", Icon: AiOutlineUser },
  { href: "#experience", label: "Experience", Icon: BiBrain },
  { href: "#services", label: "Services", Icon: MdWorkOutline },
  { href: "#portfolio", label: "Portfolio", Icon: MdOutlineFolderOpen },
  { href: "#testimonials", label: "Character references", Icon: BsChatQuote },
  { href: "#contact", label: "Contact", Icon: RiContactsLine },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav aria-label="Section navigation">
      {links.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          onClick={() => setActiveNav(href)}
          className={activeNav === href ? "active" : ""}
          aria-label={label}
          aria-current={activeNav === href ? "true" : undefined}
        >
          <Icon aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
};

export default Nav;
