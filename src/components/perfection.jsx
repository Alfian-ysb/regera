import React from 'react'
import "./perfection.css"

const perfection = () => {
  return (
    <div className="w-screen h-auto flex justify-between bg-linear-to-b from-[#414040] to-[#010101] rounded-t-[3.5rem] py-11">
        <div id="perfection-clips" className=" w-[50%] flex items-center gap-5 px-15 py-10">
            <div id="left">
                <img src="src\assets\perfection-1.png" alt="koenigseg regera clip" className="w-64 h-auto" />
            </div>
            <div id="right" className="flex flex-col gap-5">
                <img src="src\assets\perfection-2.png" alt="koenigseg regera clip" className="w-64 h-auto" />
                <img src="src\assets\perfection-3.png" alt="koenigseg regera clip" className="w-64 h-auto" />
            </div>
        </div>
        <div id="perfection-quote" className="w-[50%] flex flex-col items-center gap-20 px-15 py-10">
            <div id="perfection-title" className="flex flex-col items-center gap-3 font-bold text-white text-7xl tracking-widest">
              <h1>TOUGHNESS</h1>
              <h1>MEETS</h1>
              <h1>PERFECTTION</h1>
            </div>
            <div id="perfection-text">
              <p className="text-white text-3xl text-center font-extralight">
                With an engine that beats like the heart of a champion, it soars like a dream come true
              </p>
            </div>
        </div>
    </div>
  )
}

export default perfection