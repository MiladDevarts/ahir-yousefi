"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  PlayIcon,
  PauseIcon,
  BackwardIcon,
  ForwardIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/solid";

interface AudioTrack {
  name: string;
  artist: string;
  src: string;
  duration: number;
}

const audioList: AudioTrack[] = [
  {
    name: "Labkhand",
    artist: "Pooriya Arian",
    src: "audio/labkhand.mp3",
    duration: 0,
  },
  {
    name: "Mahrokh",
    artist: "Pooriya Arian",
    src: "audio/mahrokh.mp3",
    duration: 0,
  },
];

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);
  const [trackDurations, setTrackDurations] = useState<Record<number, number>>(
    {}
  );
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(new Audio(audioList[0].src));

  useEffect(() => {
    const loadDurations = async () => {
      const durations: Record<number, number> = {};
      for (let i = 0; i < audioList.length; i++) {
        const audio = new Audio(audioList[i].src);
        audio.addEventListener("loadedmetadata", () => {
          durations[i] = audio.duration;
          setTrackDurations((prev) => ({ ...prev, [i]: audio.duration }));
        });
      }
    };
    loadDurations();

    // Add time update listener
    const audio = audioRef.current;
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };
    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  useEffect(() => {
    audioRef.current.src = audioList[currentTrack].src;
    setCurrentTime(0);
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = (index: number) => {
    if (currentTrack !== index) {
      setCurrentTrack(index);
      setIsPlaying(true);
    } else {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNext = () => {
    setCurrentTrack((prev) => (prev + 1) % audioList.length);
  };

  const playPrev = () => {
    setCurrentTrack((prev) => (prev - 1 + audioList.length) % audioList.length);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <section
      id="music_player"
      className="container flex flex-col lg:flex-row gap-x-20 lg:gap-y-10 my-44"
    >
      <div className="w-full lg:w-1/2 lg:h-[700px] z-[2]">
        <div className="relative flex flex-col gap-y-5 h-full">
          <div className="flex flex-col gap-2 mb-[60px]">
            <div className="flex gap-3 items-center">
              <svg
                width="26"
                height="1"
                viewBox="0 0 26 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="26" y2="0.5" stroke="white" />
              </svg>
              <span className="text-gray-300 font-light text-lg">
                Now you stream musics here
              </span>
            </div>
            <h3 className="text-[36px] font-bold">Labkhand</h3>
          </div>

          <div className="flex flex-col gap-3">
            {audioList.map((track, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg transition-all ${
                  currentTrack === index
                    ? "bg-[#2b2b2b]"
                    : "bg-[#1B1B1B] hover:bg-[#2b2b2b]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-white rounded-full flex justify-center items-center p-2 cursor-pointer transition-colors"
                      onClick={() => togglePlay(index)}
                    >
                      {isPlaying && currentTrack === index ? (
                        <PauseIcon className="text-black w-5 h-5" />
                      ) : (
                        <PlayIcon className="text-black w-5 h-5" />
                      )}
                    </div>
                    <div className="flex gap-2">
                      <h3 className="text-white font-semibold">{track.name}</h3>
                      <p className="text-gray-400">{track.artist}</p>
                    </div>
                  </div>
                  <span className="text-gray-400">
                    {trackDurations[index]
                      ? formatTime(trackDurations[index])
                      : "--:--"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Player Controls */}
          <div className="w-full bg-[#1B1B1B] bg-opacity-50 backdrop-blur-md p-6 rounded-t-[15px] lg:rounded-[15px] lg:absolute bottom-0 left-0">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 absolute bottom-0 left-0 lg:left-5 right-0 lg:right-5">
                {/* <span className="text-white w-10 [min-width:2.5rem]">
                  {formatTime(currentTime)}
                </span> */}
                <input
                  type="range"
                  min="0"
                  max={trackDurations[currentTrack] || 0}
                  value={currentTime}
                  onChange={handleProgressChange}
                  className="w-full progress--range__slider"
                  style={{
                    backgroundImage: `linear-gradient(to right, #fff ${
                      (currentTime / (trackDurations[currentTrack] || 1)) * 100
                    }%, #1B1B1B ${
                      (currentTime / (trackDurations[currentTrack] || 1)) * 100
                    }%)`,
                  }}
                />
                {/* <span className="text-white w-10 [min-width:2.5rem] text-right">
                  {formatTime(trackDurations[currentTrack] || 0)}
                </span> */}
              </div>

              <div className="flex gap-4 justify-between flex-wrap lg:flex-nowrap">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-semibold">
                      {audioList[currentTrack].name}
                    </h3>
                    <p className="text-gray-300">
                      {audioList[currentTrack].artist}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-6 order-last w-full lg:w-auto lg:order-none">
                  <BackwardIcon
                    className="text-white w-6 h-6 cursor-pointer"
                    onClick={playPrev}
                  />
                  <div
                    className="p-3 rounded-full cursor-pointer"
                    onClick={() => togglePlay(currentTrack)}
                  >
                    {isPlaying ? (
                      <PauseIcon className="text-white w-9 h-9" />
                    ) : (
                      <PlayIcon className="text-white w-9 h-9" />
                    )}
                  </div>
                  <ForwardIcon
                    className="text-white w-6 h-6 cursor-pointer"
                    onClick={playNext}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <SpeakerWaveIcon className="text-white w-5 h-5" />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer volume--range__slider"
                    style={{
                      backgroundImage: `linear-gradient(to right, #fff ${
                        volume * 100
                      }%, #1B1B1B ${volume * 100}%)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1B1B1B] bg-opacity-50 lg:bg-transparent pt-8 rounded-b-3xl lg:rounded-b-none h-full lg:hidden">
        <div
          className="w-full lg:w-[40%] h-[400px] lg:h-[700px] bg-center bg-cover rounded-[24px] relative"
          style={{
            backgroundImage: `url('/images/music-player/background.jpg')`,
          }}
        ></div>
      </div>

      <div
        className="hidden lg:block w-full lg:w-[40%] h-[400px] lg:h-[700px] bg-center bg-cover rounded-[24px] relative"
        style={{
          backgroundImage: `url('/images/music-player/background.jpg')`,
        }}
      ></div>
    </section>
  );
};

export default MusicPlayer;
