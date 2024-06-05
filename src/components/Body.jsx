import React from 'react'
import CSM from '../assets/CSM-logo.png';
const Body = () => {
  return (
    <div>
        <h1 className=' relative bg-[#060f30] h-[700px]'>
          <div className='absolute flex w-80 h-96 p-2 top-3 right-5 bg-white justify-center items-center rounded-2xl border-4 border-sky-200'>
          <img src={CSM} className=" object-contain " alt="CSM" />
          </div>
          <div className='absolute flex w-80 h-96 p-2 top-5 right-8 bg-white justify-center items-center rounded-2xl border-4 border-sky-200'>
          <img src={CSM} className=" object-contain " alt="CSM" />
          </div>
        </h1>
    </div>
  )
}

export default Body