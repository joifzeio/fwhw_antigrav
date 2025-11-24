import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const GlassPane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      // Rotate based on scroll position
      const rotationAmount = (scrollY / 500) * Math.PI;
      meshRef.current.rotation.y = rotationAmount;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 3, 0.1]} />
      <meshPhysicalMaterial
        color="#e8f4f8"
        metalness={0.1}
        roughness={0.05}
        transmission={0.9}
        thickness={0.5}
        transparent={true}
        opacity={0.8}
        clearcoat={1}
        clearcoatRoughness={0.1}
        ior={1.5}
      />
    </mesh>
  );
};

export const GlassModel3D = () => {
  return (
    <div className="w-full h-[400px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={1} />
        <GlassPane />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};
