
import { useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";

const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      "React.js & Next.js",
      "TypeScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Redux / Context API",
    ],
    color: "#c69cf4",
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js & Express",
      "MongoDB",
      "REST API Design",
      "PostgreSQL",
      "Authentication & Authorization",
      "Serverless Functions",
    ],
    color: "#9cf4df",
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git & GitHub",
      "Docker",
      "CI/CD Pipelines",
      "Vercel & Netlify",
      "AWS (Basic)",
      "Testing (Jest, React Testing Library)",
    ],
    color: "#faddd1",
  },
  {
    title: "Soft Skills",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Time Management",
      "Continuous Learning",
      "Attention to Detail",
    ],
    color: "#f2e2d9",
  },
];

const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-portfolio-mint/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-portfolio-lavender/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="Technologies and tools I work with"
          align="center" 
          className="mb-16"
        />

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {skillsData.map((category, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <SkillCard
                title={category.title}
                skills={category.skills}
                accentColor={category.color}
              />
            </div>
          ))}
        </div>

        {/* Technical Proficiency Section */}
        <div className={`mt-20 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Proficiency</h3>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            {/* MERN Stack */}
            <div className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium">MERN Stack</h4>
                <span className="text-xs text-foreground/70">95%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-portfolio-lavender rounded-full transition-all duration-1000 ease-out" style={{ width: isLoaded ? "95%" : "0%" }}></div>
              </div>
            </div>
            
            {/* TypeScript */}
            <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium">TypeScript</h4>
                <span className="text-xs text-foreground/70">90%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-portfolio-mint rounded-full transition-all duration-1000 ease-out" style={{ width: isLoaded ? "90%" : "0%" }}></div>
              </div>
            </div>
            
            {/* Responsive Design */}
            <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium">Responsive Design</h4>
                <span className="text-xs text-foreground/70">85%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-portfolio-peach rounded-full transition-all duration-1000 ease-out" style={{ width: isLoaded ? "85%" : "0%" }}></div>
              </div>
            </div>
            
            {/* UI/UX Implementation */}
            <div className={`transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium">UI/UX Implementation</h4>
                <span className="text-xs text-foreground/70">88%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-portfolio-beige rounded-full transition-all duration-1000 ease-out" style={{ width: isLoaded ? "88%" : "0%" }}></div>
              </div>
            </div>
            
            {/* API Development */}
            <div className={`transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium">API Development</h4>
                <span className="text-xs text-foreground/70">92%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full transition-all duration-1000 ease-out" style={{ width: isLoaded ? "92%" : "0%", background: "linear-gradient(90deg, #c69cf4, #9cf4df)" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
