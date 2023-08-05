"use client"

import { useContext } from "react";

import Biography from "@/components/Bioghraphy";
import Footer from "@/components/Layout/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Layout/Header";
import NewTracks from "@/components/NewTracks";
import Partners from "@/components/Partners";
import SocialActivity from "@/components/SocialActivity";
import Contatc from "@/components/Contact";
import Composer from "@/components/Composer";
import LatestMusicVideo from "@/components/LatetsMusicVideo";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {


  return (
    <main>
      <Header />
      <Biography />
      <NewTracks />
      <SocialActivity />
      <MusicPlayer />
      <Gallery />
      <LatestMusicVideo />
      <Composer />
      <Partners />
      <Contatc />
      <Footer />
    </main>
  )
}
