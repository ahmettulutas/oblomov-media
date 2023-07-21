"use client"
import { Html, useProgress } from '@react-three/drei';

export const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      className='flex justify-center items-center flex-col'
    >
      <p className='text-md text-white'>{progress.toFixed(2)}%</p>
    </Html>
  );
};
