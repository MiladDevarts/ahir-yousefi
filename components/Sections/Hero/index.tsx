"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import Aos from "aos";
import "aos/dist/aos.css";

import Spotidy from "../Icons/White/Spotify";
import Soundcloud from "../Icons/White/Soundcloud";
import AppleMusic from "../Icons/White/AppleMusic";
import Youtube from "../Icons/White/Youtube";
import Telegram from "../Icons/White/Telegram";

import { socialMedia, GenralInfo } from "@/app/config";

const Hero = () => {
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
    <section className="container h-screen flex flex-col justify-between">
      <div className="flex items-center gap-x-5 mt-10 lg:mt-0">
        <span className="rounded-2xl py-4 px-8 text-lg bg-white text-black font-semibold italic">
          New release
        </span>
        <span className="text-white font-semibold">
          {GenralInfo.new_release}
        </span>
      </div>

      <div className="flex gap-x-2 justify-end mt-10">
        <Link
          data-aos="zoom-out"
          data-aos-delay="100"
          href={socialMedia.spotify}
          className="flex justify-center items-center w-20 h-20 bg-[#545454]/10 backdrop-blur-lg rounded-full"
        >
          <Spotidy />
        </Link>
        <Link
          data-aos="zoom-out"
          data-aos-delay="200"
          href={socialMedia.sound_cloud}
          className="flex justify-center items-center w-20 h-20 bg-[#545454]/10 backdrop-blur-lg rounded-full"
        >
          <Soundcloud />
        </Link>
        <Link
          data-aos="zoom-out"
          data-aos-delay="300"
          href={socialMedia.apple_music}
          className="flex justify-center items-center w-20 h-20 bg-[#545454]/10 backdrop-blur-lg rounded-full"
        >
          <AppleMusic />
        </Link>
        <Link
          data-aos="zoom-out"
          data-aos-delay="400"
          href={socialMedia.youtube}
          className="flex justify-center items-center w-20 h-20 bg-[#545454]/10 backdrop-blur-lg rounded-full"
        >
          <Youtube />
        </Link>
        <Link
          data-aos="zoom-out"
          data-aos-delay="500"
          href={socialMedia.telegram}
          className="flex justify-center items-center w-20 h-20 bg-[#545454]/10 backdrop-blur-lg rounded-full"
        >
          <Telegram />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
