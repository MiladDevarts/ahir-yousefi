import React from "react";
import Image from "next/image";

const SocialActivity = () => {
  return (
    <section className="w-full bg-black py-10 my-44">
      <div className="container flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-6">
        <div className="w-full lg:w-1/3 flex items-center gap-x-6 lg:gap-x-10">
          <Image
            src={"/images/social-activity/profile.png"}
            className="w-32 lg:w-60"
            width={400}
            height={400}
            alt="P91"
          />
          <div className="flex flex-col  text-white">
            <h3 className="text-[32px] font-bold">Follow ME</h3>
            <div className="flex items-center gap-x-3">
              <span className="italic">iNSTAGRAM</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-[#7A7A7A] text-lg max-w-xl">
            Ahir Yousefi, born in Tehran on August 10th, 1997, embarked on his
            musical journey at the age of 16. His strong passion for music led
            him to seamlessly transition from a background in electrical
            engineering to pursue education in music at the Tehran University of
            Art.
            <br />
            <br />
            Today, Ahir Yousefi is renowned as a songwriter, composer, musician,
            and accomplished singer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialActivity;
