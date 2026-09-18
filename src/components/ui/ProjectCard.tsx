import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TechTag } from "./TechTag";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  stack: string[];
  impact: string;
  slug: string;
  image?: string[];
  className?: string;
}

export function ProjectCard({
  name,
  description,
  stack,
  impact,
  slug,
  image,
  className,
}: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!image || image.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % image.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [image]);

  return (
    <Link to={`/experience/${slug}`}>
      <article
        className={cn(
          "group p-6 bg-card border border-border rounded-lg transition-all hover:border-primary/50 hover:bg-card/80 cursor-pointer",
          className
        )}
      >
        {image && image.length > 0 && (
          <div className="mb-6 mx-auto max-w-3xl overflow-hidden rounded-md border border-border bg-muted">
            <img
              src={image[currentImage]}
              alt={`${name} screenshot ${currentImage + 1}`}
              loading="lazy"
              width={1200}
              height={750}
              className="aspect-[8/5] w-full object-cover transition-opacity duration-500"
            />
          </div>
        )}

        {/* Project Name */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-mono text-lg font-medium text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>

          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>

        {/* Impact */}
        <div className="pt-4 border-t border-border">
          <span className="font-mono text-xs text-primary">
            <span className="text-muted-foreground">{"//"}</span> {impact}
          </span>
        </div>
      </article>
    </Link>
  );
}