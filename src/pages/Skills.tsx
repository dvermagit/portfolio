
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
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="Technologies and tools I work with"
          align="center" 
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              accentColor={category.color}
            />
          ))}
        </div>

        {/* Technical Proficiency Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Proficiency</h3>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            {/* MERN Stack */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium">MERN Stack</h4>
                <span className="text-xs text-foreground/70">95%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-portfolio-lavender rounded-full" style={{ width: "95%" }}></div>
              </div>
            </div>
            
            {/* TypeScript */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium">TypeScript</h4>
                <span className="text-xs text-foreground/70">90%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-portfolio-mint rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            
            {/* Responsive Design */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium">Responsive Design</h4>
                <span className="text-xs text-foreground/70">85%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-portfolio-peach rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            
            {/* UI/UX Implementation */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium">UI/UX Implementation</h4>
                <span className="text-xs text-foreground/70">88%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-portfolio-beige rounded-full" style={{ width: "88%" }}></div>
              </div>
            </div>
            
            {/* API Development */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium">API Development</h4>
                <span className="text-xs text-foreground/70">92%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full" style={{ width: "92%", background: "linear-gradient(90deg, #c69cf4, #9cf4df)" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
