// 'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Octahedron } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const AnimatedSphere = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            // Gentle rotation
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Octahedron ref={meshRef} args={[1, 0]} scale={1.6}>
            <MeshDistortMaterial
                color="#F4D03F" // Lighter Gold color
                attach="material"
                distort={0.2} // Reduced distortion for sharper edges
                speed={2} // Speed of the distortion animation
                roughness={0.1}
                metalness={0.9}
                clearcoat={1}
                clearcoatRoughness={0.1}
            />
        </Octahedron>
    );
};

export default function Hero3DElement() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                dpr={[1, 2]} // Handle high-DPI screens
                gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
            >
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffd700" />

                <AnimatedSphere />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={true}
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                />
            </Canvas>
        </div>
    );
}
