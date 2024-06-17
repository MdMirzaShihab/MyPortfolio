import React from "react";
import Aibig from "../assets/Logos/Aibig.webp";
import ConnectUS from "../assets/Logos/ConnectUS.webp";
import ELS from "../assets/Logos/ELS.webp";
import TUIlmenau from "../assets/Logos/TUIlmenau.webp";
import Popular from "../assets/Logos/Popular.webp";

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
    technology: "JavaScript-Angular",
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

// Define the desired order of companyIDs
const order = [1, 4, 2, 5, 3];

// Sort ExpData based on the defined order
const sortedExpData = ExpData.sort(
  (a, b) => order.indexOf(a.companyID) - order.indexOf(b.companyID)
);

const Experience = () => {
  return (
    <section>
      <div className="bg-black py-[100vh] text-white">

      </div>
    </section>
  );
};

export default Experience;
