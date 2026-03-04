import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";
import Navbar from "@/components/ui/Navbar";
import LenisProvider from "@/components/ui/LenisProvider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevCraft — Web & Shopify Solutions",
  description:
    "Premium Next.js websites, Shopify applications, API integrations and full-scale e-commerce ecosystems that scale.",
  keywords: [
    "Next.js developer",
    "Shopify development",
    "React developer",
    "E-commerce",
    "API integration",
    "Web development",
  ],
  openGraph: {
    title: "DevCraft — Web & Shopify Solutions",
    description: "We build digital empires. Premium web & Shopify development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`}>
      <body className="bg-bg text-text font-mono overflow-x-hidden">
        <LenisProvider>
          <PageLoader />
          <CustomCursor />
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
