import React, { useRef } from "react";
// import { ExpData } from "../Constants";
import Aibig from "../assets/Logos/Aibig.webp";
import ConnectUS from "../assets/Logos/ConnectUS.webp";
import ELS from "../assets/Logos/ELS.webp";
import TUIlmenau from "../assets/Logos/TUIlmenau.webp";
import Popular from "../assets/Logos/Popular.webp";
import { motion, useScroll, useTransform } from "framer-motion";

const ExpData = [
  {
    companyID: 1,
    companyName: "Popular Diagnostic Centre Ltd.",
    companyImg: Popular,
    link: "https://populardiagnostic.com/",
    supervisor: "Mohammad Arif",
    duration: "02/2023 - Present",
    skills: ["Scrum Master", "Development Team Lead", "Product Design"],
    technology: "JavaScript-React, Node.js",
    designation: "SOFTWARE ENGINEER",
    location: "Dhaka, Bangladesh",
    workDetails: [
      "Led the establishment of the software development team, for inhouse software development at PDCL.",
      "Designed the digital patient end software for the organization, streamlining patient management and enhancing user experience.",
      "Collaborated with healthcare professionals to gather requirements and ensure compliance with industry standards.",
      "Successfully implemented agile methodologies to improve project efficiency and product quality.",
    ],
    stick: "top-[25vh]",
    type: "Development",
  },
  {
    companyID: 2,
    companyName: "ConnectUS",
    companyImg: ConnectUS,
    link: "",
    supervisor: "Wan Nordin",
    duration: "05/2019 - 11/2019",
    skills: ["Frontend", "Agile Methodology"],
    technology: "JavaScript-AngularJS",
    designation: "SOFTWARE DEVELOPER INTERN",
    location: "Singapore",
    workDetails: [
      "Contributed to the frontend development of an event management media system targeting the markets of Singapore and Malaysia.",
      "Gained valuable experience in startup culture and agile development practices.",
    ],
    stick: "top-[28vh]",
    type: "Development",
  },
  {
    companyID: 3,
    companyName: "Smart E-Life Solutions Sdn. Bhd.",
    companyImg: ELS,
    link: "https://elife-solutions.com/",
    supervisor: "Prof. Dr. -Ing. Eko Supriyanto",
    duration: "09/2018 - 01/2020",
    skills: ["Agile Development", "Medical Technology"],
    technology: "C++, C#",
    designation: "SOFTWARE DEVELOPER INTERN",
    location: "Johor, Malaysia",
    workDetails: [
      "Collaborated on a risk management system for Petronas using the QT framework.",
      "Worked on the 'smart hospital management system (asset model)' project.",
      "Gained hands-on experience in software development for the oil and gas industry.",
    ],
    stick: "top-[31vh]",
    type: "Development",
  },
  {
    companyID: 4,
    companyName: "AIBIG Lab, University of Technology Malaysia",
    companyImg: Aibig,
    link: "https://aibig.utm.my/",
    supervisor: "Hui Wen Nies",
    duration: "01/2022 - 08/2022",
    skills: ["Academic Research", "Machine Learning Algorithms"],
    technology: "Python",
    designation: "RESEARCH INTERN",
    location: "Johor, Malaysia",
    workDetails: [
      "Conducted research in bioinformatics, focusing on optimization and feature selection methods in disease classification.",
      "Assisted in the preparation of a research paper titled 'A Review of Computational Methods for Optimization and Feature Selection in Disease Classification.'",
    ],
    stick: "top-[34vh]",
    type: "Research",
  },
  {
    companyID: 5,
    companyName: "Technische Universität Ilmenau",
    companyImg: TUIlmenau,
    link: "https://www.tu-ilmenau.de/",
    supervisor: "Uwe Graichen",
    duration: "06/2019 - 09/2019",
    skills: ["Academic Research", "Medical Technology"],
    technology: "Matlab",
    designation: "RESEARCH INTERN",
    location: "Thuringia, Germany",
    workDetails: [
      "Worked on Matlab simulations and gained insights into MRI technology.",
      "Got an insight idea of the ongoing research project 'Generation of Volume Conductor Models from MRI Data Sets.'",
    ],
    stick: "top-[37vh]",
    type: "Research",
  },
];

