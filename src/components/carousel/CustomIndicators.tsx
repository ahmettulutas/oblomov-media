import React from "react";

type Props = {
  numDots: number;
  currentSlide: number;
  onDotClick?: (current: number) => void;
};
export const DotIndicators: React.FC<Props> = ({
  numDots,
  currentSlide,
  onDotClick,
}) => {
  return (
    <div className="flex gap-2 absolute z-10 bottom-4 w-auto m-auto">
      {Array.from({ length: numDots })
        .fill(true)
        .map((item, idx) => (
          <button
            onClick={() => onDotClick?.(idx)}
            key={idx}
            className={`${
              currentSlide === idx ? "bg-white" : "bg-gray-500"
            } h-3 w-3 rounded-full cursor-pointer bg`}
          />
        ))}
    </div>
  );
};
