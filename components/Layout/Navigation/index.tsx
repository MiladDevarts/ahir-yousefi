"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import Logo from "../Logo";
import { Facebook, Instagram, TikTok, Twitter } from "@ui/Icons";

import Aos from "aos";
import "aos/dist/aos.css";

import { socialMedia, NavigationItems } from "@/config";

const Navigation = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 200,
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <nav
      data-aos="fade-down"
      className="container flex justify-between items-center lg:items-start py-6 lg:py-12 overflow-hidden"
    >
      <Logo />
      <span className="inline-flex lg:hidden">
        <svg
          width="38"
          height="9"
          viewBox="0 0 38 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 0H38V2H4V0ZM15.5 7H38V9H15.5V7Z" fill="white" />
        </svg>
      </span>
      <div className="hidden lg:flex gap-x-6">
        <div className="flex flex-col gap-3">
          {NavigationItems.map((item) => (
            <Link
              key={item.target}
              href={item.target}
              className="text-white hover:text-white/80 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-x-7">
          <Link href={socialMedia.instagram}>
            <Instagram />
          </Link>
          <Link href={socialMedia.tiktok}>
            <TikTok />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
