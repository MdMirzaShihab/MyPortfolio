import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { images } from "../Constants";

const Column = ({ images, y = 0, h }) => {
  return (
    <div>
      <motion.div
        className={` cloumn w-[33vw]  flex flex-col gap-2 ${h}`}
        style={{ y }}>
        {images.map((src, index) => {
          return (
            <div
              key={index}
              className="imagecontainer w-full h-full relative overflow-hidden">
              <img
                src={src}
                className="greyscale-image w-full h-full rounded-xl object-cover min-w-[250px]"
                alt="image"
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

const GallerySection = () => {
  const galleryContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: galleryContainer,
    offset: ["start end", "end start"],
  });

  const scrollSpeed1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 4]
  );
  const scrollSpeed2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 7]
  );
  const scrollSpeed3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 0.1]
  );

  return (
    <div>
      <div className="main hidden lg:block">
        <div className="gallery h-[350vh] flex flex-row gap-2 p-2 overflow-hidden relative">
          <Column
            images={[
              images[8],
              images[0],
              images[11],
              images[2],
              images[1],
              images[7],
              images[10],
              images[8],
              images[0],
              images[11],
              images[2],
              images[1],
              images[7],
              images[10],
            ]}
            y={scrollSpeed1}
            h="-mt-[315vh]"
          />
          <Column
            images={[
              images[13],
              images[12],
              images[15],
              images[14],
              images[9],
              images[13],
              images[12],
              images[15],
              images[14],
              images[9],
            ]}
            y={scrollSpeed2}
            h="-mt-[520vh]"
          />
          <Column
            images={[
              images[4],
              images[16],
              images[3],
              images[10],
              images[6],
              images[17],
              images[5],
              images[4],
              images[16],
              images[3],
              images[10],
              images[6],
              images[17],
              images[5],
              images[0],
            ]}
            y={scrollSpeed3}
            h="-mt-[10vh]"
          />
        </div>
      </div>
      <div className="lg:hidden">
        {
          images.map((image, index) => {
            return(
              <div key={index} className="flex flex-wrap">
              <img src={image} className="w-[50vw]">
                
              </img>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default GallerySection;
