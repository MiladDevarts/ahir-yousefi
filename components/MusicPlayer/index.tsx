import React from "react";

const MusicPlayer = () => {
  return (
    <section className="container flex flex-col lg:flex-row gap-x-20 gap-y-10 my-44">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-3 items-center">
            <svg
              width="26"
              height="1"
              viewBox="0 0 26 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="26" y2="0.5" stroke="white" />
            </svg>
            <span className="text-[#CBCBCB] font-light text-lg">
              Now you stream musics here
            </span>
          </div>
          <h3 className="ml-10 font-mono text-4xl">Baghalam kon</h3>
          <div className="flex flex-col gap-3">
            <iframe
              src="https://open.spotify.com/embed/track/3HMY0r2BAdpasXMY8rseR0?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              className="rounded-2xl"
              src="https://open.spotify.com/embed/track/6JNJERZGJwDVgkmbohBw7u?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

            <iframe
              className="rounded-2xl"
              src="https://open.spotify.com/embed/artist/4463nfFMmK1cwAWBQDwT5e?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div
        className="w-full lg:w-1/2 h-[400px] lg:h-[700px] bg-center bg-cover"
        style={{
          backgroundImage: `url('/images/music-player/background.jpg')`,
        }}
      ></div>
    </section>
  );
};

export default MusicPlayer;
