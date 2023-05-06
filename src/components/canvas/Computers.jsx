import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("../desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.55} groundColor="#4d57a8" />
      <pointLight color="#4d57a8" position={[1, 0.2, 5]} intensity={1.2} />
      <spotLight
        color="#fff"
        position={[-20, 50, 10]}
        intensity={0.5}
        angle={0.15}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive scale={1.1} position={[0, -1.5, -1]} rotation={[-0.01, -0.05, -0.15]} object={computer.scene} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas frameLoop="demand" shadows camera={{ position: [25, 0, 0], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
