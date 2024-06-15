import React from "react";
import { motion } from 'framer-motion';
import { Hero, BadgeSection, ProjectSection, ExperienceSection } from "../components";

function Home() {
  return (
    <div className="bg-[#ffffff]">
      <Hero />
      <BadgeSection />
      <ProjectSection />
      <div className="absolute inset-x-0 -mt-64 flex justify-center">
      <motion.div
      className="relative max-w-3xl mx-auto m-5 p-6 bg-slate-500 flex justify-center items-center rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ y: -10, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-50 mb-1">Want to Dive Deeper?</h2>
        <p className="text-slate-300 mb-3">
          You've just seen a glimpse of my work through these short videos. Click the button below to explore all my projects in detail.
        </p>
        <motion.a
          href="/projects"
          className="inline-block px-6 py-3 text-white bg-sky-500 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          See All Projects
        </motion.a>
      </div>
    </motion.div>
      </div>
      
      <ExperienceSection />
    </div>
  );
}

export default Home;
