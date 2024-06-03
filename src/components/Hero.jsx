import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import hero from '../assets/HeroImg.png';

const whoIam = ["Passionate Software Engineer", "Certified Scrum Master", "Aspiring Educator and Researcher"];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(whoIam[0]);
  const mirzaRef = useRef(null);
  let titleIndex = 0;

  useEffect(() => {
    // Typewriter effect for the 'whoIam' array
    const changeTitle = () => {
      gsap.to('.title', { opacity: 0, duration: 1, onComplete: updateTitle });
    };

    const updateTitle = () => {
      titleIndex = (titleIndex + 1) % whoIam.length;
      setCurrentTitle(whoIam[titleIndex]);
      gsap.to('.title', { opacity: 1, duration: 1 });
    };

    const titleInterval = setInterval(changeTitle, 3000);

    // Sliding animation for "Md MIRZA"
    gsap.timeline({ repeat: -1, yoyo: true })
      .fromTo(mirzaRef.current, 
        { x: '100%' }, 
        { x: '0%', duration: 2, ease: 'power2.out' })
      .to(mirzaRef.current, 
        { x: '-100%', duration: 2, ease: 'power2.in' });

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <div className='relative bg-sky-50 flex items-center justify-center w-full'>
      <div className='flex flex-row w-full'>
        <div className='w-1/2 z-10'>
          <img src={hero} className="object-contain w-full h-full" alt="Hero" />
        </div>
        <div className='w-1/2'>
          <p className='text-3xl sm:text-5xl lg:text-8xl xl:text-9xl text-center mt-10 2xl:mt-28 -ml-24 sm:-ml-40 xl:-ml-60 text-slate-800 pr-10'>Md Mirza Shihab</p>
          <p className='title text-lg sm:text-2xl lg:text-4xl 2xl:text-5xl text-center -ml-24 sm:-ml-40 xl:-ml-60 font-bold text-slate-600 pr-10'>{currentTitle}</p>
          <p className='text-xl md:text-2xl font-dancing'>Specializing in Frontend Development</p>
        </div>
      </div>
      <div ref={mirzaRef} className='absolute font-bold  text-[100px] xl:text-[300px] top-0 opacity-10 h-auto z-0'>
        Md MIRZA
      </div>
    </div>
  );
}

export default Hero;
