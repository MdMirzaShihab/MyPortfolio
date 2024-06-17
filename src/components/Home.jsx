import React from "react";
import { motion } from 'framer-motion';
import { Hero, BadgeSection, ProjectSection, ExperienceSection, ExperienceOverview, Footer } from "../components";

function Home() {
  return (
    <div className="bg-[#ffffff]">
      <Hero />
      <BadgeSection />
      <ProjectSection />
      <div className="flex justify-center">
      <motion.div
                data-scroll
                data-scroll-speed="0.2"
      className="relative w-full mx-auto m-5 p-6 bg-slate-500 flex justify-center items-center rounded-2xl shadow-2xl transition-shadow duration-300"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-50 mb-1">Want to Dive Deeper?</h2>
        <p className="text-slate-300 mb-3">
          You've just seen a glimpse of my work through these short videos. Click the button below to explore all my projects in detail.
        </p>
        <motion.a
          href="/projects"
          className="inline-block px-6 py-3 text-slate-800 bg-slate-200 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          See All Projects
        </motion.a>
      </div>
    </motion.div>
      </div>
      
      <ExperienceSection />
      <ExperienceOverview />
      <Footer />
    </div>
  );
}

export default Home;
