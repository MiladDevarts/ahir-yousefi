"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import Aos from "aos";
import "aos/dist/aos.css";

import {
  Youtube,
  Instagram,
  Telegram,
  TikTok,
  Twitter,
  Soundcloud,
} from "@ui/Icons";

import { socialMedia } from "@/config";

const Biography = () => {
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
    <section
      id="bio"
      className="container mt-10 mb-16 lg:my-44 overflow-hidden"
    >
      <div className="flex flex-col lg:items-center lg:flex-row gap-y-4 lg:gap-x-16">
        <div className="lg:w-2/3 lg:order-2">
          <h2
            data-aos="zoom-out-right"
            data-aos-delay="400"
            className="text-white font-display font-bold text-3xl lg:text-[64px] mb-4 lg:mb-16 mt-6 lg:mt-12"
          >
            BIO
          </h2>
          <div
            data-aos="zoom-out-left"
            data-aos-delay="500"
            className="w-full lg:border-b-2 lg:border-[#313131]"
          >
            <p className="font-light text-[14px] mt-3 mb-4 lg:my-4 text-[#CBCBCB] lg:pb-10">
              Known internationally as{" "}
              <b className="font-bold">P91, Pooriya Ariyan</b> was born on
              <b className="font-bold"> April 11, 1991</b>, in Iran and is
              currently based in Sweden.
              <br />
              <br />
              He holds degrees in design, management, and development. Pooriya
              began his journey in music in 2018 and released his first official
              track in 2020.
              <br />
              <br />
              In addition to his music career, he is actively involved in
              several national platforms and key projects.
            </p>
          </div>
          <div className="hidden lg:flex gap-x-5 items-center my-8 lg:pl-6">
            <span>Follow on</span>
            <svg
              width="24"
              height="1"
              viewBox="0 0 24 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="24" y2="0.5" stroke="white" />
            </svg>
            <Link href={socialMedia.instagram} target="_blank">
              <Instagram />
            </Link>
            <Link href={socialMedia.youtube} target="_blank">
              <Youtube color="white" />
            </Link>
            <Link href={socialMedia.telegram} target="_blank">
              <Telegram color="white" />
            </Link>
            <Link href={socialMedia.sound_cloud} target="_blank">
              <Soundcloud color="white" />
            </Link>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          data-aos-delay="300"
          className="pt-6 pb-10 border-b border-[#313131] lg:p-0 lg:border-none"
        >
          <div
            className="w-full lg:w-[486px] h-[26rem] lg:h-[486px] bg-center bg-cover rounded-[30px]"
            style={{
              backgroundImage: `url('/images/biography/p91-bio-image.png')`,
            }}
          ></div>
        </div>
        <div className="flex lg:hidden gap-x-5 items-center my-8 lg:pl-6">
          <span>Follow on</span>
          <svg
            width="24"
            height="1"
            viewBox="0 0 24 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="24" y2="0.5" stroke="white" />
          </svg>
          <Link href={socialMedia.instagram} target="_blank">
            <Instagram />
          </Link>
          <Link href={socialMedia.youtube} target="_blank">
            <Youtube color="white" />
          </Link>
          <Link href={socialMedia.telegram} target="_blank">
            <Telegram color="white" />
          </Link>
          <Link href={socialMedia.sound_cloud} target="_blank">
            <Soundcloud color="white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Biography;
