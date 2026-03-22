import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  size?: "large" | "default";
  aspectRatio?: string;
}

export function ProjectCard({ project, index, size = "default", aspectRatio }: ProjectCardProps) {
  const isLarge = size === "large";

  return (
    <Link href={`/work/${project.slug}`} className="group block w-full outline-none">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-6"
      >
        {/* Image / preview area */}
        <div
          className={`relative w-full overflow-hidden rounded-2xl lg:rounded-3xl isolate ${
            isLarge ? "aspect-[16/7]" : ""
          } ${project.cardClass}`}
          style={!isLarge ? { aspectRatio: aspectRatio ?? "4/3" } : undefined}
        >
          {/* Project image */}
          <img
            src={project.imageUrl}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.05]"
          />

          {/* Subtle dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

          {/* View CTA pill — slides in on hover */}
          <div className="absolute top-4 right-4 translate-y-[-8px] opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
            <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold bg-foreground text-background shadow-lg">
              View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Year badge */}
          <div className="absolute bottom-4 left-4">
            <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-background/70 backdrop-blur-sm text-foreground border border-border/40">
              {project.year}
            </span>
          </div>
        </div>

        {/* Card text */}
        <div className={`flex flex-col gap-3 px-1 ${isLarge ? "md:flex-row md:items-start md:justify-between md:gap-8" : ""}`}>
          {/* Title + description */}
          <div className={`space-y-2 ${isLarge ? "max-w-2xl" : "max-w-xl"}`}>
            <h3
              className={`font-display font-bold text-foreground transition-colors duration-200 group-hover:text-accent ${
                isLarge ? "text-3xl md:text-4xl" : "text-2xl md:text-2xl"
              }`}
            >
              {project.title}
            </h3>
            <p className={`text-muted-foreground leading-relaxed ${isLarge ? "text-lg" : "text-base"}`}>
              {project.shortDescription}
            </p>
          </div>

          {/* Tags + role */}
          <div className={`flex flex-col gap-2 ${isLarge ? "md:items-end md:shrink-0" : ""}`}>
            <div className={`flex flex-wrap gap-2 ${isLarge ? "md:justify-end" : ""}`}>
              {project.tags.slice(0, isLarge ? 3 : 2).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground bg-secondary/60 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            {isLarge && (
              <span className="text-xs text-muted-foreground/60 font-medium md:text-right">
                {project.role} · {project.timeline}
              </span>
            )}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
