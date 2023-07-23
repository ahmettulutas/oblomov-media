"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import * as React from "react";

import { carouselVariants } from "@/constants/motinVariants";

type Props = {
  images: Array<string>;
}

export const Carousel: React.FC<Props> = ({ images }) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const intervalMiliSeconds = 4000;
  const imageCount = images.length;

  const paginate = React.useCallback((newDirection: number) => {
    const newIndex = currentImage + newDirection;
    // the newIndex stays within the bounds of the images array
    const boundedIndex = (newIndex + imageCount) % imageCount;
    setCurrentImage(boundedIndex);
    setDirection(newDirection);

  }, [currentImage, imageCount]);

  React.useEffect(() => {
    const interval = setInterval(() => paginate(1), intervalMiliSeconds);
    return (() => clearInterval(interval));
  }, [paginate]);

  return (
    <div className="relative w-screen h-96 flex justify-center items-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentImage}
          custom={direction} // can be < 0 or > 0;
          variants={carouselVariants}
          className="w-full h-full absolute"
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
        >
          <Image alt="todo" fill src={images[currentImage]} />
        </motion.div>
      </AnimatePresence>
      <button className="absolute z-10 top-1/2 left-4 rotate-180 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md" onClick={() => paginate(1)}>
        {"‣"}
      </button>
      <button className="absolute z-10 top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md" onClick={() => paginate(-1)}>
        {"‣"}
      </button>
    </div>
  );
};
