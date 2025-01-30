"use client";

import { NavigationItems } from "@/config";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const Menu = () => {
  return (
    <div className="h-[42px] rounded-full border border-[#232323] p-[3px] md:hidden">
      <div className="flex h-full gap-2">
        {NavigationItems.map((nav) => (
          <Link
            key={nav.title + nav.target}
            href={nav.target}
            onClick={(e) => {
              const section = document.querySelector(
                `#${nav.target}`
              ) as HTMLElement;
              if (section && window.lenis) {
                e.preventDefault();
                window.lenis.scrollTo(section, {
                  offset: -80,
                });
              }
            }}
            className={twMerge(
              "flex h-full items-center justify-center rounded-full px-4"
            )}
          >
            {nav.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
