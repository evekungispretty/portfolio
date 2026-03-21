import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  el?: keyof React.JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  delay?: number;
}

export function AnimatedText({ 
  text, 
  el: Wrapper = "p", 
  className = "",
  once = true,
  delay = 0
}: AnimatedTextProps) {
  // Split text into words for stagger effect
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <Wrapper key={index} className="overflow-hidden mr-[0.25em] pb-1">
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </Wrapper>
      ))}
    </motion.div>
  );
}
