import React from "react";
import Banner2 from "../assets/banner-2.png";

const banner2 = () => {
  return (
    <div className="w-screen h-fit-content relative">
      <img
        id="banner-2"
        src={Banner2}
        alt="interior koenigsegg regera"
        className="aspect-3/2 sm:aspect-auto object-cover"
      />
      <span class="absolute inset-0 flex items-end justify-center font-redHatDisplay font-light underline underline-offset-9 text-white text-lg sm:text-2xl after:content-['A_cockpit_crafted_for_perfection,_blending_technology_with_timeless_elegance'] after:text-center mb-4 sm:mb-8"></span>
    </div>
  );
};

export default banner2;
