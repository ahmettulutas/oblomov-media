"use client";
/* import { useScroll } from "framer-motion";*/
import React, { useRef } from "react";

import { CardType } from "./Cards";

const Card = ({ item, index }: { item: CardType, index: number }) => {
  /*   const cardVariants = {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } },
    }; */
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = React.useState(0);
  /*   const { scrollYProgress } = useScroll({
      target: cardRef
    }); */
  const handleScroll = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      if ((1 + (rect.top * 0.001)) > 0.9 && (1 + (rect.top * 0.001)) < 1.2) {
        setScale(1 + (rect.top * 0.001));
      }
    }
  };
  React.useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    (
      <div
        ref={cardRef}
        className="card" key={item.projectNumber} style={{ transform: `scale(${scale}) translate3d(0, ${-1 * (scale * 10)}px , 0)` }}
      >
        <div className="bg-black h-8 absolute top-0 lef-0 w-40" style={{ width: `${scale * -1} px` }} />
        <h2><span>{item.projectNumber}</span>T{item.title}</h2>
        <p>{item.description}</p>

      </div >
    )

  );
};
export default Card;