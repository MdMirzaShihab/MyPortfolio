import React from 'react'
import Aibig from "../assets/Logos/Aibig.webp";
import ConnectUS from "../assets/Logos/ConnectUS.webp";
import ELS from "../assets/Logos/ELS.webp";
import TUIlmenau from "../assets/Logos/TUIlmenau.webp";
import Google from "../assets/Logos/Google.webp";


const ExpData = [
    {
        companyID: 1,
        companyImg:Aibig,
        pColor: "[#2fffff]",
        sColor: "[#2ff22f]",
    },
    {
        companyID: 2,
        companyImg:ConnectUS,
        pColor: "[#2fffff]",
        sColor: "[#2ff22f]",
    },
    {
        companyID: 3,
        companyImg:ELS,
        pColor: "[#2fffff]",
        sColor: "[#2ff22f]",
    },
    {
        companyID: 4,
        companyImg:TUIlmenau,
        pColor: "[#2fffff]",
        sColor: "[#2ff22f]",
    },
    {
        companyID: 5,
        companyImg:Google,
        pColor: "[#2fffff]",
        sColor: "[#2ff22f]",
    },
]





const ExperienceSection = () => {
  return (
    <div className='h-screen'>
        
        <h1 className="badgeText font-bold text-5xl md:text-8xl p-10 pt-20 text-center text-gray-800">
        Professional Odyssey
        </h1>

        <div>
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
  <div className="relative mx-auto">
    <div className="group relative flex cursor-pointer after:shadow-lg after:shadow-black">
      {/* hidden slide */}
      <div className="relative -left-16 top-0 z-10 h-60 w-full sm:w-96 rounded-xl flex items-center bg-[#3d348b] px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-left-14">
        <div className="flex flex-col gap-4">
          {/* item 1 */}
          <div className="flex items-center gap-2">
            <img

            src={Aibig}
            className="object-contain h-auto w-52"
            alt= "Aibig"
          />
            <p className="text-white opacity-0 delay-200 duration-700 ease-in-out group-hover:opacity-100">1,300 Goals</p>
          </div>
          {/* link */}
        </div>
      </div>
      {/* main */}
      <div className="absolute -right-16 top-0 z-20 flex w-full sm:w-96 h-60 flex-col gap-4 self-end rounded-xl rounded-l-2xl border-none bg-[#7678ed] px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-right-14 group-hover:w-64 group-hover:rounded-l-lg">
        <p className="text-[#fff]">Achivements unlocked</p>
        <p className="text-[#fff]">Records sold</p>
      </div>
    </div>
  </div>
</div>

        </div>


        
    </div>
  )
}

export default ExperienceSection