import React, { useEffect } from "react";
import Link from "next/link";

import Aos from "aos";
import "aos/dist/aos.css";
import {
  AppleMusic,
  Play,
  Soundcloud,
  Spotify,
  Telegram,
  Youtube,
} from "@ui/Icons";
import Image from "next/image";

import ImgFarsi from "@public/images/album/farsi.png";
import { socialMedia } from "@/config";

const Album = () => {
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
      <section
        id="new_album"
        data-aos="fade-up"
        className="flex flex-col justify-between w-full min-h-[660px] mt-16 mb-20 lg:my-40 bg-no-repeat bg-cover bg-center pb-11 overflow-hidden"
        style={{ backgroundImage: `url('/images/home/album.jpg')` }}
      >
        <div className="container">
          <div className="relative">
            <div className="flex whitespace-nowrap items-center gap-4 absolute top-0 left-0 lg:left-auto -translate-x-[4.5rem] lg:right-0 lg:translate-x-20 -rotate-90 translate-y-[4.5rem] lg:translate-y-[5.5rem]">
              <p className="text-sm font-light lg:font-semibold lg:text-xl">
                Coming Soon
              </p>
              <div className="h-px w-[60px] min-w-[60px] bg-white"></div>
            </div>
          </div>
        </div>

        <div className="container flex flex-col-reverse lg:grid grid-cols-12 relative mt-auto gap-[4.5rem] lg:gap-0">
          <div
            data-aos="slide-right"
            data-aos-delay="100"
            className="lg:col-span-6 col-span-full"
          >
            <Image src={ImgFarsi} alt="" quality={100} />
            <p className="font-sans text-[#989898] mt-5 lg:mt-7 text-xs lg:text-base">
              New album
            </p>
            <h4 className="text-[1.5rem] lg:text-[32px] font-bold mt-3 lg:mt-6">
              MY SUN ALBUM
            </h4>
            <div className="text-[#CBCBCB] font-light text-[14px] mt-3 space-y-6">
              <p>
                The album "My Sun" is one of the standout works by Pooriya
                Ariyan (P91), featuring seven tracks.
              </p>
              <p>
                The production of this album began in 2018 and combines elements
                of rock and electronic fusion.
              </p>
              <p>
                Pooriya collaborated with renowned artists such as Amiox, Adel
                Rouhnavaz, Kian Darat, Hedras Ramos, and Hassan Baba on this
                project. The album is expected to be released in 2025 or 2026.
              </p>
              <p>
                "My Sun" not only reflects Pooriya's musical versatility but
                also highlights his creativity and artistic synergy in working
                with talented collaborators to deliver a distinctive and
                memorable musical experience.
              </p>
            </div>
            <div className="text-white text-xl font-times flex gap-4 mt-5">
              <p>7 songs</p>
              <p>3o minutes</p>
            </div>
          </div>

          <div className="col-span-full lg:col-span-4 lg:col-start-9 flex items-end justify-end">
            <div className="flex justify-end items-end pt-8 lg:pt-0">
              <div className="flex flex-col items-end justify-end">
                <div className="flex items-center">
                  <div className="scale-75">
                    <Play />
                  </div>
                  <div className="-ml-12 lg:-ml-6">
                    <div className="bg-black/10 backdrop-blur-2xl rounded-full w-28 lg:w-40 h-28 lg:h-40 p-5 lg:p-6">
                      <div className="bg-white/5 flex items-center justify-center h-full w-full rounded-full ">
                        <div className="scale-150 lg:scale-[2.5]">
                          <Spotify color="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-7 mt-6">
                  <div className="flex gap-3 items-center">
                    <p className="text-white text-base font-semibold">Or</p>
                    <div className="h-px w-9 bg-white"></div>
                  </div>
                  <div>
                    <div className="flex gap-8">
                      <Link href={socialMedia.sound_cloud}>
                        <Soundcloud color="white" />
                      </Link>
                      <Link href={socialMedia.apple_music}>
                        <AppleMusic color="white" />
                      </Link>
                      <Link href={socialMedia.youtube}>
                        <Youtube color="white" />
                      </Link>
                      <Link href={socialMedia.telegram}>
                        <Telegram color="white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Album;
