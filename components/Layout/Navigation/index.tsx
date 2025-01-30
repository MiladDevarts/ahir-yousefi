"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import Logo from "../Logo";
import {
  Facebook,
  Instagram,
  Telegram,
  TikTok,
  Twitter,
  Youtube,
} from "@ui/Icons";

import Aos from "aos";
import "aos/dist/aos.css";

import { socialMedia, NavigationItems } from "@/config";
import { useMenu } from "@/hooks/useMenu";
import { MobileMenu } from "@components/Common/Menu/MobileMenu";
import { MenuBtn } from "@components/Common/Menu/MenuBtn";

const Navigation = () => {
  const { toggle, state } = useMenu();

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
    <>
      <MobileMenu />
      <nav
        data-aos="fade-down"
        className="container flex justify-between items-center lg:items-start py-6 lg:py-12 overflow-hidden z-[120]"
      >
        <Logo />
        <span onClick={toggle} className="inline-flex lg:hidden">
          <MenuBtn />
        </span>
        <div className="hidden lg:flex gap-x-6">
          <div className="flex flex-col gap-3 relative">
            <div className="absolute h-px w-3 top-3 -left-4 bg-whites -translate-x-full"></div>
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

          <div className="flex gap-4">
            <Link href={socialMedia.youtube} target="_blank">
              <Youtube color="white" />
            </Link>
            <Link href={socialMedia.telegram} target="_blank">
              <Telegram color="white" />
            </Link>
            <Link href={socialMedia.instagram} target="_blank">
              <Instagram color="white" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
