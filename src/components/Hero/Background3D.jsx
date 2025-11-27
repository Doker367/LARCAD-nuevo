import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Componente 3D de partículas animadas
const AnimatedParticles = () => {
    const points = useRef();
    const particleCount = 2000;

    // Generate random positions for particles
    const particlesPosition = React.useMemo(() => {
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 10;
            positions[i3 + 1] = (Math.random() - 0.5) * 10;
            positions[i3 + 2] = (Math.random() - 0.5) * 10;
        }

        return positions;
    }, []);

    // Animation loop
    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (points.current) {
            points.current.rotation.x = time * 0.05;
            points.current.rotation.y = time * 0.075;
        }
    });

    return (
        <Points ref={points} positions={particlesPosition} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#2f31f5"
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
            />
        </Points>
    );
};

// Componente de malla ondulada
const WaveMesh = () => {
    const mesh = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (mesh.current) {
            const positions = mesh.current.geometry.attributes.position;

            for (let i = 0; i < positions.count; i++) {
                const x = positions.getX(i);
                const y = positions.getY(i);

                const wave1 = Math.sin(x + time) * 0.1;
                const wave2 = Math.sin(y + time * 0.5) * 0.1;

                positions.setZ(i, wave1 + wave2);
            }

            positions.needsUpdate = true;
            mesh.current.rotation.z = time * 0.1;
        }
    });

    return (
        <mesh ref={mesh} position={[0, 0, -3]}>
            <planeGeometry args={[10, 10, 50, 50]} />
            <meshStandardMaterial
                color="#253ff7"
                wireframe
                transparent
                opacity={0.3}
            />
        </mesh>
    );
};

const Background3D = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
            }}
        >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#def440" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2f31f5" />

            <AnimatedParticles />
            <WaveMesh />
        </Canvas>
    );
};

export default Background3D;
