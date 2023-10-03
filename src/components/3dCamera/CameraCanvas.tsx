"use client";
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

import { CameraModel } from "./CameraModel";
import { CanvasLoader } from "./CanvasLoader";

export const CameraCanvas = () => {


  return (
    <Canvas
      frameloop="demand"
      className='w-full h-full'
      shadows
      dpr={[1, 2]} // device-pixel-ratio
      camera={{ position: [2, 0, 12.25], fov: 15 }} // It's an object with properties like position and fov. position sets the initial camera position as an array [x, y, z]. fov stands for "field of view" and determines the extent of the scene visible to the camera.
      gl={{ preserveDrawingBuffer: true }}
    >
      <React.Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 1}
          minPolarAngle={Math.PI / 2}
        />
        <CameraModel />
      </React.Suspense>
      <Preload all />
    </Canvas>
  );
};