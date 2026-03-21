import { PageTransition } from "@/components/ui/PageTransition";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Resume() {
  const experiences = [
    {
      company: "Studio Acme",
      role: "Lead Product Designer",
      period: "2021 — Present",
      description: "Leading a team of 4 designers to build scalable fintech tools. Established the core design system used across 5 distinct products."
    },
    {
      company: "Nexus Tech",
      role: "Senior UX Designer",
      period: "2018 — 2021",
      description: "Redesigned the flagship consumer app, resulting in a 30% increase in retention. Spearheaded accessibility initiatives across the engineering org."
    },
    {
      company: "Creative Form",
      role: "UI/UX Designer",
      period: "2016 — 2018",
      description: "Worked with diverse clients ranging from e-commerce to healthcare, delivering end-to-end design solutions and brand identities."
    }
  ];

  const tools = ["Figma", "Framer", "React / HTML / CSS", "Tailwind CSS", "Storybook", "Webflow", "Principle", "Adobe CC"];

  return (
    <PageTransition className="pt-32 pb-16 min-h-screen">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <AnimatedText 
            text="Experience" 
            el="h1" 
            className="text-6xl md:text-8xl font-display font-bold tracking-tight"
          />
          <motion.a 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            href="#" 
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-colors shrink-0"
          >
            <Download className="w-4 h-4" /> Download PDF
          </motion.a>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-2 md:mb-0 text-muted-foreground font-medium md:pt-1">
                  {exp.period}
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-display font-bold text-foreground">{exp.role}</h3>
                  <div className="text-lg font-medium text-accent dark:text-accent mb-4">{exp.company}</div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills & Tools */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-border"
        >
          <h2 className="text-3xl font-display font-bold mb-8">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span 
                key={tool} 
                className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium text-sm border border-border"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
