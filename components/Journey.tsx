"use client";

import { motion } from "framer-motion";
import Tape from "./paper/Tape";
import { ScribbleArrow } from "./paper/Doodles";
import { journey } from "@/lib/data";
import { revealHeading } from "@/lib/motion";
import SplitHeading from "./SplitHeading";

const lineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const pinItem = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const cardItem = (above: boolean) => ({
  hidden: { opacity: 0, y: above ? 30 : -30, rotate: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
});

export default function Journey() {
  return (
    <section id="journey" className="relative px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          variants={revealHeading}
        >
          <p className="font-marker text-2xl text-teal">Where I&apos;ve been</p>
        </motion.div>
        <SplitHeading
          text="JOURNEY"
          className="font-display relative mt-1 inline-block text-4xl text-ink sm:text-5xl"
          after={<ScribbleArrow className="absolute -right-16 top-2 h-8 w-14 -rotate-12 text-coral/70 hidden sm:block" />}
        />
        <p className="font-marker mt-2 text-sm text-ink-soft sm:hidden">
          &larr; scroll the clothesline &rarr;
        </p>

        <div className="relative mt-16 -mx-6 px-6 lg:-mx-16 lg:px-16">
          <div
            className="scrollbar-none snap-x snap-mandatory overflow-x-auto pb-6 [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]"
          >
            <motion.div
              className="relative flex h-[720px] w-max gap-2 sm:h-[620px]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              variants={lineContainer}
            >
              {/* the clothesline itself */}
              <motion.div
                className="absolute left-0 top-1/2 h-[3px] w-full origin-left -translate-y-1/2 rounded-full bg-ink/20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />

              {journey.map((item, i) => {
                const above = i % 2 === 0;
                const rotate = above ? -2 : 2;
                return (
                  <div
                    key={item.title + item.period}
                    className="relative flex h-full w-[240px] shrink-0 snap-center items-center justify-center sm:w-[280px]"
                  >
                    {/* pin on the line */}
                    <motion.span
                      variants={pinItem}
                      transition={{ delay: 0.1 }}
                      className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-paper bg-coral shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
                    />
                    {/* thread connecting pin to card */}
                    <div
                      className={`absolute left-1/2 w-[2px] -translate-x-1/2 bg-ink/25 ${
                        above ? "bottom-1/2 h-14" : "top-1/2 h-14"
                      }`}
                    />

                    <motion.div
                      variants={cardItem(above)}
                      whileHover={{ y: above ? -6 : 6, rotate: 0 }}
                      className={`paper-cut torn-${(i % 3) + 1} absolute w-[220px] bg-paper p-4 sm:w-[260px] sm:p-5 ${
                        above ? "bottom-[calc(50%+3.75rem)]" : "top-[calc(50%+3.75rem)]"
                      }`}
                      style={{ transform: `rotate(${rotate}deg)` }}
                    >
                      <Tape
                        className={`left-1/2 h-5 w-14 -translate-x-1/2 sm:h-6 sm:w-16 ${above ? "-bottom-2.5" : "-top-2.5"}`}
                        rotate={rotate * -2}
                        color={i % 2 === 0 ? "sun" : "teal"}
                        center
                      />
                      <p className="font-marker text-sm text-coral sm:text-base">
                        {item.period}
                      </p>
                      <p className="font-display mt-1 text-base leading-tight text-ink sm:text-lg">
                        {item.title}
                      </p>
                      <p className="text-xs font-medium text-ink-soft sm:text-sm">
                        {item.org}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
