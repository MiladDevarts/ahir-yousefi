
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
        className="rounded-3xl w-full h-[400px] bg-center bg-cover"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="flex flex-col gap-1">
        <h3 className="text-white font-sand text-[22px]">{props.title}</h3>
        <span className="text-[#CBCBCB]">
          Release Date : {props.release_date}
        </span>
      </div>

      <Button label={"Listen Now"} href={props.url} />
    </div>
  );
};

export default Card;
