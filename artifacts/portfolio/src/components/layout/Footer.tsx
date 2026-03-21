import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 lg:py-32 rounded-t-[3rem] mt-20 lg:mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-none">
              Have an idea?<br/>
              <span className="text-accent">Let's build it.</span>
            </h2>
            <p className="text-xl text-muted/60 max-w-md">
              Currently available for freelance projects and open to full-time opportunities.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end justify-end gap-6">
            <Link 
              href="/contact" 
              className="px-10 py-5 rounded-full bg-accent text-accent-foreground font-display font-bold text-xl hover:scale-105 hover:shadow-[0_0_40px_rgba(202,255,51,0.3)] transition-all duration-300"
            >
              Get in touch
            </Link>
            <a href="mailto:hello@jordanlee.design" className="text-lg hover:text-accent transition-colors">
              hello@jordanlee.design
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted/40 text-sm">
            © {new Date().getFullYear()} Jordan Lee. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-accent transition-colors">Twitter</a>
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-colors">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
