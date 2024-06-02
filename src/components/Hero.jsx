import React from 'react';
import hero from '../assets/HeroImg.png';

const Hero = () => {

  return (
    <div className=' bg-sky-50 flex items-center justify-center w-full'>
      <div className='flex flex-row w-full'>
        <div className='w-1/2'>
          <img src={hero} className="object-contain w-full h-full" alt="Hero" />
        </div>
        <div className='w-1/2'>
          <p className='text-3xl sm:text-5xl lg:text-9xl text-center mt-10 2xl:mt-28 -ml-24 sm:-ml-40 xl:-ml-60 text-slate-800 '>Md Mirza Shihab</p>
          <p className='text-xl sm:text-2xl lg:text-6xl text-center -ml-24 sm:-ml-40 xl:-ml-60 font-bold text-slate-600'>Passionate Software Engineer | Certified Scrum Master | Aspiring Educator and Researcher</p>
          <p className='text-xl md:text-2xl font-dancing'>Specializing in Frontend Development</p>

        </div>
      </div>
    </div>
  );
}

export default Hero;
