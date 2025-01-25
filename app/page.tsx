"use client";

import { useContext } from "react";

import Biography from "@/components/Bioghraphy";
import Footer from "@/components/Layout/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Layout/Header";
import NewTracks from "@/components/NewTracks";
import Partners from "@/components/Partners";
import SocialActivity from "@/components/SocialActivity";
import Contact from "@/components/Contact";
import Composer from "@/components/Composer";
import LatestMusicVideo from "@/components/LatetsMusicVideo";
import MusicPlayer from "@/components/MusicPlayer";
import LatestAlbum from "@/components/LatestAlbum";

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
      <Composer />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
