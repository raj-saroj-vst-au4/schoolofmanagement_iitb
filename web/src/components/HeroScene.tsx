"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Crest() {
  const ref = useRef<Mesh>(null);
  useFrame((state, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.25;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.12;
  });
  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.6}>
      <mesh ref={ref} castShadow receiveShadow>
        <torusKnotGeometry args={[1.1, 0.34, 220, 32, 2, 3]} />
        <MeshTransmissionMaterial
          thickness={0.8}
          roughness={0.08}
          transmission={0.95}
          ior={1.4}
          chromaticAberration={0.06}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#D7DCE4"
          attenuationColor="#1E5FFF"
          attenuationDistance={2.6}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 800 }: { count?: number }) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 4 + Math.random() * 6;
    const t = Math.random() * Math.PI * 2;
    const p = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(p) * Math.cos(t);
    positions[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
    positions[i * 3 + 2] = r * Math.cos(p);
  }
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#8A94A6" transparent opacity={0.7} />
    </points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <color attach="background" args={["#05070A"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 5, 3]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-4, -2, -3]} intensity={0.7} color="#1E5FFF" />
      <Crest />
      <Particles />
      <Environment preset="studio" />
    </Canvas>
  );
}

export default HeroScene;
