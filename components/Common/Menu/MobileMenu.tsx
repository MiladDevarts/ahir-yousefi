"use client";

import { useMenu } from "@/hooks/useMenu";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import ImgMenuBg from "@public/images/home/menu-bg.png";
import { isMobile } from "../../../Utils/browser.utils";
import { NavigationItems } from "@/config";
import { motion } from "motion/react";

export const MobileMenu = () => {
  const { close, state } = useMenu();

  const [height, setHeight] = useState<number | null>(null);

  const setMenuHeight = useCallback(() => {
    if (!CSS.supports("height:100dvh") && isMobile()) {
      setHeight(window.innerHeight - (window.outerHeight - window.innerHeight));
    }
  }, []);

  useEffect(() => {
    setMenuHeight();

    window.addEventListener("scroll", setMenuHeight);
    window.addEventListener("resize", setMenuHeight);

    return () => {
      window.removeEventListener("scroll", setMenuHeight);
      window.removeEventListener("resize", setMenuHeight);
    };
  }, [setMenuHeight]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`absolute left-0 top-0 z-[100] w-full bg-[#060606] px-4 py-7 duration-500 ease-in-out [transition-property:clip-path] ${
        height === null ? "h-dvh" : ""
      } ${
        state === "closed"
          ? "[clip-path:circle(0px_at_calc(100%-36px)_54px)]"
          : "[clip-path:circle(120vh_at_calc(100%-36px)_54px)]"
      }`}
      style={{ ...(height && { height }) }}
    >
      <Image
        src={ImgMenuBg}
        alt=""
        className="pointer-events-none absolute left-0 top-0 w-full select-none object-contain object-left-top"
      />

      <div className="z-1 translate-x-0">
        <div className="mt-[7.25rem] px-8">
          <span className="text-sm font-500 text-[#5D5D5D]">Menu</span>

          <ul className="mt-4 space-y-4 text-[2rem] font-500 text-white/40">
            {NavigationItems.map((nav) => (
              <li
                key={nav.target + nav.title}
                className="cursor-pointer first:text-white"
              >
                <Link
                  href={nav.target}
                  onClick={() => {
                    document.body.classList.remove("overflow-hidden");
                    close();
                  }}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
