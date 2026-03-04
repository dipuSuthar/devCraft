"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Three.js canvas */}
      <HeroScene />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--bg)_100%)] pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-[2] text-center px-6 max-w-5xl mx-auto">
        <motion.span
          {...fadeUp(2.0)}
          className="inline-block text-[0.7rem] tracking-[0.3em] uppercase text-[var(--blue)] border border-[rgba(0,212,255,0.3)] px-5 py-2 rounded-full mb-8"
        >
          ⚡ Available for new projects
        </motion.span>

        <motion.h1
          {...fadeUp(2.1)}
          className="font-syne font-extrabold leading-[0.92] tracking-[-3px]"
          style={{ fontSize: "clamp(3rem,8.5vw,7.5rem)" }}
        >
          We Build
          <br />
          <span className="text-gradient-full inline-block">Digital Empires</span>
        </motion.h1>

        <motion.p
          {...fadeUp(2.2)}
          className="text-[var(--muted)] text-sm md:text-base leading-relaxed max-w-lg mx-auto mt-6"
        >
          Next.js • Shopify • API Integrations
          <br />
          Full-scale e-commerce ecosystems that scale.
        </motion.p>

        <motion.div
          {...fadeUp(2.3)}
          className="flex flex-wrap gap-4 justify-center mt-10"
        >
          <MagneticButton href="#projects" variant="primary">
            View Our Work <span>→</span>
          </MagneticButton>
          <MagneticButton href="#cta" variant="outline">
            Start a Project
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        {...fadeUp(2.5)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 text-[var(--muted)] text-[0.65rem] tracking-[0.25em] uppercase"
      >
        <div
          className="w-px h-12 bg-gradient-to-b from-[var(--blue)] to-transparent"
          style={{ animation: "scrollLine 2s ease infinite" }}
        />
        scroll
      </motion.div>
    </section>
  );
}
