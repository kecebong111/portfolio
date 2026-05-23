"use client";
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { HeroFallback } from "./HeroFallback";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;

  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = noise(i);
    float b = noise(i + vec2(1.0, 0.0));
    float c = noise(i + vec2(0.0, 1.0));
    float d = noise(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * smoothNoise(p);
      p = p * 2.0 + vec2(1.7, 9.2);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    uv += uMouse * 0.08;
    float n = fbm(uv * 3.0 + uTime * 0.15);
    float n2 = fbm(uv * 5.0 - uTime * 0.1 + n);
    float val = fbm(uv * 2.0 + n2);
    // Brighter monochrome — range 0.15 to 0.55 so it's visible on dark bg
    float brightness = val * 0.4 + 0.15;
    vec3 col = vec3(brightness);
    gl_FragColor = vec4(col, 1.0);
  }
`;

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useRef({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      uniforms.current.uMouse.value.set(
        e.clientX / window.innerWidth,
        1.0 - e.clientY / window.innerHeight
      );
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(({ clock }) => {
    uniforms.current.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}

export default function ThreeShader() {
  if (typeof window !== "undefined") {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return <HeroFallback />;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return <HeroFallback />;
    }
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      gl={{ antialias: false, alpha: true }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
      className="h-full w-full"
    >
      <ShaderPlane />
    </Canvas>
  );
}