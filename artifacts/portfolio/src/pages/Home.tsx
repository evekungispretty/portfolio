import { PageTransition } from "@/components/ui/PageTransition";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { Link } from "wouter";
import { ArrowRight, Figma, Layout, Palette, PenTool, Accessibility, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  const skills = [
    { name: "Product Thinking", icon: Layout },
    { name: "Design Systems", icon: Figma },
    { name: "Interaction Design", icon: Cpu },
    { name: "Prototyping", icon: PenTool },
    { name: "Visual Design", icon: Palette },
    { name: "Accessibility", icon: Accessibility },
  ];

  return (
    <PageTransition className="pt-32 pb-16">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-24 min-h-[70vh] flex flex-col justify-center">
        <div className="max-w-5xl">
          <AnimatedText 
            text="Designing experiences" 
            el="h1" 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-display font-bold leading-[0.9] tracking-tight"
          />
          <AnimatedText 
            text="that feel effortless." 
            el="h1" 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-display font-bold leading-[0.9] tracking-tight text-muted-foreground"
            delay={0.2}
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 text-xl md:text-2xl max-w-2xl text-foreground font-medium leading-relaxed"
          >
            I'm a Product Designer specializing in UI/UX, scalable design systems, and interaction design. Based in New York.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 flex gap-4"
          >
            <a href="#work" className="px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-xl shadow-foreground/5">
              View my work
            </a>
          </motion.div>
        </div>
      </section>

      {/* FEATURED WORK SECTION */}
      <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 lg:mt-48 scroll-mt-32">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Selected Work</h2>
          <Link href="/work" className="hidden md:flex items-center gap-2 font-medium hover:text-accent transition-colors group">
            View all projects <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/work" className="inline-flex items-center gap-2 font-medium px-6 py-3 rounded-full border border-border hover:bg-secondary transition-colors">
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* EXPERTISE / STRENGTHS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 lg:mt-48">
        <div className="bg-foreground text-background rounded-3xl p-10 lg:p-20 relative overflow-hidden bg-grain">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-background">My Arsenal</h2>
              <p className="text-lg text-muted/60 max-w-md">
                Bridging the gap between aesthetics and functionality. I build systems that scale and interfaces that delight.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 content-start">
              {skills.map((skill, i) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-background/10 border border-background/20 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors duration-300 cursor-default"
                >
                  <skill.icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
