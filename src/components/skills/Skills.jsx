import React, { useRef, useState } from "react";
import "./skills.css";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { BsMicrosoft } from "react-icons/bs";
import {
  SiAnthropic,
  SiClaude,
  SiCss,
  SiFastify,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiGooglegemini,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiLit,
  SiNear,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiQwen,
  SiReact,
  SiReactquery,
  SiSolidity,
  SiTailwindcss,
  SiTensorflow,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import {
  TbApi,
  TbArrowUpRight,
  TbArrowsSplit,
  TbBrandOpenai,
  TbClipboardList,
  TbFileCheck,
  TbLayoutKanban,
  TbListCheck,
  TbMask,
  TbPresentation,
  TbPrompt,
  TbRoute,
  TbShieldLock,
  TbSortDescending,
  TbSparkles,
  TbTargetArrow,
  TbTerminal2,
  TbUsersGroup,
} from "react-icons/tb";

const CATEGORIES = [
  "All",
  "Product & Delivery",
  "AI",
  "Languages",
  "Frontend",
  "Backend & Cloud",
  "Tools",
];

// Brand colours are kept where they read well; white logos use the text
// colour so they flip with the theme, and the rest fall back to the primary.
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

  { name: "Claude", category: "AI", Icon: SiClaude, color: "#d97757" },
  { name: "Claude Code", category: "AI", Icon: TbTerminal2, color: "#d97757" },
  { name: "Claude API", category: "AI", Icon: SiAnthropic, color: "var(--color-white)" },
  { name: "ChatGPT", category: "AI", Icon: TbBrandOpenai, color: "var(--color-white)" },
  { name: "Gemini", category: "AI", Icon: SiGooglegemini, color: "#8e75ff" },
  { name: "Qwen", category: "AI", Icon: SiQwen, color: "#7c6cff" },
  { name: "GitHub Copilot", category: "AI", Icon: SiGithubcopilot, color: "var(--color-white)" },
  { name: "Microsoft Copilot", category: "AI", Icon: BsMicrosoft, color: "#00a4ef" },
  { name: "TensorFlow.js", category: "AI", Icon: SiTensorflow, color: "#ff8f00" },
  { name: "Prompt Engineering", category: "AI", Icon: TbPrompt },
  { name: "LLM App Prototyping", category: "AI", Icon: TbSparkles },
  { name: "Data Masking for LLMs", category: "AI", Icon: TbMask },
  { name: "Responsible AI Use", category: "AI", Icon: TbShieldLock },

  { name: "JavaScript", category: "Languages", Icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", category: "Languages", Icon: SiTypescript, color: "#3178c6" },
  { name: "HTML", category: "Languages", Icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", category: "Languages", Icon: SiCss, color: "#663399" },
  { name: "Solidity", category: "Languages", Icon: SiSolidity, color: "#a8b1ff" },

  { name: "React", category: "Frontend", Icon: SiReact, color: "#61dafb" },
  { name: "Next.js", category: "Frontend", Icon: SiNextdotjs, color: "var(--color-white)" },
  { name: "TanStack Query", category: "Frontend", Icon: SiReactquery, color: "#ff4154" },
  { name: "Tailwind CSS", category: "Frontend", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Framer Motion", category: "Frontend", Icon: SiFramer, color: "var(--color-white)" },
  { name: "Lit", category: "Frontend", Icon: SiLit, color: "#6c9bff" },

  { name: "Node.js", category: "Backend & Cloud", Icon: SiNodedotjs, color: "#5fa04e" },
  { name: "REST APIs", category: "Backend & Cloud", Icon: TbApi },
  { name: "GraphQL", category: "Backend & Cloud", Icon: SiGraphql, color: "#e10098" },
  { name: "Fastify", category: "Backend & Cloud", Icon: SiFastify, color: "var(--color-white)" },
  { name: "Terraform", category: "Backend & Cloud", Icon: SiTerraform, color: "#844fba" },
  { name: "Google Cloud", category: "Backend & Cloud", Icon: SiGooglecloud, color: "#4285f4" },
  { name: "NEAR Protocol", category: "Backend & Cloud", Icon: SiNear, color: "var(--color-white)" },

  { name: "Git", category: "Tools", Icon: SiGit, color: "#f05032" },
  { name: "GitHub", category: "Tools", Icon: SiGithub, color: "var(--color-white)" },
  { name: "Figma", category: "Tools", Icon: SiFigma, color: "#f24e1e" },
  { name: "Postman", category: "Tools", Icon: SiPostman, color: "#ff6c37" },
  { name: "Vite", category: "Tools", Icon: SiVite, color: "#9d7cff" },
  { name: "Vercel", category: "Tools", Icon: SiVercel, color: "var(--color-white)" },
];

// Official pages for the tools, languages, and platforms, so a visitor can
// look one up in a click. Practices (Product & Delivery, and the AI
// practices) are skills rather than products, so they stay plain pills.
const LINKS = {
  Claude: "https://claude.com/product/overview",
  "Claude Code": "https://claude.com/product/claude-code",
  "Claude API": "https://platform.claude.com/docs/en/home",
  ChatGPT: "https://chatgpt.com/",
  Gemini: "https://gemini.google.com/",
  Qwen: "https://qwen.ai/",
  "GitHub Copilot": "https://github.com/features/copilot",
  "Microsoft Copilot": "https://copilot.microsoft.com/",
  "TensorFlow.js": "https://www.tensorflow.org/js",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  TypeScript: "https://www.typescriptlang.org/",
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  Solidity: "https://www.soliditylang.org/",
  React: "https://react.dev/",
  "Next.js": "https://nextjs.org/",
  "TanStack Query": "https://tanstack.com/query/latest",
  "Tailwind CSS": "https://tailwindcss.com/",
  "Framer Motion": "https://motion.dev/",
  Lit: "https://lit.dev/",
  "Node.js": "https://nodejs.org/en",
  "REST APIs": "https://developer.mozilla.org/en-US/docs/Glossary/REST",
  GraphQL: "https://graphql.org/",
  Fastify: "https://fastify.dev/",
  Terraform: "https://developer.hashicorp.com/terraform/intro",
  "Google Cloud": "https://cloud.google.com/",
  "NEAR Protocol": "https://www.near.org/",
  Git: "https://git-scm.com/",
  GitHub: "https://github.com/",
  Figma: "https://www.figma.com/",
  Postman: "https://www.postman.com/",
  Vite: "https://vite.dev/",
  Vercel: "https://vercel.com/",
};

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
      <h2>Skills &amp; Tools</h2>
      <p className="skills_intro">
        The product practices I use day to day, the AI tools I work with, and
        the technical stack I have shipped with. I use AI to turn an idea into a
        working prototype that stakeholders can react to, and I build in the
        guardrails that make it safe to use on real work.
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
              {visible.map(({ name, Icon, color }) => {
                const href = LINKS[name];
                const icon = (
                  <Icon
                    className="skills_chip-icon"
                    style={{ color: color ?? "var(--color-primary)" }}
                    aria-hidden="true"
                  />
                );
                return (
                  <motion.li
                    key={name}
                    className={href ? "skills_item" : "skills_chip"}
                    layout={!reduceMotion}
                    variants={{
                      hidden: { opacity: 0, y: 14, scale: 0.96 },
                      shown: { opacity: 1, y: 0, scale: 1 },
                    }}
                    exit={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {href ? (
                      <a
                        className="skills_chip is-link"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {icon}
                        {name}
                        <TbArrowUpRight
                          className="skills_chip-arrow"
                          aria-hidden="true"
                        />
                        <span className="skills_sr-only">
                          {" "}
                          (opens in a new tab)
                        </span>
                      </a>
                    ) : (
                      <>
                        {icon}
                        {name}
                      </>
                    )}
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </motion.ul>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default Skills;
