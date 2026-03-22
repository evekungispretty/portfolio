import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageTransition } from "@/components/ui/PageTransition";

const philosophy = [
  {
    label: "Clarity over cleverness.",
    body: "Every decision should serve the person using it. If I have to explain a design, I haven't finished designing it.",
  },
  {
    label: "Accessibility is craft, not compliance.",
    body: "Building for everyone makes products better for everyone. WCAG guidelines are the floor, not the ceiling.",
  },
  {
    label: "Systems thinking enables scale.",
    body: "The best design work creates patterns that multiply. I build components, not just screens.",
  },
  {
    label: "Motion implies meaning.",
    body: "Animation isn't decoration. Every transition communicates something about how the interface works.",
  },
];

const strengths = [
  { area: "Product Design", desc: "End-to-end experience design from research through shipped product" },
  { area: "Design Systems", desc: "Component libraries, token systems, and design language documentation" },
  { area: "Accessibility", desc: "WCAG compliance, inclusive design patterns, and assistive technology" },
  { area: "Interaction Design", desc: "Motion, microinteractions, and tactile interface behavior" },
  { area: "Front-End Dev", desc: "HTML, CSS, JavaScript, React, PHP, WordPress — design that ships" },
  { area: "EdTech & Higher Ed", desc: "Deep domain knowledge in digital products for education" },
];

export default function About() {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const scrollRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -18]);
  const scrollSkewY = useTransform(scrollYProgress, [0, 0.5, 1], [4, 0, -4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -16, y: x * 16 });
  };

  return (
    <PageTransition className="pt-32 pb-0 min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Image column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            {/* Scroll skew wrapper */}
            <motion.div
              ref={imgRef}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ rotateY: scrollRotateY, skewY: scrollSkewY }}
            >
              {/* 3D tilt wrapper */}
              <div style={{ perspective: "900px" }}>
                <motion.div
                  animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                  transition={{ duration: 0.12, ease: "linear" }}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
                  className="relative cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/profile.png`}
                    alt="Eve Kung — Product Designer"
                    className={`w-full h-auto block transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"}`}
                    draggable={false}
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}images/profile-hover.png`}
                    alt="Eve Kung with her cat"
                    className={`w-full h-auto block absolute inset-0 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
                    draggable={false}
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 p-5 rounded-2xl bg-secondary border border-border flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-lg shrink-0">
                🌺
              </div>

            </motion.div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-7 order-1 lg:order-2 pt-0 lg:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-5 font-medium">
                About
              </span>
            </motion.div>

            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.88]"
              >
                Hi, I'm{" "}
                <span className="font-serif italic font-normal text-accent">Eve.</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5 text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
            >
              <p>
                I'm a product and UI/UX designer with a background in web design, design systems,
                accessibility, and higher education digital products. Currently at the{" "}
                <span className="text-foreground font-medium">University of Florida</span>, where I
                design and build digital experiences for the College of Education.
              </p>
              <p>
                I transitioned into design while working at{" "}
                <span className="text-foreground font-medium">PicCollage</span> — a photo collage
                app with 1.2M+ users — where I discovered that my real passion was the experience:
                the clarity, the logic, the craft of making complex things feel simple.
              </p>
              <p>
                I hold an{" "}
                <span className="text-foreground font-medium">MA in Interaction Design &amp; UI/UX</span>{" "}
                from the Academy of Art University, and have since designed products spanning sales
                platforms, AR learning experiences, onboarding systems, and university web tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-accent hover:text-white transition-all duration-300"
              >
                See my work
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/resume"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors duration-300"
              >
                View experience
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ───────────────────────────────────────── */}
      <section className="border-t border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">
              How I Think
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight">
              Design Philosophy
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophy.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl bg-card border border-border space-y-3"
              >
                <div className="flex items-start gap-3">
                  <span className="text-accent text-lg mt-0.5 leading-none shrink-0">✦</span>
                  <h3 className="text-xl font-display font-bold text-foreground leading-snug">
                    {item.label}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base pl-7">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strengths ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">
            Areas of Focus
          </span>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight">
            Strengths
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {strengths.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
            >
              <h3 className="text-base font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                {item.area}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Personal ─────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">
                Beyond the Work
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">
                A few more things.
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Outside of design, you'll find me crocheting, experimenting with gel nail art,
                  and baking increasingly ambitious cheesecakes. I'm convinced that the same
                  attention to detail that makes a good interface makes a good cheesecake crust.
                </p>
                <p>
                  I believe the best design comes from genuine curiosity about people — what they
                  need, what confuses them, what delights them. I try to bring that same curiosity
                  to everything I make.
                </p>
                <p>
                  Always up for a conversation about design, accessibility, or terrible cat memes.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {["🧶 Crochet", "💅 Gel nails", "🍰 Baking", "🐱 Cat memes", "📚 Design nerd"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA footer ────────────────────────────────────────── */}
      <section className="border-t border-border bg-foreground text-background rounded-t-[2.5rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28 flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight mb-3">
              Want to work together?
            </h2>
            <p className="text-xl text-background/60">
              I'm currently open to new opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="https://linkedin.com/in/evekung/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-accent text-white font-display font-bold text-base hover:scale-105 transition-all duration-300"
            >
              Connect on LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/evekung/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-background/20 text-background font-semibold text-base hover:bg-background/10 transition-colors duration-300"
            >
              LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
