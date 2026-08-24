"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringX = useSpring(dotX, { stiffness: 500, damping: 40, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 500, damping: 40, mass: 0.5 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(canHover);
    if (!canHover) return;

    document.documentElement.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible) setVisible(true);

      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        const el = document.elementFromPoint(e.clientX, e.clientY);
        const interactive = el?.closest("a, button, input, textarea, [data-cursor-hover]");
        setHovering(Boolean(interactive));
      });
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      document.documentElement.classList.remove("custom-cursor");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-difference"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.2s" }}
      aria-hidden
    >
      <motion.div
        className="absolute rounded-full bg-white"
        style={{
          left: dotX,
          top: dotY,
          width: 6,
          height: 6,
          x: "-50%",
          y: "-50%",
        }}
      />
      <motion.div
        className="absolute rounded-full border-2 border-white"
        animate={{
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{
          left: ringX,
          top: ringY,
          x: "-50%",
          y: "-50%",
        }}
      />
    </div>
  );
}
