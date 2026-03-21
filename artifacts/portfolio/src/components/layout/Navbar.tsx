import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];

// Extracted so useRoute is called at the top level of a component, not inside .map()
function NavLink({ label, href }: { label: string; href: string }) {
  const [isActive] = useRoute(href);
  return (
    <Link
      href={href}
      className="relative px-5 py-2 text-sm font-medium rounded-full transition-colors hover:text-foreground text-muted-foreground outline-none focus-visible:ring-2 ring-accent"
    >
      {isActive && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute inset-0 rounded-full bg-secondary -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className={isActive ? "text-foreground" : ""}>{label}</span>
    </Link>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  const [path] = useRoute("/:any*");
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [path]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-5 py-3.5 rounded-full transition-all duration-500 ${
            isScrolled
              ? "bg-background/85 backdrop-blur-xl border border-border shadow-md shadow-black/5"
              : "bg-transparent"
          }`}
        >
          {/* Logo / Name */}
          <Link
            href="/"
            className="relative z-50 font-display font-bold text-foreground tracking-tight group overflow-hidden text-base"
          >
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              Eve Kung
            </span>
            <span className="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-accent">
              Eve Kung
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {links.map((link) => (
              <NavLink key={link.label} label={link.label} href={link.href} />
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : "-100%",
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-6 md:hidden"
        style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
        aria-hidden={!mobileMenuOpen}
      >
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-4xl font-display font-bold text-foreground hover:text-accent transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </motion.div>
    </header>
  );
}
