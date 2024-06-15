import React from "react";
import { Hero, BadgeSection, ProjectSection } from "../components";

function Home() {
  return (
    <div className="bg-[#ffffff]">
      <Hero />
      <BadgeSection />
      <ProjectSection />
      <div className="absolute bg-transparent h-20 w-full -mt-20 z-20">
        <div className=" flex justify-between">
        <div className="text-xl"> Wanna explore projects page? </div>
        <div> <button className=""> Let's go </button> </div>
        </div>
      </div>
      <div className="bg-black h-screen">

      </div>
    </div>
  );
}

export default Home;
