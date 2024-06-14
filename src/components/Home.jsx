import React from "react";
import { Hero, BadgeSection, ProjectSection } from "../components";

function Home() {
  return (
    <div className="bg-[#ffffff]">
      <Hero />
      <BadgeSection />
      <ProjectSection />
      <div className="bg-black flex justify-between">
        <div className="text-xl text-white"> Wanna explore projects page? </div>
        <div> <button className="bg-white"> Let's go </button> </div>
      </div>
      <div className="bg-black h-screen">

      </div>
    </div>
  );
}

export default Home;
