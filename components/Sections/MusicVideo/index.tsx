import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { video } from "@/config";

const MusicVideo = () => {
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
    <section id="music_video" className="w-full bg-[#1D1D1D]">
      <div className="container flex justify-between pt-6 mb-4 mt-2 lg:mt-16">
        <div className="flex flex-col mt-6">
          <h5 className="flex items-center gap-x-3 text-[#505050] text-base lg:text-lg">
            <svg
              width="26"
              height="1"
              viewBox="0 0 26 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="26" y2="0.5" stroke="#868686" />
            </svg>
            Watch New Music video directly here
          </h5>
          <h2 className="font-display font-bold text-[32px] my-3 pl-10">
            Labkhand
          </h2>
        </div>
      </div>
      <Link href={video.youtube}>
        <div className="container">
          <div className="w-full overflow-hidden">
            <div
              className="relative w-full aspect-video rounded-t-[32px] min-h-[100px] lg:min-h-[500px] "
              style={{
                backgroundImage: `url('/images/thumbnails/video/1.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {/* Optional overlay or play button can go here */}
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default MusicVideo;
