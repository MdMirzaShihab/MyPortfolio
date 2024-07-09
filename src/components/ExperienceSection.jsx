import React, { useRef } from "react";
import { ExpData } from "../Constants";
import {motion, useScroll, useTransform } from "framer-motion";

const ExperienceCard = ({ stick, companyName, companyImg, link, supervisor, duration, skills, technology, designation, location, workDetails }) => {

  return (
    <div className={`sticky ${stick}`}>
    <div className="group flex flex-col relative after:shadow-lg after:shadow-black mb-[20vh]">
      {/* semi hidden slide */}
      <div className={`relative -left-16 top-0 z-10 sm:w-[70vw] h-[480px] shadow-lg shadow-slate-600 rounded-xl flex flex-col items-start justify-center bg-slate-300 px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-left-14 border-2`}>
        <div className="flex flex-col gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={companyImg}
              className="object-contain w-[150px] m-3"
              alt={companyName}
            /> <div className="p-4 flex flex-col gap-1 w-[30vw]">
                {workDetails.map((detail, index) => (
          <li key={index} className="text-slate-600 font-bold text-[16px] lg:block hidden">
            ✤ {detail}
          </li> 
        ))}
            </div>
          </div>
        </div>
      </div>
      {/* main */}
      <div className={`absolute -right-16 top-0 z-20 w-[60vw] h-[480px] flex flex-col justify-center self-end rounded-xl rounded-l-2xl border-2 bg-slate-500 px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-right-14 group-hover:w-[34vw] group-hover:rounded-l-lg overflow-hidden`}>
        {/* All card details should be arranged here. */}
        <div className="flex flex-col justify-center items-center text-white">
        <a href={link} target="_blank">
            <p className=" text-4xl font-bold text-center pb-2">{companyName}</p>
            </a>
            <p className="text-xl text-slate-100">{designation}</p>
            <p className="font-medium text-lg text-slate-200">{duration}</p>
        <p className="pb-2 font-dancing text-[19px] font-bold text-slate-300">{location}</p>
            <p className="font-medium text-slate-200"> <span className="text-slate-100 text-lg font-bold">Supervisor: </span>{supervisor}</p>
            <div className="py-2 flex flex-col items-center">
                <p className="text-center text-lg text-slate-200"> <span className="text-slate-100 font-bold text-2xl"> skills </span> {skills.map((skill, index) => (
            <li key={index} className="text-start">
             {skill}
          </li>               
        ))}
        </p>
            </div>
            <p className="text-slate-200 text-lg font-normal"> <span className="text-slate-100 font-bold text-xl">Technology:</span> {technology}</p>

        </div>
      </div>
    </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className="">
      <h1 className="sticky top-0 font-bold text-5xl md:text-8xl p-10 pt-20 mb-[20vh] text-center text-gray-800">
        Professional Odyssey
      </h1>
      <div className="flex flex-col items-center justify-center">
        {ExpData.map((exp) => (
          <ExperienceCard key={exp.companyID} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
