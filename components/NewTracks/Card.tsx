import Link from "next/link";
import React from "react";

interface NewTrackProps {
  image: string;
  title: string;
  artist: string;
  url: string;
}

const Card: React.FC<NewTrackProps> = (props) => {
  return (
    <div className="relative flex flex-col gap-6">
      <div
        className="rounded-3xl w-full h-80 bg-center bg-cover"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <h3 className="text-white font-mono text-xl">{props.title}</h3>
      <span className="text-[#CBCBCB]">{props.artist}</span>
      <Link
        href={props.url}
        className="rounded-2xl inline-block w-[150px] bg-white border border-white px-5 py-1 text-black text-center hover:bg-white/0 hover:text-white transition-colors "
      >
        Listen now
      </Link>
    </div>
  );
};

export default Card;
