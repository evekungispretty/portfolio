import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageTransition } from "@/components/ui/PageTransition";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/evekung/" },
  { label: "Behance", href: "https://behance.net/chihjoukung" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (_data: FormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <PageTransition className="pt-32 pb-0 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-32">

        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="block text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium"
          >
            Contact
          </motion.span>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.9]"
            >
              Let's start a{" "}
              <span className="font-serif italic font-normal text-accent">conversation.</span>
            </motion.h1>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-md">
              Have a project in mind, want to collaborate, or just want to say hi? Fill out the
              form or reach out directly at{" "}
              <a
                href="mailto:weirdcravings00@gmail.com"
                className="text-foreground font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors"
              >
                weirdcravings00@gmail.com
              </a>
              .
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
                  Connect
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      {s.label}
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
                  Currently
                </h3>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-secondary border border-border">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shrink-0" />
                  <p className="text-sm text-foreground font-medium">
                    Web Designer &amp; Developer at the University of Florida — and open to new
                    opportunities.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
                  Based in
                </h3>
                <p className="text-sm text-foreground font-medium">
                  Gainesville, Florida — available remote &amp; hybrid
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-card rounded-[2rem] p-8 md:p-10 border border-border shadow-xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, scale: 0.97 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 relative z-10"
                >
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                      Your Name
                    </label>
                    <input
                      id="name"
                      {...register("name")}
                      className="w-full px-4 py-3.5 rounded-xl bg-background border-2 border-border focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/40 text-sm"
                      placeholder="Jane Doe"
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3.5 rounded-xl bg-background border-2 border-border focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/40 text-sm"
                      placeholder="jane@example.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      {...register("message")}
                      rows={5}
                      className="w-full px-4 py-3.5 rounded-xl bg-background border-2 border-border focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/40 resize-none text-sm"
                      placeholder="Tell me about your project, role, or just say hi..."
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-foreground text-background font-bold text-sm hover:bg-accent hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-card z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                    className="mb-6"
                  >
                    <CheckCircle2 className="w-16 h-16 text-accent" />
                  </motion.div>
                  <h3 className="text-3xl font-display font-bold mb-3">Message sent!</h3>
                  <p className="text-muted-foreground text-base max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24–48 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-6 py-2.5 rounded-full border border-border hover:bg-secondary transition-colors font-medium text-sm"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
