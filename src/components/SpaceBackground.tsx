import React, { useRef, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

// ====================================================================
// COMPOSANT METEORS 3D
// Simule une pluie de météores 3D en utilisant des particules (Points)
// ====================================================================

const Meteors3D: React.FC<{ count?: number, speed?: number }> = ({ count = 30, speed = 10 }) => {
  const mesh = useRef<THREE.Points>(null!);
  const TRAIL_LENGTH = 150;
  const Z_START = 80;      
  const Z_END = -70;      

  const getRandomValue = useCallback(
    (min: number, max: number, isInt = false) => {
      const value = Math.random() * (max - min) + min;
      return isInt ? Math.floor(value) : value;
    },
    [],
  );

  const [positions, sizes] = useMemo(() => {
    const p = new Float32Array(count * 3);
    const s = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      p[i * 3] = getRandomValue(-40, 40); 
      p[i * 3 + 1] = getRandomValue(-40, 40);

      p[i * 3 + 2] = getRandomValue(Z_END, Z_START); 

      s[i] = getRandomValue(0.2, 0.6); 
    }
    return [p, s];
  }, [count, getRandomValue]);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    const positionsArray = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count * 3; i += 3) {
      positionsArray[i + 2] -= delta * speed; 
      
      positionsArray[i] += delta * (positionsArray[i] > 0 ? -0.5 : 0.5); 
      
      if (positionsArray[i + 2] < Z_END) {
        positionsArray[i + 2] += TRAIL_LENGTH;
        positionsArray[i] = getRandomValue(-40, 40);
        positionsArray[i + 1] = getRandomValue(-40, 40);
      }
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach={'attributes-position'}
          count={count}
          array={positions}
          itemSize={3}
          usage={THREE.DynamicDrawUsage}
        />
        <bufferAttribute
          attach={'attributes-size'}
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        color={0xffffff} 
        size={0.1}
        sizeAttenuation
        transparent={true}
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// ====================================================================
// COMPOSANT INTERNE : GALAXIE DIAGONALE (Code inchangé)
// ====================================================================

const DiagonalGalaxy: React.FC = () => {
  const mesh = useRef<THREE.Points>(null!);
  const count = 10000; 
  
  const PATTERN_LENGTH = 15; 
  const BOUNDARY = PATTERN_LENGTH + 5;
  const PATTERN_SIZE = BOUNDARY * 2;
  const MAX_DEVIATION = 1.2; 
  const SPEED = 0.01;

  const [positions, colors] = useMemo(() => {
    const p = new Float32Array(count * 3);
    const c = new Float32Array(count * 3);
    const tempColor = new THREE.Color();
    
    const initialSpread = BOUNDARY;

    for (let i = 0; i < count; i++) {
      const distance = Math.random() * 2 - 1;

      let x = distance * initialSpread; 
      let y = -distance * initialSpread;

      let z = 0;

      const devX = (Math.random() * 2 - 1) * MAX_DEVIATION;
      const devY = (Math.random() * 2 - 1) * MAX_DEVIATION;
      const devZ = (Math.random() * 2 - 1) * MAX_DEVIATION * 5; 

      p[i * 3] = x + devX;
      p[i * 3 + 1] = y + devY;
      p[i * 3 + 2] = z + devZ - 15;

      const h = Math.random(); 
      const s = Math.random() * 0.4 + 0.6;
      const l = Math.random() * 0.3 + 0.6;
      
      tempColor.setHSL(h, s, l);

      c[i * 3] = tempColor.r;
      c[i * 3 + 1] = tempColor.g;
      c[i * 3 + 2] = tempColor.b;
    }
    return [p, c];
  }, [count, PATTERN_LENGTH, MAX_DEVIATION]);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    const positionsArray = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count * 3; i += 3) {
      positionsArray[i] -= delta * SPEED;    
      positionsArray[i + 1] += delta * SPEED; 
    
      if (positionsArray[i] < -BOUNDARY) {
        positionsArray[i] += PATTERN_SIZE; 
      }

      if (positionsArray[i + 1] > BOUNDARY) {
        positionsArray[i + 1] -= PATTERN_SIZE; 
      }
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach={'attributes-position'}
          count={count}
          array={positions}
          itemSize={3}
          usage={THREE.DynamicDrawUsage}
        />
        <bufferAttribute
          attach={'attributes-color'}
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={0xffffff} 
        size={0.1} 
        sizeAttenuation
        transparent={true}
        opacity={0.25} 
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors={true}
      />
    </points>
  );
};

// ====================================================================
// COMPOSANT PRINCIPAL : SpaceBackground (Contenu R3F)
// ====================================================================

export const SpaceBackground: React.FC = () => (
  <>
    <color attach="background" args={['#000']} />
    {/* La lumière est importante pour voir les météores 3D */}
    <ambientLight intensity={0.3} />
    <directionalLight intensity={3} position={[5, 5, 5]} />
    <pointLight intensity={1} position={[-5, -5, 5]} />
    
    {/* Étoiles lointaines */}
    <Stars radius={100} depth={50} count={5000} factor={4} fade speed={0.5} />
    
    {/* Galaxie qui se déplace en diagonale */}
    <DiagonalGalaxy />
    
    {/* Les météores 3D qui se déplacent vers la caméra */}
    <Meteors3D count={3} speed={40} />
  </>
);