import React from 'react'
import Aibig from "../assets/Logos/Aibig.webp";
import ConnectUS from "../assets/Logos/ConnectUS.webp";
import ELS from "../assets/Logos/ELS.webp";
import TUIlmenau from "../assets/Logos/TUIlmenau.webp";
import Popular from "../assets/Logos/Popular.webp";

const ExpData = [
    {
      companyID: 1,
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
      stick:"top-[25vh]",
      type: "Development",
    },
    {
      companyID: 2,
      companyName:"ConnectUS",
      companyImg: ConnectUS,
      link:"",
      supervisor:"Wan Nordin",
      duration: "05/2019 - 11/2019",
      skills:["Frontend", "Agile Methodology"],
      technology: "JavaScript-AngularJS",
      designation: "SOFTWARE DEVELOPER INTERN",
      location: "Singapore",
      workDetails:["Contributed to the frontend development of an event management media system targeting the markets of Singapore and Malaysia.", "Gained valuable experience in startup culture and agile development practices.",],
      stick:"top-[28vh]",
      type: "Development",
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
      type: "Development",
    },
    {
      companyID: 4,
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
      stick:"top-[34vh]", 
      type: "Research",
    },
    {
      companyID: 5,
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
      stick:"top-[37vh]",
      type: "Research",
    },
  ];
  
  
  const order = [1, 4, 2, 5, 3];
  
  // Sort ExpData based on the defined order
  const sortedExpData = ExpData.sort(
    (a, b) => order.indexOf(a.companyID) - order.indexOf(b.companyID)
  );


const ExperienceOverview = () => {
  return (
    <div className='flex flex-col items-center'>
       <h1 className="font-bold text-5xl md:text-8xl p-10 py-20 text-center text-[#192f60]">
       At A Glance
      </h1>
<div className="ml-0 md:ml-12 lg:w-2/3">
          <div className="mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div
                className="border-2-2 border-[#0284c7] absolute h-full border"
                style={{
                  right: "50%",
                  border: "4px solid #0284c7",
                  borderRadius: "1%",
                }}></div>
              <div
                className="border-2-2 border-[#4e72c3] absolute h-full border"
                style={{
                  left: "50%",
                  border: "4px solid #4e72c3",
                  borderRadius: "1%",
                }}></div>
              <div className="flex justify-between mb-[6vw] ">
                <div className="text-left">
                  <h1 className="font-bold shadow-xl text-2xl lg:text-5xl text-[#0284c7]">
                    Development
                  </h1>
                  <hr/>
                </div>
                <div className="text-right">
                  <h1 className="font-bold shadow-xl text-2xl lg:text-5xl text-[#4e72c3]">
                    Research
                  </h1>
                  <hr/>
                </div>
              </div>
              {sortedExpData.map((exp, index) => (
                <div
                  key={exp.companyID}
                  className={`mb-8 flex justify-between ${
                    index % 2 === 0
                      ? "flex-row-reverse items-center w-full left-timeline"
                      : "items-center w-full right-timeline"
                  }`}>
                  <div className="order-1 w-5/12"></div>
                  <div
                    className={`order-1 w-5/12 px-1 py-4 ${
                      index % 2 === 0 ? "text-right text-sky-600" : "text-left text-[#4e72c3]"
                    }`}>
                    <p className="mb-3 text-base">
                      {exp.duration}
                    </p>
                    <h4 className="mb-1 font-bold text-lg md:text-2xl ">
                      {exp.companyName}
                    </h4>
                    <p className='text-sm font-bold md:text-base text-gray-400 mb-3'>{exp.technology}</p>
                    <p className='text-sm md:text-base text-gray-600 mb-5'>{exp.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ExperienceOverview