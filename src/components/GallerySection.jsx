import React, { useRef } from "react";
import img1 from "../assets/Gallery/img1.webp";
import img2 from "../assets/Gallery/img2.webp";
import img3 from "../assets/Gallery/img3.webp";
import img4 from "../assets/Gallery/img4.webp";
import img5 from "../assets/Gallery/img5.webp";
import img6 from "../assets/Gallery/img6.webp";
import img7 from "../assets/Gallery/img7.webp";
import img8 from "../assets/Gallery/img8.webp";
import img9 from "../assets/Gallery/img9.webp";
import img10 from "../assets/Gallery/img10.webp";
import img11 from "../assets/Gallery/img11.webp";
import img12 from "../assets/Gallery/img12.webp";
import img13 from "../assets/Gallery/img13.webp";
import img14 from "../assets/Gallery/img14.webp";
import img15 from "../assets/Gallery/img15.webp";
import img16 from "../assets/Gallery/img16.webp";
import img17 from "../assets/Gallery/img17.webp";
import img18 from "../assets/Gallery/img18.webp";
import { useScroll, useTransform, motion } from "framer-motion";

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
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
];

const Column = ({ images, y = 0, h }) => {
  return (
    <div>
      <motion.div
        className={` cloumn w-[33vw]  flex flex-col gap-2 ${h}`}
        style={{ y }}>
        {images.map((src, index) => {
          return (
            <div key={index} className="imagecontainer w-full h-full relative overflow-hidden">
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
    <div className="main">
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
  );
};

export default GallerySection;
