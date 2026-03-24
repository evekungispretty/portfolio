import { Download, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/ui/PageTransition";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const experiences = [
  {
    company: "University of Florida",
    dept: "College of Education",
    role: "Web Designer & Developer",
    period: "Dec 2023 — Present",
    bullets: [
      "Redesigned the College of Education program directory — built a filterable system for 100+ graduate and undergraduate programs with real-time JS filtering and custom WordPress/PHP CMS templates.",
      "Developed 5+ grant websites using WordPress, HTML, CSS, JavaScript, and jQuery.",
      "Created reusable PHP and WordPress templates adopted by staff for ongoing content management without developer involvement.",
      "Implemented WCAG 2.1 AA accessible patterns across all delivered sites.",
    ],
  },
  {
    company: "Tapply",
    dept: "",
    role: "UI/UX Designer",
    period: "Jul 2023 — Dec 2023",
    bullets: [
      "Designed the complete tutorial and onboarding system from scratch — progressive guidance patterns, contextual tooltips, spotlight overlays, and milestone celebrations.",
      "Built and documented a tutorial component library in Figma with 6 core components, full variant matrices, and usage guidelines.",
      "Established design system components adopted product-wide for new feature launches.",
      "Collaborated with engineering on interaction specs and handoff documentation.",
    ],
  },
  {
    company: "HiSKIO",
    dept: "",
    role: "Contract UX Designer",
    period: "Sep 2022 — Dec 2022",
    bullets: [
      "Designed an internal management tool that reduced manual work by 10+ hours per week across the operations team.",
      "Worked closely with engineering on implementation-focused design — specs, edge cases, and developer handoff.",
      "Conducted user research with internal stakeholders to identify workflow bottlenecks.",
    ],
  },
  {
    company: "PicCollage",
    dept: "",
    role: "Design Operations Intern",
    period: "Apr 2020 — Jul 2021",
    bullets: [
      "Created content and templates for an app with 1.2M+ active users.",
      "Designed tutorial templates that reduced first-time user incompletion rate by 23%.",
      "Generated 600+ new VIP users through targeted content initiatives.",
      "Contributed to design operations workflows and asset management systems.",
    ],
  },
];

const education = [
  {
    school: "Academy of Art University",
    degree: "MA — Interaction Design & UI/UX",
    year: "2023",
    note: "Graduate studies in user experience, interaction design, and visual design systems.",
  },
];

const tools = [
  "Figma", "Framer", "React / JSX", "HTML & CSS",
  "JavaScript", "jQuery", "PHP", "WordPress",
  "Tailwind CSS", "Storybook", "Adobe CC", "Webflow",
];

const skills = [
  "Product Design", "UX Research", "Interaction Design",
  "Design Systems", "Accessibility (WCAG 2.1)",
  "Information Architecture", "Wireframing & Prototyping",
  "Front-End Development", "Content Design", "Motion Design",
];

export default function Resume() {
  return (
    <PageTransition className="pt-32 pb-0 min-h-screen">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-32">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="block text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium"
            >
              Experience
            </motion.span>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl md:text-8xl font-display font-bold tracking-tight leading-[0.88]"
              >
                Resume
              </motion.h1>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-3 shrink-0"
          >
            <a
              href="https://drive.google.com/drive/folders/1YyHjrNKCRMYkCzHCgbSfq3Hs0FMxCCWU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-accent hover:text-white transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </motion.div>
        </div>

        {/* Experience timeline */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              variants={fadeUp}
              className="relative border-t border-border py-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-10">
                {/* Left: meta */}
                <div>
                  <span className="block text-sm font-medium text-muted-foreground mb-1">
                    {exp.period}
                  </span>
                </div>

                {/* Right: content */}
                <div>
                  <div className="mb-5">
                    <h3 className="text-2xl font-display font-bold text-foreground">{exp.role}</h3>
                    <div className="text-base font-semibold text-accent mt-0.5">
                      {exp.company}{exp.dept ? ` — ${exp.dept}` : ""}
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-border pt-16 mt-4"
        >
          <h2 className="text-3xl font-display font-bold mb-8">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-10">
              <span className="text-sm font-medium text-muted-foreground">{edu.year}</span>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground">{edu.degree}</h3>
                <div className="text-base font-semibold text-accent mt-0.5 mb-3">{edu.school}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{edu.note}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-border pt-16 mt-16"
        >
          <h2 className="text-3xl font-display font-bold mb-8">Skills</h2>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-border pt-16 mt-16"
        >
          <h2 className="text-3xl font-display font-bold mb-8">Tools &amp; Technologies</h2>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground bg-card"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-border pt-16 mt-16 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
        >
          <div>
            <p className="text-lg font-display font-semibold text-foreground">
              Want to talk about working together?
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Let me know if you have any questions, or just want to chat about design, tech, or cats!
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/evekung/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:scale-105 transition-all duration-300 shrink-0"
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </section>
    </PageTransition>
  );
}
