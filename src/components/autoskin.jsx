import React from 'react'
import './autoskin.css'

const autoskin = () => {
  return (
    <div className="w-screen flex flex-col md:flex-row justify-center items-center gap-10 box-border px-4 py-10">
        <div id="autoSkin-left" className="w-full flex items-center justify-center gap-x-3 px-4 md:pl-10">
            <div id="autoSkin-hero-left-bg" className="flex flex-col gap-y-3">
                <img id="top left" className="w-[256px] h-auto" src="src/assets/autoskin-tl-bg.png" alt="background" />
                <img id="bottom left" className="w-[256px] h-auto" src="src/assets/autoskin-bl-bg.png" alt="background" />
            </div>
            <div id="autoSkin-hero-right-bg" className=" flex flex-col gap-y-3">
                <img id="top right" className="w-[234px] h-auto" src="src/assets/autoskin-rt-bg.png" alt="background" />  
                <img id="bottom right" className="w-[234px] h-auto" src="src/assets/autoskin-rb-bg.png" alt="background" />  
            </div>
        </div>
        <div id="autoSkin-right" className="w-screen  md:w-1/2 text-primary-white flex flex-col gap-10 px-6 md:px-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:w-[500px] text-center font-ubuntuSans">AutoSkin</h1>
            <div id="autoskin-description" className="lg:w-[550px] flex flex-col gap-5 font-istockWeb">
                <p className="text-center md:text-left text-base">The Regera is the first car in the world that operates all body closures completely automatically, at the touch of a button. We call this system 'Autoskin'.</p>
                <p className="text-center md:text-left text-base">Koenigsegg has managed to robotize the entire Regera with almost no weight penalty, thanks to the latest advances in compact lightweight hydraulic technology. The Autoskin hydraulics replace gas struts of similar weight, resulting in minimal weight impact. Autoskin features soft-closing mechanisms, giving the Regera a sophisticated feel.</p>
                <p className="text-center md:text-left text-base">All openings and wing mirrors are fitted with proximity sensors to safeguard against the doors striking nearby objects, such as curbs or low roofs, while opening or closing.</p>
            </div>
        </div>
    </div>
  )
}

export default autoskin