import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/evekung/" },
  { label: "Behance", href: "https://behance.net/chihjoukung" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 lg:py-28 rounded-t-[2.5rem] mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 pb-16 border-b border-background/10">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-none mb-6">
              Have an idea?
              <br />
              <span className="text-accent">Let's build it.</span>
            </h2>
            <p className="text-lg text-background/50 max-w-sm leading-relaxed">
              Open to full-time roles, freelance projects, and interesting collaborations.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 md:items-end">
            <a
              href="https://linkedin.com/in/evekung/"
              target="_blank"
              rel="noopener noreferrer"
              className="group self-start md:self-end inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-display font-bold text-lg hover:scale-105 transition-all duration-300"
            >
              Connect on LinkedIn
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-lg font-display font-bold text-background">Eve Kung</span>
            <p className="text-background/40 text-xs">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-background/50 hover:text-background transition-colors rounded-full hover:bg-background/10"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-sm font-medium text-background/50 hover:text-accent transition-colors"
              >
                {link.label}
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
