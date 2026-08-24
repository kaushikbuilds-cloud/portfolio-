"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Tape from "./paper/Tape";
import { ScribbleArrow } from "./paper/Doodles";
import { socials, services } from "@/lib/data";
import SplitHeading from "./SplitHeading";

const socialLinks = [
  { label: "GitHub", href: socials.github },
  { label: "LinkedIn", href: socials.linkedin },
  { label: "X / Twitter", href: socials.x },
  { label: "Email", href: `mailto:${socials.email}` },
];

const reasons = [...services.map((s) => s.title), "Something else"];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState(reasons[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, reason, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (res.status === 503) {
          const subject = encodeURIComponent(`[${reason}] Portfolio contact from ${name || "someone"}`);
          const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
          window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
          setStatus("idle");
          return;
        }
        setErrorMsg(data.error || "Something went wrong. Try again?");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setErrorMsg("Network error. Try again?");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-24 pb-32 lg:px-16">
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          <p className="font-marker text-2xl text-coral">Let&apos;s talk</p>
          <SplitHeading
            text="CONTACT"
            className="font-display relative mt-1 inline-block text-4xl text-ink sm:text-5xl"
            after={<ScribbleArrow className="absolute -right-16 top-2 h-8 w-14 rotate-6 text-teal/70 hidden sm:block" />}
          />
        </div>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          Open to full-stack, product design, and GenAI integration work — or
          just say hi.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="paper-cut relative mt-8 bg-paper p-6 sm:p-8"
        >
          <Tape className="left-6 -top-3" rotate={-6} color="sun" />

          <label className="block text-sm font-medium text-ink-soft">
            Name
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-sm border border-ink/15 bg-paper-2 px-3 py-2 text-ink outline-none focus:border-coral"
              placeholder="Your name"
            />
          </label>

          <label className="mt-4 block text-sm font-medium text-ink-soft">
            Email
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-sm border border-ink/15 bg-paper-2 px-3 py-2 text-ink outline-none focus:border-coral"
              placeholder="you@example.com"
            />
          </label>

          <label className="mt-4 block text-sm font-medium text-ink-soft">
            What do you need?
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="mt-1 w-full appearance-none rounded-sm border border-ink/15 bg-paper-2 px-3 py-2 text-ink outline-none focus:border-coral"
            >
              {reasons.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-4 block text-sm font-medium text-ink-soft">
            Message
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full resize-none rounded-sm border border-ink/15 bg-paper-2 px-3 py-2 text-ink outline-none focus:border-coral"
              placeholder="What are you building?"
            />
          </label>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="font-display -rotate-1 bg-coral px-7 py-3 text-sm text-paper shadow-md transition-transform hover:rotate-0 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:text-base"
            >
              {status === "sending" ? "SENDING…" : "SEND MESSAGE"}
            </button>
            {status === "sent" && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-marker text-base text-coral"
              >
                Sent — I&apos;ll get back to you soon!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-ink-soft"
              >
                {errorMsg}
              </motion.p>
            )}
          </div>
        </motion.form>

        <div className="mt-8 flex flex-wrap gap-3">
          {socialLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="paper-card font-display inline-flex w-fit items-center gap-2 bg-paper px-5 py-2.5 text-sm text-ink transition-transform hover:-translate-y-1 hover:rotate-0 sm:text-base"
              style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
