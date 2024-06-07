import React from "react";
import {
  Hero,
  Badge,
  Projects,
} from "../components";



function Home() {

  return (
    <div className="bg-[#ffffff]">
      <Hero />
      <Badge />
      <Projects />
    </div>
  );
}

export default Home;