const ExperienceCard = ({
  stick,
  companyName,
  companyImg,
  link,
  supervisor,
  duration,
  skills,
  technology,
  designation,
  location,
  workDetails,
}) => {
  return (
    <div className={`sticky ${stick}`}>
      <div className="group flex flex-col relative after:shadow-lg after:shadow-black mb-[20vh]">
        {/* semi hidden slide */}
        <div
          className={`relative -left-16 top-0 z-10 sm:w-[70vw] h-[480px] shadow-lg shadow-slate-600 rounded-xl flex flex-col items-start justify-center bg-slate-300 px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-left-14 border-2`}>
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img
                src={companyImg}
                className="object-contain w-[150px] m-3"
                alt={companyName}
              />{" "}
              <div className="p-4 flex flex-col gap-1 w-[30vw]">
                {workDetails.map((detail, index) => (
                  <li
                    key={index}
                    className="text-slate-600 font-bold text-[16px] lg:block hidden">
                    ✤ {detail}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* main */}
        <div
          className={`absolute -right-16 top-0 z-20 w-[60vw] h-[480px] flex flex-col justify-center self-end rounded-xl rounded-l-2xl border-2 bg-slate-500 px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-right-14 group-hover:w-[34vw] group-hover:rounded-l-lg overflow-hidden`}>
          {/* All card details should be arranged here. */}
          <div className="flex flex-col justify-center items-center text-white">
            <a href={link} target="_blank">
              <p className=" text-4xl font-bold text-center pb-2">
                {companyName}
              </p>
            </a>
            <p className="text-xl text-slate-100">{designation}</p>
            <p className="font-medium text-lg text-slate-200">{duration}</p>
            <p className="pb-2 font-dancing text-[19px] font-bold text-slate-300">
              {location}
            </p>
            <p className="font-medium text-slate-200">
              {" "}
              <span className="text-slate-100 text-lg font-bold">
                Supervisor:{" "}
              </span>
              {supervisor}
            </p>
            <div className="py-2 flex flex-col items-center">
              <p className="text-center text-lg text-slate-200">
                {" "}
                <span className="text-slate-100 font-bold text-2xl">
                  {" "}
                  skills{" "}
                </span>{" "}
                {skills.map((skill, index) => (
                  <li key={index} className="text-start">
                    {skill}
                  </li>
                ))}
              </p>
            </div>
            <p className="text-slate-200 text-lg font-normal">
              {" "}
              <span className="text-slate-100 font-bold text-xl">
                Technology:
              </span>{" "}
              {technology}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceCardMobile = ({
  stick,
  companyName,
  companyImg,
  link,
  supervisor,
  duration,
  skills,
  technology,
  designation,
  location,
  workDetails,
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-purple-50 shadow-lg shadow-purple-500 py-20 p-5 border border-purple-500">
      <a href={link} target="_blank">
        <p className=" text-4xl font-bold text-center pb-2">{companyName}</p>
      </a>
      <p className="text-xl text-purple-100">{designation}</p>
      <p className="font-medium text-lg text-purple-300">{duration}</p>
      <p className="pb-2 font-dancing text-[19px] font-bold text-gray-200">
        {location}
      </p>
      <p className="font-medium text-purple-100">
        {" "}
        <span className="text-purple-300 text-lg font-bold">Supervisor: </span>
        {supervisor}
      </p>
      <div className="py-2 flex flex-col items-center">
        <p className="text-center text-lg text-purple-100">
          {" "}
          <span className="text-purple-300 font-bold text-2xl">
            {" "}
            skills{" "}
          </span>{" "}
          {skills.map((skill, index) => (
            <li key={index} className="text-start">
              {skill}
            </li>
          ))}
        </p>
      </div>
      <p className="text-purple-100 text-lg font-normal">
        {" "}
        <span className="text-purple-300 font-bold text-xl">
          Technology:
        </span>{" "}
        {technology}
      </p>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div>
      <div className="hidden lg:block bg-white">
        <h1 className="sticky top-0 font-bold text-8xl p-10 pt-20 mb-[20vh] text-center text-gray-800">
          Professional Odyssey
        </h1>
        <div className="flex flex-col items-center justify-center">
          {ExpData.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
      <div className="lg:hidden bg-purple-900">
        <h1 className="sticky top-0 font-bold text-6xl p-10 pt-20 text-center bg-purple-900 shadow-lg text-gray-200">
          Professional Odyssey
        </h1>
        <div>
          {ExpData.map((exp, index) => (
            <ExperienceCardMobile key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
