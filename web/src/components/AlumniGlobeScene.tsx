"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Globe() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.08;
  });

  // Generate random alumni points distributed over a sphere
  const { points, colors } = useMemo(() => {
    const n = 320;
    const pts = new Float32Array(n * 3);
    const cols = new Float32Array(n * 3);
    const red = new THREE.Color("#D63638");
    const blue = new THREE.Color("#1E5FFF");
    const gold = new THREE.Color("#C9A96E");
    for (let i = 0; i < n; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.505;
      pts[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pts[i * 3 + 1] = r * Math.cos(phi);
      pts[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      const pick = Math.random();
      const c = pick < 0.5 ? blue : pick < 0.85 ? gold : red;
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return { points: pts, colors: cols };
  }, []);

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial color="#0B1220" roughness={0.9} metalness={0.1} />
      </mesh>
      {/* Wireframe overlay */}
      <mesh>
        <sphereGeometry args={[1.502, 48, 48]} />
        <meshBasicMaterial color="#1E5FFF" wireframe transparent opacity={0.18} />
      </mesh>
      {/* Alumni points */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.035} vertexColors transparent opacity={0.95} />
      </points>
      {/* Outer atmosphere glow */}
      <mesh>
        <sphereGeometry args={[1.65, 48, 48]} />
        <meshBasicMaterial color="#1E5FFF" transparent opacity={0.06} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

export function AlumniGlobeScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.5, 4.2], fov: 45 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <color attach="background" args={["#05070A"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-5, -3, -5]} intensity={0.5} color="#1E5FFF" />
      <Stars radius={50} depth={40} count={2500} factor={4} fade speed={0.3} />
      <Globe />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        rotateSpeed={0.4}
      />
    </Canvas>
  );
}

export default AlumniGlobeScene;
