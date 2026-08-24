"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { ScribbleCircle } from "./paper/Doodles";
import { revealContainer, revealItem, revealHeading } from "@/lib/motion";
import SplitHeading from "./SplitHeading";

const fanRotate = [-8, -3, 3, 8];

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          variants={revealHeading}
        >
          <p className="font-marker text-2xl text-coral">What I can do for you</p>
        </motion.div>
        <SplitHeading
          text="SERVICES"
          className="font-display relative mt-1 inline-block text-4xl text-ink sm:text-5xl"
          after={<ScribbleCircle className="absolute -right-16 -top-4 h-12 w-20 text-teal/70 hidden sm:block" />}
        />
        <p className="font-marker mt-3 text-sm text-ink-soft">
          a hand of cards — hover one to pull it out
        </p>

        <motion.div
          className="mt-14 flex flex-col items-stretch gap-8 sm:flex-row sm:items-end sm:justify-center sm:gap-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          variants={revealContainer}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={revealItem}
              whileHover={{
                y: -28,
                rotate: 0,
                scale: 1.05,
                zIndex: 20,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              }}
              style={{ rotate: fanRotate[i], zIndex: i }}
              className="paper-cut relative w-full max-w-sm shrink-0 origin-bottom bg-paper p-6 sm:-ml-10 sm:w-64 sm:p-6 first:sm:ml-0"
            >
              <span className="font-display absolute -left-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-sun text-sm text-ink shadow-sm">
                0{i + 1}
              </span>
              <h3 className="font-display text-xl text-ink sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                {service.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-ink/15 bg-paper-2 px-2.5 py-1 text-xs text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
