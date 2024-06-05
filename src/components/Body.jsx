import React, { useEffect, useRef } from 'react';
import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react';
import CSM from '../assets/CSM-logo.png';
import GPM from '../assets/GPM.png';
import UTM from '../assets/UTM-LOGO.png';

const Body = () => {
    const lenisRef = useRef()
  
    useEffect(() => {
      function update(time) {
        lenisRef.current?.lenis?.raf(time * 1000)
      }
    
      gsap.ticker.add(update)
    
      return () => {
        gsap.ticker.remove(update)
      }
    }, []);

  return (
    <div>
      <h1 className='relative bg-[#060f30] h-[700px]'>
        <div className='absolute flex w-80 h-96 p-2 -top-3 right-5 rotate-12 bg-white justify-center items-center rounded-2xl border-4 border-sky-200'>
          <img src={CSM} className="object-contain" alt="CSM" />
        </div>
        <div className='absolute flex w-80 h-96 p-2 -top-5 right-72 -rotate-12 bg-white justify-center items-center rounded-2xl border-4 border-sky-200'>
          <img src={GPM} className="object-contain" alt="GPM" />
        </div>
        <div className='absolute flex w-80 h-96 p-2 top-5 right-36 bg-white justify-center items-center rounded-2xl border-4 border-sky-200' >
          <img src={UTM} className="object-contain" alt="UTM" />
        </div>
      </h1>
    </div>
  );
}

export default Body;
