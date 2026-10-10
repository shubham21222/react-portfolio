import React from "react";
import "./skills.css";
import { HiCheckBadge } from "react-icons/hi2";

const skillsData = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Nuxt.js",
      "React Native",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Shopify Hydrogen",
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      "Node.js (Express)",
      "Python (Flask)",
      "Django",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "MySQL / MongoDB",
      "Supabase",
    ],
  },
  {
    title: "Web3 & Blockchain",
    items: [
      "Solidity",
      "Smart Contracts",
      "ERC-20 Tokens",
      "Ethereum",
      "Solana",
      "Ethers.js",
      "Web3.js",
      "Wallet Auth",
    ],
  },
  {
    title: "AI, Cloud & DevOps",
    items: [
      "Claude API",
      "Mistral AI",
      "OpenAI",
      "Stripe",
      "AWS EC2",
      "DigitalOcean",
      "Docker",
      "Nginx",
    ],
  },
];

const SkillGroup = ({ title, items }) => {
  const mid = Math.ceil(items.length / 2);
  const columns = [items.slice(0, mid), items.slice(mid)];
  return (
    <div className="skills__content">
      <h3 className="skills__title">{title}</h3>
      <div className="skills__box">
        {columns.map((col, i) => (
          <div className="skills__group" key={i}>
            {col.map((name, j) => (
              <div className="skills__data" key={j}>
                <HiCheckBadge />
                <div>
                  <h3 className="skills__name">{name}</h3>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical stack</span>
      <div className="skills__container container grid">
        {skillsData.map((group, i) => (
          <SkillGroup key={i} title={group.title} items={group.items} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
