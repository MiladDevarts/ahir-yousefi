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
}

const brands: BrandItem[] = [
  {
    name: "White Phoenix Sweden",
    url: "https://www.wps.community",
    imageUrl: "/images/brands/wps.png",
    width: 208, // w-52
    delay: 300,
  },
  {
    name: "Riv",
    url: "https://rivdesign.se",
    imageUrl: "/images/brands/riv.png",
    width: 144, // w-36
    delay: 200,
  },
  {
    name: "Kasiyans",
    url: "https://www.wps.community",
    imageUrl: "/images/brands/casiyans.png",
    width: 180, // w-52
    delay: 300,
  },
];

const BrandLink = ({ brand }: { brand: BrandItem }) => (
  <Link
    href={brand.url}
    data-aos="zoom-out"
    data-aos-delay={brand.delay}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src={brand.imageUrl}
      alt={brand.name}
      width={brand.width}
      height={brand.width}
      priority
    />
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
    <section id="brands" className="container mb-28 overflow-hidden">
      <div className="rounded-b-[30px] flex flex-col py-28  items-center w-full h-full  bg-gradient-to-t from-[#191919] to-[#111111]">
        <h2 className="text-center text-2xl font-display font-bold mb-10">
          My Brands
        </h2>
        <div className="flex flex-col items-center gap-y-10 lg:flex-row lg:gap-x-20">
          {brands.map((brand) => (
            <BrandLink key={brand.url} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
