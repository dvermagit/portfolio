
import { cn } from "@/lib/utils";

type Technology = {
  name: string;
  color: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  liveLink?: string;
  repoLink?: string;
  className?: string;
};

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveLink,
  repoLink,
  className,
}: ProjectCardProps) => {
  return (
    <div className={cn(
      "group glass-card overflow-hidden transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-foreground/70 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="text-xs px-2 py-1 rounded-full"
              style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
            >
              {tech.name}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-foreground/90 hover:text-portfolio-lavender transition-colors"
            >
              Live Demo →
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-foreground/90 hover:text-portfolio-lavender transition-colors"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
