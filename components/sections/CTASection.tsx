"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="cta"
      className="py-40 text-center relative overflow-hidden"
    >
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.15)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(0,212,255,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2
            className="font-syne font-extrabold leading-[0.95] tracking-[-3px]"
            style={{ fontSize: "clamp(2.5rem,7vw,5.5rem)" }}
          >
            Ready to
            <br />
            <span className="text-gradient-full">Build Something</span>
            <br />
            Iconic?
          </h2>
          <p className="text-[var(--muted)] text-sm mt-6 mb-12">
            Let&apos;s turn your vision into a digital masterpiece.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <MagneticButton href="mailto:hello@devcraft.io" variant="primary">
              Start Your Project <span>→</span>
            </MagneticButton>
            <MagneticButton href="#" variant="outline">
              Book a Discovery Call
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
