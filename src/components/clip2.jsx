import React from 'react'

const clip2 = () => {
  return (
    <div id="clip-2" className="w-screen h-auto flex flex-col sm:flex-row justify-between items-center box-border py-20">
        <div id="left" className="w-1/2 flex flex-col items-center gap-10 px-15 py-10 text-primary-white ">
            <div id="clip2-title" className="flex flex-col items-center gap-6">
              <h1 className="text-7xl font-ubuntuSans text-center mr-24">ELEGANCE</h1>
              <h1 className="text-7xl font-ubuntuSans text-center ml-4">IN</h1>
              <h1 className="text-7xl font-ubuntuSans tet-center ml-20">MOTION</h1>
            </div>
            <div id="caption--cip2">
              <p className="font-lunasima lg:text-lg text-center">A hypercar that doesn't just move—it mesmerizes with every curve, every detail, and every pulse of power</p>
            </div>
        </div>
        <div id="right" className="w-full sm:w-1/2 flex items-center gap-2 order-first sm:order-none">
          <div id="clip2-img-left" className="flex flex-col gap-2">
            <img src="src/assets/clip2-1.png" alt="koenigsegg regera clip" className="w-62 h-auto" />
            <img src="src/assets/clip2-2.png" alt="koenigsegg regera clip" className="w-62 h-auto" />
          </div>
          <div id="clip2-img-right">
            <img src="src/assets/clip2-3.png" alt="koenigsegg regera clip" className="w-62 h-auto" />
          </div>
        </div>
    </div>
  )
}   

export default clip2