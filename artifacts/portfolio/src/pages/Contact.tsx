import { useState } from "react";
import { PageTransition } from "@/components/ui/PageTransition";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <PageTransition className="pt-32 pb-16 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <AnimatedText 
              text="Let's start a conversation." 
              el="h1" 
              className="text-6xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-md"
            >
              Have a project in mind, or just want to say hi? Fill out the form or send an email directly to <a href="mailto:hello@jordanlee.design" className="text-foreground underline decoration-accent decoration-2 underline-offset-4 font-medium hover:text-accent transition-colors">hello@jordanlee.design</a>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 space-y-4"
            >
              <h3 className="font-display font-bold text-lg">Socials</h3>
              <div className="flex gap-4">
                <a href="#" className="px-5 py-2 rounded-full border border-border hover:bg-foreground hover:text-background transition-colors font-medium">LinkedIn</a>
                <a href="#" className="px-5 py-2 rounded-full border border-border hover:bg-foreground hover:text-background transition-colors font-medium">Twitter</a>
                <a href="#" className="px-5 py-2 rounded-full border border-border hover:bg-foreground hover:text-background transition-colors font-medium">Dribbble</a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-card rounded-[2rem] p-8 md:p-12 shadow-2xl border border-border relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit(onSubmit)} 
                  className="space-y-6 relative z-10"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold">Your Name</label>
                    <input 
                      id="name"
                      {...register("name")}
                      className="w-full px-4 py-4 rounded-xl bg-background border-2 border-border focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold">Email Address</label>
                    <input 
                      id="email"
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-4 rounded-xl bg-background border-2 border-border focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold">Message</label>
                    <textarea 
                      id="message"
                      {...register("message")}
                      rows={5}
                      className="w-full px-4 py-4 rounded-xl bg-background border-2 border-border focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50 resize-none"
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-foreground text-background font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>Send Message <Send className="w-5 h-5" /></>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10 bg-card"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  >
                    <CheckCircle2 className="w-20 h-20 text-accent mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-display font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you within 24-48 hours.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-6 py-2 rounded-full border border-border hover:bg-secondary transition-colors font-medium"
                  >
                    Send another
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
