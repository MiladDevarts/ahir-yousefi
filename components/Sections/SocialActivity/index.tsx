import React from "react";
import Image from "next/image";
import { Instagram } from "@components/UI/Icons";
import Button from "@components/Common/Button";
import { socialMedia } from "@/config";

const SocialActivity = () => {
  return (
    <section className="w-full bg-black py-10 my-12 lg:my-44">
      <div className="container flex flex-col lg:flex-row lg:items-center lg:gap-x-[4.5rem] gap-y-6">
        <div className="flex items-center flex-none gap-x-6 lg:gap-x-10">
          <Image
            src={"/images/social-activity/profile.png"}
            className="w-32 lg:w-72 lg:h-w-72 rounded-3xl"
            width={400}
            height={400}
            alt="P91"
          />
          <div className="flex flex-col  text-white">
            <h3 className="text-[32px] font-bold">Follow ME</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1">
                <Instagram />
                <span className="italic">iNSTAGRAM</span>
              </div>
              <Button href={socialMedia.instagram} className="h-9">
                Follow
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:grow">
          <p className="text-[#7A7A7A] text-lg">
            He uses music as a tool to cultivate his artistic mindset and
            creativity. According to <b className="font-bold">Pooriya</b>, music
            not only enhances his innovative perspective in other professional
            fields but also serves as a source of inspiration for his personal
            and professional growth.
            <br />
            <br />
            Today, <b className="font-bold">Pooriya Ariyan</b> is renowned as a
            songwriter, composer, musician, and accomplished singer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialActivity;
