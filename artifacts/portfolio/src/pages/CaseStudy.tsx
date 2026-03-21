import { useRoute, Link } from "wouter";
import { PageTransition } from "@/components/ui/PageTransition";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import NotFound from "./not-found";

export default function CaseStudy() {
  const [, params] = useRoute("/work/:slug");
  const slug = params?.slug;
  
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[currentIndex];

  if (!project) return <NotFound />;

  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <PageTransition className="pt-32 pb-16 bg-background">
      {/* Top Nav inside page */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link href="/work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>
      </div>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8"
        >
          {project.title}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border"
        >
          <div>
            <span className="block text-sm text-muted-foreground mb-1">Role</span>
            <strong className="font-semibold">{project.role}</strong>
          </div>
          <div>
            <span className="block text-sm text-muted-foreground mb-1">Timeline</span>
            <strong className="font-semibold">{project.timeline}</strong>
          </div>
          <div>
            <span className="block text-sm text-muted-foreground mb-1">Year</span>
            <strong className="font-semibold">{project.year}</strong>
          </div>
          <div>
            <span className="block text-sm text-muted-foreground mb-1">Services</span>
            <div className="flex flex-wrap gap-1">
              {project.tags.map(tag => (
                <span key={tag} className="text-sm font-semibold">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </header>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="aspect-video w-full rounded-3xl overflow-hidden bg-muted"
        >
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Content Sections */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <section>
          <h2 className="text-3xl font-display font-bold mb-6">Overview & Context</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.details.context}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {project.description}
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold mb-6">The Problem</h2>
          <div className="p-8 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive-foreground dark:text-foreground">
            <p className="text-xl font-medium leading-relaxed">
              "{project.details.problem}"
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold mb-6">Goals & Objectives</h2>
          <ul className="space-y-4">
            {project.details.goals.map((goal, i) => (
              <li key={i} className="flex gap-4 items-start text-lg text-muted-foreground">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-foreground font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="pt-1">{goal}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold mb-6">Outcome</h2>
          <div className="p-8 rounded-2xl bg-accent text-accent-foreground shadow-lg shadow-accent/20">
            <p className="text-xl font-medium leading-relaxed">
              {project.details.outcome}
            </p>
          </div>
        </section>
      </article>

      {/* Project Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 pt-16 border-t border-border">
        <div className="flex justify-between items-center">
          <Link href={`/work/${prevProject.slug}`} className="group max-w-[45%]">
            <span className="block text-sm text-muted-foreground mb-2">Previous Project</span>
            <span className="flex items-center gap-2 text-xl md:text-2xl font-display font-bold group-hover:text-accent transition-colors truncate">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
              <span className="truncate">{prevProject.title}</span>
            </span>
          </Link>
          
          <Link href={`/work/${nextProject.slug}`} className="group max-w-[45%] text-right">
            <span className="block text-sm text-muted-foreground mb-2">Next Project</span>
            <span className="flex items-center justify-end gap-2 text-xl md:text-2xl font-display font-bold group-hover:text-accent transition-colors truncate">
              <span className="truncate">{nextProject.title}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </span>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
