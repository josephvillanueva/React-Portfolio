import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Playible: Next-Gen Fantasy Sports on NEAR",
    role: "Frontend Developer — Anteriore Inc.",
    description:
      "Translated product requirements and user stories into a user-centered blockchain application, and led the technical transition to NEAR Protocol and GraphQL by coordinating requirements, edge-case handling, and stakeholder alignment.",
    tech: ["React.js", "Tailwind", "GraphQL", "NEAR Protocol"],
    links: [
      { label: "Website", href: "https://playible.club/playible-next-gen-nft-fantasy-sports/" },
      { label: "Live Demo", href: "https://app.playible.io/MintPage" },
    ],
  },
  {
    id: 2,
    title: "Metrobank Branding Website Redesign",
    role: "Frontend Developer — Mashup Garage",
    description:
      "Led the redesign and performance optimization of the branding site, aligning business requirements and success measures with user experience and product goals, and building reusable component patterns that improved interface consistency.",
    tech: ["React.js", "Next.js", "Design System"],
    links: [],
  },
  {
    id: 3,
    title: "SM Prime Finance Processing Portal",
    role: "Junior Cloud Engineer — Senti AI",
    description:
      "Contributed requirements for OCR and Google Cloud services supporting the digitization of more than 50,000 files monthly, and supported sprint delivery and bug prioritization on a retail reimbursement platform.",
    tech: ["OCR", "Google Cloud", "Terraform"],
    links: [],
  },
  {
    id: 4,
    title: "SMITS Internal Design System",
    role: "Systems Analyst & UI/UX Lead — SMITS, Inc.",
    description:
      "Contributing UX standards, reusable interface patterns, component guidance, documentation, and governance practices alongside the Development Lead, plus internal UI/UX training so project teams apply consistent usability practices.",
    tech: ["Design Systems", "UX Governance", "Documentation"],
    links: [],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work/Involvements</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, role, description, tech, links }) => {
          return (
            <article key={id} className="portfolio_item">
              {image && (
                <div className="portfolio_item-image">
                  <img src={image} alt={`${title} screenshot`} />
                </div>
              )}
              <h3>{title}</h3>
              <h5 className="portfolio_item-role">{role}</h5>
              <p className="portfolio_item-description">{description}</p>
              <div className="portfolio_tech">
                {tech.map((item) => {
                  return (
                    <div key={item} className="portfolio_tech_background">
                      <div className="portfolio_tech_item">{item}</div>
                    </div>
                  );
                })}
              </div>
              {links.length > 0 && (
                <div className="portfolio_item-cta">
                  {links.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
