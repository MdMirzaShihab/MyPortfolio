import React, { useRef, memo } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import LazyVideo from "./LazyVideo";
import PDCL from "../assets/Projects/PDCL/PortfolioPDCLshort.mp4";
import Trademic from "../assets/Projects/Trademic/Trademic.mp4";
import Boipoka from "../assets/Projects/Boipoka/Boipoka.mp4";
import CEdelivery from "../assets/Projects/CEdelivery/CEdeliveryVdo.mp4";
import Exponentum from "../assets/Projects/Exponentum/Exponentum.mp4";
import FlyingFarmers from "../assets/Projects/FlyingFarmers/FlyingFarmersVdo.mp4";
import Pogoda from "../assets/Projects/Pogoda/POGODA.mp4";
import Sabisy from "../assets/Projects/Sabisy/SABISY.mp4";
import Subidha from "../assets/Projects/Subidha/SubidhaParkingSolution.mp4";

const ProjectSection = memo(() => {
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
      id: 1,
      vdo: PDCL,
      scale: scale1,
      title: "Popular Diagnostic Center WebApp",
    },
    {
      id: 2,
      vdo: Trademic,
      scale: scale2,
      title: "Trademic- IOT Application for Pandamic",
    },
    {
      id: 3,
      vdo: Boipoka,
      scale: scale3,
      title: "Boipoka- Book Shareing WebApp",
    },
    {
      id: 4,
      vdo: CEdelivery,
      scale: scale4,
      title: "CEdelivery- Food Delivery Project ",
    },
    {
      id: 5,
      vdo: Exponentum,
      scale: scale5,
      title: "Exponentum- Pandamic Tackle App idea",
    },
    {
      id: 6,
      vdo: FlyingFarmers,
      scale: scale6,
      title: "Flying Farmers- Modern Farming Project",
    },
    {
      id: 7,
      vdo: Pogoda,
      scale: scale4,
      title: "Pogoda- AR App for Education",
    },
    {
      id: 8,
      vdo: Sabisy,
      scale: scale5,
      title: "Sabisy- RoadSafety IOT project",
    },
    {
      id: 9,
      vdo: Subidha,
      scale: scale6,
      title: "Subidha- Modern Parking solution project",
    },
  ];

  return (
    <div>
      <div
        ref={imgContainer}
        className="relative h-[300vh] bg-gradient-to-b from-[#060f30] via-purple-900 to-white hidden lg:block">
        <div className="sticky top-16 h-[100vh] overflow-hidden">
          {projectThumbnails.map((project) => {
            return (
              <motion.div
                key={project.id}
                style={{ scale: project.scale }}
                className="el md:mt-24 mt-0">
                <div className={`imageContainer`}>
                  <LazyVideo
                    src={project.vdo}
                    className="object-cover rounded-lg shadow-lg shadow-[#0284c7]"
                    title={project.title}
                  />
                </div>
              </motion.div>
            );
          })}

          <h1 className="badgeText font-bold text-7xl p-10 pt-8 text-center text-white">
            Explore My Creative Journey
          </h1>
        </div>
      </div>

      {/*  Mobile version */}

      <div className="lg:hidden bg-gradient-to-b from-[#060f30] to-purple-900 ">
        <h1 className="font-bold text-4xl px-10 pb-5 text-center text-white">
          Explore My Creative Journey
        </h1>
        <p className="font-dancing text-xl text-yellow-500 text-center">
          {" "}
          Showcasing some short clips of my projects{" "}
        </p>
        <div>
          {projectThumbnails.map((project) => {
            return (
              <div
                key={project.id}
                className=" flex flex-col shadow-sky-300 shadow-md border-sky-200 items-center justify-center">
                <LazyVideo
                  src={project.vdo}
                  className="object-contain rounded-lg shadow-lg h-[30vh] mt-20"
                  title={project.title}
                />
                <p className="text-yellow-500 font-semibold p-2">
                  *{project.title}*
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

ProjectSection.displayName = 'ProjectSection';

export default ProjectSection;
