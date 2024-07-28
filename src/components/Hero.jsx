import React, { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import hero from "../assets/HeroImg.webp";
import heromobile from "../assets/HomeImgMobile.webp";
import heroImgbg1 from "../assets/HeroImgbg1.webp";
import heroImgbg2 from "../assets/HeroImgbg2.webp";

const whoIam = [
  "Passionate Software Engineer",
  "Certified Scrum Master",
  "Aspiring Educator and Researcher",
];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(whoIam[0]);
  let titleIndex = 0;

  useGSAP(() => {
    const changeTitle = () => {
      gsap.to(".title", { opacity: 0, duration: 1, onComplete: updateTitle });
    };

    const updateTitle = () => {
      titleIndex = (titleIndex + 1) % whoIam.length;
      setCurrentTitle(whoIam[titleIndex]);
      gsap.to(".title", { opacity: 1, duration: 1 });
    };

    gsap.from(".background1", {
      x: -500,
      duration: 0.5,
      delay: 1,
      opacity: 0,
    });
    gsap.from(".background2", {
      x: -500,
      duration: 0.5,
      delay: 0.5,
      opacity: 0,
    });

    gsap.from(".HeroText", {
      x: -100,
      duration: 1,
      delay: 1.5,
      opacity: 0,
      stagger: 1,
    });

    const titleInterval = setInterval(changeTitle, 3000);

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <div>
      <div className="hidden lg:block">
        <div className="flex flex-row bg-slate-400 w-full h-[800px] pt-16">
          {/* Container for images */}

          <div className="relative w-full h-auto ">
            {/* Background images */}
            <img
              src={heroImgbg2}
              className="background1 absolute left-0 top-0 w-full h-full object-cover object-top"
              alt="Background"
            />
            <img
              src={heroImgbg1}
              className="background2 absolute left-0 top-0 w-full h-full object-cover object-top"
              alt="Background"
            />
            <img
              src={hero}
              className="HeroImage absolute left-0 top-0 w-full h-full object-cover object-top z-10"
              alt="Hero"
            />
          </div>
          {/* Text content */}
          <div className="HeroText flex flex-col w-full pt-20 lg:pt-0 px-3 gap-3 xl:gap-10 justify-start lg:justify-center items-end lg:items-center -ml-80 z-0 ">
            <p
              id="herotext"
              className="HeroName text-8xl xl:text-9xl text-center font-bold text-[#eeeee2]  tracking-tight">
              Md Mirza Shihab
            </p>
            <p
              id="herotext"
              className="title  text-5xl 2xl:text-6xl text-center font-bold text-[#eeebda] font-dancing">
              {currentTitle}
            </p>
            <p
              id="herotext"
              className="md:p-3 lg:ml-20 md:ml-24 ml-40 HeroDetail font-bold text-md text-slate-300 text-center">
              I am a results-driven Software Engineer with a deep passion for
              transforming innovative ideas into real-world solutions. As a
              Certified Scrum Master (CSM), I have honed my skills in Agile
              methodologies and project management, allowing me to effectively
              lead teams and drive successful outcomes in the fast-paced
              software industry.
            </p>
          </div>
        </div>
      </div>


  {/*  Mobile version */}



      <div className="lg:hidden">
        <div  className="pt-10">
        <img
              src={heromobile}
              className="absolute w-full h-[60vh] object-cover object-top"
              alt="BackgroundImage"
            />
            <div className="relative h-[60vh] bg-gradient-to-t from-[#060f30] to-transparent to-40% flex flex-col justify-end items-center pb-10">
            <p className="text-2xl text-white text-center">Hi..!!👋</p>
              <p className="text-2xl font-semibold text-[#eeebda] text-center">I am Md Mirza Shihab.....</p>
              
              <p
              id="herotext"
              className="title text-4xl text-center font-bold text-[#eeebda] font-dancing">
              {currentTitle}
            </p>
           
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
