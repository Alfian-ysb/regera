import React from "react";

const banner2 = () => {
  return (
    <div className="w-screen h-fit-content relative">
      <img
        id="banner-2"
        src="./src/assets/banner-2.png"
        alt="interior koenigsegg regera"
      />
      <span class="absolute inset-0 flex items-end justify-center font-redHatDisplay font-light underline underline-offset-9 text-white text-2xl after:content-['A_cockpit_crafted_for_perfection,_blending_technology_with_timeless_elegance'] mb-8"></span>
    </div>
  );
};

export default banner2;
