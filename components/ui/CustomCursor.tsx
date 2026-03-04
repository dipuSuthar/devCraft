"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let rafId: number;

    // FIX 1: Dot moves INSTANTLY in mousemove (not RAF) — zero lag
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        // FIX 2: transform (GPU thread) instead of top/left (CPU layout)
        dotRef.current.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      }
    };

    // Ring has intentional smooth lerp for premium feel
    const animate = () => {
      // FIX 3: 0.18 lerp (was 0.12) = snappier follow
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => ringRef.current?.classList.add("hovering");
    const onLeave = () => ringRef.current?.classList.remove("hovering");

    document.documentElement.style.cursor = "none";
    document.addEventListener("mousemove", onMouseMove, { passive: true });

    const attachHover = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    attachHover();

    // Re-attach after hydration or DOM updates
    const mo = new MutationObserver(attachHover);
    mo.observe(document.body, { childList: true, subtree: true });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      mo.disconnect();
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-[6px] h-[6px] rounded-full bg-[var(--blue)]"
        style={{
          transform: "translate(-100px, -100px)",
          boxShadow: "0 0 8px var(--blue), 0 0 16px var(--blue)",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring fixed top-0 left-0 z-[9998] pointer-events-none w-8 h-8 rounded-full border border-[rgba(0,212,255,0.5)]"
        style={{
          transform: "translate(-100px, -100px)",
          willChange: "transform",
          transition: "width 0.3s ease, height 0.3s ease, background 0.3s ease, border-color 0.3s ease",
        }}
      />
      <style>{`
        .cursor-ring.hovering {
          width: 56px !important;
          height: 56px !important;
          background: rgba(0, 212, 255, 0.06);
          border-color: var(--blue) !important;
        }
      `}</style>
    </>
  );
}
