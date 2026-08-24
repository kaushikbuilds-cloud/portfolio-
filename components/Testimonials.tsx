"use client";

import { useState } from "react";
import { motion, type PanInfo } from "framer-motion";
import { testimonials } from "@/lib/data";
import { StarDoodle } from "./paper/Doodles";
import { revealHeading } from "@/lib/motion";
import SplitHeading from "./SplitHeading";

export default function Testimonials() {
  const [order, setOrder] = useState(testimonials.map((_, i) => i));

  const cycle = () => setOrder((o) => [...o.slice(1), o[0]]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 90) cycle();
  };

  return (
    <section id="testimonials" className="relative px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          variants={revealHeading}
        >
          <p className="font-marker text-2xl text-teal">Kind words</p>
        </motion.div>
        <SplitHeading
          text="TESTIMONIALS"
          className="font-display relative mt-1 inline-block text-4xl text-ink sm:text-5xl"
          after={<StarDoodle className="absolute -right-10 top-0 h-6 w-6 text-coral sm:h-8 sm:w-8" />}
        />
        <p className="font-marker mt-3 text-center text-sm text-ink-soft">
          drag the top card to shuffle the stack
        </p>

        <div className="relative mx-auto mt-12 h-[360px] w-full max-w-md sm:h-[320px]">
          {order.map((testimonialIndex, stackPos) => {
            const t = testimonials[testimonialIndex];
            const isFront = stackPos === 0;
            const side = stackPos % 2 === 0 ? 1 : -1;
            return (
              <motion.div
                key={t.author}
                className={`paper-cut absolute inset-x-0 top-0 mx-auto w-full max-w-md bg-paper p-6 sm:p-7 ${
                  isFront ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
                }`}
                style={{ zIndex: testimonials.length - stackPos }}
                animate={{
                  y: stackPos * 12,
                  scale: 1 - stackPos * 0.05,
                  rotate: stackPos === 0 ? 0 : side * stackPos * 3,
                  opacity: stackPos > 2 ? 0 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                drag={isFront ? "x" : false}
                dragElastic={0.65}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={isFront ? onDragEnd : undefined}
                whileDrag={{ rotate: 0 }}
              >
                <p className="font-marker text-4xl leading-none text-coral">&ldquo;</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {t.quote}
                </p>
                <div className="mt-5 border-t border-dashed border-ink/20 pt-3">
                  <p className="font-display text-sm text-ink">{t.author}</p>
                  <p className="text-xs uppercase tracking-wide text-ink-soft">
                    {t.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setOrder(testimonials.map((_, j) => (j + i) % testimonials.length))}
              className={`h-2 w-2 rounded-full transition-colors ${
                order[0] === i ? "bg-coral" : "bg-ink/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
