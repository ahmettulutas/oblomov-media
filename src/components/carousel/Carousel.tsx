"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import * as React from "react";

import { carouselVariants } from "@/constants/motinVariants";

import { DotIndicators } from "./CustomIndicators";

type ImageCarousel = {
  images: Array<string>;
  imageCarousel: true;
}

type ChildrenCarousel = {
  imageCarousel: false;
  carouselItems: Array<React.ReactNode>;
}

export type CarouselProps = (ImageCarousel | ChildrenCarousel) & {
  loop?: boolean;
  showDots?: boolean;
};

export const Carousel: React.FC<CarouselProps> = (props) => {
  const { imageCarousel, loop, showDots } = props;

  const intervalMiliSeconds = 4000;
  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const items = imageCarousel ? props.images : props.carouselItems;
  const itemsCount = items.length;
  const paginate = React.useCallback((newDirection: number) => {
    const newIndex = current + newDirection;
    // the newIndex stays within the bounds of the images array
    const boundedIndex = (newIndex + itemsCount) % itemsCount;
    setCurrent(boundedIndex);
    setDirection(newDirection);

  }, [current, itemsCount]);

  const handleDotClick = (number: number) => {
    setCurrent(number);
  };

  React.useEffect(() => {
    if (loop) {
      const interval = setInterval(() => paginate(1), intervalMiliSeconds);
      return (() => clearInterval(interval));
    }
    else return;
  }, [paginate, loop]);

  return (
    <div className="relative w-screen h-[32rem] flex justify-center items-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction} // can be < 0 or > 0;
          variants={carouselVariants}
          className="w-full h-full absolute"
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
        >
          {imageCarousel ?
            <Image alt="todo" fill src={props.images[current]} />
            : props.carouselItems[current]
          }
        </motion.div>
      </AnimatePresence>
      <button className="absolute z-10 top-1/2 left-4 rotate-180 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md" onClick={() => paginate(1)}>
        {"‣"}
      </button>
      <button className="absolute z-10 top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md" onClick={() => paginate(-1)}>
        {"‣"}
      </button>
      {showDots ? <DotIndicators numDots={itemsCount} currentSlide={current} onDotClick={handleDotClick} /> : null}
    </div>
  );
};
