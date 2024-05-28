import React, { useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
  useEffect(() => {
    gsap.to('#Pphoto', {
      x: 20,
      repeat: -1,
      yoyo:true,
      rotation:180,
      duration:3,
      ease: 'elastic'
    });
  }, []);

  return (
    <div className=''> 
      <div className='bg-gray-400 flex h-96 items-center p-4 '>
        <div>
          Hero Section Text
        </div>
        <div id='Pphoto' className='h-48 w-48 bg-blue-400 border-2'>
          <h1 className='text-center'>Hero section Img</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
