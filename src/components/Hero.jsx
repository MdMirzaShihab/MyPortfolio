import React, { useEffect } from 'react';
import gsap from 'gsap';
import hero from '../assets/images/hero.jpeg';

const Hero = () => {
  useEffect(() => {
    gsap.fromTo('.Pphoto',{
      x: 0,
      rotation:0,
      borderRadius:'0%',
    }, {
      x: 250,
      repeat: -1,
      yoyo:true,
      rotation:360,
      borderRadius:'100%',
      duration:2,
      ease: 'bounce.out'
    });
  }, []);

  return (
    <div className=''> 
      <div className='bg-gray-400 flex h-96 items-center p-4 '>
        <div>
          Hero Section Text
        </div>
        <div  className='Pphoto h-48 w-48 bg-blue-400 border-2'>
          <h1 className='text-center'>Hero section Img</h1>
          <img src={hero} className="Pphoto h-full overflow-hidden" alt="" />
          
        </div>

      </div>
    </div>
  );
}

export default Hero;
