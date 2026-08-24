"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOut } from "@/lib/motion";

const charContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.02 } },
};

const charItem = {
  hidden: { opacity: 0, y: "60%", rotate: 6 },
  show: {
    opacity: 1,
    y: "0%",
    rotate: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

/** Letter-by-letter scroll reveal for short headline words (e.g. "PROJECTS").
    `after` renders decoration (doodles etc.) outside the animated span. */
export default function SplitHeading({
  text,
  className,
  after,
}: {
  text: string;
  className?: string;
  after?: ReactNode;
}) {
  const chars = text.split("");
  return (
    <motion.h2
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
      variants={charContainer}
      className={className}
    >
      {chars.map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span className="inline-block" variants={charItem}>
            {char === " " ? " " : char}
          </motion.span>
        </span>
      ))}
      {after}
    </motion.h2>
  );
}
