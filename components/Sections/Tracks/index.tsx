
import React from "react";
import Card from "./Card";

const index = () => {
  return (
    <section id="tracks" className="container flex flex-col py-22">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-2xl font-bold lg:text-4xl mb-11">
          New Tracks
        </h2>
      </div>
      <div className="w-full flex flex-col gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-4 ">
        <Card
          image={"/images/thumbnails/labkhand.jpg"}
          title={"Labkhand"}
          release_date={"2024"}
          url={"#"}
        />
        <Card
          image={"/images/thumbnails/mahrokh.jpg"}
          title={"Mahrokh"}
          release_date={"2022"}
          url={"#"}
        />
        <Card
          image={"/images/thumbnails/hezarToo.jpg"}
          title={"Hezar Too"}
          release_date={"2020"}
          url={"#"}
        />
      </div>
    </section>
  );
};

export default index;
