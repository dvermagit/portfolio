import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
};

const SectionHeading = ({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-foreground/80">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
