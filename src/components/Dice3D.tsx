import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useCallback, Suspense } from "react";
import * as THREE from "three";

// Generate cryptographically secure random number 0-9
const getCryptoRandom = (): number => {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % 10;
};

interface DiceProps {
  onRollComplete?: (value: number) => void;
}

const Decahedron = ({ onRollComplete }: DiceProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  
  const [isRolling, setIsRolling] = useState(false);
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0, z: 0 });
  const [currentY, setCurrentY] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [spinSpeed, setSpinSpeed] = useState({ x: 0, y: 0, z: 0 });
  
  const rollDice = useCallback(() => {
    if (isRolling) return;
    
    setIsRolling(true);
    setVelocity(8); // Initial upward velocity
    
    // Random spin speeds
    setSpinSpeed({
      x: (Math.random() - 0.5) * 0.5,
      y: (Math.random() - 0.5) * 0.5,
      z: (Math.random() - 0.5) * 0.5,
    });
    
    // Generate random result and target rotation
    const result = getCryptoRandom();
    const targetX = Math.PI * 2 * (2 + Math.random() * 2);
    const targetY = Math.PI * 2 * (2 + Math.random() * 2);
    const targetZ = Math.PI * 2 * (1 + Math.random());
    
    setTargetRotation({ x: targetX, y: targetY, z: targetZ });
    
    // Complete roll after animation
    setTimeout(() => {
      setIsRolling(false);
      setSpinSpeed({ x: 0, y: 0, z: 0 });
      onRollComplete?.(result);
    }, 2000);
  }, [isRolling, onRollComplete]);

  useFrame((_, delta) => {
    if (!meshRef.current || !wireframeRef.current) return;
    
    if (isRolling) {
      // Physics simulation
      const newVelocity = velocity - 20 * delta; // Gravity
      const newY = Math.max(0, currentY + velocity * delta);
      
      setVelocity(newVelocity);
      setCurrentY(newY);
      
      // Bounce effect
      if (newY <= 0 && velocity < 0) {
        setVelocity(Math.abs(velocity) * 0.4); // Bounce with energy loss
      }
      
      // Apply position
      meshRef.current.position.y = newY;
      wireframeRef.current.position.y = newY;
      
      // Apply spin
      meshRef.current.rotation.x += spinSpeed.x;
      meshRef.current.rotation.y += spinSpeed.y;
      meshRef.current.rotation.z += spinSpeed.z;
      wireframeRef.current.rotation.x += spinSpeed.x;
      wireframeRef.current.rotation.y += spinSpeed.y;
      wireframeRef.current.rotation.z += spinSpeed.z;
    } else {
      // Idle gentle rotation
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.006;
      wireframeRef.current.rotation.x += 0.003;
      wireframeRef.current.rotation.y += 0.006;
      
      // Settle position
      meshRef.current.position.y *= 0.95;
      wireframeRef.current.position.y *= 0.95;
    }
  });

  return (
    <group onClick={rollDice}>
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[1.2, 0]} />
        <meshPhongMaterial
          color="#22c55e"
          flatShading
          transparent
          opacity={0.85}
        />
      </mesh>
      <mesh ref={wireframeRef}>
        <dodecahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
};

interface Dice3DProps {
  onRollComplete?: (value: number) => void;
  className?: string;
}

const Dice3D = ({ onRollComplete, className = "" }: Dice3DProps) => {
  return (
    <div className={`cursor-pointer ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <pointLight position={[-5, -5, 5]} intensity={0.4} color="#22c55e" />
          <Decahedron onRollComplete={onRollComplete} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Dice3D;
