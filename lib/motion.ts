export const easeOut = [0.22, 1, 0.36, 1] as const;

/** Wrap a grid/list container: initial="hidden" whileInView="show" */
export const revealContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
};

/** Apply to each child of a revealContainer, or standalone with its own initial/whileInView */
export const revealItem = {
  hidden: { opacity: 0, y: 28, scale: 0.96, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easeOut },
  },
};

/** For section eyebrow + heading blocks */
export const revealHeading = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: easeOut },
  },
};
