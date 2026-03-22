import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Marquee } from "@/components/ui/Marquee";
import { projects } from "@/data/projects";

// ─── Animation helpers ───────────────────────────────────────────────────────
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay },
});

// Each word slides up through an overflow-hidden clip — the helloelva.com style
const headlineWords = [
  { text: "Designing",    className: "",                          delay: 0.05 },
  { text: "experience",  className: "text-muted-foreground",     delay: 0.13 },
  { text: "that",         className: "",                          delay: 0.21 },
  { text: "is",           className: "",                          delay: 0.29 },
];

const rotatingPhrases = [
  "effortless and fun.",
  "better for everyone.",
  "engaging and smooth.",
  "a joy to use.",
];

// ─── Capability pills data ────────────────────────────────────────────────────
const capabilities = [
  { label: "Product Design", emoji: "✦" },
  { label: "Interaction Design", emoji: "⌖" },
  { label: "Design Systems", emoji: "⬡" },
  { label: "User Research", emoji: "◎" },
  { label: "Accessibility", emoji: "✿" },
  { label: "Front-End Dev", emoji: "⟨⟩" },
  { label: "Prototyping", emoji: "▷" },
  { label: "Information Architecture", emoji: "≡" },
];

// ─── Marquee content ──────────────────────────────────────────────────────────
const marqueeRow1 = [
  "Product Design",
  "Interaction Design",
  "Design Systems",
  "Visual Design",
  "Accessibility",
  "User Research",
  "SEO",
];
const marqueeRow2 = [
  "Front-End Development",
  "Prototyping",
  "Information Architecture",
  "Ed Tech",
  "Website Design",
  "WordPress Developmen and CMS",
];

// ─── Featured projects ────────────────────────────────────────────────────────
const featuredSlugs = ["sparc-p", "new-worlds-reading", "turbo", "tapply"];

