"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 120, label: "Projects Delivered", suffix: "+" },
  { num: 98, label: "% Client Satisfaction", suffix: "%" },
  { num: 5, label: "Years Experience", suffix: "+" },
  { num: 40, label: "Shopify Apps Built", suffix: "+" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const inc = target / 60;
          const timer = setInterval(() => {
            current += inc;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setCount(Math.floor(current));
          }, 25);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <div className="border-t border-b border-[var(--border)] bg-[var(--surface)] py-8 px-6 md:px-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto">
        {stats.map((s) => (
          <div key={s.label}>
            <div
              className="font-syne font-extrabold text-gradient-blue-violet"
              style={{ fontSize: "clamp(2rem,4vw,2.8rem)" }}
            >
              <AnimatedCounter target={s.num} suffix={s.suffix} />
            </div>
            <div className="text-[var(--muted)] text-[0.7rem] uppercase tracking-widest mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
