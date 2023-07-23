"use client";
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

import { CameraModel } from "./CameraModel";
import { CanvasLoader } from "./CanvasLoader";

export const CameraCanvas = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
        <CameraModel isMobile={isMobile} />
      </React.Suspense>
      <Preload all />
    </Canvas>
  );
};