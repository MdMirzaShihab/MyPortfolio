import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import PDCL from "../assets/Projects/PDCL/PortfolioPDCLshort.mp4";
import Trademic from "../assets/Projects/Trademic/Trademic.mp4";
import Boipoka from "../assets/Projects/Boipoka/Boipoka.mp4";
import CEdelivery from "../assets/Projects/CEdelivery/CEdeliveryVdo.mp4";
import Exponentum from "../assets/Projects/Exponentum/Exponentum.mp4";
import FlyingFarmers from "../assets/Projects/FlyingFarmers/FlyingFarmersVdo.mp4";
import Pogoda from "../assets/Projects/Pogoda/POGODA.mp4";
import Sabisy from "../assets/Projects/Sabisy/SABISY.mp4";
import Subidha from "../assets/Projects/Subidha/SubidhaParkingSolution.mp4";


const ProjectSection = () => {
  const imgContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imgContainer,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const projectThumbnails = [
    {
      id:1,
      vdo: PDCL,
      scale: scale1,
    },
    {
      id:2,
      vdo: Trademic,
      scale: scale2,
    },
    {
      id:3,
      vdo: Boipoka,
      scale: scale3,
    },
    {
      id:4,
      vdo: CEdelivery,
      scale: scale4,
    },
    {
      id:5,
      vdo: Exponentum,
      scale: scale5,
    },
    {
      id:6,
      vdo: FlyingFarmers,
      scale: scale6,
    },
    {
      id:7,
      vdo: Pogoda,
      scale: scale4,
    },
    {
      id:8,
      vdo: Sabisy,
      scale: scale5,
    },
    {
      id:9,
      vdo: Subidha,
      scale: scale6,
    },
  ];

  return (
    <div ref={imgContainer} className="relative h-[300vh] bg-slate-500">
      <div className="sticky top-16 h-[100vh] overflow-hidden">
        {projectThumbnails.map((project) => {
          return (
            <motion.div
              key={project.id}
              style={{ scale: project.scale }}
              className="el md:mt-24 mt-0">
              <div className={`imageContainer`}>
                <video
                  autoPlay
                  muted
                  loop
                  className={`object-cover rounded-lg shadow-2xl`}>
                  <source src={project.vdo} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          );
        })}

        <h1 className="badgeText font-bold text-5xl md:text-8xl p-10 pt-10 text-center text-white">
        Explore My Creative Journey
        </h1>
      </div>
      
    </div>
  );
};

export default ProjectSection;
