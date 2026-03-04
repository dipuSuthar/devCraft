"use client";

import { useRef, MouseEvent } from "react";
import Link from "next/link";
import { clsx } from "clsx";

interface MagneticButtonProps {
  href: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export default function MagneticButton({
  href,
  variant = "primary",
  children,
  className,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const onMouseMove = (e: MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
  };

  const onMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = "";
  };

  return (
    <Link
      ref={btnRef}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={clsx(
        "relative inline-flex items-center gap-2 px-8 py-4 font-syne font-bold text-sm uppercase tracking-widest rounded-sm overflow-hidden transition-all duration-200",
        variant === "primary" && [
          "text-white",
          "bg-gradient-to-br from-[var(--blue)] to-[var(--violet)]",
          "shadow-[0_0_30px_rgba(0,212,255,0.3),0_0_60px_rgba(124,58,237,0.2)]",
          "before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--violet)] before:to-[var(--pink)] before:opacity-0 before:transition-opacity before:duration-400 hover:before:opacity-100",
        ],
        variant === "outline" && [
          "text-[var(--text)] border border-white/15 bg-white/5",
          "backdrop-blur-sm hover:border-[var(--blue)] hover:text-[var(--blue)]",
        ],
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  );
}
