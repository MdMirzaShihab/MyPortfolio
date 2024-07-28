import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Hero,
  BadgeSection,
  ProjectSection,
  ExperienceSection,
  ExperienceOverview,
  GallerySection,
  Footer,
} from "../components";

function Home() {
  return (
    <div className="bg-[#ffffff]">
      <Hero />
      <BadgeSection />
      <ProjectSection />
      <div className="flex justify-center bg-purple-900 lg:bg-white">
        <motion.div
          data-scroll
          data-scroll-speed="0.2"
          className="relative w-full mx-auto p-6 h-60 bg-[#060f30] flex justify-center items-center rounded-2xl shadow-2xl transition-shadow duration-300">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-50 mb-1">
              Want to Dive Deeper?
            </h2>
            <p className="text-slate-300">
              You've just seen a glimpse of my work through these short videos.
            </p>
            <p className="text-slate-300 mb-3">
              Click the button below to explore all my projects in detail.
            </p>
            <Link to="/projects">
              <motion.div
                className="inline-block px-6 py-3 border-4 border-sky-200 text-slate-200 font-bold hover:shadow-[#0284c7] shadow-[#0284c7] shadow-md rounded-full hover:shadow-lg transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                See All Projects
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>

      <ExperienceSection />
      <ExperienceOverview />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default Home;
