"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Fake UMAP-style clusters: each cluster = a research area
const clusters = [
  { center: [-1.6, 0.8, 0.0], color: "#1E5FFF", n: 120 }, // Finance
  { center: [1.5, 0.6, -0.4], color: "#C9A96E", n: 140 }, // OR
  { center: [0.2, -1.2, 0.6], color: "#D63638", n: 100 }, // Strategy
  { center: [-1.2, -0.7, -0.8], color: "#7C5CFF", n: 110 }, // IS
  { center: [1.0, -0.4, 1.1], color: "#2ECC71", n: 90 }, // Marketing
];

function Papers() {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors, sizes } = useMemo(() => {
    const total = clusters.reduce((s, c) => s + c.n, 0);
    const pos = new Float32Array(total * 3);
    const col = new Float32Array(total * 3);
    const siz = new Float32Array(total);
    let o = 0;
    for (const c of clusters) {
      const color = new THREE.Color(c.color);
      for (let i = 0; i < c.n; i++) {
        // Gaussian-ish cluster
        const r = Math.pow(Math.random(), 0.5) * 0.6;
        const t = Math.random() * Math.PI * 2;
        const p = Math.acos(2 * Math.random() - 1);
        pos[o * 3] = c.center[0] + r * Math.sin(p) * Math.cos(t);
        pos[o * 3 + 1] = c.center[1] + r * Math.sin(p) * Math.sin(t);
        pos[o * 3 + 2] = c.center[2] + r * Math.cos(p);
        // color jitter
        const j = 0.85 + Math.random() * 0.3;
        col[o * 3] = color.r * j;
        col[o * 3 + 1] = color.g * j;
        col[o * 3 + 2] = color.b * j;
        siz[o] = 0.02 + Math.random() * 0.03;
        o++;
      }
    }
    return { positions: pos, colors: col, sizes: siz };
  }, []);

  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.08;
      ref.current.rotation.x = Math.sin(Date.now() * 0.0002) * 0.15;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.9} sizeAttenuation />
    </points>
  );
}

function Connections() {
  // Draw faint lines between cluster centers — "citation network" feel
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const lines: number[] = [];
    for (let i = 0; i < clusters.length; i++) {
      for (let j = i + 1; j < clusters.length; j++) {
        lines.push(...clusters[i].center, ...clusters[j].center);
      }
    }
    g.setAttribute("position", new THREE.Float32BufferAttribute(lines, 3));
    return g;
  }, []);
  return (
    <lineSegments geometry={geom}>
      <lineBasicMaterial color="#2A313B" transparent opacity={0.45} />
    </lineSegments>
  );
}

export function ResearchUniverseScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.5], fov: 50 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <color attach="background" args={["#05070A"]} />
      <ambientLight intensity={0.6} />
      <Papers />
      <Connections />
    </Canvas>
  );
}

export default ResearchUniverseScene;
