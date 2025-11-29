import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Line, RoundedBox } from '@react-three/drei';


// Modelo 3D de rack de servidores realista con detalles
const ServerRack = ({ position = [0, 0, 0], units = 8 }) => {
    // Unidades de rack (servidores apilados)
    const rackHeight = 2.4; // altura total del rack
    const unitHeight = rackHeight / units;
    const width = 1.1;
    const depth = 0.7;
    const colorLine = '#def440';
    const colorPanel = '#1e2633';
    const colorPanelAlt = '#2d3848';
    const colorMetal = '#4a5568';
    const colorFrame = '#161b24';
    const colorBase2 = '#0f1419';
    const colorVent = '#1a1f2b';
    const colorLed = ['#def440', '#2ff5c7', '#f54242'];

    return (
        <group position={position}>
            {/* Marco del rack (postes laterales) */}
            {/* Poste izquierdo frontal */}
            <Box args={[0.05, rackHeight + 0.2, 0.05]} position={[-width / 2 - 0.04, 0, depth / 2 + 0.025]}>
                <meshStandardMaterial color={colorFrame} metalness={0.9} roughness={0.2} />
            </Box>
            {/* Poste derecho frontal */}
            <Box args={[0.05, rackHeight + 0.2, 0.05]} position={[width / 2 + 0.04, 0, depth / 2 + 0.025]}>
                <meshStandardMaterial color={colorFrame} metalness={0.9} roughness={0.2} />
            </Box>
            {/* Poste izquierdo trasero */}
            <Box args={[0.05, rackHeight + 0.2, 0.05]} position={[-width / 2 - 0.04, 0, -depth / 2 - 0.025]}>
                <meshStandardMaterial color={colorFrame} metalness={0.9} roughness={0.2} />
            </Box>
            {/* Poste derecho trasero */}
            <Box args={[0.05, rackHeight + 0.2, 0.05]} position={[width / 2 + 0.04, 0, -depth / 2 - 0.025]}>
                <meshStandardMaterial color={colorFrame} metalness={0.9} roughness={0.2} />
            </Box>

            {/* Base del rack */}
            <Box args={[width + 0.12, 0.04, depth + 0.08]} position={[0, -rackHeight / 2 - 0.1, 0]}>
                <meshStandardMaterial color={colorBase2} metalness={0.85} roughness={0.25} />
            </Box>

            {/* Tope del rack */}
            <Box args={[width + 0.12, 0.04, depth + 0.08]} position={[0, rackHeight / 2 + 0.1, 0]}>
                <meshStandardMaterial color={colorBase2} metalness={0.85} roughness={0.25} />
            </Box>

            {/* Unidades de servidor con paneles frontales y detalles */}
            {Array.from({ length: units }).map((_, i) => {
                const y = (i - units / 2 + 0.5) * unitHeight;
                const isAlt = i % 2 === 0;
                return (
                    <group key={i} position={[0, y, 0]}>
                        {/* Cuerpo del servidor (chasis) */}
                        <Box args={[width, unitHeight * 0.88, depth * 0.96]} position={[0, 0, -0.01]}>
                            <meshStandardMaterial
                                color={isAlt ? colorPanel : colorPanelAlt}
                                metalness={0.88}
                                roughness={0.15}
                                emissive={isAlt ? '#1a2030' : '#252e3e'}
                                emissiveIntensity={0.08}
                            />
                        </Box>

                        {/* Panel frontal metálico */}
                        <RoundedBox args={[width * 0.98, unitHeight * 0.85, 0.04]} radius={0.008} position={[0, 0, depth / 2 - 0.02]}>
                            <meshStandardMaterial
                                color={colorMetal}
                                metalness={0.95}
                                roughness={0.12}
                            />
                        </RoundedBox>

                        {/* Display LCD (pequeño rectángulo oscuro) */}
                        <Box args={[0.15, 0.05, 0.008]} position={[-width / 2 + 0.18, 0, depth / 2 + 0.021]}>
                            <meshStandardMaterial 
                                color="#0d1520" 
                                emissive="#2ff5c7" 
                                emissiveIntensity={0.5}
                            />
                        </Box>

                        {/* Rejillas de ventilación (líneas verticales) */}
                        {Array.from({ length: 8 }).map((_, vIdx) => (
                            <Box 
                                key={"vent-"+vIdx}
                                args={[0.012, unitHeight * 0.65, 0.008]} 
                                position={[
                                    width / 2 - 0.45 + vIdx * 0.055,
                                    0,
                                    depth / 2 + 0.018
                                ]}
                            >
                                <meshStandardMaterial color={colorVent} metalness={0.8} roughness={0.3} />
                            </Box>
                        ))}

                        {/* LEDs de estado (pequeñas esferas de colores) */}
                        {colorLed.map((led, idx) => (
                            <mesh key={"led-"+idx}
                                position={[
                                    -width / 2 + 0.38 + idx * 0.06,
                                    -unitHeight * 0.15,
                                    depth / 2 + 0.03
                                ]}
                            >
                                <sphereGeometry args={[0.015, 12, 12]} />
                                <meshStandardMaterial 
                                    color={led} 
                                    emissive={led} 
                                    emissiveIntensity={Math.random() > 0.5 ? 1.2 : 0.3}
                                />
                            </mesh>
                        ))}

                        {/* Manijas laterales */}
                        <Box args={[0.015, unitHeight * 0.3, 0.04]} position={[-width / 2 + 0.008, 0, depth / 2 + 0.01]}>
                            <meshStandardMaterial color="#5a6478" metalness={0.9} roughness={0.2} />
                        </Box>
                        <Box args={[0.015, unitHeight * 0.3, 0.04]} position={[width / 2 - 0.008, 0, depth / 2 + 0.01]}>
                            <meshStandardMaterial color="#5a6478" metalness={0.9} roughness={0.2} />
                        </Box>

                        {/* Puertos/conectores frontales (pequeños rectángulos) */}
                        {Array.from({ length: 4 }).map((_, pIdx) => (
                            <Box 
                                key={"port-"+pIdx}
                                args={[0.025, 0.018, 0.01]} 
                                position={[
                                    -width / 2 + 0.65 + pIdx * 0.035,
                                    unitHeight * 0.18,
                                    depth / 2 + 0.025
                                ]}
                            >
                                <meshStandardMaterial color="#111820" metalness={0.7} roughness={0.35} />
                            </Box>
                        ))}
                    </group>
                );
            })}

            {/* Líneas frontales para simular separación de bandejas */}
            {Array.from({ length: units + 1 }).map((_, i) => (
                <Line
                    key={"line-" + i}
                    points={[
                        [-width / 2, (i - units / 2) * unitHeight, depth / 2 + 0.055],
                        [width / 2, (i - units / 2) * unitHeight, depth / 2 + 0.055],
                    ]}
                    color={colorLine}
                    lineWidth={0.8}
                />
            ))}
        </group>
    );
};


const HardwareModel3D = () => {
    return (
        <Canvas
            camera={{ position: [0, 0.5, 5], fov: 50 }}
            style={{
                width: '100%',
                height: '400px',
                borderRadius: '20px',
            }}
        >
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} intensity={1.1} color="#def440" />
            <pointLight position={[-5, -5, -5]} intensity={0.7} color="#2f31f5" />

            {/* Tres racks */}
            <ServerRack position={[-1.3, 0, 0]} units={8} />
            <ServerRack position={[0, 0, 0]} units={8} />
            <ServerRack position={[1.3, 0, 0]} units={8} />

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
    );
};

export default HardwareModel3D;
