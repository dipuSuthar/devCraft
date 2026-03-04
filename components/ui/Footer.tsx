import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#cta" },
];

const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter/X", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 md:px-16 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 flex-wrap">
        <div>
          <div className="font-syne font-extrabold text-xl tracking-tight">
            Dev<span className="text-[var(--blue)]">Craft</span>
          </div>
          <p className="text-[var(--muted)] text-[0.72rem] mt-1">
            Premium Web & Shopify Solutions
          </p>
        </div>

        <ul className="flex flex-wrap gap-6 list-none">
          {footerLinks.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-[var(--muted)] text-[0.75rem] uppercase tracking-widest hover:text-[var(--blue)] transition-colors duration-300"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex gap-5 list-none">
          {socials.map((s) => (
            <li key={s.label}>
              <Link
                href={s.href}
                className="text-[var(--muted)] text-[0.75rem] hover:text-[var(--blue)] transition-colors duration-300"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-[var(--muted)] text-[0.72rem] w-full md:w-auto mt-4 md:mt-0">
          © {new Date().getFullYear()} DevCraft — All rights reserved
        </div>
      </div>
    </footer>
  );
}
