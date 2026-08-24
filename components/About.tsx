"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import Tape from "./paper/Tape";
import { ScribbleCircle } from "./paper/Doodles";
import { revealContainer, revealItem } from "@/lib/motion";
import SplitHeading from "./SplitHeading";

const certifications = [
  "IIT Madras — Certified",
  "LetsUpgrade — Certified",
  "upGrad — Certified",
];

const stats = [
  { label: "Live Projects", value: 7, suffix: "+" },
  { label: "Students on PupilNetwork", value: 18, suffix: "+" },
  { label: "Studios Founded", value: 2, suffix: "" },
];

function CountUpBadge({
  value,
  suffix,
  label,
  rotate,
}: {
  value: number;
  suffix: string;
  label: string;
  rotate: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      variants={revealItem}
      whileHover={{ y: -6, rotate: 0, scale: 1.05 }}
      style={{ rotate }}
      className="paper-cut flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full bg-paper text-center sm:h-36 sm:w-36"
    >
      <p className="font-display text-3xl text-ink sm:text-4xl">
        {display}
        {suffix}
      </p>
      <p className="mt-1 px-4 text-[10px] uppercase leading-tight tracking-wide text-ink-soft sm:text-xs">
        {label}
      </p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <p className="font-marker text-2xl text-teal">A little about me</p>
          <SplitHeading
            text="ABOUT"
            className="font-display relative mt-1 inline-block text-4xl text-ink sm:text-5xl"
            after={<ScribbleCircle className="absolute -right-14 -top-6 h-14 w-24 text-coral/70 hidden sm:block" />}
          />

          <div
            className="paper-cut paper-stack torn-1 relative mt-8 bg-paper p-6 sm:p-8"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 1.8rem, rgba(17,17,17,0.07) 1.8rem, rgba(17,17,17,0.07) calc(1.8rem + 1px))",
              backgroundPosition: "0 4.5rem",
            }}
          >
            <Tape className="-left-3 -top-3" rotate={-8} color="teal" />
            <Tape className="-right-3 -bottom-3" rotate={6} color="coral" />

            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              I&apos;m Kaushik S, a full-stack web and app developer based
              in <span className="font-semibold text-ink">Coimbatore, Tamil Nadu</span>,
              and a Computer Engineering student at{" "}
              <span className="font-semibold text-ink">
                Karunya Institute of Technology &amp; Sciences
              </span>{" "}
              (Batch 2026), currently building products at the intersection
              of engineering and design. I&apos;ve founded a study platform
              and a creative web studio, and co-built a design-led agency
              shipping fast, fully-owned websites for startups and creators —
              see the Projects section below for details.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              Currently: taking on freelance web and app development work
              in Coimbatore and remotely across India, and looking for
              full-stack / product design opportunities.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="rounded-sm border border-ink/15 bg-paper-2 px-3 py-1 text-xs font-medium text-ink-soft sm:text-sm"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={revealContainer}
          className="flex flex-wrap items-center justify-center gap-6 lg:justify-start lg:pt-10"
        >
          {stats.map((stat, i) => (
            <CountUpBadge
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              rotate={i % 2 === 0 ? -4 : 4}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
