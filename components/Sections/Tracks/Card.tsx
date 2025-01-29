import React from "react";
import Button from "@common/Button";

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
        className="rounded-3xl w-full h-[428px] bg-center bg-cover"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="flex flex-col gap-1">
        <h3 className="text-white font-sand text-[22px]">{props.title}</h3>
        <span className="text-[#CBCBCB]">
          Release Date : {props.release_date}
        </span>
      </div>

      <div className="max-w-[14.125rem] w-full">
        <Button href={props.url} className="w-full h-9 text-xs">
          Listen Now
        </Button>
      </div>
    </div>
  );
};

export default Card;
