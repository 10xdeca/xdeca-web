import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface FloaterProps {
  position: [number, number, number];
  scale: number;
  speed: number;
}

const Floater = ({ position, scale, speed }: FloaterProps) => {
  const ref = useRef<THREE.Mesh>(null);
  const baseY = position[1];

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed;
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.25;
    ref.current.position.y = baseY + Math.sin(t) * 0.3;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#22c55e" wireframe transparent opacity={0.18} />
    </mesh>
  );
};

const FloatingPolyhedraBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} gl={{ alpha: true }} style={{ background: "transparent" }}>
        <Floater position={[-4, 2, -2]} scale={1.2} speed={0.4} />
        <Floater position={[4.5, -1.5, -3]} scale={1.8} speed={0.3} />
        <Floater position={[-3, -2.5, -4]} scale={0.9} speed={0.5} />
        <Floater position={[3.5, 2.5, -1]} scale={0.7} speed={0.6} />
      </Canvas>
    </div>
  );
};

export default FloatingPolyhedraBackground;
