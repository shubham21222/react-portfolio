import Project4 from "../../assets/Screenshot from 2024-10-16 16-11-39.png";
import Project5 from "../../assets/Screenshot from 2024-10-16 16-12-44.png";
import Project1 from "../../assets/Screenshot from 2024-01-31 13-44-17.png";

// Categories used for filtering
export const projectsNav = [
  { name: "All" },
  { name: "Web3" },
  { name: "AI" },
  { name: "Full Stack" },
  { name: "Frontend" },
];

export const projectsData = [
  {
    id: 1,
    title: "NY Elizabeth — Live Auction Platform",
    category: "Web3",
    description:
      "Headless Next.js auction platform handling 100,000+ products with real-time and timed auctions. Built live bidding over WebSockets with automatic winner selection and Stripe payment capture, plus an admin system to monitor auctions at scale.",
    tags: ["Next.js", "WebSockets", "Stripe", "WordPress API"],
    link: "https://bid.nyelizabeth.com",
    year: "2025",
  },
  {
    id: 2,
    title: "DeHub — Web3 Platform",
    category: "Web3",
    description:
      "Web3 platform serving ~20,000 users. Designed and deployed custom EVM smart contracts to launch the platform's own ERC-20 token (listed on CoinGecko & TradingView), with crypto wallet management, on-chain transactions, a React + Vite / Nuxt.js stack and a companion mobile app.",
    tags: ["Solidity", "React", "Nuxt.js", "Supabase", "Docker"],
    link: "",
    year: "2025",
  },
  {
    id: 3,
    title: "CharterNow.ai — AI Trip Planner",
    category: "AI",
    description:
      "AI-powered trip planner that generates personalized travel itineraries based on user preferences and vehicle type. Built with Next.js and MySQL, using Mistral AI for smart, data-driven recommendations.",
    tags: ["Next.js", "MySQL", "Mistral AI", "Node.js"],
    link: "",
    year: "2025",
  },
  {
    id: 4,
    title: "TipLocked — AI Football Predictions",
    category: "AI",
    description:
      "AI-powered football predictions platform serving ~200 daily users, with 500+ daily pageviews and 5K+ monthly impressions. Automated prediction pipeline with a clean, fast front-end.",
    tags: ["Next.js", "AI", "SEO", "Automation"],
    link: "https://tiplocked.com",
    year: "2026",
  },
  {
    id: 5,
    title: "Retail Hire Customer Portal",
    category: "Full Stack",
    description:
      "Custom customer portal for a retail equipment-hire website with deep Booqable API integration — bookings, account management and a tailored dashboard synced to the hire backend.",
    tags: ["React", "Booqable API", "REST", "Node.js"],
    link: "",
    year: "2025",
  },
  {
    id: 6,
    title: "Chorebux — Chores & Rewards Platform",
    category: "Full Stack",
    description:
      "Platform build covering roadmap and milestone delivery — a chores-and-rewards product with structured feature rollout, from data model to polished user flows.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    link: "",
    year: "2026",
  },
  {
    id: 7,
    image: Project4,
    title: "AuthentiChef — Food Ordering",
    category: "Full Stack",
    description:
      "Online food-ordering platform built with Next.js, featuring an intuitive admin panel that simplified data management and a secure payment gateway for reliable checkout.",
    tags: ["Next.js", "Admin Panel", "Payments"],
    link: "http://www.authentichef.com/",
    year: "2024",
  },
  {
    id: 8,
    image: Project5,
    title: "Admission Network — NEET Counseling",
    category: "Frontend",
    description:
      "Secure online counseling platform for NEET UG & PG students built with Next.js and Tailwind CSS, focused on a smooth, accessible interface and efficient user flows.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    link: "http://www.an24online.com/user/user-login",
    year: "2024",
  },
  {
    id: 9,
    title: "Government Archives Scraper",
    category: "Full Stack",
    description:
      "Python automation script to scrape and parse text from government archive records, turning unstructured public documents into clean, structured, queryable data.",
    tags: ["Python", "Automation", "Web Scraping"],
    link: "",
    year: "2026",
  },
  {
    id: 10,
    title: "Data Lineage Graph UI",
    category: "Frontend",
    description:
      "Interactive React front-end that renders a data-lineage graph — visualizing relationships and flow between nodes with a responsive, performant UI.",
    tags: ["React", "Data Viz", "Graph UI"],
    link: "",
    year: "2024",
  },
  {
    id: 11,
    image: Project1,
    title: "Cryptocurrency Web App",
    category: "Frontend",
    description:
      "Feature-rich web app for exploring the top-100 trending coins with real-time charts and market data.",
    tags: ["React", "Charts", "REST API"],
    link: "https://fanciful-syrniki-409d90.netlify.app/",
    year: "2024",
  },
];
