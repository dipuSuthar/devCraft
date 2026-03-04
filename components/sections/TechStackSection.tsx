"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const row1 = [
  { icon: "⚛️", label: "Next.js 15" },
  { icon: "🔷", label: "TypeScript" },
  { icon: "🎨", label: "Tailwind CSS" },
  { icon: "🌀", label: "Framer Motion" },
  { icon: "✨", label: "GSAP" },
  { icon: "🔵", label: "Three.js" },
  { icon: "⚡", label: "React 19" },
  { icon: "🗺️", label: "React Router" },
];

const row2 = [
  { icon: "🛍️", label: "Shopify Hydrogen" },
  { icon: "💧", label: "Shopify Liquid" },
  { icon: "🔗", label: "Shopify GraphQL API" },
  { icon: "📦", label: "Shopify App Bridge" },
  { icon: "🎨", label: "Shopify Polaris UI" },
  { icon: "🔌", label: "Shopify Webhooks" },
  { icon: "🛒", label: "Shopify REST Admin API" },
  { icon: "💳", label: "Shopify Payments" },
];

const row3 = [
  { icon: "🟢", label: "Node.js" },
  { icon: "🚀", label: "Prisma ORM" },
  { icon: "🐘", label: "PostgreSQL" },
  { icon: "⚡", label: "Redis Cache" },
  { icon: "🌐", label: "GraphQL" },
  { icon: "🔐", label: "NextAuth.js" },
  { icon: "📬", label: "Zod Validation" },
  { icon: "🔺", label: "Vercel Edge" },
];

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-4 w-max ${reverse ? "animate-[marquee_25s_linear_infinite_reverse]" : "animate-[marquee_25s_linear_infinite]"}`}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-3 border border-[var(--border)] bg-[var(--surface)] whitespace-nowrap text-sm group hover:border-[var(--blue)] hover:text-[var(--blue)] transition-colors duration-300 rounded-sm flex-shrink-0"
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStackSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="techstack" className="py-32 bg-[var(--bg2)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-16 mb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[0.65rem] tracking-[0.4em] uppercase text-[var(--blue)] block mb-3">
            // Our Arsenal
          </span>
          <h2
            className="font-syne font-extrabold tracking-tight"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.05 }}
          >
            Technology{" "}
            <em className="not-italic text-gradient-blue-violet">Stack</em>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
        <MarqueeRow items={row3} />
      </div>
    </section>
  );
}
