"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    type: "E-commerce / Shopify",
    name: "LuxeThreads Store",
    desc: "Headless Shopify + Next.js fashion store with AI size recommendations and 3D product previews.",
    techs: ["Next.js", "Shopify", "AI", "Three.js"],
    gradient: "linear-gradient(135deg, #1a0533, #0d1f40, #003366)",
    emoji: "🛍️",
  },
  {
    type: "SaaS / Dashboard",
    name: "AnalytiQ Platform",
    desc: "Real-time analytics dashboard with ERP sync and custom reporting engine. Serves 500K+ events/day.",
    techs: ["React", "SAP ERP", "WebSocket", "Redis"],
    gradient: "linear-gradient(135deg, #001a0d, #003322, #00150a)",
    emoji: "📊",
  },
  {
    type: "Luxury / E-commerce",
    name: "Aurelia Jewels",
    desc: "3D product configurator and Shopify private app for fully custom jewelry orders at scale.",
    techs: ["Three.js", "Shopify", "GSAP", "Framer"],
    gradient: "linear-gradient(135deg, #1a0020, #2d0040, #400060)",
    emoji: "💎",
  },
  {
    type: "B2B / Platform",
    name: "TechForge Marketplace",
    desc: "Multi-vendor B2B platform with smart payment splits, CRM integration, and vendor analytics.",
    techs: ["Next.js", "Stripe", "HubSpot", "Prisma"],
    gradient: "linear-gradient(135deg, #001833, #003366, #004a99)",
    emoji: "🔧",
  },
  {
    type: "D2C / Subscription",
    name: "TeaCraft Subscriptions",
    desc: "Shopify subscription app with loyalty engine, personalized box builder, and automated billing.",
    techs: ["Shopify App", "Polaris", "ReCharge", "Node"],
    gradient: "linear-gradient(135deg, #1a1000, #332200, #4a3300)",
    emoji: "🍵",
  },
];

export default function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  const CARD_WIDTH = 440;

  const scrollRight = () => {
    const maxScroll =
      (trackRef.current?.scrollWidth ?? 0) -
      (trackRef.current?.parentElement?.offsetWidth ?? 0) -
      100;
    const next = Math.min(scrollPos + CARD_WIDTH, maxScroll);
    setScrollPos(next);
    if (trackRef.current) trackRef.current.style.transform = `translateX(-${next}px)`;
  };

  const scrollLeft = () => {
    const next = Math.max(scrollPos - CARD_WIDTH, 0);
    setScrollPos(next);
    if (trackRef.current) trackRef.current.style.transform = `translateX(-${next}px)`;
  };

  return (
    <section id="projects" className="py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-[0.65rem] tracking-[0.4em] uppercase text-[var(--blue)] block mb-3">
            // Selected Work
          </span>
          <h2
            className="font-syne font-extrabold tracking-tight"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.05 }}
          >
            Featured{" "}
            <em className="not-italic text-gradient-blue-violet">Projects</em>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-hidden relative">
        <div
          ref={trackRef}
          className="flex gap-6 px-6 md:px-16 w-max"
          style={{ transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)" }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              className="w-[400px] md:w-[420px] h-[520px] flex-shrink-0 relative rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--surface)] group"
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.4 } }}
            >
              {/* Image area */}
              <div className="h-[58%] relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{ background: p.gradient }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-40">
                  {p.emoji}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[rgba(5,5,8,0.3)] backdrop-blur-[0px] group-hover:backdrop-blur-[4px] group-hover:bg-[rgba(5,5,8,0.5)] transition-all duration-400 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="px-6 py-3 bg-[rgba(0,212,255,0.15)] border border-[var(--blue)] text-[var(--blue)] text-[0.7rem] uppercase tracking-widest font-mono rounded-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    View Case →
                  </button>
                </div>
              </div>

              {/* Glassmorphism info card */}
              <div className="absolute bottom-0 left-0 right-0 h-[44%] glass p-6">
                <div className="text-[0.65rem] text-[var(--blue)] tracking-[0.25em] uppercase mb-1">
                  {p.type}
                </div>
                <h3 className="font-syne font-bold text-xl tracking-tight mb-2">
                  {p.name}
                </h3>
                <p className="text-[var(--muted)] text-[0.75rem] leading-relaxed line-clamp-2">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.techs.map((t) => (
                    <span
                      key={t}
                      className="text-[0.6rem] px-2 py-1 bg-[rgba(124,58,237,0.15)] border border-[rgba(124,58,237,0.3)] text-purple-300 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-3 mt-6 px-6 md:px-16">
        <button
          onClick={scrollLeft}
          className="w-12 h-12 rounded-full border border-[var(--border)] text-[var(--text)] flex items-center justify-center hover:border-[var(--blue)] hover:text-[var(--blue)] hover:shadow-[var(--glow-blue)] transition-all duration-300"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className="w-12 h-12 rounded-full border border-[var(--border)] text-[var(--text)] flex items-center justify-center hover:border-[var(--blue)] hover:text-[var(--blue)] hover:shadow-[var(--glow-blue)] transition-all duration-300"
        >
          →
        </button>
      </div>
    </section>
  );
}
