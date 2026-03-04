"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "Deep-dive into your business goals, tech requirements, and competitive landscape. We map out an architecture blueprint before writing a single line of code.",
  },
  {
    num: "02",
    title: "Design & Prototyping",
    desc: "High-fidelity Figma designs with micro-interaction specs. You approve every pixel before we build. No surprises at launch.",
  },
  {
    num: "03",
    title: "Agile Development",
    desc: "Two-week sprints with live demo calls. Code quality enforced via TypeScript, testing, and CI/CD pipelines. You always see real progress.",
  },
  {
    num: "04",
    title: "QA & Performance",
    desc: "Lighthouse 95+ targets. Cross-browser, cross-device testing. Security audits, load testing, and thorough edge case coverage.",
  },
  {
    num: "05",
    title: "Launch & Scale",
    desc: "Zero-downtime deployments on Vercel Edge. Post-launch monitoring, optimization sprints, and ongoing technical partnership.",
  },
];

export default function ProcessSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[0.65rem] tracking-[0.4em] uppercase text-[var(--blue)] block mb-3">
            // How We Work
          </span>
          <h2
            className="font-syne font-extrabold tracking-tight"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.05 }}
          >
            Our{" "}
            <em className="not-italic text-gradient-blue-violet">Process</em>
          </h2>
        </motion.div>

        <div className="max-w-3xl relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--violet)] to-transparent opacity-60" />

          {steps.map((step, i) => (
            <StepItem key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="flex gap-10 items-start py-10 group"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="w-12 h-12 flex-shrink-0 rounded-full border border-[var(--border)] bg-[var(--bg2)] flex items-center justify-center font-syne font-extrabold text-[0.85rem] text-[var(--blue)] relative z-10 transition-all duration-400"
        whileHover={{
          background: "var(--blue)",
          color: "var(--bg)",
          boxShadow: "0 0 25px rgba(0,212,255,0.5)",
        }}
      >
        {step.num}
      </motion.div>
      <div className="pt-2">
        <h3 className="font-syne font-bold text-xl tracking-tight mb-2">
          {step.title}
        </h3>
        <p className="text-[var(--muted)] text-[0.82rem] leading-relaxed max-w-xl">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}
