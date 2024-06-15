import React from "react";
import Aibig from "../assets/Logos/Aibig.webp";
import ConnectUS from "../assets/Logos/ConnectUS.webp";
import ELS from "../assets/Logos/ELS.webp";
import TUIlmenau from "../assets/Logos/TUIlmenau.webp";
import Popular from "../assets/Logos/Popular.webp";

const ExpData = [
  {
    companyID: 1,
    companyName:"AIBIG Lab, University of Technology Malaysia",
    companyImg: Aibig,
    link:"https://aibig.utm.my/",
    supervisor:"Hui Wen Nies",
    bColor: "black",
    fColor: "white",
    designation: "RESEARCH INTERN",
    location: "Johor, Malaysia",
    workDetails:["Conducted research in bioinformatics, focusing on optimization and feature selection methods in disease classification.", "Assisted in the preparation of a research paper titled 'A Review of Computational Methods for Optimization and Feature Selection in Disease Classification.'",],  
  },
  {
    companyID: 2,
    companyName:"ConnectUS",
    companyImg: ConnectUS,
    link:"",
    supervisor:"Wan Nordin",
    bColor: "black",
    fColor: "white",
    designation: "SOFTWARE DEVELOPER INTERN",
    location: "Singapore",
    workDetails:["Contributed to the frontend development of an event management media system targeting the markets of Singapore and Malaysia.", "Gained valuable experience in startup culture and agile development practices.",],
  },
  {
    companyID: 3,
    companyName:"Smart E-Life Solutions Sdn. Bhd.",
    companyImg: ELS,
    link:"https://elife-solutions.com/",
    supervisor:"Prof. Dr. -Ing. Eko Supriyanto",
    bColor: "black",
    fColor: "white",
    designation: "SOFTWARE DEVELOPER INTERN",
    location: "Johor, Malaysia",
    workDetails:["Collaborated on a risk management system for Petronas using the QT framework.", "Worked on the 'smart hospital management system (asset model)' project.", "Gained hands-on experience in software development for the oil and gas industry."],
  },
  {
    companyID: 4,
    companyName:"Technische Universität Ilmenau",
    companyImg: TUIlmenau,
    link:"https://www.tu-ilmenau.de/",
    supervisor:"Uwe Graichen",
    bColor: "black",
    fColor: "white",
    designation: "RESEARCH INTERN",
    location: "Thuringia, Germany",
    workDetails:["Worked on Matlab simulations and gained insights into MRI technology.", "Got an insight idea of the ongoing research project 'Generation of Volume Conductor Models from MRI Data Sets.'",],
  },
  {
    companyID: 5,
    companyName:"Popular Diagnostic Centre Ltd.",
    companyImg: Popular,
    link:"https://populardiagnostic.com/",
    supervisor:"Mohammad Arif",
    bColor: "black",
    fColor: "white",
    designation: "SOFTWARE ENGINEER",
    location: "Dhaka, Bangladesh",
    workDetails: ["Led the establishment of the software development team, for inhouse software development at PDCL.", "Designed the digital patient end software for the organization, streamlining patient management and enhancing user experience.", "Collaborated with healthcare professionals to gather requirements and ensure compliance with industry standards.", "Successfully implemented agile methodologies to improve project efficiency and product quality.",],
  },
];

const ExperienceCard = ({ data }) => {
  return (
    <div className="group relative flex cursor-pointer after:shadow-lg after:shadow-black mb-10">
      {/* semi hidden slide */}
      <div className={`relative -left-16 top-0 z-10 h-60 w-full sm:w-96 rounded-xl flex items-center bg-${data.bColor} px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-left-14`}>
        <div className="flex flex-col gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={data.companyImg}
              className="object-contain h-auto w-52"
              alt={data.companyName}
            />
          </div>
        </div>
      </div>
      {/* main */}
      <div className={`absolute -right-16 top-0 z-20 flex w-full sm:w-96 h-60 flex-col gap-4 self-end rounded-xl rounded-l-2xl border-none bg-${data.fColor} px-5 py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-right-14 group-hover:w-64 group-hover:rounded-l-lg`}>
        {/* All card details should be arranged here. */}
        <p className="text-black">{data.designation}</p>
        <p className="text-black">{data.location}</p>
        {/* Work details can be mapped over here */}
        {data.workDetails.map((detail, index) => (
          <p key={index} className="text-black text-sm">
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className="overflow-auto">
      <h1 className="badgeText font-bold text-5xl md:text-8xl p-10 pt-20 text-center text-gray-800">
        Professional Odyssey
      </h1>
      <div className="flex flex-col items-center justify-center">
        {ExpData.map((exp) => (
          <ExperienceCard key={exp.companyID} data={exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
