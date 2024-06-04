import React from 'react'
import CSM from '../assets/CSM-logo.png';
const Body = () => {
  return (
    <div>
        <h1 className='h-[700px] bg-[#060f30]'>
            2nd portion
            <img src={CSM} className="object-cover object-top" alt="CSM" />
        </h1>
    </div>
  )
}

export default Body