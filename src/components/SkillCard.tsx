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
  accentColor = "#c69cf4"
}: SkillCardProps) => {
  return <div className={cn("glass-card p-6 hover:-translate-y-2 hover:border-white/20 transition-all duration-300", className)}>
      <h3 className="text-lg font-semibold mb-4 inline-block" style={{
      color: accentColor
    }}>
        <span className="relative">
          {title}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" style={{
          backgroundColor: accentColor,
          opacity: 0.7
        }}></span>
        </span>
      </h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => {})}
      </ul>
    </div>;
};
export default SkillCard;