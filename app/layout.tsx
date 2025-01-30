import type { Metadata } from "next";
import "./globals.css";

import { Gupter, Inter, Vazirmatn } from "next/font/google";

import SmoothScrollProvider from "@components/Providers/SmoothScrollProvider";
import MenuContextProvider from "../Context/Menu";

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

// Gupter
const gupter = Gupter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-times",
});

export const metadata: Metadata = {
  title: "P91 — Poorya Arian",
  description: "Singer...",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${vazirmatn.variable} ${inter.variable} ${gupter.variable}`}
    >
      <body>
        <SmoothScrollProvider>
          <MenuContextProvider>{children}</MenuContextProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
