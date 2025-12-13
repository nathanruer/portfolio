import React, { useState, useRef, Suspense, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, Text, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { SpaceBackground } from '@/components/home/SpaceBackground';
import ErrorBoundary from '../components/ErrorBoundary';
import { useSEO } from '../hooks/use-seo';
import { useReducedMotion } from '../hooks/use-reduced-motion'; 

useGLTF.preload('/medias/torus.glb');

interface TorusGLTF extends GLTF {
  nodes: { Torus002: THREE.Mesh };
}

interface HomePageProps {
  currentLang: 'fr' | 'en';
}

interface TorusProps {
  currentLang: 'fr' | 'en';
}

function ContextDisposer() {
  const { gl } = useThree();

  useEffect(() => {
    return () => {
      gl.dispose();
    };
  }, [gl]);

  return null;
}

function Torus({ currentLang }: TorusProps) {
  const { nodes } = useGLTF('/medias/torus.glb') as unknown as TorusGLTF;
  const { viewport } = useThree();
  const torus = useRef<THREE.Mesh>(null!);

  const spinAccumulator = useRef({ x: 0, y: 0 });
  const manualRotation = useRef({ x: 0, y: 0 });

  const mouseTarget = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  const isHovered = useRef(false);

  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const jobTitle = currentLang === 'fr' ? 'développeur web' : 'web developer';
  
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

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

    // Désactiver animations si page cachée ou si l'utilisateur préfère réduire les mouvements
    if (isPaused || prefersReducedMotion) {
        return;
    }

    const maxDelta = 0.05;
    const clampedDelta = Math.min(delta, maxDelta);

    const baseRotationSpeedX = clampedDelta * 0.5;
    const baseRotationSpeedY = clampedDelta * 1.0;

    const mouseInfluence = 0.5;
    const smoothFactor = 0.05;

    if (!isHovered.current) {
      spinAccumulator.current.x += baseRotationSpeedX;
      spinAccumulator.current.y += baseRotationSpeedY;
    }

    const tiltX = -mouseTarget.current.y * mouseInfluence;
    const tiltY = -mouseTarget.current.x * mouseInfluence;

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

  // Logique d'ajustement de l'échelle pour mobile
  const isMobile = viewport.width < 5;
  const scaleDivider = isMobile ? 2.5 : 3.75; 
  const currentScale = viewport.width / scaleDivider;
  
  const offsetRight = isMobile ? 1.0 : 1.15; 
  const offsetBottom = isMobile ? 0.3 : 0.25; 
  

  return (
    <group scale={currentScale}>
      <Text
        font="/fonts/PPNeueMontreal-Bold.otf"
        position={[0, 0, 0]} 
        fontSize={0.45}
        color="rgb(165, 85, 247)"
        anchorX="center"
        anchorY="middle"
      >
        nathan ruer
        <meshBasicMaterial 
          attach="material" 
          color="rgb(165, 85, 247)" 
          toneMapped={false} 
        />
      </Text>

      <Text
        font="/fonts/PPNeueMontreal-Bold.otf"
        position={[offsetRight, -offsetBottom, 0.01]} 
        fontSize={0.1} 
        color="white"
        anchorX="right"
        anchorY="middle"
      >
        {jobTitle}
        <meshBasicMaterial 
          attach="material" 
          color="white" 
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

const HomePage: React.FC<HomePageProps> = ({ currentLang }) => {
  useSEO({
    title: 'Nathan Ruer | Portfolio',
    description: currentLang === 'fr'
      ? "Découvrez le portfolio de Nathan Ruer, développeur web spécialisé dans la création d'applications et de solutions web innovantes."
      : "Discover Nathan Ruer's portfolio, a web developer specialized in creating innovative web applications and solutions.",
    ogUrl: 'https://nathanruer.vercel.app'
  });

  return (
    <div className="w-full h-screen relative">
      <ErrorBoundary>
        <Canvas
          className="w-full h-full"
          camera={{ position: [0, 0, 5], fov: 45 }}
        >
          <ContextDisposer />

          <Suspense fallback={<group />}>
            <group>
             <SpaceBackground />
              <Torus currentLang={currentLang} />
              <Environment preset="studio" />
            </group>
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default HomePage;