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
