import React from 'react'
import Banner1 from "../assets/banner-1.png"

const banner1 = () => {
  return (
    <div className="w-screen h-fit relative">
      <img src={Banner1} alt="..." className="aspect-3/2 sm:aspect-auto object-cover"/>
      <span className="absolute inset-0 flex items-end justify-center font-redHatDisplay font-light underline underline-offset-8 text-white text-lg sm:text-2xl after:content-['Power_Without_Boundaries,_Luxury_Without_Limits'] after:text-center mb-4 sm:mb-8">

      </span>
    </div>
  )
}

export default banner1