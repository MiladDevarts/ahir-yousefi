import type { Metadata } from "next";
import "./globals.css";

import { Inter, Vazirmatn } from "next/font/google";

import SmoothScrollProvider from "@components/Providers/SmoothScrollProvider";

// Display
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

// Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "P91 — Poorya Arian",
  description: "Singer...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${vazirmatn.variable} ${inter.variable}`}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
