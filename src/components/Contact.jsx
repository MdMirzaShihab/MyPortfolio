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
            <div className="mt-3 md:flex md:items-center flex-wrap md:-mx-2">
            <a href='https://www.linkedin.com/in/mdmirza/' target='blank'>
              <motion.button className="flex justify-center items-center w-full px-4 py-3 text-[#0284c7] rounded-md md:w-[180px] md:mx-2 md:my-2 border border-[#0284c7] shadow-[#0284c7] shadow-md"  whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
              <svg className="w-[30px] h-[30px] fill-[#0284c7]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>

</svg>
                   <span className="mx-2 font-bold">
                                LinkedIn
                            </span>
              </motion.button>
              </a>
              <a href='https://github.com/MdMirzaShihab' target='blank'>
              <motion.button className="flex justify-center items-center w-full px-4 py-3 text-[#0284c7] rounded-md md:w-[180px] md:mx-2 md:my-2 border border-[#0284c7] shadow-[#0284c7] shadow-md"  whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
 <svg className="w-[30px] h-[30px] fill-[#0284c7]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>
</svg>
                   <span className="mx-2 font-bold">
                                Github
                            </span>
              </motion.button>
              </a>
              <a href="mailto:contact@mirzashihab.com" target='blank'>
              <motion.button className="flex justify-center items-center w-full px-4 py-3 text-[#0284c7] rounded-md md:w-[180px] md:mx-2 md:my-2 border border-[#0284c7] shadow-[#0284c7] shadow-md"  whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
<svg className="w-[30px] h-[30px] fill-[#0284c7]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
<path d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
</svg>
                   <span className="mx-2 font-bold">
                               Email
                            </span>
              </motion.button>
              </a>
              <a href='https://t.me/mirzashihab' target='blank'>
              <motion.button className="flex justify-center items-center w-full px-4 py-3 text-[#0284c7] rounded-md md:w-[180px] md:mx-2 md:my-2 border border-[#0284c7] shadow-[#0284c7] shadow-md"  whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
<svg className="w-[30px] h-[30px] fill-[#0284c7]" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
<path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
</svg>
                   <span className="mx-2 font-bold">
                                Telegram
                            </span>
              </motion.button>
              </a>
              <a href='https://github.com/MdMirzaShihab' target='blank'>
              <motion.button className="flex justify-center items-center w-full px-4 py-3 text-[#0284c7] rounded-md md:w-[180px] md:mx-2 md:my-2 border border-[#0284c7] shadow-[#0284c7] shadow-md"  whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
              <svg className="w-[30px] h-[30px] fill-[#0284c7]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
<path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>

</svg>
                   <span className="mx-2 font-bold justify-center">
                                Facebook
                            </span>
              </motion.button>
              </a>
              <a href="https://wa.me/qr/EFOBSKDSAJC4F1" target='blank'>
              <motion.button className="flex justify-center items-center w-full px-4 py-3 text-[#0284c7] rounded-md md:w-[180px] md:mx-2 md:my-2 border border-[#0284c7] shadow-[#0284c7] shadow-md"  whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
<svg className="w-[30px] h-[30px] fill-[#0284c7]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
<path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"></path>
</svg>
                   <span className="mx-2 font-bold">
                                WhatsApp
                            </span>
              </motion.button>
              </a>
              <a href="tel:+8801518990333" target='blank'>
              <motion.button className="flex justify-center items-center w-full px-4 py-3 text-[#0284c7] rounded-md md:w-[180px] md:mx-2 md:my-2 border border-[#0284c7] shadow-[#0284c7] shadow-md"  whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
<svg className="w-[30px] h-[30px] fill-[#0284c7]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
<path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
</svg>
                   <span className="mx-2 font-bold">
                                Call Now
                            </span>
              </motion.button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};


export default Contact