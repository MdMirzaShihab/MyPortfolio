import React from "react";
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
      <div className="flex justify-center">
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
