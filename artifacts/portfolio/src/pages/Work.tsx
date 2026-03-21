import { useState } from "react";
import { PageTransition } from "@/components/ui/PageTransition";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, categories } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <PageTransition className="pt-32 pb-16 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-24 mb-20">
        <AnimatedText 
          text="All Projects" 
          el="h1" 
          className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-8"
        />
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mt-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 ring-foreground
                ${activeCategory === cat 
                  ? "bg-foreground text-background shadow-md" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70 border border-border"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="py-32 text-center text-muted-foreground">
            No projects found in this category.
          </div>
        )}
      </section>
    </PageTransition>
  );
}
