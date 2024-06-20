import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-gray-400 px-4">
      <div className="container mx-auto flex flex-wrap justify-between gap-4">
        <div className="border-r px-4 mx-auto py-8">
          <div className="flex mt-4 gap-4">
            {/* Quick Links */}
            <div>
              <h2 className="text-lg text-center font-medium text-slate-200">
                As a Scrum Master
              </h2>
              <div className="mt-4 flex justify-between">
                <div className="flex flex-col px-4">
                  <p className="hover:text-white transition duration-300">
                    ☺ Facilitating Continuous Improvement
                  </p>
                  <p className="hover:text-white transition duration-300">
                    ☺ Removing Impediments
                  </p>
                  <p className="hover:text-white transition duration-300">
                    ☺ Enhancing Communication and Collaboration
                  </p>
                  <p className="hover:text-white transition duration-300">
                    ☺ Promoting Agile Best Practices
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-lg text-center font-medium text-slate-200">
                As a Product Designer
              </h2>
              <div className="mt-4 flex justify-between">
                <div className="flex flex-col px-4">
                  <p className="hover:text-white transition duration-300">
                    ☺ User-Centered Design
                  </p>
                  <p className="hover:text-white transition duration-300">
                    ☺ Enhanced Usability and Accessibility
                  </p>
                  <p className="hover:text-white transition duration-300">
                    ☺ Innovative Solutions and Differentiation
                  </p>
                  <p className="hover:text-white transition duration-300">
                    ☺ Alignment with Business Goals
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-lg text-center font-medium text-slate-200">
                As a Frontend Developer
              </h2>
              <div className="mt-4 flex justify-between">
                <div className="flex flex-col px-4">
                  <p className="hover:text-white transition duration-300">
                    ☺ Enhanced User Experience
                  </p>
                  <p className="hover:text-white transition duration-300">
                    ☺ Performance Optimization
                  </p>
                  <p className="hover:text-white transition duration-300">
                    ☺ Maintainable and Scalable Code
                  </p>
                  <p className="hover:text-white transition duration-300">
                    ☺ Cross-Functional Collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Me */}
        <div className="text-center my-auto mx-auto py-4">
          <h2 className="text-xl font-bold text-white">Catch Up with Me</h2>

          <div className="flex flex-col items-center mt-2 h-full">
            <h2 className="text-lg font-medium text-slate-200"></h2>
            <p>Feel free to reach out to me for collaboration,</p>
            <p>project inquiries, or just to connect!</p>

            <div className="mt-4 flex space-x-4">
              <motion.a
                href="tel:+8801518990333"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <svg
                  className="w-[40px] h-[40px] fill-[#8e8e8e] hover:fill-[#ffffff] hover:shadow-lg hover:shadow-[#0284c7] p-2 rounded-xl shadow-sm shadow-[#0284c7] transition duration-300"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg">
                  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
                </svg>
              </motion.a>
              <motion.a
                href="https://github.com/MdMirzaShihab"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <svg
                  className="w-[40px] h-[40px] fill-[#8e8e8e] hover:fill-[#ffffff] hover:shadow-lg hover:shadow-[#0284c7] p-2 rounded-xl shadow-sm shadow-[#0284c7] transition duration-300"
                  viewBox="0 0 496 512"
                  xmlns="http://www.w3.org/2000/svg">
                  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mdmirza/"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <svg
                  className="w-[40px] h-[40px] fill-[#8e8e8e] hover:fill-[#ffffff] hover:shadow-lg hover:shadow-[#0284c7] p-2 rounded-xl shadow-sm shadow-[#0284c7] transition duration-300"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg">
                  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </motion.a>
              <motion.a
                href="mailto:contact@mirzashihab.com"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <svg
                  className="w-[40px] h-[40px] fill-[#8e8e8e] hover:fill-[#ffffff] hover:shadow-lg hover:shadow-[#0284c7] p-2 rounded-xl shadow-sm shadow-[#0284c7] transition duration-300"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg">
                  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                  <path d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
              {/* Scroll to Top Button */}
      <div className="text-center my-auto mx-auto py-4">
        {/* ... Your other content ... */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col justify-center items-center font-medium px-2 rounded-xl hover:shadow-lg group hover:shadow-[#0284c7] shadow-sm shadow-[#0284c7]">
          <svg
            className="w-[70px] h-[70px] fill-[#8e8e8e] group-hover:fill-[#ffffff] "
            viewBox="0 0 320 512"
            xmlns="http://www.w3.org/2000/svg">
            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"></path>
          </svg>
          <h1 className="text-sm -mt-[20px] pb-[10px] group-hover:text-white ">Scroll to Top</h1>
        </motion.button>
      </div>
      </div>



      {/* Copyright */}
      <div className="mt-8 text-center border-t border-gray-800 py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MD Mirza Shihab. All rights
          reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
