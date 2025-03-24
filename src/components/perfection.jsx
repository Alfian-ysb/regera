import React from "react";
import perfectionClip1 from "../assets/perfection-1.png"
import perfectionClip2 from "../assets/perfection-2.png"
import perfectionClip3 from "../assets/perfection-3.png"

const perfection = () => {
  return (
    <div className="w-screen h-auto flex flex-col md:flex-row items-center justify-between bg-linear-to-b from-[#414040] to-[#010101] rounded-t-4xl md:rounded-t-[3.5rem] py-11">
      <div
        id="perfection-clips"
        className="w-full md:w-1/2 flex items-center gap-2 px-10 py-10"
      >
        <div id="left">
          <img
            src={perfectionClip1}
            alt="koenigseg regera clip"
            className="w-64 h-auto"
          />
        </div>
        <div id="right" className="flex flex-col gap-2">
          <img
            src={perfectionClip2}
            alt="koenigseg regera clip"
            className="w-64 h-auto"
          />
          <img
            src={perfectionClip3}
            alt="koenigseg regera clip"
            className="w-64 h-auto"
          />
        </div>
      </div>
      <div
        id="perfection-quote"
        className="w-full md:w-1/2 flex flex-col items-center gap-20 px-4 md:px-15 py-10"
      >
        <div
          id="perfection-title"
          className="font-ubuntusans flex flex-col items-center gap-3 font-ubuntuSans font-bold text-white text-4xl sm:text-6xl md:text-4xl lg:text-7xl tracking-widest"
        >
          <h1>TOUGHNESS</h1>
          <h1>MEETS</h1>
          <h1>PERFECTTION</h1>
        </div>
        <div id="perfection-text">
          <p className="font-baiJamjuree text-white text-xl sm:text-2xl md:text-3xl text-center font-extralight">
            With an engine that beats like the heart of a champion, it soars
            like a dream come true
          </p>
        </div>
      </div>
    </div>
  );
};

export default perfection;
