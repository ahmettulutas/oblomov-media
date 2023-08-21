"use client";
import { useScroll } from "framer-motion";
import React, { useRef } from "react";

import { CardType } from "./Cards";

const Card = ({ item, index }: { item: CardType, index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } },
  };
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = React.useState(1.3);
  const { scrollYProgress } = useScroll({
    target: cardRef
  });
  const handleScroll = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      if (rect.top < 100)
        setScale(rect.top);
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
        className="card" key={item.projectNumber} style={{ transform: `scale(${1.3 + (0.01 * (scale / 10))} )` }}
      >
        <div className="bg-black h-8 absolute top-0 lef-0 w-40" style={{ width: `${scale * -1} px` }} />
        <h2><span>{item.projectNumber}</span>T{item.title}</h2>
        <p>{item.description}</p>

      </div >
    )

  );
};
export default Card;