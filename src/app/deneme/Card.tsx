"use client";
/* import { useScroll } from "framer-motion";*/
import { useScroll, motion, useSpring } from "framer-motion";
import React, { RefObject, useRef } from "react";

import { CardType } from "./Cards";

const Card = ({ item, index }: { item: CardType, index: number }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef
  });

  return (
    <motion.div
      style={{ transform: `scale3d(0, ${scrollYProgress}, 0)` }}
      ref={cardRef}
      className="card p-24" key={item.projectNumber}
    >

      <h2><span>{item.projectNumber}</span>T{item.title}</h2>
      <p>{item.description}</p>
      <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </motion.div>

  );
};
export default Card;