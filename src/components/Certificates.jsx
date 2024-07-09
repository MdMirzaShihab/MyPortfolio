import React from "react";
import { motion } from "framer-motion";
import { certData } from "../Constants";

  const CertCard = ({ certImg, certName, by, link, provider }) => {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
         className="project-card group text-center lg:w-[24vw] md:w-[32vw] h-[48vh] w-[48vw] text-slate-400 flex flex-col justify-center items-center hover:shadow-lg hover:shadow-[#0284c7] shadow-sm shadow-[#0285c786] transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={certImg}
          className="object-contain lg:w-[8vw] lg:h-[8vw] h-[16vw] w-[16vw] transition duration-300" alt={certImg} 
        />
        <h1 className="md:text-2xl text-xl px-2 font-bold group-hover:text-slate-100 mt-2 transition duration-300">
          {certName}
        </h1>
        <p className="text-sm">by</p>
        <a href={provider}>
          <p className="text-lg font-semibold hover:scale-125 transition duration-300 hover:text-white">
          {by}
        </p>
        </a>
      </motion.a>
    );
  };

const Certificates = () => {
  return (
    <div className="projects-container min-h-[100vh] bg-[#060f30] pt-16 w-full">
      <h1 className="badgeText font-bold text-5xl md:text-8xl text-center py-5 text-white">
        Certificates
      </h1>
      <div className="flex flex-wrap w-full justify-center py-10">
        {certData.map((project) => (
          <div key={project.id} className="">
            <CertCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
