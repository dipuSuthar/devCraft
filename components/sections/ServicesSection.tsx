"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    num: "01",
    icon: "⚛️",
    title: "Custom Website Creation",
    desc: "Lightning-fast Next.js/React applications with SSR, ISR, and edge functions. Built for performance, built to convert.",
    tags: ["Next.js 15", "React", "TypeScript", "Tailwind"],
  },
  {
    num: "02",
    icon: "🛍️",
    title: "Shopify Development",
    desc: "Custom apps, private apps, and Hydrogen storefronts. From simple tweaks to complete platform overhauls that drive revenue.",
    tags: ["Shopify API", "Hydrogen", "Liquid", "GraphQL"],
  },
  {
    num: "03",
    icon: "🎨",
    title: "UI/UX Transformation",
    desc: "We take ugly stores and make them iconic. Theme customization that elevates brand identity and maximizes conversions.",
    tags: ["Figma", "Framer", "GSAP", "Three.js"],
  },
  {
    num: "04",
    icon: "🔗",
    title: "Complex API Integrations",
    desc: "ERP, CRM, payment gateways, logistics, and custom data pipelines. We make your systems talk to each other flawlessly.",
    tags: ["Stripe", "SAP", "Salesforce", "REST/GraphQL"],
  },
  {
    num: "05",
    icon: "🌐",
    title: "E-commerce Ecosystems",
    desc: "Full-scale, multi-currency, multi-language commerce platforms built for enterprise traffic and complex product catalogs.",
    tags: ["Headless CMS", "Sanity", "Redis", "Vercel"],
  },
  {
    num: "06",
    icon: "🛡️",
    title: "Maintenance & Support",
    desc: "24/7 monitoring, proactive updates, performance optimization, and security hardening. Your long-term tech partner.",
    tags: ["Monitoring", "CI/CD", "Security", "SLA"],
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 bg-[var(--bg2)]">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[0.65rem] tracking-[0.4em] uppercase text-[var(--blue)] block mb-3">
            // What We Do
          </span>
          <h2
            className="font-syne font-extrabold tracking-tight"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.05 }}
          >
            Cutting-Edge{" "}
            <em className="not-italic text-gradient-blue-violet">
              Web Solutions
            </em>
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "1.5px", background: "var(--border)", border: "1px solid var(--border)" }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              className="bg-[var(--bg2)] p-10 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Hover bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,212,255,0.05)] to-[rgba(124,58,237,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {/* Hover border glow */}
              <div className="absolute inset-0 border border-[rgba(0,212,255,0)] group-hover:border-[rgba(0,212,255,0.2)] transition-colors duration-300" />

              <span className="text-[0.65rem] text-[var(--blue)] tracking-[0.3em] block mb-6">
                {s.num}
              </span>
              <span className="text-3xl block mb-5 transition-transform duration-400 group-hover:scale-110 group-hover:-rotate-3 w-fit">
                {s.icon}
              </span>
              <h3 className="font-syne font-bold text-lg tracking-tight mb-3">
                {s.title}
              </h3>
              <p className="text-[var(--muted)] text-[0.8rem] leading-relaxed">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.65rem] px-2 py-1 border border-[var(--border)] text-[var(--muted)] rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="absolute bottom-6 right-6 text-[var(--blue)] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0">
                ↗
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
