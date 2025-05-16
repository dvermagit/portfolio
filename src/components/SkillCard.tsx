
import { cn } from "@/lib/utils";

type SkillCardProps = {
  title: string;
  skills: string[];
  className?: string;
  accentColor?: string;
};

const SkillCard = ({
  title,
  skills,
  className,
  accentColor = "#c69cf4",
}: SkillCardProps) => {
  return (
    <div className={cn(
      "glass-card p-6 hover:-translate-y-1 transition-all duration-300",
      className
    )}>
      <h3 
        className="text-lg font-semibold mb-3" 
        style={{ color: accentColor }}
      >
        {title}
      </h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li 
            key={skill} 
            className="flex items-center text-sm text-foreground/80"
          >
            <span 
              className="mr-2 inline-block w-1.5 h-1.5 rounded-full" 
              style={{ backgroundColor: accentColor }}
            />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