export default function Home() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pb-0"
    >

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] overflow-hidden">

        {/* ── Gradient orbs ── */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Large warm amber blob — bottom-center */}
          <motion.div
            className="absolute rounded-full blur-[120px]"
            style={{
              width: "70vw",
              height: "60vw",
              background: "radial-gradient(circle, hsl(36 90% 62% / 0.45), hsl(28 80% 55% / 0.2) 60%, transparent 80%)",
              bottom: "-20%",
              left: "10%",
            }}
            animate={{
              scale: [1, 1.08, 0.96, 1.05, 1],
              x: [0, 30, -20, 10, 0],
              y: [0, -20, 10, -10, 0],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Coral-accent orb — top-right */}
          <motion.div
            className="absolute rounded-full blur-[100px]"
            style={{
              width: "40vw",
              height: "40vw",
              background: "radial-gradient(circle, hsl(16 95% 54% / 0.2), hsl(16 80% 60% / 0.08) 60%, transparent 80%)",
              top: "-10%",
              right: "-5%",
            }}
            animate={{
              scale: [1, 1.12, 0.94, 1.06, 1],
              x: [0, -25, 15, -10, 0],
              y: [0, 30, -15, 20, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          {/* Small accent ripple — mid-left */}
          <motion.div
            className="absolute rounded-full blur-[80px]"
            style={{
              width: "25vw",
              height: "25vw",
              background: "radial-gradient(circle, hsl(16 95% 54% / 0.12), transparent 70%)",
              top: "35%",
              left: "-5%",
            }}
            animate={{
              scale: [1, 1.2, 0.9, 1.15, 1],
              opacity: [0.7, 1, 0.6, 0.9, 0.7],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        {/* ── Content ── */}
        <div className="relative min-h-[92vh] flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        {/* Eyebrow */}
        {/* <motion.div {...fadeIn(0.0)} className="mb-8 flex items-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground border border-border">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for new opportunities
          </span>
          <span className="text-muted-foreground text-sm hidden sm:inline">
            Product Designer · Gainesville, FL
          </span>
        </motion.div> */}

        {/* Big headline — word-by-word masked reveal */}
        <h1 className="text-[clamp(3rem,9vw,8rem)] font-display font-bold leading-[1.0] tracking-tight mb-12 flex flex-wrap gap-x-[0.22em] gap-y-0 items-baseline">
          {headlineWords.map(({ text, className, delay }) => (
            <span
              key={text}
              className="inline-block overflow-hidden pb-[0.06em]"
              style={{ verticalAlign: "bottom" }}
            >
              <motion.span
                className={`inline-block ${className}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] }}
              >
                {text}
              </motion.span>
            </span>
          ))}
          {/* Rotating phrase */}
          <span
            className="inline-block overflow-hidden pb-[0.06em]"
            style={{ verticalAlign: "bottom" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                className="inline-block font-serif italic font-normal text-accent"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                exit={{ y: "-110%" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {rotatingPhrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        {/* Sub + CTAs row */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
            I'm <span className="text-foreground font-medium">Eve Kung</span> — a product
            and UI/UX designer crafting accessible, beautiful digital experiences for
            education, tools, and the web.
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-accent hover:text-white transition-all duration-300"
            >
              View Work
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors duration-300"
            >
              About Me
            </Link>
          </div>
        </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MARQUEE STRIP
      ══════════════════════════════════════════════ */}
      <section className="py-8 border-y border-border overflow-hidden space-y-3 bg-secondary/40">
        <Marquee
          items={marqueeRow1}
          direction="left"
          className="text-sm font-medium text-foreground/70 tracking-wide uppercase"
        />
        <Marquee
          items={marqueeRow2}
          direction="right"
          className="text-sm font-medium text-foreground/70 tracking-wide uppercase"
        />
      </section>

      {/* ══════════════════════════════════════════════
          SELECTED WORK
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 bg-background rounded-t-[28px] shadow-[0_-6px_32px_rgba(0,0,0,0.07)]">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-28 lg:py-36">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">
              Selected Work
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-none">
              Projects
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              All projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Projects: 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} size="default" />
          ))}
        </div>
      </div>
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT PREVIEW
      ══════════════════════════════════════════════ */}
      <section className="relative z-20 rounded-t-[28px] shadow-[0_-6px_32px_rgba(0,0,0,0.12)]" style={{ backgroundColor: "#3e1405" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block text-xs uppercase tracking-widest mb-5 font-medium" style={{ color: "rgba(255,220,190,0.55)" }}>
                About
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.05] mb-8" style={{ color: "#fdf0e8" }}>
                Designer. Developer.{" "}
                <span className="font-serif italic font-normal text-accent">
                  Systems thinker.
                </span>
              </h2>
              <div className="space-y-4 text-lg leading-relaxed mb-10" style={{ color: "rgba(255,220,190,0.7)" }}>
                <p>
                  I'm a product and UI/UX designer based in Gainesville, Florida, with a background
                  spanning higher education digital products, design systems, and interactive
                  experiences.
                </p>
                <p>
                  I care about making interfaces that work for real people — accessible,
                  purposeful, and polished down to the last detail.
                </p>
              </div>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-semibold hover-line"
                style={{ color: "#fdf0e8" }}
              >
                More about me
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { stat: "4+", label: "Years of design experience" },
                { stat: "MA", label: "Interaction Design & UI/UX — Academy of Art University" },
                { stat: "100+", label: "Programs redesigned for UF College of Education" },
                { stat: "23%", label: "Reduction in first-user incompletion at PicCollage" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
                  className="rounded-2xl p-6 flex flex-col gap-2"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,220,190,0.15)" }}
                >
                  <span className="text-4xl font-display font-bold text-accent leading-none">
                    {item.stat}
                  </span>
                  <span className="text-sm leading-snug" style={{ color: "rgba(255,220,190,0.65)" }}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CAPABILITIES
      ══════════════════════════════════════════════ */}
      <section className="relative z-30 bg-background rounded-t-[28px] shadow-[0_-6px_32px_rgba(0,0,0,0.07)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">
            What I Do
          </span>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight">
            Capabilities
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 cursor-default"
            >
              <span className="text-accent group-hover:text-background transition-colors duration-300 text-base leading-none">
                {cap.emoji}
              </span>
              {cap.label}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 pt-16 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {[
            {
              number: "01",
              title: "Research & Define",
              body: "Understanding the problem space before touching a frame. User interviews, audits, and competitive research.",
            },
            {
              number: "02",
              title: "Design & Explore",
              body: "IA, wireframes, and high-fidelity screens. Exploring multiple directions before committing to one.",
            },
            {
              number: "03",
              title: "Build & Ship",
              body: "Prototypes, handoff specs, and production-ready front-end code. Design that survives contact with reality.",
            },
          ].map((step) => (
            <div key={step.number} className="space-y-3">
              <span className="text-xs font-mono text-muted-foreground/60 tracking-widest">
                {step.number}
              </span>
              <h3 className="text-lg font-display font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
            </div>
          ))}
        </motion.div>
      </div>
      </section>


    </motion.div>
  );
}
