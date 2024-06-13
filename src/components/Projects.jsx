import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import PDCL from "../assets/Projects/PDCL/PortfolioPDCLshort.mp4";
import Trademic from "../assets/Projects/Trademic/AndroidRatioImage.mp4";

const Projects = () => {
  const imgContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imgContainer,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5]);


  const projectThumbnails = [

  {
    src: Trademic,
    scale: scale2,
    h: "h-auto",
    w: "w-[25vh]",
    mTop:"mt-[vh]",
    mLeft:"ml-[20vw]"
  },
    {
    src: PDCL,
    scale: scale1,
    h: "h-auto",
    w: "w-[25vw]"
  },
]


  return (
    <div ref={imgContainer} className="relative h-[300vh] bg-slate-500">
      <div className="sticky top-16 h-[100vh] overflow-hidden">
        {projectThumbnails.map((project, index) => {
          return (
            <motion.div key={index} style={{scale: project.scale}} className=" absolute top-10 h-full w-full flex justify-center items-center">
          <div className={`relative ${project.h} ${project.w}`}>
            <video autoPlay muted loop className={`object-cover rounded-lg ${project.mTop} ${project.mLeft}`}>
              <source src={project.src} type="video/mp4"/>
            </video>

          </div>
        </motion.div>
          )
        })}
        
        <h1 className="badgeText font-bold text-5xl md:text-8xl pt-10 text-center pb-5 text-white">
          Projects
        </h1>
      </div>
    </div>
  );
};

export default Projects;
