import React, { useRef, useState } from "react";
import "./skills.css";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  SiCss,
  SiFastify,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiLit,
  SiNear,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiReactquery,
  SiSolidity,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import {
  TbApi,
  TbArrowsSplit,
  TbClipboardList,
  TbFileCheck,
  TbLayoutKanban,
  TbListCheck,
  TbPresentation,
  TbRoute,
  TbSortDescending,
  TbTargetArrow,
  TbUsersGroup,
} from "react-icons/tb";

const CATEGORIES = [
  "All",
  "Product & Delivery",
  "Languages",
  "Frontend",
  "Backend & Cloud",
  "Tools",
];

// Brand colours are kept where they read well on the dark panel; the rest
// fall back to the site's primary colour.
const skills = [
  { name: "Requirements Analysis", category: "Product & Delivery", Icon: TbClipboardList },
  { name: "User Stories", category: "Product & Delivery", Icon: TbFileCheck },
  { name: "Acceptance Criteria", category: "Product & Delivery", Icon: TbListCheck },
  { name: "Backlog Refinement", category: "Product & Delivery", Icon: TbLayoutKanban },
  { name: "Feature Prioritization", category: "Product & Delivery", Icon: TbSortDescending },
  { name: "Product Discovery", category: "Product & Delivery", Icon: TbTargetArrow },
  { name: "Process & User Flows", category: "Product & Delivery", Icon: TbRoute },
  { name: "Stakeholder Management", category: "Product & Delivery", Icon: TbUsersGroup },
  { name: "Client Workshops", category: "Product & Delivery", Icon: TbPresentation },
  { name: "Requirements Traceability", category: "Product & Delivery", Icon: TbArrowsSplit },

  { name: "JavaScript", category: "Languages", Icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", category: "Languages", Icon: SiTypescript, color: "#3178c6" },
  { name: "HTML", category: "Languages", Icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", category: "Languages", Icon: SiCss, color: "#663399" },
  { name: "Solidity", category: "Languages", Icon: SiSolidity, color: "#a8b1ff" },

  { name: "React", category: "Frontend", Icon: SiReact, color: "#61dafb" },
  { name: "Next.js", category: "Frontend", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "TanStack Query", category: "Frontend", Icon: SiReactquery, color: "#ff4154" },
  { name: "Tailwind CSS", category: "Frontend", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Framer Motion", category: "Frontend", Icon: SiFramer, color: "#ffffff" },
  { name: "Lit", category: "Frontend", Icon: SiLit, color: "#6c9bff" },

  { name: "Node.js", category: "Backend & Cloud", Icon: SiNodedotjs, color: "#5fa04e" },
  { name: "REST APIs", category: "Backend & Cloud", Icon: TbApi },
  { name: "GraphQL", category: "Backend & Cloud", Icon: SiGraphql, color: "#e10098" },
  { name: "Fastify", category: "Backend & Cloud", Icon: SiFastify, color: "#ffffff" },
  { name: "Terraform", category: "Backend & Cloud", Icon: SiTerraform, color: "#844fba" },
  { name: "Google Cloud", category: "Backend & Cloud", Icon: SiGooglecloud, color: "#4285f4" },
  { name: "NEAR Protocol", category: "Backend & Cloud", Icon: SiNear, color: "#ffffff" },

  { name: "Git", category: "Tools", Icon: SiGit, color: "#f05032" },
  { name: "GitHub", category: "Tools", Icon: SiGithub, color: "#ffffff" },
  { name: "Figma", category: "Tools", Icon: SiFigma, color: "#f24e1e" },
  { name: "Postman", category: "Tools", Icon: SiPostman, color: "#ff6c37" },
  { name: "Vite", category: "Tools", Icon: SiVite, color: "#9d7cff" },
  { name: "Vercel", category: "Tools", Icon: SiVercel, color: "#ffffff" },
];

const Skills = () => {
  const [active, setActive] = useState("All");
  const reduceMotion = useReducedMotion();
  const panelRef = useRef(null);
  // An explicit flag rather than whileInView, so chips mounted later by a
  // filter change inherit the "shown" state instead of staying hidden.
  const inView = useInView(panelRef, {
    once: true,
    margin: "0px 0px -10% 0px",
  });
  const visible =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills">
      <h5>What I Work With</h5>
      <h2>Skills &amp; Tools</h2>
      <p className="skills_intro">
        The product practices I use day to day, and the technical stack I have
        shipped with. The engineering side is what lets me size work honestly
        and write requirements that hold up in implementation.
      </p>

      <div className="container skills">
        <LayoutGroup>
          <div
            className="skills_filters"
            role="group"
            aria-label="Filter skills by category"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={`skills_filter${active === category ? " is-active" : ""}`}
                aria-pressed={active === category}
                onClick={() => setActive(category)}
              >
                {active === category && (
                  <motion.span
                    layoutId="skills-filter-pill"
                    className="skills_filter-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="skills_filter-label">{category}</span>
              </button>
            ))}
          </div>

          <motion.ul
            ref={panelRef}
            className="skills_panel"
            layout={!reduceMotion}
            aria-live="polite"
            initial={reduceMotion ? false : "hidden"}
            animate={inView || reduceMotion ? "shown" : "hidden"}
            variants={{ shown: { transition: { staggerChildren: 0.025 } } }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map(({ name, Icon, color }) => (
                <motion.li
                  key={name}
                  className="skills_chip"
                  layout={!reduceMotion}
                  variants={{
                    hidden: { opacity: 0, y: 14, scale: 0.96 },
                    shown: { opacity: 1, y: 0, scale: 1 },
                  }}
                  exit={
                    reduceMotion ? undefined : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <Icon
                    className="skills_chip-icon"
                    style={{ color: color ?? "var(--color-primary)" }}
                    aria-hidden="true"
                  />
                  {name}
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default Skills;
