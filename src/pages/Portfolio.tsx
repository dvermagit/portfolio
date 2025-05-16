
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    title: "Dropify",
    description: "A file storage application built with Next.js, Clerk for authentication, Neon PostgreSQL, and Drizzle ORM.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    technologies: [
      { name: "Next.js", color: "#c69cf4" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Clerk", color: "#9cf4df" },
      { name: "Neon", color: "#00e699" },
      { name: "Drizzle", color: "#faddd1" },
    ],
    liveLink: "https://dropify-demo.vercel.app",
    repoLink: "https://github.com/dvermagit/dropify",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with React, Tailwind CSS, and animation libraries for smooth interactions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    technologies: [
      { name: "React", color: "#61dafb" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "TypeScript", color: "#3178c6" },
    ],
    liveLink: "https://dhruv-portfolio.vercel.app",
    repoLink: "https://github.com/dvermagit/portfolio",
  },
  {
    title: "TaskFlow",
    description: "A task management application with features like drag-and-drop, labels, due dates, and team collaboration.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80",
    technologies: [
      { name: "React", color: "#61dafb" },
      { name: "Node.js", color: "#339933" },
      { name: "MongoDB", color: "#47a248" },
      { name: "Express", color: "#000000" },
      { name: "Socket.io", color: "#f2e2d9" },
    ],
    liveLink: "https://taskflow-app.vercel.app",
    repoLink: "https://github.com/dvermagit/taskflow",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with location search, forecasts, and interactive weather maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
    technologies: [
      { name: "React", color: "#61dafb" },
      { name: "OpenWeather API", color: "#e96e50" },
      { name: "Chart.js", color: "#ff6384" },
    ],
    liveLink: "https://weather-dash.vercel.app",
    repoLink: "https://github.com/dvermagit/weather-dashboard",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Portfolio"
          subtitle="Check out some of my recent projects"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
