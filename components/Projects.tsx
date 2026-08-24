"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent } from "react";
import Tape from "./paper/Tape";
import { StarDoodle } from "./paper/Doodles";
import { featuredProjects, otherProjects, type Project } from "@/lib/data";
import { revealContainer, revealItem, revealHeading } from "@/lib/motion";
import SplitHeading from "./SplitHeading";

const cardRotations = [-2, 1.5, -1, 2, -1.5, 1, -2, 1.5, -1, 2, -1.5, 1, -2];

/** Cursor-tracking 3D tilt: subtle rotateX/rotateY that springs back to flat on leave. */
function useTilt(strength = 8) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 300, damping: 22, mass: 0.6 });
  const rotateY = useSpring(ry, { stiffness: 300, damping: 22, mass: 0.6 });

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * strength);
    rx.set(-py * strength);
  };
  const onMouseLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return { rotateX, rotateY, onMouseMove, onMouseLeave };
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const CardTag = project.link ? motion.a : motion.div;
  const tilt = useTilt(7);
  const baseRotate = index % 2 === 0 ? -1.5 : 1.5;
  return (
    <CardTag
      {...(project.link
        ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
        : {})}
      variants={revealItem}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      whileHover={{ y: -6, rotate: 0, scale: 1.03 }}
      className={`paper-cut paper-stack torn-${(index % 3) + 1} group relative block bg-paper p-6 sm:p-7 ${
        project.link ? "" : "cursor-default"
      }`}
      style={{
        rotate: baseRotate,
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        transformPerspective: 800,
      }}
    >
      <Tape
        className="left-6 -top-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3"
        rotate={-6}
        color="sun"
      />
      <span className="font-marker absolute -right-2 -top-2 rotate-6 rounded-full bg-coral px-3 py-1 text-xs text-paper sm:text-sm">
        #0{index + 1}
      </span>

      <p className="font-marker text-xl text-teal">{project.tagline}</p>
      <h3 className="font-display mt-1 text-2xl text-ink sm:text-3xl">
        {project.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm border border-ink/15 bg-paper-2 px-2.5 py-1 text-xs text-ink-soft transition-colors duration-200 group-hover:border-coral/40 group-hover:bg-coral/5"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.link && (
        <p className="font-marker mt-4 flex items-center gap-1 text-lg text-coral">
          Visit site
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
            &rarr;
          </span>
        </p>
      )}
    </CardTag>
  );
}

function ProjectClipping({ project, index }: { project: Project; index: number }) {
  const rotate = cardRotations[index % cardRotations.length];
  const CardTag = project.link ? motion.a : motion.div;
  const tilt = useTilt(6);
  return (
    <CardTag
      {...(project.link
        ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
        : {})}
      variants={revealItem}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      whileHover={{ y: -4, rotate: 0, scale: 1.025 }}
      className={`paper-cut torn-${(index % 3) + 1} group relative block bg-paper p-4 sm:p-5 ${
        project.link ? "" : "cursor-default"
      }`}
      style={{
        rotate,
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        transformPerspective: 800,
      }}
    >
      <Tape
        className="left-1/2 -top-2.5 h-5 w-16 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-6 sm:w-20"
        rotate={rotate * -2}
        color="tape"
        center
      />
      <p className="font-display text-lg text-ink sm:text-xl">{project.name}</p>
      <p className="font-marker text-sm text-coral sm:text-base">{project.tagline}</p>
      <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-sm bg-paper-2 px-2 py-0.5 text-[10px] text-ink-soft transition-colors duration-200 group-hover:bg-coral/10 sm:text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </CardTag>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          variants={revealHeading}
        >
          <p className="font-marker text-2xl text-teal">Things I&apos;ve built</p>
        </motion.div>
        <SplitHeading
          text="PROJECTS"
          className="font-display relative mt-1 inline-block text-4xl text-ink sm:text-5xl"
          after={<StarDoodle className="absolute -right-10 top-0 h-6 w-6 text-sun sm:h-8 sm:w-8" />}
        />

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          variants={revealContainer}
        >
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>

        <div className="mt-16">
          <p className="font-marker text-xl text-ink-soft sm:text-2xl">
            more clippings from the desk —
          </p>
          <motion.div
            className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            variants={revealContainer}
          >
            {otherProjects.map((project, i) => (
              <ProjectClipping key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
