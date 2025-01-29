import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import SmoothScrollProvider from "@components/Providers/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const azonix = localFont({
  src: [
    {
      path: "../public/fonts/Azonix.otf",
      weight: "400",
    },
  ],
  variable: "--font-azonix",
});

export const metadata: Metadata = {
  title: "P91 — Poorya Arian",
  description: "Singer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${azonix.variable} ${inter.variable}`}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
