import React, { useState, useRef, Suspense, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, Text, Stars, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Loader } from '../../components/Loader'; 
import { SpaceBackground } from '../../components/SpaceBackground'; 

// Préchargement du modèle
useGLTF.preload('/medias/torus.glb');

// ====================================================================
// 1. TYPES
// ====================================================================

interface TorusGLTF extends GLTF {
  nodes: { Torus002: THREE.Mesh };
}

interface HomePageProps {
  currentLang: 'fr' | 'en';
}

// ====================================================================
// 2. UTILITAIRE DE NETTOYAGE
// ====================================================================

function ContextDisposer() {
  const { gl } = useThree();

  useEffect(() => {
    // Fonction de nettoyage exécutée au démontage du composant (changement de page)
    return () => {
      gl.dispose();
    };
  }, [gl]);

  return null;
}


// ====================================================================
// 3. COMPOSANT 3D (Torus)
// ====================================================================

function Torus({ title }: { title: string }) {
  const { nodes } = useGLTF('/medias/torus.glb') as unknown as TorusGLTF;
  const { viewport } = useThree();
  const torus = useRef<THREE.Mesh>(null!);

  const spinAccumulator = useRef({ x: 0, y: 0 });
  const manualRotation = useRef({ x: 0, y: 0 });

  const mouseTarget = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  const isHovered = useRef(false);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      mouseTarget.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseTarget.current.y = (event.clientY / window.innerHeight) * 2 - 1;

      if (isDragging.current) {
        const dx = event.clientX - lastMouse.current.x;
        const dy = event.clientY - lastMouse.current.y;

        manualRotation.current.y += dx * 0.01;
        manualRotation.current.x += dy * 0.01;

        lastMouse.current.x = event.clientX;
        lastMouse.current.y = event.clientY;
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      isDragging.current = true;
      lastMouse.current.x = event.clientX;
      lastMouse.current.y = event.clientY;
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  useFrame((_, delta) => {
    if (!torus.current) return;

    const baseRotationSpeedX = delta * 0.5;
    const baseRotationSpeedY = delta * 1.0;

    const mouseInfluence = 0.5; 
    const smoothFactor = 0.05;

    // 1. Rotation automatique uniquement si pas hover
    if (!isHovered.current) {
      spinAccumulator.current.x += baseRotationSpeedX;
      spinAccumulator.current.y += baseRotationSpeedY;
    }

    // 2. Tilt (souris)
    const tiltX = -mouseTarget.current.y * mouseInfluence;
    const tiltY = -mouseTarget.current.x * mouseInfluence;

    // 3. Rotation finale = Auto + Drag + Tilt
    const targetRotX = spinAccumulator.current.x + manualRotation.current.x + tiltX;
    const targetRotY = spinAccumulator.current.y + manualRotation.current.y + tiltY;

    torus.current.rotation.x = THREE.MathUtils.lerp(torus.current.rotation.x, targetRotX, smoothFactor);
    torus.current.rotation.y = THREE.MathUtils.lerp(torus.current.rotation.y, targetRotY, smoothFactor);
  });

  const materialProps = {
    thickness: 0.15,
    roughness: 0.0,
    transmission: 1.0,
    ior: 1.4,
    chromaticAberration: 0.3,
    backside: true,
    distortionScale: 0.2,
    temporalDistortion: 0.2,
  };

  return (
    <group scale={viewport.width / 3.75}>
    <Text
      font="/fonts/PPNeueMontreal-Bold.otf"
      position={[0, 0, 0]}
      fontSize={0.45}
      color="rgb(165, 85, 247)"
      anchorX="center"
      anchorY="middle"
    >
      {title}
      <meshBasicMaterial 
        attach="material" 
        color="rgb(165, 85, 247)" 
        toneMapped={false} 
      />
    </Text>
      <mesh
        ref={torus}
        geometry={nodes.Torus002.geometry}
        onPointerOver={() => (isHovered.current = true)}
        onPointerOut={() => (isHovered.current = false)}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}


// ====================================================================
// 4. PAGE PRINCIPALE (HomePage)
// ====================================================================

const HomePage: React.FC<HomePageProps> = ({ currentLang }) => {
  const [is3dLoaded, setIs3dLoaded] = useState(false);

  const content = {
    fr: { title: "bienvenue" },
    en: { title: "welcome" },
  };
  const text = content[currentLang];

  const onCanvasReady = useCallback(() => {
    setTimeout(() => {
      setIs3dLoaded(true);
    }, 100);
  }, []);

  useEffect(() => {
    if (!is3dLoaded) {
      onCanvasReady();
    }
  }, [is3dLoaded, onCanvasReady]);

  return (
    <div className="w-full h-screen relative">
      <Canvas 
        className="w-full h-full"
        style={{ opacity: is3dLoaded ? 1 : 0, transition: 'opacity 0.7s ease-in-out' }}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <ContextDisposer /> 

        <Suspense fallback={<group />}>
          <group>
           <SpaceBackground /> 
            <Torus title={text.title} />
            <Environment preset="studio" />
          </group>
        </Suspense>
      </Canvas>

      {!is3dLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader /> 
        </div>
      )}
    </div>
  );
};

export default HomePage;