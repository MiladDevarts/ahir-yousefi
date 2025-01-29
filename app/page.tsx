"use client";

import Header from "@layout/Header";

import Biography from "@sections/Bioghraphy";
import Tracks from "@sections/Tracks";
import SocialActivity from "@sections/SocialActivity";
import Gallery from "@sections/Gallery";
import MusicPlayer from "@sections/MusicPlayer";
import Album from "@sections/Album";
import MusicVideo from "@sections/MusicVideo";
import Brands from "@sections/Brands";
import Contact from "@sections/Contact";

import Footer from "@layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Biography />
      <Album />
      <Tracks />
      <SocialActivity />
      <MusicPlayer />
      <Gallery />
      <MusicVideo />
      <Brands />
      <Contact />
      <Footer />
    </main>
  );
}
