import React from 'react'
import './carComponents.css'

const carComponents = () => {
  return (
    <div id="carComponents" className="w-screen h-fit font-archivo text-white">
        <div id="component-1" className="w-screen bg-primary-black flex flex-col-reverse sm:flex-row justify-center items-center">
            <div id="text" className="w-screen sm:w-1/2 h-full text-primary-white flex flex-col justify-between items-center gap-5 sm:gap-10 md:gap-15 lg:gap-20 box-border px-2 py-4 sm:px-6 sm:py-4 md:px-15">
                <div>
                    <h1 className="text-2xl lg:text-5xl">KDD</h1>
                </div>
                <div>
                    <p className="text-base lg:text-xl font-light text-center">Koenigsegg placed the best performing, safest battery possible in the Regera - an 800 volt, 4.5 kWh battery pack. At launch in 2015 it was the world's first 800 V production car, and this extreme battery technology provides 525kW of discharge and up to 200 kW of recharge - performance on par with Formula 1 cars of the era.</p>
                </div>
            </div>
            <div id="components-img" className="w-screen sm:w-1/2">
                <img src="src/assets/component-regera-1.png" alt="Car Components" />
            </div>
        </div>
        <div id="component-2" className="w-screen bg-primary-white flex flex-col-reverse sm:flex-row-reverse justify-center items-center">
            <div id="text" className="w-screen sm:w-1/2 h-full text-primary-black flex flex-col sm:flex-row-reverse justify-between items-center gap-5 sm:gap-10 md:gap-15 lg:gap-20 box-border px-2 py-4 sm:px-6 sm:py-4 md:px-15">
                <div>
                    <h1 className="text-2xl lg:text-5xl">V8</h1>
                </div>
                <div>
                    <p className="text-base lg:text-xl font-light text-center">Regera's dry-sump twin-turbo, DOHC, 5.0-liter V8 engine offers significant power in a compact package. The powertrain produces a combined 1500 hp with electric propulsion providing instant torque from the KDD while smaller, faster spooling turbos are  fitted to enhance drivability and response.</p>
                </div>
            </div>
            <div id="components-img" className="w-screen sm:w-1/2">
                <img src="src/assets/component-regera-2.png" alt="Car Components" />
            </div>
        </div>
        <div id="component-3" className="w-screen bg-primary-black flex flex-col-reverse sm:flex-row justify-center items-center">
            <div id="text" className="w-screen sm:w-1/2 h-full text-primary-white flex flex-col justify-between items-center gap-5 sm:gap-10 md:gap-15 lg:gap-20 box-border px-2 py-4 sm:px-6 sm:py-4 md:px-15">
                <div>
                    <h1 className="text-2xl lg:text-5xl">BATTERY</h1>
                </div>
                <div>
                    <p className="text-base lg:text-xl font-light text-center">Koenigsegg placed the best performing, safest battery possible in the Regera - an 800 volt, 4.5 kWh battery pack. At launch in 2015 it was the world's first 800 V production car, and this extreme battery technology provides 525kW of discharge and up to 200 kW of recharge - performance on par with Formula 1 cars of the era.</p>
                </div>
            </div>
            <div id="components-img" className="w-screen sm:w-1/2">
                <img src="src/assets/component-regera-3.png" alt="Car Components" />
            </div>
        </div>
        <div id="component-4" className="w-screen bg-primary-white flex flex-col-reverse sm:flex-row-reverse justify-center items-center">
            <div id="text" className="w-screen sm:w-1/2 h-full text-primary-black flex flex-col justify-between items-center gap-5 sm:gap-10 md:gap-15 lg:gap-20 box-border px-2 py-4 sm:px-6 sm:py-4 md:px-15">
                <div>
                    <h1 className="text-2xl lg:text-5xl">ELECTRIC
                    MOTORS</h1>
                </div>
                <div>
                    <p className="text-base lg:text-xl font-light text-center">The Regera has three electric motors, supplementing the energy from the combustion engine. Aside from providing extreme responsiveness, these motors also allow for torque vectoring, regenerative braking and energy conversion. These axial-flux motors are extremely power-dense, making them a key ingredient for the KDD.</p>
                </div>
            </div>
            <div id="components-img" className="w-screen sm:w-1/2">
                <img src="src/assets/component-regera-4.png" alt="Car Components" />
            </div>
        </div>
        <div id="component-5" className="w-screen bg-primary-black flex flex-col-reverse sm:flex-row justify-center items-center">
            <div id="text" className="w-screen sm:w-1/2 text-primary-white flex-1 flex flex-col justify-between items-center gap-5 sm:gap-10 md:gap-15 lg:gap-20 box-border px-2 py-4 sm:px-6 sm:py-4 md:px-15">
                <div>
                    <h1 className="text-2xl lg:text-5xl">SUSPENSION</h1>
                </div>
                <div>
                    <p className="text-base lg:text-xl font-light text-center">A Koenigsegg's suspension geometry is designed for extremely fast cornering. One of the challenges of this design is that allows the car to "squat" under hard acceleration, e.g. at take-off from standstill.</p>
                </div>
            </div>
            <div id="components-img" className="w-screen sm:w-1/2 flex-1 h-full">
                <img src="src/assets/component-regera-5.png" alt="Car Components" />
            </div>
        </div>
    </div>
  )
}

export default carComponents