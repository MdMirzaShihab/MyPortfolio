import React from "react";
import {
  Hero,
  Body,
} from "../components";



function Home() {

  return (
    <div className="bg-[#ffffff]">
      <Hero />
      <Body />
      <div className="h-[700px]"></div>
    </div>
  );
}

export default Home;