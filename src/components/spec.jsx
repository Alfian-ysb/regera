import React from "react";
import "./spec.css";

const spec = () => {
  return (
    <div id="spec" className="w-screen h-auto bg-[#E6ECED] flex flex-col justify-center items-center gap-10 box-border py-20 ">
      <div id="spec-title">
        <h1 className="text-black text-3xl">Specifications</h1>
      </div>
      <div id="spec-content" className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div id="content-left" className="h-full text-black flex flex-row lg:flex-col justify-start items-start gap-10 sm:gap-18 md:gap-20 lg:gap-25">
          <ul id="HP">
            <li>
              <span className="text-3xl sm:text-5xl md:text-7xl">1.500</span>
            </li>
            <li className="text-[#494949] text-sm font-medium">HorsePower</li>
          </ul>
          <ul id="battery">
            <li>
              <span className="text-3xl sm:text-5xl md:text-7xl">800</span>
              <span className="text-[#494949] text-[.8rem] font-medium">volt</span>
            </li>
            <li className="text-[#494949] text-sm font-medium">Battery</li>
          </ul>
          <ul id="torque">
            <li>
              <span className="text-3xl sm:text-5xl md:text-7xl">1.280</span>
            </li>
            <li className="text-[#494949] text-sm font-medium">Max Torque</li>
          </ul>
        </div>
        <div id="content-image" className="order-first lg:order-none px-8">
          <img
            src="src\assets\regera-spec.png"
            alt="koenigsegg regera"
            className=" w-full h-auto"
          />
        </div>
        <div id="content-right" className="h-full text-black flex flex-row lg:flex-col justify-start items-start gap-10 sm:gap-18 md:gap-20 lg:gap-25">
          <ul id="weight">
            <li>
              <span className="text-3xl sm:text-5xl md:text-7xl">1.590</span>
              <span className="text-[#494949] text-[.8rem] font-medium">Kg</span>
            </li>
            <li className="text-[#494949] text-sm font-medium">Curb weight</li>
          </ul>
          <ul id="top-speed">
            <li>
              <span className="text-3xl sm:text-5xl md:text-7xl">410</span>
              <span className="text-[#494949] text-[.8rem] font-medium">Km/h</span>
            </li>
            <li className="text-[#494949] text-sm font-medium">Top speed</li>
          </ul>
          <ul id="drivetrain">
            <li>
              <span className="text-3xl sm:text-5xl md:text-7xl">KDD</span>
            </li>
            <li className="text-[#494949] text-sm font-medium">Drivetrain</li>
          </ul>
        </div>
      </div>
      <div id="spec-quote">
        <p className="text-black font-light text-lg text-center md:text-2xl mt-5 sm:mt-10">
          This hypercar is not just a vehicle, but a masterpiece that is at one
          with the souls of high-performance enthusiasts.
        </p>
      </div>
    </div>
  );
};

export default spec;
