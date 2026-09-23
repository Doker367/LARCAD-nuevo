import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Nodos de interconexión HPC
const ComputeNetwork = () => {
    const groupRef = useRef();
    const nodeCount = 65;

    const [positions, connections] = useMemo(() => {
        const pos = [];
        for (let i = 0; i < nodeCount; i++) {
            pos.push([
                (Math.random() - 0.5) * 16,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 8 - 2,
            ]);
        }

        // Crear líneas entre nodos cercanos (simulando topología de clúster Infiniband)
        const linePoints = [];
        for (let i = 0; i < nodeCount; i++) {
            for (let j = i + 1; j < nodeCount; j++) {
                const dist = Math.hypot(
                    pos[i][0] - pos[j][0],
                    pos[i][1] - pos[j][1],
                    pos[i][2] - pos[j][2]
                );
                if (dist < 4.2) {
                    linePoints.push(
                        new THREE.Vector3(...pos[i]),
                        new THREE.Vector3(...pos[j])
                    );
                }
            }
        }

        return [pos, linePoints];
    }, []);

    const lineGeometry = useMemo(() => {
        const geom = new THREE.BufferGeometry().setFromPoints(connections);
        return geom;
    }, [connections]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.025;
            groupRef.current.rotation.x = Math.sin(t * 0.02) * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Líneas de enlace de datos */}
            <lineSegments geometry={lineGeometry}>
                <lineBasicMaterial color="#64748B" transparent opacity={0.12} />
            </lineSegments>

            {/* Nodos de cómputo */}
            {positions.map((p, i) => (
                <mesh key={i} position={p}>
                    <sphereGeometry args={[i % 5 === 0 ? 0.06 : 0.03, 12, 12]} />
                    <meshBasicMaterial
                        color={i % 7 === 0 ? '#94A3B8' : i % 3 === 0 ? '#38BDF8' : '#60A5FA'}
                        transparent
                        opacity={0.4}
                    />
                </mesh>
            ))}
        </group>
    );
};

// Polvo de partículas sutiles de profundidad
const AmbientDust = () => {
    const points = useRef();
    const count = 600;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i += 3) {
            pos[i] = (Math.random() - 0.5) * 20;
            pos[i + 1] = (Math.random() - 0.5) * 14;
            pos[i + 2] = (Math.random() - 0.5) * 10 - 2;
        }
        return pos;
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (points.current) {
            points.current.rotation.y = t * 0.01;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#CBD5E1"
                transparent
                opacity={0.2}
                sizeAttenuation
            />
        </points>
    );
};

const Background3D = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none',
                overflow: 'hidden',
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 7], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
                style={{ width: '100%', height: '100%' }}
            >
                <ambientLight intensity={0.6} />
                <ComputeNetwork />
                <AmbientDust />
            </Canvas>
            {/* Gradiente de atenuación para legibilidad perfecta */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(circle at 50% 40%, rgba(11, 15, 25, 0.4) 0%, rgba(11, 15, 25, 0.95) 85%)',
                }}
            />
        </div>
    );
};

export default Background3D;
