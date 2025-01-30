"use client";

import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "motion/react";
import ImageModal from "./ImageModal";

interface GalleryItemProps {
  imageUrl: string;
  animation: "fade-right" | "fade-up" | "fade-left";
  className: string;
  onClick: () => void;
}

const GalleryItem = ({
  imageUrl,
  animation,
  className,
  onClick,
}: GalleryItemProps) => (
  <div
    data-aos={animation}
    data-aos-duration="1000"
    className={`w-full ${className}`}
  >
    <motion.div
      className={`rounded-[30px] h-[250px] lg:h-[350px] bg-cover bg-center cursor-pointer hover:scale-[1.02]`}
      style={{ backgroundImage: `url('${imageUrl}')` }}
      onClick={onClick}
      layoutId={`gallery-image-${imageUrl}`}
    />
  </div>
);

const galleryItems = [
  {
    imageUrl: "/images/gallery/1.jpg",
    animation: "fade-right" as const,
    className:
      "row-start-1 row-end-2 col-start-1 col-end-3 lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-5",
  },
  {
    imageUrl: "/images/gallery/2.jpg",
    animation: "fade-up" as const,
    className:
      "row-start-1 row-end-2 col-start-3 col-end-4 lg:row-start-1 lg:row-end-2 lg:col-start-5 lg:col-end-10",
  },
  {
    imageUrl: "/images/gallery/3.jpg",
    animation: "fade-left" as const,
    className:
      "row-start-2 row-end-3 col-span-full lg:row-start-1 lg:row-end-2 lg:col-start-10 lg:col-end-13",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 200,
    });
  }, []);

  return (
    <div id="gallery" className="overflow-hidden my-44">
      <section className="container">
        <h2 className="mb-8 font-display font-bold text-[40px] uppercase">
          Gallery
        </h2>
        <div className="grid grid-cols-3 lg:grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-x-7 gap-y-6">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              imageUrl={item.imageUrl}
              animation={item.animation}
              className={item.className}
              onClick={() => setSelectedImage(item.imageUrl)}
            />
          ))}
        </div>
        <ImageModal
          isOpen={!!selectedImage}
          imageUrl={selectedImage || ""}
          onClose={() => setSelectedImage(null)}
        />
      </section>
    </div>
  );
};

export default Gallery;
