import React, { useEffect, useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBrain } from "react-icons/bi";
import { MdWorkOutline, MdOutlineFolderOpen } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { BsChatQuote } from "react-icons/bs";
import { TbTools } from "react-icons/tb";

const links = [
  { href: "#", label: "Home", Icon: AiOutlineHome },
  { href: "#about", label: "About", Icon: AiOutlineUser },
  { href: "#experience", label: "Experience", Icon: BiBrain },
  { href: "#skills", label: "Skills", Icon: TbTools },
  { href: "#services", label: "Services", Icon: MdWorkOutline },
  { href: "#portfolio", label: "Portfolio", Icon: MdOutlineFolderOpen },
  { href: "#testimonials", label: "Character references", Icon: BsChatQuote },
  { href: "#contact", label: "Contact", Icon: RiContactsLine },
];

// The section counts as current once its top passes this share of the
// viewport, so the highlight changes as a heading settles near the top.
const THRESHOLD = 0.35;

// Scroll spy: the last section whose top has passed the threshold is the one
// being read. At the very bottom the last section wins, since a short final
// section may never reach the threshold.
function currentSection() {
  const scrolledToBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2;
  if (scrolledToBottom) return links[links.length - 1].href;

  let current = "#";
  for (const { href } of links.slice(1)) {
    const section = document.querySelector(href);
    if (
      section &&
      section.getBoundingClientRect().top <= window.innerHeight * THRESHOLD
    ) {
      current = href;
    }
  }
  return current;
}

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setActiveNav(currentSection()));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

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
