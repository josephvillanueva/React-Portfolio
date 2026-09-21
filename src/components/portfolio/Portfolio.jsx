import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import BACKLOG_BOARD from "../../assets/backlog-board.jpg";

const projects = [
  {
    id: 1,
    image: BACKLOG_BOARD,
    title: "Backlog Board: TanStack Query Demo",
    github: "https://github.com/josephvillanueva/react-query",
    demo: "https://react-query-josephvillanueva.vercel.app/",
    tech: [
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Optimistic Updates",
      "Vite",
    ],
  },
  {
    id: 2,
    image: IMG1,
    title: "Playible: Next-Gen Fantasy Sports on NEAR",
    github: "https://playible.club/playible-next-gen-nft-fantasy-sports/",
    demo: "https://app.playible.io/",
    tech: [
      "React.js",
      "Node.js",
      "GraphQL",
      "Tailwind CSS",
      "Blockchain - NEAR Protocol",
      "Postman",
    ],
  },
  {
    id: 3,
    image: IMG2,
    title: "AI Object Detector",
    github: "https://github.com/josephvillanueva/ai-object-detector",
    demo: "https://ai-object-detector-josephvillanueva.vercel.app/",
    tech: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "TensorFlow"],
  },
  {
    id: 4,
    image: IMG3,
    title: "GIPHY Clone",
    github: "https://github.com/josephvillanueva/giphy-clone",
    demo: "https://giphy-clone.vercel.app/",
    tech: [
      "React.js",
      "React Icons",
      "Vite",
      "Node.js",
      "Tailwind CSS",
      "GIPHY API",
    ],
  },
  {
    id: 5,
    image: IMG4,
    title: "Recipe Randomizer",
    github: "https://github.com/josephvillanueva/RecipeRandomizerNext",
    demo: "https://recipe-randomizer-next.vercel.app/",
    tech: [
      "React.js",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Spoonacular API",
      "Postman",
      "Axios",
      "Third-Party API",
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work/Involvements</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {projects.map(({ id, image, title, github, demo, tech }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_content">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
              </div>
              <div className="portfolio_item_container">
                <h3>{title}</h3>
                <div className="portfolio_tech">
                  {tech.map((techItem, index) => (
                    <div key={index} className="portfolio_tech_background">
                      <div className="portfolio_tech_item">{techItem}</div>
                    </div>
                  ))}
                </div>
                <div className="portfolio_item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
