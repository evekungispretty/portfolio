import { PageTransition } from "@/components/ui/PageTransition";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { motion } from "framer-motion";

export default function About() {
  return (
    <PageTransition className="pt-32 pb-16 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, rotate: -2, scale: 0.95 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-[2rem] overflow-hidden aspect-[3/4] bg-muted shadow-2xl"
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/profile.png`} 
                alt="Jordan Lee Portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-overlay"></div>
            </motion.div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <AnimatedText 
              text="Hi, I'm Jordan." 
              el="h1" 
              className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-8"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              <p>
                I'm a multidisciplinary product designer based in New York. With over 6 years of experience, I specialize in crafting digital products that are not just usable, but memorable.
              </p>
              <p>
                My background in both graphic design and frontend development gives me a unique perspective. I don't just design static screens; I design systems, interactions, and feelings. I believe the best products emerge at the intersection of rigorous logic and playful creativity.
              </p>
              <p>
                When I'm not pushing pixels in Figma or wrestling with Framer Motion, you can find me collecting vintage cameras, trying to perfect my espresso pull, or exploring the architectural oddities of the city.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 p-8 rounded-3xl bg-secondary border border-border"
            >
              <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Design Philosophy</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl mt-1 leading-none">✦</span>
                  <span className="text-secondary-foreground font-medium">Clarity over cleverness.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl mt-1 leading-none">✦</span>
                  <span className="text-secondary-foreground font-medium">Motion implies meaning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl mt-1 leading-none">✦</span>
                  <span className="text-secondary-foreground font-medium">Systems scale, components don't.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
