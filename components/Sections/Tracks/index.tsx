import React from "react";
import Card from "./Card";

const index = () => {
  return (
    <section id="tracks" className="container flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-2xl font-bold lg:text-4xl mb-8 lg:mb-11">
          New Tracks
        </h2>
      </div>
      <div className="w-full flex flex-col gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-4 ">
      <Card
          image={"/images/thumbnails/mahaminim.jpg"}
          title={"Ma Haminim"}
          release_date={"2025"}
          url={"https://lnk.bio/p91.bio"}
        />
        <Card
          image={"/images/thumbnails/labkhand.jpg"}
          title={"Labkhand"}
          release_date={"2024"}
          url={
            "https://lnk.bio/p91.bio"
          }
        />
        <Card
          image={"/images/thumbnails/mahrokh.jpg"}
          title={"Mahrokh"}
          release_date={"2022"}
          url={
            "https://lnk.bio/p91.bio"
          }
        />
     
      </div>
    </section>
  );
};

export default index;
