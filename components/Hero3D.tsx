"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#F97316"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-[400px] md:h-[600px] relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <AnimatedShape />
      </Canvas>
    </div>
  );
}
