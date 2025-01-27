import Link from "next/link";
import React from "react";

interface NewTrackProps {
  image: string;
  title: string;
  release_date: string;
  url: string;
}

const Card: React.FC<NewTrackProps> = (props) => {
  return (
    <div className="relative flex flex-col gap-6">
      <div
        className="rounded-3xl w-full h-[400px] bg-center bg-cover"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="flex flex-col gap-1">
        <h3 className="text-white font-sand text-[22px]">{props.title}</h3>
        <span className="text-[#CBCBCB]">
          Release Date : {props.release_date}
        </span>
      </div>
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
