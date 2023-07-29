import Biography from "@/components/Bioghraphy";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import NewTracks from "@/components/NewTracks";
import SocialActivity from "@/components/SocialActivity";


export default function Home() {
  return (
    <main>
      <Header />
      <Biography />
      <NewTracks />
      <SocialActivity />
      <Gallery />
      <Footer />
    </main>
  )
}
