import { AppleMusic, Soundcloud, Spotify, Telegram, Youtube } from "@ui/Icons";
import Link from "next/link";

import { socialMedia } from "@/config";

const Footer = () => {
  return (
    <>
      <footer className="hidden lg:flex w-full bg-white text-black min-h-[100px]">
        <div className="container my-4 flex flex-col lg:flex-row items-center lg: justify-between gap-y-10">
          <div className="flex items-center gap-x-7">
            <Link href={socialMedia.spotify}>
              <Spotify />
            </Link>
            <Link href={socialMedia.sound_cloud}>
              <Soundcloud />
            </Link>
            <Link href={socialMedia.apple_music}>
              <AppleMusic />
            </Link>
            <Link href={socialMedia.youtube}>
              <Youtube />
            </Link>
            <Link href={socialMedia.telegram}>
              <Telegram />
            </Link>
          </div>

          <div>
            <span className="font-medium">
              © 2025, <Link href={"https://rivdesign.se"}>Riv Design</Link> All
              Rights Reserved
            </span>
          </div>
        </div>
      </footer>
      <footer className="flex lg:hidden w-full bg-white text-black min-h-[100px]">
        <div className="container my-4 flex flex-col lg:flex-row items-center lg: justify-between gap-y-10">
          <div className="flex items-center gap-x-7">
            <Link href={socialMedia.spotify}>
              <Spotify />
            </Link>
            <Link href={socialMedia.sound_cloud}>
              <Soundcloud />
            </Link>
            <Link href={socialMedia.apple_music}>
              <AppleMusic />
            </Link>
            <Link href={socialMedia.youtube}>
              <Youtube />
            </Link>
            <Link href={socialMedia.telegram}>
              <Telegram />
            </Link>
          </div>
          <div>
            <Link href={"mailto:inf0@p91.bio"} className="font-medium text-lg">
              inf0@p91.bio
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
