import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050508",
        bg2: "#08080f",
        surface: "#0d0d1a",
        blue: "#00d4ff",
        violet: "#7c3aed",
        pink: "#ff2d8b",
        muted: "#6b7280",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards",
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marquee 25s linear infinite reverse",
        "scroll-line": "scrollLine 2s ease infinite",
        "gradient-shift": "gradientShift 4s ease infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        scrollLine: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top", opacity: "1" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top", opacity: "1" },
          "100%": { transform: "scaleY(1)", transformOrigin: "bottom", opacity: "0" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundSize: {
        "200": "200% 200%",
      },
    },
  },
  plugins: [],
};

export default config;
