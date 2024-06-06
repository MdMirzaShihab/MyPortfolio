import React from 'react'
import CSM from '../assets/CSM-logo.png';
import GPM from '../assets/GPM.png';
import UTM from '../assets/UTM-LOGO.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Body = () => {

    useGSAP (()=> {
        gsap.from("#CSM", {
            x:700,
            y:-200,
            rotate:12,
            duration:3,
        
        })
    })



  return (
    <div data-scroll-section>
        <div className=' relative bg-[#060f30] h-[700px]'>
          <div id='CSM' className='absolute flex w-[300px] h-[400px] p-2 top-36 left-[40vw]  -rotate-6 bg-white justify-center items-end rounded-2xl border-4 border-sky-200 overflow-hidden'>
          <img src={CSM} className=" object-contain " alt="CSM" />
          </div>
          <div id='GPM' className='absolute flex w-[300px] h-[400px] p-2 top-36 left-[10vw] -rotate-6 bg-white justify-center items-end rounded-2xl border-4 border-sky-200 overflow-hidden'>
          <img src={GPM} className=" object-contain " alt="CSM" />
          </div>
          <div id='UTM' className='absolute flex w-[300px] h-[400px] p-2 top-36 left-[70vw] -rotate-6 bg-white justify-center items-end rounded-2xl border-4 border-sky-200 overflow-hidden'>
          <img src={UTM} className="  object-contain " alt="CSM" />
          </div>
          <div>
            
          </div>
        </div>
    </div>
  )
}

export default Body