"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#techstack" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 md:px-16 py-5 border-b border-[var(--border)] transition-all duration-300"
      style={{
        backdropFilter: "blur(20px)",
        background: scrolled ? "rgba(5,5,8,0.92)" : "rgba(5,5,8,0.6)",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link href="/" className="font-syne font-extrabold text-xl tracking-tight text-white">
        Dev<span className="text-[var(--blue)]">Craft</span>
      </Link>

      {/* Desktop */}
      <ul className="hidden md:flex items-center gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="relative text-[var(--muted)] text-xs uppercase tracking-widest hover:text-[var(--blue)] transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--blue)] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="#cta"
            className="px-5 py-2 border border-[var(--blue)] text-[var(--blue)] text-xs uppercase tracking-widest rounded-sm hover:bg-[var(--blue)] hover:text-[var(--bg)] transition-all duration-300"
          >
            Start Project
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-px bg-[var(--text)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
        <span className={`block w-6 h-px bg-[var(--text)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-px bg-[var(--text)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-[var(--surface)] border-b border-[var(--border)] p-6 flex flex-col gap-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[var(--muted)] text-sm uppercase tracking-widest hover:text-[var(--blue)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#cta"
            className="mt-2 px-5 py-2 border border-[var(--blue)] text-[var(--blue)] text-xs uppercase tracking-widest text-center rounded-sm"
            onClick={() => setMenuOpen(false)}
          >
            Start Project
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
