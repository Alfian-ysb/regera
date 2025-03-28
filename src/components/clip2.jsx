import React from 'react'
import Clip2_1 from "../assets/clip2-1.png"
import Clip2_2 from "../assets/clip2-2.png"
import Clip2_3 from "../assets/clip2-3.png"

const clip2 = () => {
  return (
    <div id="clip-2" className="w-screen h-auto flex flex-col sm:flex-row justify-between items-center box-border py-20">
        <div id="left" className="w-screen md:w-1/2 flex flex-col items-center gap-10 px-4 md:px-15 py-10 text-primary-white ">
            <div id="clip2-title" className="flex flex-col items-center gap-6 font-ubuntuSans text-center">
              <h1 className="text-6xl md:text-7xl mr-20 md:mr-24">ELEGANCE</h1>
              <h1 className="text-6xl md:text-7xl ml-4">IN</h1>
              <h1 className="text-6xl md:text-7xl ml-8 md:ml-0">MOTION</h1>
            </div>
            <div id="caption-clip2">
              <p className="font-lunasima lg:text-lg text-center">A hypercar that doesn't just move—it mesmerizes with every curve, every detail, and every pulse of power</p>
            </div>
        </div>
        <div id="right" className="w-full sm:w-1/2 flex items-center p-8 md:p-0 gap-2 order-first sm:order-none">
          <div id="clip2-img-left" className="flex flex-col gap-2">
            <img src={Clip2_1} alt="koenigsegg regera clip" className="w-62 h-auto" />
            <img src={Clip2_2} alt="koenigsegg regera clip" className="w-62 h-auto" />
          </div>
          <div id="clip2-img-right">
            <img src={Clip2_3} alt="koenigsegg regera clip" className="w-62 h-auto" />
          </div>
        </div>
    </div>
  )
}   

export default clip2