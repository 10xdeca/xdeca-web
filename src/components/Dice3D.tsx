import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef, useState, useCallback, Suspense, useMemo } from "react";
import * as THREE from "three";

// Generate cryptographically secure random number 0-9
const getCryptoRandom = (): number => {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % 10;
};

// Create a pentagonal trapezohedron (d10) geometry
const createD10Geometry = (): THREE.BufferGeometry => {
  const geometry = new THREE.BufferGeometry();
  
  // D10 vertices - pentagonal trapezohedron
  const topApex = new THREE.Vector3(0, 1.2, 0);
  const bottomApex = new THREE.Vector3(0, -1.2, 0);
  
  // Top pentagon vertices (rotated slightly)
  const topRing: THREE.Vector3[] = [];
  const bottomRing: THREE.Vector3[] = [];
  
  for (let i = 0; i < 5; i++) {
    const angleTop = (i * Math.PI * 2) / 5 - Math.PI / 2;
    const angleBottom = ((i + 0.5) * Math.PI * 2) / 5 - Math.PI / 2;
    
    topRing.push(new THREE.Vector3(
      Math.cos(angleTop) * 0.9,
      0.4,
      Math.sin(angleTop) * 0.9
    ));
    
    bottomRing.push(new THREE.Vector3(
      Math.cos(angleBottom) * 0.9,
      -0.4,
      Math.sin(angleBottom) * 0.9
    ));
  }
  
  const vertices: number[] = [];
  const indices: number[] = [];
  
  // Add all vertices
  const allVertices = [topApex, ...topRing, ...bottomRing, bottomApex];
  allVertices.forEach(v => vertices.push(v.x, v.y, v.z));
  
  // Create faces (10 triangular kite-shaped faces)
  // Top 5 faces (apex to top ring to bottom ring)
  for (let i = 0; i < 5; i++) {
    const next = (i + 1) % 5;
    // Top face: apex -> topRing[i] -> bottomRing[i]
    indices.push(0, 1 + i, 6 + i);
    // Top face part 2: topRing[i] -> topRing[next] -> bottomRing[i]
    indices.push(1 + i, 1 + next, 6 + i);
  }
  
  // Bottom 5 faces
  for (let i = 0; i < 5; i++) {
    const next = (i + 1) % 5;
    // Bottom face: bottomApex -> bottomRing[next] -> bottomRing[i]
    indices.push(11, 6 + next, 6 + i);
    // Bottom face part 2: bottomRing[i] -> topRing[next] -> bottomRing[next]
    indices.push(6 + i, 1 + next, 6 + next);
  }
  
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  
  return geometry;
};

// Get face centers and normals for number placement
const getFaceCentersAndNormals = () => {
  const faces: { center: THREE.Vector3; normal: THREE.Vector3; number: number }[] = [];
  
  for (let i = 0; i < 10; i++) {
    const angle = (i * Math.PI * 2) / 10 + Math.PI / 10;
    const isTop = i % 2 === 0;
    const yOffset = isTop ? 0.5 : -0.5;
    
    const center = new THREE.Vector3(
      Math.cos(angle) * 0.6,
      yOffset,
      Math.sin(angle) * 0.6
    );
    
    const normal = center.clone().normalize();
    normal.y += isTop ? 0.3 : -0.3;
    normal.normalize();
    
    faces.push({ center, normal, number: i });
  }
  
  return faces;
};

interface DiceProps {
  onRollComplete?: (value: number) => void;
}

const D10Dice = ({ onRollComplete }: DiceProps) => {
  const groupRef = useRef<THREE.Group>(null);
  
  const [isRolling, setIsRolling] = useState(false);
  const [currentY, setCurrentY] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [spinSpeed, setSpinSpeed] = useState({ x: 0, y: 0, z: 0 });
  
  const geometry = useMemo(() => createD10Geometry(), []);
  const faceData = useMemo(() => getFaceCentersAndNormals(), []);
  
  const rollDice = useCallback(() => {
    if (isRolling) return;
    
    setIsRolling(true);
    setVelocity(6);
    
    setSpinSpeed({
      x: (Math.random() - 0.5) * 0.3,
      y: (Math.random() - 0.5) * 0.3,
      z: (Math.random() - 0.5) * 0.3,
    });
    
    const result = getCryptoRandom();
    
    setTimeout(() => {
      setIsRolling(false);
      setSpinSpeed({ x: 0, y: 0, z: 0 });
      onRollComplete?.(result);
    }, 2000);
  }, [isRolling, onRollComplete]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    
    if (isRolling) {
      const newVelocity = velocity - 15 * delta;
      const newY = Math.max(0, currentY + velocity * delta);
      
      setVelocity(newVelocity);
      setCurrentY(newY);
      
      if (newY <= 0 && velocity < 0) {
        setVelocity(Math.abs(velocity) * 0.35);
      }
      
      groupRef.current.position.y = newY;
      groupRef.current.rotation.x += spinSpeed.x;
      groupRef.current.rotation.y += spinSpeed.y;
      groupRef.current.rotation.z += spinSpeed.z;
    } else {
      // Very subtle idle rotation
      groupRef.current.rotation.y += 0.002;
      groupRef.current.position.y *= 0.95;
    }
  });

  return (
    <group ref={groupRef} onClick={rollDice}>
      {/* Main dice body */}
      <mesh geometry={geometry}>
        <meshPhongMaterial
          color="#22c55e"
          flatShading
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Wireframe overlay */}
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
      
      {/* Number labels on faces */}
      {faceData.map((face, i) => (
        <Text
          key={i}
          position={[face.center.x * 1.1, face.center.y * 1.1, face.center.z * 1.1]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {face.number}
        </Text>
      ))}
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
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} />
          <pointLight position={[-3, -3, 3]} intensity={0.3} color="#22c55e" />
          <D10Dice onRollComplete={onRollComplete} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Dice3D;
