"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ScribbleArrow,
  StarDoodle,
  SparkleDoodle,
  DashedCircle,
  SpiralDoodle,
  CursorDoodle,
} from "./paper/Doodles";
import { WindowTopbar, TagBubble } from "./paper/BrowserChrome";
import RotatingStamp from "./RotatingStamp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yFrame = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const ySparkle = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yCircle = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden px-6 pt-20 pb-20 sm:pt-28 lg:px-16"
    >
      <motion.div className="mx-auto max-w-6xl" style={{ opacity }}>
        {/* Signature: browser-window frame with a dot-grid backdrop behind
            the sticker headline, doodles scattered around the chrome */}
        <motion.div style={{ y: yFrame }} className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div style={{ y: ySparkle }}>
            <SparkleDoodle className="absolute -left-4 -top-10 h-7 w-7 text-ink sm:-left-10 sm:h-9 sm:w-9" />
          </motion.div>
          <motion.div style={{ y: yCircle }}>
            <DashedCircle className="absolute -right-6 -top-16 h-14 w-14 -rotate-6 text-ink/70 sm:h-20 sm:w-20" />
          </motion.div>
          <StarDoodle className="absolute right-4 top-2 hidden h-5 w-5 text-ink sm:block" />

          <div className="window-frame relative">
            <WindowTopbar />
            <div className="dot-grid relative flex flex-col items-center px-6 py-12 text-center sm:py-16">
              <motion.p
                initial="hidden"
                animate="show"
                custom={0}
                variants={fadeUp}
                className="font-marker text-xl text-ink-soft sm:text-2xl"
              >
                Hey, I&apos;m —
              </motion.p>

              <motion.h1
                initial="hidden"
                animate="show"
                custom={1}
                variants={fadeUp}
                className="sticker-text font-display mt-1 text-[15vw] leading-[0.85] tracking-tight text-paper sm:text-[9vw] lg:text-8xl"
              >
                KAUSHIK&nbsp;S
              </motion.h1>

              <motion.div initial="hidden" animate="show" custom={2} variants={fadeUp}>
                <TagBubble className="mt-6 -rotate-2">
                  Full&#8209;Stack App &amp; Web Developer
                </TagBubble>
              </motion.div>
            </div>
          </div>

          <CursorDoodle className="absolute -bottom-6 -left-3 h-9 w-9 text-ink -rotate-12 sm:-bottom-8 sm:-left-6" />
        </motion.div>
        </motion.div>

        {/* Portrait cutout + intro copy row */}
        <div className="relative mt-16 flex flex-col items-center gap-10 lg:mt-20 lg:flex-row lg:items-start lg:justify-between">
          <motion.div style={{ y: yPortrait }} className="relative order-2 shrink-0 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0 }}
            className="relative"
          >
            <SpiralDoodle className="absolute -left-8 top-6 hidden h-10 w-10 text-ink/70 lg:block" />
            <RotatingStamp className="absolute -right-10 -top-10 hidden h-24 w-24 sm:block" />

            <div className="window-frame w-52">
              <WindowTopbar label="me.png" />
              <div className="relative h-56 w-full bg-paper-2">
                <Image
                  src="/kaushik.png"
                  alt="Kaushik S"
                  fill
                  sizes="208px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <TagBubble className="absolute -bottom-5 -right-6 -rotate-3 bg-paper text-sm sm:-right-10">
              it&apos;s me!
            </TagBubble>
          </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="order-1 max-w-xl text-center lg:order-2 lg:pt-4 lg:text-left"
          >
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              Computer Engineering student at{" "}
              <span className="highlight-mark font-semibold text-ink">
                Karunya Institute of Technology &amp; Sciences
              </span>{" "}
              (Batch 2026). Founder of two studios, currently building
              full-stack products and GenAI-powered tools. Engineering meets
              design taste.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="paper-cut font-display -rotate-1 bg-ink px-7 py-3 text-sm text-paper transition-transform hover:rotate-0 hover:scale-105 sm:text-base"
              >
                VIEW PROJECTS
              </a>
              <a
                href="#contact"
                className="paper-cut font-display rotate-1 bg-paper px-7 py-3 text-sm text-ink transition-transform hover:rotate-0 hover:scale-105 sm:text-base"
              >
                GET IN TOUCH
              </a>
              <ScribbleArrow className="hidden h-10 w-16 -rotate-6 text-ink-soft sm:block" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
