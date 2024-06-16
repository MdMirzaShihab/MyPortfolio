import React, { useRef } from "react";
import Aibig from "../assets/Logos/Aibig.webp";
import ConnectUS from "../assets/Logos/ConnectUS.webp";
import ELS from "../assets/Logos/ELS.webp";
import TUIlmenau from "../assets/Logos/TUIlmenau.webp";
import Popular from "../assets/Logos/Popular.webp";
import {motion, useScroll, useTransform } from "framer-motion";

const ExpData = [
  {
    companyID: 1,
    companyName:"AIBIG Lab, University of Technology Malaysia",
    companyImg: Aibig,
    link:"https://aibig.utm.my/",
    supervisor:"Hui Wen Nies",
    duration: "01/2022 - 08/2022",
    skills:["Academic Research", "Machine Learning Algorithms"],
    technology: "Python",
    designation: "RESEARCH INTERN",
    location: "Johor, Malaysia",
    workDetails:["Conducted research in bioinformatics, focusing on optimization and feature selection methods in disease classification.", "Assisted in the preparation of a research paper titled 'A Review of Computational Methods for Optimization and Feature Selection in Disease Classification.'",],
    stick:"top-[25vh]", 
  },
  {
    companyID: 2,
    companyName:"ConnectUS",
    companyImg: ConnectUS,
    link:"",
    supervisor:"Wan Nordin",
    duration: "05/2019 - 11/2019",
    skills:["Frontend", "Agile Methodology"],
    technology: "JavaScript-Angular",
    designation: "SOFTWARE DEVELOPER INTERN",
    location: "Singapore",
    workDetails:["Contributed to the frontend development of an event management media system targeting the markets of Singapore and Malaysia.", "Gained valuable experience in startup culture and agile development practices.",],
    stick:"top-[28vh]",
  },
  {
    companyID: 3,
    companyName:"Smart E-Life Solutions Sdn. Bhd.",
    companyImg: ELS,
    link:"https://elife-solutions.com/",
    supervisor:"Prof. Dr. -Ing. Eko Supriyanto",
    duration: "09/2018 - 01/2020",
    skills:["Agile Development", "Medical Technology"],
    technology: "C++, C#",
    designation: "SOFTWARE DEVELOPER INTERN",
    location: "Johor, Malaysia",
    workDetails:["Collaborated on a risk management system for Petronas using the QT framework.", "Worked on the 'smart hospital management system (asset model)' project.", "Gained hands-on experience in software development for the oil and gas industry."],
    stick:"top-[31vh]",
  },
  {
    companyID: 4,
    companyName:"Technische Universität Ilmenau",
    companyImg: TUIlmenau,
    link:"https://www.tu-ilmenau.de/",
    supervisor:"Uwe Graichen",
    duration: "06/2019 - 09/2019",
    skills:["Academic Research", "Medical Technology"],
    technology: "Matlab",
    designation: "RESEARCH INTERN",
    location: "Thuringia, Germany",
    workDetails:["Worked on Matlab simulations and gained insights into MRI technology.", "Got an insight idea of the ongoing research project 'Generation of Volume Conductor Models from MRI Data Sets.'",],
    stick:"top-[34vh]",
  },
  {
    companyID: 5,
    companyName:"Popular Diagnostic Centre Ltd.",
    companyImg: Popular,
    link:"https://populardiagnostic.com/",
    supervisor:"Mohammad Arif",
    duration: "02/2023 - Present",
    skills:["Scrum Master", "Development Team Lead", "Product Design"],
    technology: "JavaScript-React, Node.js",
    designation: "SOFTWARE ENGINEER",
    location: "Dhaka, Bangladesh",
    workDetails: ["Led the establishment of the software development team, for inhouse software development at PDCL.", "Designed the digital patient end software for the organization, streamlining patient management and enhancing user experience.", "Collaborated with healthcare professionals to gather requirements and ensure compliance with industry standards.", "Successfully implemented agile methodologies to improve project efficiency and product quality.",],
    stick:"top-[37vh]",
  },
];

const ExperienceCard = ({ stick, companyName, companyImg, link, supervisor, duration, skills, technology, designation, location, workDetails }) => {



  return (
    <div className={`sticky ${stick}`}>
    <div className="group flex flex-col relative after:shadow-lg after:shadow-black mb-10">
      {/* semi hidden slide */}
      <div className={`relative -left-16 top-0 z-10 sm:w-[70vw] h-[400px] rounded-xl flex flex-col items-start justify-center bg-slate-300 px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-left-14 border-2`}>
        <div className="flex flex-col gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={companyImg}
              className="object-contain w-[150px]"
              alt={companyName}
            /> <div className="p-5 flex flex-col gap-5 w-[30vw]">
                {workDetails.map((detail, index) => (
          <li key={index} className="text-slate-600 font-bold text-sm lg:block hidden">
            ✤ {detail}
          </li>
        ))}
            </div>
            
          </div>
        </div>
      </div>
      {/* main */}
      <div className={`absolute -right-16 top-0 z-20 w-[60vw] h-[400px] flex flex-col justify-center self-end rounded-xl rounded-l-2xl border-2 bg-slate-500 px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-right-14 group-hover:w-[34vw] group-hover:rounded-l-lg overflow-hidden`}>
        {/* All card details should be arranged here. */}
        <div className="flex flex-col justify-center items-center text-white">
        <a href={link} target="_blank">
            <p className=" text-3xl font-bold text-center">{companyName}</p>
            </a>
            <p className="text-xl text-slate-100">{designation}</p>
            <p className=" font-normal text-slate-200">{duration}</p>
        <p className="pb-2 font-dancing font-bold text-slate-300">{location}</p>
            <p className="font-medium text-slate-200"> <span className="text-slate-100 font-bold">Supervisor: </span>{supervisor}</p>

            <div className="py-2 flex flex-col items-center">
                <p className="text-center text-slate-200"> <span className="text-slate-100 font-bold text-2xl"> skills </span> {skills.map((skill, index) => (

            <li key={index} className="text-start font-normal">
             {skill}
          </li>               
        ))}
        </p>
            </div>
            <p className="text-slate-200 font-normal"> <span className="text-slate-100 font-bold text-xl">Technology:</span> {technology}</p>

        </div>
      </div>
    </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className="">
      <h1 className="sticky top-0 font-bold text-5xl md:text-8xl p-10 py-20 text-center text-gray-800">
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
