"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    stars: 5,
    text: "They didn't just build our Shopify store — they transformed our entire digital brand. Revenue is up 340% in just 3 months after launch.",
    name: "Sarah Chen",
    role: "Founder, LuxeThreads",
    avatar: "S",
    gradient: "linear-gradient(135deg, #00d4ff, #7c3aed)",
  },
  {
    stars: 5,
    text: "The ERP integration was a nightmare with 2 other agencies. DevCraft nailed it in 4 weeks. Flawless real-time data sync, zero downtime.",
    name: "Marcus Weber",
    role: "CTO, TechForge Inc.",
    avatar: "M",
    gradient: "linear-gradient(135deg, #7c3aed, #ff2d8b)",
  },
  {
    stars: 5,
    text: "The 3D product configurator absolutely blew our customers' minds. Average order value increased by 220%. Best investment we've ever made.",
    name: "Amelia Ross",
    role: "CEO, Aurelia Jewels",
    avatar: "A",
    gradient: "linear-gradient(135deg, #ff2d8b, #00d4ff)",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-32 bg-[var(--bg2)]">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[0.65rem] tracking-[0.4em] uppercase text-[var(--blue)] block mb-3">
            // Client Voices
          </span>
          <h2
            className="font-syne font-extrabold tracking-tight"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.05 }}
          >
            What Clients{" "}
            <em className="not-italic text-gradient-blue-violet">Say</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-[var(--surface)] border border-[var(--border)] p-8 rounded-sm relative overflow-hidden group hover:border-[rgba(0,212,255,0.3)] transition-colors duration-400"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              {/* Big quote mark */}
              <span
                className="absolute top-4 right-5 font-syne font-extrabold text-8xl leading-none text-[rgba(124,58,237,0.12)] select-none"
              >
                "
              </span>

              <div className="text-yellow-400 text-sm mb-4 tracking-wide">
                {"★".repeat(t.stars)}
              </div>
              <p className="text-[var(--muted)] text-[0.82rem] leading-[1.9] mb-6 italic relative z-10">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-syne font-extrabold text-[var(--bg)]"
                  style={{ background: t.gradient }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-syne font-bold text-sm">{t.name}</div>
                  <div className="text-[var(--muted)] text-[0.7rem] mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
