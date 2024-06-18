import React, { useRef } from 'react';
import img1 from  "../assets/Gallery/boigalary1.webp";
import img2 from  "../assets/Gallery/boigalary2.webp";
import img3 from  "../assets/Gallery/boigalary3.webp";
import img4 from  "../assets/Gallery/boigalary4.webp";
import img5 from  "../assets/Gallery/boigalary5.webp";
import img6 from  "../assets/Gallery/boigalary6.webp";
import img7 from  "../assets/Gallery/boigalary7.webp";
import img8 from  "../assets/Gallery/boigalary8.webp";
import img9 from  "../assets/Gallery/boigalary9.webp";
import img10 from  "../assets/Gallery/boigalary10.webp";
import img11 from  "../assets/Gallery/boigalary11.webp";
import img12 from  "../assets/Gallery/boigalary12.webp";
import img13 from  "../assets/Gallery/boigalary13.webp";
import { useScroll, useTransform, motion } from 'framer-motion';


const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13
];





const Column = ({images, y=0, h }) => {
  return (
    <div >
    <motion.div className={` cloumn w-[25vw]  flex flex-col gap-2 ${h}`} style={{y}}>
      {
        images.map((src, index) => {
          return (
              <div key={index} className='imagecontainer w-full h-full relative'>
                <img
              src={src}
              className="w-full h-full rounded-xl object-cover min-w-[250px]"
              alt="image"
            />
              </div>
          );
        })
      }
    </motion.div>
    </div>

  )
}

const GallerySection = () => {


  const galleryContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: galleryContainer,
    offset: ["start end", "end start"],
  })

const scrollSpeed1 = useTransform (scrollYProgress, [0,1], [0,(window.innerHeight*2)]) 
const scrollSpeed2 = useTransform (scrollYProgress, [0,1], [0,(window.innerHeight*7)]) 
const scrollSpeed3 = useTransform (scrollYProgress, [0,1], [0,(window.innerHeight*0.5)]) 
const scrollSpeed4 = useTransform (scrollYProgress, [0,1], [0,(window.innerHeight*8)]) 


  return (
    <div className='main'>
    <div className='gallery h-[100vh] flex flex-row gap-2 p-2 overflow-hidden relative'>
      <Column images = {[images[0], images[1], images[2]]} y={scrollSpeed1} h="-mt-[170vh]"/>
      <Column images = {[images[3], images[4], images[5]]} y={scrollSpeed2} h="-mt-[600vh]"/>
      <Column images = {[images[6], images[7], images[8]]} y={scrollSpeed3} h="-mt-[40vh]"/>
      <Column images = {[images[9], images[10], images[11]]} y={scrollSpeed4} h="-mt-[680vh]"/>
    </div>
    </div>

  )
}

export default GallerySection