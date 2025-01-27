"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import Aos from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

const Partners = () => {
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
    <section className="container my-28">
      <h3 className="text-center text-4xl font-mono mb-10">My Brands</h3>
      <div className="rounded-[30px] flex py-28 justify-center items-center w-full h-full border border-[#313131] bg-gradient-to-t from-[#191919] to-[#111111]">
        <div className=" flex flex-col items-center gap-y-10 lg:flex-row lg:gap-x-20">
          <Link
            href="https://rivdesign.se"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <Image
              src={"/images/partners/riv.png"}
              className="w-36"
              alt="Ahir Yousefi"
              width={100}
              height={100}
            />
          </Link>
          <Link
            href={"https://www.wps.community"}
            data-aos="zoom-out"
            data-aos-delay="300"
          >
            <Image
              src={"/images/partners/wps.png"}
              className="w-52"
              alt="Ahir Yousefi"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
