import React from 'react';
import hero from '../assets/HeroImg.png';

const Hero = () => {

  return (
    <div className=' bg-sky-50 flex items-center justify-center w-full'>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='w-1/2'>
          <img src={hero} className="object-contain w-full h-full" alt="Hero" />
        </div>
        <div className='w-1/2'>
          <p className='text-xl md:text-9xl font-black font-dancing mt-10 -ml-80'>Md Mirza</p>
          <p className='text-xl md:text-5xl font-sans font-bold  -ml-40'>a Software Engineer</p>
          <p className='text-xl md:text-2xl font-dancing'>Specializing in Frontend Development</p>

        </div>
      </div>
    </div>
  );
}

export default Hero;
