"use client";

import Image from "next/image";

import React, { useEffect } from "react";
import Link from "next/link";

import Aos from "aos";
import "aos/dist/aos.css";

import Spotidy from "@ui/Icons/Spotify";
import Soundcloud from "@ui/Icons/Soundcloud";
import AppleMusic from "@ui/Icons/AppleMusic";
import Youtube from "@ui/Icons/Youtube";
import Telegram from "@ui/Icons/Telegram";

import { socialMedia, GenralInfo } from "@/config";

import Typo from "@public/images/header/p91-typo.png";

import BlackPlay from "@public/images/header/black-play.png";

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
    <section className="container h-full flex flex-col justify-between lg:justify-normal">
      <div className="flex items-center gap-x-5 mt-10 lg:mt-0">
        <Link href={"#music_player"} className="rounded-lg lg:rounded-2xl py-2 lg:py-4 px-4 lg:px-8 lg:text-lg bg-white text-black font-semibold italic">
          New Release
        </Link>
        <span className="text-white font-semibold">
          {GenralInfo.new_release}
        </span>
      </div>

      <div className="hidden lg:flex gap-14 items-center lg:mt-auto lg:mb-12">
        <Link href={"#music_player"} className="flex flex-col text-whit leading-1">
          <span className="">Listen</span>
          <span className="text-[20px] -mt-2">Now</span>
        </Link>
        <Link href={"#music_video"}>
          <Image src={BlackPlay} width={80} alt={""} />
        </Link>
      </div>

      <div className="flex gap-4 lg:flex-row flex-col items-end justify-end lg:items-center">
        <Image src={Typo} alt="p91" className="" width={100} />
        <div className="flex gap-3 justify-end items-center mt-10 overflow-hidden">
          <Link
            data-aos="zoom-out"
            data-aos-delay="100"
            target="_blank"
            href={socialMedia.spotify}
            className="flex justify-center items-center w-16 h-16 bg-[#545454]/10 backdrop-blur-lg rounded-full"
          >
            <Spotidy color="white" />
          </Link>
          <Link
            data-aos="zoom-out"
            data-aos-delay="200"
            target="_blank"
            href={socialMedia.sound_cloud}
            className="flex justify-center items-center w-16 h-16 bg-[#545454]/10 backdrop-blur-lg rounded-full"
          >
            <Soundcloud color="white" />
          </Link>
          <Link
            data-aos="zoom-out"
            data-aos-delay="300"
            target="_blank"
            href={socialMedia.apple_music}
            className="flex justify-center items-center w-16 h-16 bg-[#545454]/10 backdrop-blur-lg rounded-full"
          >
            <AppleMusic color="white" />
          </Link>
          <Link
            data-aos="zoom-out"
            data-aos-delay="400"
            target="_blank"
            href={socialMedia.youtube}
            className="flex justify-center items-center w-16 h-16 bg-[#545454]/10 backdrop-blur-lg rounded-full"
          >
            <Youtube color="white" />
          </Link>
          <Link
            data-aos="zoom-out"
            data-aos-delay="500"
            target="_blank"
            href={socialMedia.telegram}
            className="flex justify-center items-center w-16 h-16 bg-[#545454]/10 backdrop-blur-lg rounded-full"
          >
            <Telegram color="white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
