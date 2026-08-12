import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

// Check for WebGL compatibility
const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
};

// Elegant Feminine 3D Crystal & Rose Gold Scene Component
function Feminine3DScene() {
  const mainDiamondRef = useRef();
  const roseRingRef = useRef();
  const pearlSphereRef = useRef();
  const lavenderCrystalRef = useRef();
  const particleGroupRef = useRef();

  const lightPinkRef = useRef();
  const lightRoseRef = useRef();
  const lightGoldRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.pointer; // Mouse offset (-1 to +1)

    // Calculate normalized scroll progress (0 to 1)
    const scrollY = window.scrollY || 0;
    const maxScroll = Math.max((document.documentElement.scrollHeight - window.innerHeight), 1);
    const scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

    // Rose Pink & Champagne Gold Spectrum interpolation
    const huePink = (0.92 + time * 0.02 + scrollProgress * 0.4) % 1; // Pink-Magenta range
    const hueGold = (0.12 + time * 0.02 + scrollProgress * 0.3) % 1; // Gold-Amber range
    const huePurple = (0.75 + time * 0.02 + scrollProgress * 0.3) % 1; // Lavender-Violet range

    const colorPink = new THREE.Color().setHSL(huePink, 0.85, 0.65);
    const colorGold = new THREE.Color().setHSL(hueGold, 0.85, 0.65);
    const colorPurple = new THREE.Color().setHSL(huePurple, 0.85, 0.65);

    if (lightPinkRef.current) lightPinkRef.current.color.copy(colorPink);
    if (lightRoseRef.current) lightRoseRef.current.color.copy(colorGold);
    if (lightGoldRef.current) lightGoldRef.current.color.copy(colorPurple);

    // 1. Dynamic 3D Camera Trajectory
    state.camera.position.z = 5.8 + Math.sin(scrollProgress * Math.PI * 2) * 2.0;
    state.camera.position.y = -scrollProgress * 3.2;
    state.camera.rotation.z = Math.sin(scrollProgress * Math.PI * 2) * 0.15;

    // 2. Central Floating 3D Diamond / Gem Motion & Rotation
    if (mainDiamondRef.current) {
      mainDiamondRef.current.rotation.y = time * 0.25 + scrollProgress * Math.PI * 4 + x * 0.4;
      mainDiamondRef.current.rotation.x = time * 0.15 + scrollProgress * Math.PI * 2 + y * 0.4;
      mainDiamondRef.current.position.y = 0.4 - scrollProgress * 6.5;
      mainDiamondRef.current.position.x = 2.4 - Math.sin(scrollProgress * Math.PI * 3) * 3.8;

      mainDiamondRef.current.material.color.copy(colorPink);
      mainDiamondRef.current.material.emissive.copy(colorPurple);
    }

    // 3. Rose Gold Ring Motion
    if (roseRingRef.current) {
      roseRingRef.current.rotation.x = time * 0.3 + scrollProgress * 5;
      roseRingRef.current.rotation.y = time * 0.2 + scrollProgress * 4;
      roseRingRef.current.position.y = -0.5 - scrollProgress * 5.5;
      roseRingRef.current.position.x = -2.2 + Math.cos(scrollProgress * Math.PI * 2) * 2.5;

      roseRingRef.current.material.color.copy(colorGold);
    }

    // 4. Pearl Sphere Glass Motion
    if (pearlSphereRef.current) {
      pearlSphereRef.current.rotation.y = -time * 0.4 + scrollProgress * 6;
      pearlSphereRef.current.position.y = 1.8 - scrollProgress * 7.5;
      pearlSphereRef.current.position.x = -2.9 + Math.cos(scrollProgress * Math.PI * 2) * 3.2;

      pearlSphereRef.current.material.color.copy(colorPink);
    }

    // 5. Lavender Crystal Shard Motion
    if (lavenderCrystalRef.current) {
      lavenderCrystalRef.current.rotation.y = time * 0.3 + scrollProgress * 5;
      lavenderCrystalRef.current.rotation.z = -time * 0.2;
      lavenderCrystalRef.current.position.y = -2.0 - scrollProgress * 4.5;
      lavenderCrystalRef.current.position.x = 3.2 - Math.sin(scrollProgress * Math.PI * 2) * 2.5;

      lavenderCrystalRef.current.material.color.copy(colorPurple);
    }

    // 6. Stardust Particle Galaxy Rotation
    if (particleGroupRef.current) {
      particleGroupRef.current.rotation.y = time * 0.02 + scrollProgress * Math.PI * 2;
      particleGroupRef.current.rotation.x = time * 0.01 + scrollProgress * Math.PI;
    }
  });

  return (
    <group>
      {/* Rose Gold & Soft Sakura Pink Volumetric Ambient & Point Lights */}
      <ambientLight intensity={0.9} color="#2e1065" />
      <pointLight ref={lightPinkRef} position={[10, 10, 10]} intensity={4.8} color="#f472b6" distance={35} />
      <pointLight ref={lightRoseRef} position={[-10, -8, 8]} intensity={4.2} color="#fb7185" distance={35} />
      <pointLight ref={lightGoldRef} position={[0, -15, -5]} intensity={3.5} color="#fcd34d" distance={30} />
      <directionalLight position={[0, 10, -10]} intensity={2.0} color="#e879f9" />

      {/* Main 3D Floating Diamond Gem Geometry */}
      <Float speed={2.0} rotationIntensity={1.0} floatIntensity={1.8}>
        <mesh ref={mainDiamondRef} position={[2.4, 0.4, -1.5]}>
          <octahedronGeometry args={[1.35, 0]} />
          <meshStandardMaterial 
            color="#f472b6" 
            wireframe 
            transparent 
            opacity={0.5}
            roughness={0.05}
            metalness={0.95}
            emissive="#c084fc"
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>

      {/* Rose Gold & Champagne Torus Ring */}
      <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh ref={roseRingRef} position={[-2.2, -0.5, -2]}>
          <torusGeometry args={[1.4, 0.15, 32, 100]} />
          <meshStandardMaterial 
            color="#fcd34d" 
            wireframe 
            transparent 
            opacity={0.4}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Left Floating Soft Pink Pearl Glass Sphere */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.2}>
        <mesh ref={pearlSphereRef} position={[-2.9, 1.8, -2.2]}>
          <sphereGeometry args={[0.95, 32, 32]} />
          <meshStandardMaterial 
            color="#f472b6" 
            wireframe 
            transparent 
            opacity={0.45}
            roughness={0.05}
            metalness={0.95}
            emissive="#fb7185"
            emissiveIntensity={0.25}
          />
        </mesh>
      </Float>

      {/* Right Floating Lavender Crystal Shard */}
      <Float speed={2.2} rotationIntensity={1.8} floatIntensity={1.8}>
        <mesh ref={lavenderCrystalRef} position={[3.2, -2.0, -2.5]}>
          <icosahedronGeometry args={[1.0, 1]} />
          <meshStandardMaterial 
            color="#e879f9" 
            wireframe 
            transparent 
            opacity={0.45}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Sparkling Rose & Gold Stardust Galaxy */}
      <group ref={particleGroupRef}>
        <Stars radius={120} depth={60} count={5500} factor={8} saturation={1.0} fade speed={1.8} />
      </group>
    </group>
  );
}

export default function ThreeCanvas() {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(isWebGLAvailable());
  }, []);

  if (!supported) {
    return (
      <div className="fixed inset-0 w-full h-full bg-[#090514] pointer-events-none opacity-50 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-950/40 via-purple-950/70 to-slate-950"></div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 6], fov: 45 }}
        className="w-full h-full"
        style={{ pointerEvents: 'none' }}
      >
        <Feminine3DScene />
      </Canvas>
    </div>
  );
}
