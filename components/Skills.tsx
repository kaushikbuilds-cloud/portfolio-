"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { SparkleDoodle, DashedCircle } from "./paper/Doodles";
import { revealContainer, revealItem, revealHeading } from "@/lib/motion";
import SplitHeading from "./SplitHeading";

const laneDurations = [22, 28, 24, 30, 26];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          variants={revealHeading}
        >
          <p className="font-marker text-2xl text-ink-soft">What I work with</p>
          <DashedCircle className="absolute -left-10 top-0 hidden h-16 w-16 text-ink/60 lg:block" />
        </motion.div>
        <SplitHeading
          text="SKILLS"
          className="sticker-outline font-display relative mt-1 inline-block text-4xl text-paper sm:text-5xl"
          after={<SparkleDoodle className="absolute -right-11 top-1 h-7 w-7 text-ink sm:h-9 sm:w-9" />}
        />

        <motion.div
          className="mt-12 space-y-5 overflow-hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={revealContainer}
        >
          {skillGroups.map((group, gi) => {
            const track = [...group.skills, ...group.skills];
            const reverse = gi % 2 === 1;
            return (
              <motion.div
                key={group.label}
                variants={revealItem}
                className="skill-lane relative flex items-center gap-4"
              >
                <span className="font-marker w-24 shrink-0 text-right text-sm text-ink-soft sm:w-32 sm:text-base">
                  {group.label}
                </span>
                <div className="relative flex-1 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                  <div
                    className={`flex w-max gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
                    style={{ animationDuration: `${laneDurations[gi % laneDurations.length]}s` }}
                  >
                    {track.map((skill, si) => (
                      <span
                        key={`${skill}-${si}`}
                        className="paper-cut font-display inline-block shrink-0 whitespace-nowrap bg-paper px-4 py-2 text-xs text-ink transition-transform duration-200 hover:-translate-y-1 hover:scale-110 sm:text-sm"
                        style={{
                          transform: `rotate(${((si % 5) - 2) * 1.2}deg)`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
