"use client";
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import React from "react";

export const CameraModel: React.FC = () => {
  const camera = useGLTF("./canon-camera-model/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <spotLight
        position={[10, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={camera.scene}
        position={[0, -0.3, 0]}
        rotation={[-0.01, 0, -0.1]}
      />
    </mesh>
  );
};
