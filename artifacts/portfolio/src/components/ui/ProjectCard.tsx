import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block w-full outline-none">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-6"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted isolate">
          {/* Image */}
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
          />
          
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
          
          {/* Hover Tag */}
          <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
            <span className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold shadow-lg" style={{ backgroundColor: "#b84a1a", color: "#fff" }}>
              View Case Study <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 px-2">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground transition-colors group-hover:text-accent-foreground dark:group-hover:text-accent">
              {project.title}
            </h3>
            <p className="text-lg text-muted-foreground">
              {project.shortDescription}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:justify-end shrink-0">
            {project.tags.slice(0, 2).map(tag => (
              <span key={tag} className="px-3 py-1 text-sm rounded-full border border-border text-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
