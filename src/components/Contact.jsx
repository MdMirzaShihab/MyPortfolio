import React from 'react'
import img from "../assets/contactImgLg.webp";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-[#060f30]">
    <div className="flex justify-center min-h-screen">
      <div className="hidden bg-cover lg:block lg:w-2/5" style={{
    backgroundImage: `url(${img})`, }}>
      </div>
      <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
        <div className="w-full">
          <h1 className="text-2xl font-semibold tracking-wider text-slate-400 capitalize">
            Contact Me.
          </h1>
          <p className="mt-4 text-slate-300">
            Let’s get .
          </p>
          <div className="mt-6">
            <h1 className="text-gray-200">Social Media</h1>
            <div className="mt-3 md:flex md:items-center md:-mx-2">
              <motion.button className="flex justify-center items-center w-full px-4 py-3 text-[#0284c7] rounded-md md:w-auto md:mx-2 border border-[#0284c7] shadow-[#0284c7] shadow-md"  whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
              <svg className="w-[30px] h-[30px] fill-[#0284c7]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>

</svg>
                   <span className="mx-2 font-bold">
                                LinkedIn
                            </span>
              </motion.button>
              <motion.button className="flex justify-center items-center w-full px-4 py-3 text-[#0284c7] rounded-md md:w-auto md:mx-2 border border-[#0284c7] shadow-[#0284c7] shadow-md"  whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
              <svg className="w-[30px] h-[30px] fill-[#0284c7]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
<path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>

</svg>
                   <span className="mx-2 font-bold justify-center">
                                Facebook
                            </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};


export default Contact