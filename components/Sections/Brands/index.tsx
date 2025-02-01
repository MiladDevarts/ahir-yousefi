"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

interface BrandItem {
  name: string;
  url: string;
  imageUrl: string;
  width: number;
  delay: number;
  className?: string;
}

const brands: BrandItem[] = [
  {
    name: "White Phoenix Sweden",
    url: "https://www.wps.community",
    imageUrl: "/images/brands/wps.png",
    width: 208,
    delay: 300,
    className: "-mt-6",
  },
  {
    name: "Riv",
    url: "https://rivdesign.se",
    imageUrl: "/images/brands/riv.png",
    width: 144,
    delay: 200,
  },
  {
    name: "Kasiyans",
    url: "https://www.wps.community",
    imageUrl: "/images/brands/casiyans.png",
    width: 180,
    delay: 300,
  },
];

const BrandLink = ({ brand }: { brand: BrandItem }) => (
  <Link
    href={brand.url}
    className={`flex-shrink-0 ${brand.className || ""}`}
    data-aos="zoom-out"
    data-aos-delay={brand.delay}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="px-4">
      <Image
        src={brand.imageUrl}
        alt={brand.name}
        width={brand.width}
        height={brand.width}
        priority
      />
    </div>
  </Link>
);

const Brands = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 200,
    });
  }, []);

  return (
    <section id="brands" className="container mb-28 overflow-visible">
      <div className="rounded-b-[30px] flex flex-col py-28 items-center w-full h-full bg-gradient-to-t from-[#191919] to-[#111111]">
        <h2 className="text-center text-2xl font-display font-bold mb-10">
          My Brands
        </h2>
        {/* Mobile Slider */}
        <div className="w-full lg:hidden overflow-hidden">
          <div className="infinite-scroll-container py-4">
            <div className="infinite-scroll-content">
              {brands.map((brand) => (
                <BrandLink key={brand.url} brand={brand} />
              ))}
              {brands.map((brand) => (
                <BrandLink key={`${brand.url}-clone`} brand={brand} />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Static Layout */}
        <div className="hidden lg:flex lg:flex-row lg:gap-x-20 py-4">
          {brands.map((brand) => (
            <BrandLink key={brand.url} brand={brand} />
          ))}
        </div>
      </div>
      <style jsx global>{`
        .infinite-scroll-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .infinite-scroll-content {
          display: flex;
          animation: infiniteScroll 15s linear infinite;
          width: max-content;
        }

        @keyframes infiniteScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;
