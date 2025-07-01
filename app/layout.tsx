import type { Metadata } from "next";
import "./globals.css";
import { Gupter, Inter, Vazirmatn } from "next/font/google";
import SmoothScrollProvider from "@components/Providers/SmoothScrollProvider";
import MenuContextProvider from "../Context/Menu";

// Font configurations
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const gupter = Gupter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-times",
});

export const metadata: Metadata = {
  title: "P91 — Poorya Ariyan",
  description: "Singer, Songwriter, and Musician - Official Website",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },

  openGraph: {
    title: "P91 — Poorya Ariyan",
    description: "Singer, Songwriter, and Musician - Official Website",
    url: "https://p91.bio",
    siteName: "P91 Official",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "P91 - Poorya Ariyan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "P91 — Poorya Ariyan",
    description: "Singer, Songwriter, and Musician - Official Website",
    images: ["/og-image.jpg"],
  },

  keywords: ["P91", "Poorya Ariyan", "Singer", "Musician", "Music"],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#000000",
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
