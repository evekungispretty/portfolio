import { useRoute, Link } from "wouter";
import { projects, type CaseStudyImage } from "@/data/projects";
import { ArrowLeft, ArrowRight, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NotFound from "./not-found";

// ── Active section tracker ──────────────────────────────────────────────────
function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return activeId;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top, behavior: "smooth" });
}

// ── Animation variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

// ── Aspect ratio map ────────────────────────────────────────────────────────
const aspectMap: Record<string, string> = {
  video:   "aspect-video",
  wide:    "aspect-[21/9]",
  square:  "aspect-square",
  portrait: "aspect-[3/4]",
};

// ── Image / Placeholder block ───────────────────────────────────────────────
function ImageBlock({ img }: { img: CaseStudyImage }) {
  const aspectClass = aspectMap[img.aspect ?? "video"];

  return (
    <motion.figure variants={fadeUp} className="w-full">
      {img.src ? (
        <div className={`w-full ${aspectClass} rounded-2xl overflow-hidden bg-muted`}>
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        /* Placeholder */
        <div
          className={`w-full ${aspectClass} rounded-2xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3 px-6 text-center`}
        >
          <ImageIcon className="w-7 h-7 text-muted-foreground/50" />
          <p className="text-sm text-muted-foreground/70 max-w-sm leading-relaxed">
            {img.placeholder}
          </p>
        </div>
      )}
      {img.caption && (
        <figcaption className="mt-3 text-sm text-muted-foreground/70 text-center">
          {img.caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

// ── Main page ───────────────────────────────────────────────────────────────
export default function CaseStudy() {
  const [, params] = useRoute("/work/:slug");
  const slug = params?.slug;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  const sectionIds = project?.caseStudy.map((s) => s.id) ?? [];
  const activeId = useActiveSection(sectionIds);

  if (!project) return <NotFound />;

  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <motion.div
      key={slug}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-background min-h-screen"
    >
      {/* Back link */}
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-6">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> All Projects
        </Link>
      </div>

      {/* Tags */}
      <div className="max-w-5xl mx-auto px-6 mb-5">
        <motion.div
          className="flex flex-wrap gap-2"
          initial="hidden" animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {project.tags.map((tag) => (
            <motion.span
              key={tag} variants={fadeUp}
              className="px-3 py-1 text-xs font-medium rounded-full border border-border text-muted-foreground"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Title + subtitle */}
      <div className="max-w-5xl mx-auto px-6 mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight text-foreground mb-3"
        >
          {project.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-xl text-muted-foreground"
        >
          {project.subtitle}
        </motion.p>
      </div>

      {/* Metadata row */}
      <div className="max-w-5xl mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 py-8 border-y border-border"
        >
          {[
            { label: "My Role",   value: project.role },
            { label: "What I Did", value: project.whatIDid },
            { label: "Timeline",  value: project.timeline },
            { label: "Team",      value: project.team },
          ].map(({ label, value }) => (
            <div key={label}>
              <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5">
                {label}
              </span>
              <span className="text-sm font-medium text-foreground leading-snug">{value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hero image */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-2xl overflow-hidden aspect-[16/9] bg-muted"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Two-column layout: sticky nav + content */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative flex gap-16 lg:gap-24">

          {/* Sticky left nav */}
          <aside className="hidden lg:block w-44 shrink-0">
            <nav className="sticky top-28 flex flex-col gap-1">
              {project.caseStudy.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left text-sm py-1 transition-all duration-200 ${
                      isActive
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Content sections */}
          <main className="flex-1 min-w-0 pb-32 space-y-24">
            {project.caseStudy.map((section, i) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {/* Section heading */}
                <motion.h2
                  variants={fadeUp}
                  className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 tracking-tight"
                >
                  {section.heading}
                </motion.h2>

                {/* Body paragraphs */}
                <div className="space-y-4 mb-8">
                  {section.body.map((para, j) =>
                    j === 0 ? (
                      <motion.p
                        key={j} custom={j} variants={fadeUp}
                        className="text-lg md:text-xl font-semibold text-foreground leading-snug"
                      >
                        {para}
                      </motion.p>
                    ) : (
                      <motion.p
                        key={j} custom={j} variants={fadeUp}
                        className="text-base md:text-[17px] text-muted-foreground leading-relaxed"
                      >
                        {para}
                      </motion.p>
                    )
                  )}
                </div>

                {/* Highlights */}
                {section.highlights && (
                  <motion.ul variants={fadeUp} className="mb-8 space-y-3">
                    {section.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                        {h}
                      </li>
                    ))}
                  </motion.ul>
                )}

                {/* Pull quote */}
                {section.quote && (
                  <motion.blockquote
                    variants={fadeUp}
                    className="mb-8 pl-5 border-l-2 border-foreground/20 italic text-lg text-muted-foreground leading-relaxed"
                  >
                    {section.quote}
                  </motion.blockquote>
                )}

                {/* Links / buttons */}
                {section.links && section.links.length > 0 && (
                  <motion.div variants={fadeUp} className="mb-8 flex flex-wrap gap-3">
                    {section.links.map((link) =>
                      link.variant === "button" ? (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-foreground text-background hover:opacity-80 transition-opacity"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
                        >
                          {link.label}
                        </a>
                      )
                    )}
                  </motion.div>
                )}

                {/* Images / placeholders */}
                {section.images && section.images.length > 0 && (
                  <div className="mt-10 space-y-8">
                    {section.images.map((img, k) => (
                      <ImageBlock key={k} img={img} />
                    ))}
                  </div>
                )}

                {/* Section divider */}
                {i < project.caseStudy.length - 1 && (
                  <motion.hr variants={fadeUp} className="mt-24 border-border" />
                )}
              </motion.section>
            ))}

            {/* Project navigation */}
            <div className="pt-16 border-t border-border flex justify-between items-start gap-4">
              <Link href={`/work/${prevProject.slug}`} className="group max-w-[45%]">
                <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Previous
                </span>
                <span className="flex items-center gap-2 text-base font-display font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
                  <ArrowLeft className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-1" />
                  <span className="truncate">{prevProject.title}</span>
                </span>
              </Link>

              <Link href={`/work/${nextProject.slug}`} className="group max-w-[45%] text-right">
                <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Next
                </span>
                <span className="flex items-center justify-end gap-2 text-base font-display font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
                  <span className="truncate">{nextProject.title}</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </motion.div>
  );
}
