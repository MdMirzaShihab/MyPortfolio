import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react';
import hero from '../assets/HeroImg.png';
import heroImgbg1 from '../assets/HeroImgbg1.png';
import heroImgbg2 from '../assets/HeroImgbg2.png';


const whoIam = ["Passionate Software Engineer", "Certified Scrum Master", "Aspiring Educator and Researcher"];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(whoIam[0]);
  let titleIndex = 0;

  useGSAP(() => {
    // Typewriter effect for the 'whoIam' array
    const changeTitle = () => {
      gsap.to('.title', { opacity: 0, duration: 1, onComplete: updateTitle });
    };

    const updateTitle = () => {
      titleIndex = (titleIndex + 1) % whoIam.length;
      setCurrentTitle(whoIam[titleIndex]);
      gsap.to('.title', { opacity: 1, duration: 1 });
    };

    gsap.from('.background1', {
      x: -500,
      duration:0.5,
      delay:0.5
    })
    gsap.from('.background2', {
      x: -500,
      duration:0.5,
      delay:0
    })

    gsap.from('.HeroText', {
      x: -1500,
      duration:1,
      delay:1
    })

    const titleInterval = setInterval(changeTitle, 3000);

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <div className='flex flex-row bg-slate-400 w-full h-[700px]'>
      {/* Container for images */}
   
      <div className='relative w-full h-auto'>
        {/* Background images */}
        <img src={heroImgbg2} className="background1 absolute left-0 top-0 w-full h-full object-cover object-top" alt="Background" />
        <img src={heroImgbg1} className="background2 absolute left-0 top-0 w-full h-full object-cover object-top" alt="Background" />
      <img src={hero} className="HeroImage absolute left-0 top-0 w-full h-full object-cover object-top z-10" alt="Hero" />
      </div>
      {/* Text content */}
      <div className='HeroText flex flex-col w-full pt-20 lg:pt-0 px-3 gap-3 xl:gap-10 justify-start lg:justify-center items-end lg:items-center -ml-80 z-0'>
        <p id='herotext' className='HeroName text-4xl sm:text-6xl lg:text-8xl xl:text-9xl text-center font-bold text-[#eeeee2]'>Md Mirza Shihab</p>
        <p id='herotext' className='title text-md sm:text-2xl lg:text-4xl 2xl:text-5xl text-center font-bold text-[#eeebda]'>{currentTitle}</p>
        <p id='herotext' className='HeroDetail text-md md:text-3xl text-slate-200 font-dancing text-center'>Specializing in Frontend Development</p>
      </div>
    </div>
  );
}

export default Hero;
