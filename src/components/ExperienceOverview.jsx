import React from 'react'
import { ExpData } from "../Constants";
  
  const order = [1, 4, 2, 5, 3];
  
  // Sort ExpData based on the defined order
  const sortedExpData = ExpData.sort(
    (a, b) => order.indexOf(a.companyID) - order.indexOf(b.companyID)
  );


const ExperienceOverview = () => {
  return (
    <div className='flex flex-col items-center bg-purple-900 lg:bg-white'>
       <h1 className="font-bold text-6xl lg:text-8xl p-10 py-20 text-center text-gray-200 lg:text-[#192f60]">
       At a Glance
      </h1>
<div className="ml-0 md:ml-12 lg:w-2/3">
          <div className="mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden pb-40 p-10 h-full">
              <div
                className="border-2-2 border-[#0284c7] absolute h-full border"
                style={{
                  right: "50%",
                  border: "4px solid #0284c7",
                  borderRadius: "1%",
                }}></div>
              <div
                className="border-2-2 border-[#4f46e5] absolute h-full border"
                style={{
                  left: "50%",
                  border: "4px solid #4f46e5",
                  borderRadius: "1%",
                }}></div>
              <div className="flex justify-between mb-[6vw] ">
                <div className="text-left">
                  <h1 className="font-bold shadow-xl p-4 rounded-xl shadow-purple-400 lg:shadow-sky-200 text-2xl lg:text-5xl text-purple-400 lg:text-sky-600">
                    Development
                  </h1>
                </div>
                <div className="text-right">
                  <h1 className="font-bold shadow-xl p-4 rounded-xl shadow-purple-400 lg:shadow-indigo-200 text-2xl lg:text-5xl text-purple-400 lg:text-indigo-600">
                    Research
                  </h1>
                </div>
              </div>
              {sortedExpData.map((exp, index) => (
                <div
                  key={exp.companyID}
                  className={`mb-8 flex justify-between ${
                    index % 2 === 0
                      ? "flex-row-reverse items-center w-full left-timeline"
                      : "items-center w-full right-timeline"
                  }`}>
                  <div className="order-1 w-5/12"></div>
                  <div
                    className={`order-1 w-5/12 px-1 py-4 ${
                      index % 2 === 0 ? "text-right text-sky-400 lg:text-sky-600" : "text-left text-indigo-400 lg:text-indigo-600"
                    }`}>
                    <p className="mb-3 text-base">
                      {exp.duration}
                    </p>
                    <h4 className="mb-1 font-bold text-lg lg:text-2xl ">
                      {exp.companyName}
                    </h4>
                    <p className='text-sm font-bold md:text-base text-gray-200 lg:text-gray-400 mb-3'>{exp.technology}</p>
                    <p className='text-sm md:text-base text-purple-300 lg:text-gray-600 mb-5'>{exp.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ExperienceOverview