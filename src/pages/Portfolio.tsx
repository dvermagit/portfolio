import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
const projects = [
  {
    title: "Agentive",
    description:
      "An AI agent powered tool that analyzes YouTube videos, generates transcripts, and suggests titles and thumbnails.",
    image:
      "https://i.postimg.cc/pLPrSSNC/Screenshot-2025-08-29-at-12-09-00-AM.png",
    technologies: [
      { name: "Next.js", color: "#61dafb" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "AI Agent", color: "#c69cf4" },
      { name: "RAGs", color: "#f2e2d9" },
      { name: "Convex", color: "#47a248" },
      { name: "Google GenAI", color: "#339933" },
      { name: "Stripe", color: "#e96e50" },
      { name: "Schematic", color: "#00e699" },
      { name: "Hugging Face", color: "#9cf4df" },
      { name: "Tailwind", color: "#ff6384" },
    ],
    liveLink: "https://agentive-ten.vercel.app",
    repoLink: "https://github.com/dvermagit/agentive",
  },
  {
    title: "DocuMind",
    description: "Don't just read docs. Converse with them.",
    image:
      "https://play-lh.googleusercontent.com/Php_2ABAPcZ6uKCWYEBYLoHekP-ByiDnrhnSuL-tpZBP7zzUAku-CfpjVupEToy8yg",
    technologies: [
      { name: "Next.js", color: "#61dafb" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "ai", color: "#339933" },
      { name: "LangChain", color: "#c69cf4" },
      { name: "PineconeDb", color: "#47a248" },
      { name: "Stripe", color: "#e96e50" },
      { name: "Vercel", color: "#00e699" },
      { name: "AWS S3", color: "#9cf4df" },
      { name: "Tailwind", color: "#ff6384" },
      { name: "Documentation", color: "#f2e2d9" },
    ],
    liveLink: "https://docdrift.vercel.app",
    repoLink: "https://github.com/dvermagit/DocuMind",
  },
  {
    title: "Dropify",
    description:
      "A file storage application built with Next.js, Clerk for authentication, Neon PostgreSQL, and Drizzle ORM.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    technologies: [
      { name: "Next.js", color: "#c69cf4" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Clerk", color: "#9cf4df" },
      { name: "Neon", color: "#00e699" },
      { name: "Drizzle", color: "#faddd1" },
    ],
    liveLink: "https://dropify-68gf.vercel.app",
    repoLink: "https://github.com/dvermagit/dropify",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio website built with React, Tailwind CSS, and animation libraries for smooth interactions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    technologies: [
      { name: "React", color: "#61dafb" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "TypeScript", color: "#3178c6" },
    ],
    liveLink: "https://dhruvwork.online",
    repoLink: "https://github.com/dvermagit/portfolio",
  },
  // {
  //   title: "Weather Dashboard",
  //   description:
  //     "Real-time weather application with location search, forecasts, and interactive weather maps.",
  //   image:
  //     "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
  //   technologies: [
  //     { name: "React", color: "#61dafb" },
  //     { name: "OpenWeather API", color: "#e96e50" },
  //     { name: "Chart.js", color: "#ff6384" },
  //   ],
  //   liveLink: "https://weather-dash.vercel.app",
  //   repoLink: "https://github.com/dvermagit/weather-dashboard",
  // },
];

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-portfolio-lavender/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-portfolio-mint/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Portfolio"
          subtitle="Check out some of my recent projects"
          align="center"
          className="mb-16"
        />

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                liveLink={project.liveLink}
                repoLink={project.repoLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
