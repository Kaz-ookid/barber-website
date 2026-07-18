import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

interface RevealSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Section wrapper that triggers the reveal of every child <Reveal> at once
 * when the section enters the viewport (variants propagate down).
 */
export function RevealSection({ id, className, children }: RevealSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -18% 0px" }}
    >
      {children}
    </motion.section>
  );
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, y = 32, className }: RevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
