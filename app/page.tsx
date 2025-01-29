"use client";

import { useContext } from "react";

import Biography from "@/components/Bioghraphy";
import Footer from "@/components/Layout/Footer";
import Gallery from "@/components/Sections/Gallery";
import Header from "@/components/Layout/Header";
import NewTracks from "@/components/Sections/Tracks";
import Partners from "@/components/Sections/Brands";
import SocialActivity from "@/components/Sections/SocialActivity";
import Contact from "@/components/Sections/Contact";
import LatestMusicVideo from "@/components/Sections/MusicVideo";
import MusicPlayer from "@/components/Sections/MusicPlayer";
import LatestAlbum from "@/components/Sections/Album";

export default function Home() {
  return (
    <main>
      <Header />
      <Biography />
      <LatestAlbum />
      <NewTracks />
      <SocialActivity />
      <MusicPlayer />
      <Gallery />
      <LatestMusicVideo />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
