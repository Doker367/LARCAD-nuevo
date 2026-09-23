import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, RoundedBox, Cylinder, ContactShadows } from '@react-three/drei';
import useMediaQuery from '../../hooks/useMediaQuery';

// ==========================================
// SERVIDOR INDIVIDUAL 1U (Dell PowerEdge R650)
// ==========================================
const Server1U = ({ yPos, isDell = true, nodeName = 'Node' }) => {
    const width = 0.96;
    const height = 0.11;
    const depth = 0.76;

    return (
        <group position={[0, yPos, 0]}>
            {/* Chasis principal de acero galvanizado */}
            <Box args={[width, height * 0.95, depth]} position={[0, 0, -0.05]}>
                <meshStandardMaterial color="#475569" metalness={0.88} roughness={0.25} />
            </Box>

            {/* Carátula frontal / Bisel metálico estilo Dell PowerEdge */}
            <RoundedBox args={[width * 0.98, height * 0.9, 0.025]} radius={0.005} position={[0, 0, depth / 2 - 0.03]}>
                <meshStandardMaterial color="#94A3B8" metalness={0.92} roughness={0.18} />
            </RoundedBox>

            {/* Bisel decorativo central plateado cepillado */}
            <Box args={[width * 0.94, height * 0.78, 0.006]} position={[0, 0, depth / 2 - 0.015]}>
                <meshStandardMaterial color="#CBD5E1" metalness={0.95} roughness={0.12} />
            </Box>

            {/* Bahías de discos Hot-Swap 2.5" (8 bahías con palancas de liberación plateadas) */}
            {Array.from({ length: 8 }).map((_, dIdx) => (
                <group key={'drive-' + dIdx} position={[-width / 2 + 0.12 + dIdx * 0.075, 0, depth / 2 - 0.01]}>
                    {/* Marco del caddy */}
                    <Box args={[0.065, height * 0.68, 0.01]}>
                        <meshStandardMaterial color="#334155" metalness={0.7} roughness={0.3} />
                    </Box>
                    {/* Palanca de liberación cromada */}
                    <Box args={[0.058, 0.012, 0.012]} position={[0, -height * 0.22, 0.002]}>
                        <meshStandardMaterial color="#E2E8F0" metalness={0.98} roughness={0.08} />
                    </Box>
                    {/* LED de actividad del disco (Verde esmeralda parpadeante) */}
                    <mesh position={[-0.018, height * 0.2, 0.006]}>
                        <sphereGeometry args={[0.0035, 8, 8]} />
                        <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={dIdx % 2 === 0 ? 0.7 : 0.3} />
                    </mesh>
                    {/* LED de estado del disco (Ámbar / standby) */}
                    <mesh position={[0.018, height * 0.2, 0.006]}>
                        <sphereGeometry args={[0.0028, 8, 8]} />
                        <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.4} />
                    </mesh>
                </group>
            ))}

            {/* Display de Diagnóstico iDRAC / LCD frontal */}
            <Box args={[0.13, 0.038, 0.008]} position={[width / 2 - 0.18, height * 0.12, depth / 2 - 0.01]}>
                <meshStandardMaterial color="#0B1329" emissive="#38BDF8" emissiveIntensity={0.6} />
            </Box>

            {/* Botón de Encendido con aro LED azul */}
            <mesh position={[width / 2 - 0.07, 0, depth / 2 - 0.01]}>
                <cylinderGeometry args={[0.009, 0.009, 0.008, 16]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color="#1D4ED8" emissive="#3B82F6" emissiveIntensity={0.8} />
            </mesh>

            {/* Orejas de montaje en rack con tiradores laterales plateados */}
            <Box args={[0.02, height * 0.85, 0.03]} position={[-width / 2 - 0.01, 0, depth / 2 - 0.03]}>
                <meshStandardMaterial color="#CBD5E1" metalness={0.95} roughness={0.1} />
            </Box>
            <Box args={[0.02, height * 0.85, 0.03]} position={[width / 2 + 0.01, 0, depth / 2 - 0.03]}>
                <meshStandardMaterial color="#CBD5E1" metalness={0.95} roughness={0.1} />
            </Box>
        </group>
    );
};

// ==========================================
// SERVIDOR 2U / 4U (Dell PowerEdge R750 / GPU / Storage)
// ==========================================
const Server2U = ({ yPos, type = 'gpu' }) => {
    const width = 0.96;
    const height = 0.23;
    const depth = 0.78;

    return (
        <group position={[0, yPos, 0]}>
            {/* Chasis principal */}
            <Box args={[width, height * 0.96, depth]} position={[0, 0, -0.05]}>
                <meshStandardMaterial color="#334155" metalness={0.85} roughness={0.25} />
            </Box>

            {/* Carátula frontal con rejilla de ventilación de alto flujo */}
            <RoundedBox args={[width * 0.98, height * 0.92, 0.025]} radius={0.008} position={[0, 0, depth / 2 - 0.03]}>
                <meshStandardMaterial color="#64748B" metalness={0.92} roughness={0.2} />
            </RoundedBox>

            {/* Placa metálica pulida superior */}
            <Box args={[width * 0.94, 0.04, 0.008]} position={[0, height * 0.38, depth / 2 - 0.015]}>
                <meshStandardMaterial color="#CBD5E1" metalness={0.95} roughness={0.1} />
            </Box>

            {/* Rejillas de ventilación perforadas estilo panal */}
            {Array.from({ length: 12 }).map((_, rIdx) => (
                <Box
                    key={'grill-' + rIdx}
                    args={[0.018, height * 0.58, 0.005]}
                    position={[-width / 2 + 0.12 + rIdx * 0.045, -height * 0.05, depth / 2 - 0.012]}
                >
                    <meshStandardMaterial color="#1E293B" metalness={0.8} roughness={0.4} />
                </Box>
            ))}

            {/* Bahías de almacenamiento masivo 3.5" (12 unidades) */}
            {Array.from({ length: 6 }).map((_, dIdx) => (
                <group key={'caddy2u-' + dIdx} position={[width / 2 - 0.38 + (dIdx % 3) * 0.11, dIdx < 3 ? 0.04 : -0.05, depth / 2 - 0.01]}>
                    <Box args={[0.098, 0.075, 0.008]}>
                        <meshStandardMaterial color="#475569" metalness={0.85} roughness={0.2} />
                    </Box>
                    <Box args={[0.09, 0.014, 0.01]} position={[0, -0.025, 0.002]}>
                        <meshStandardMaterial color="#CBD5E1" metalness={0.95} roughness={0.1} />
                    </Box>
                    <mesh position={[-0.032, 0.022, 0.005]}>
                        <sphereGeometry args={[0.0035, 8, 8]} />
                        <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.7} />
                    </mesh>
                </group>
            ))}

            {/* Insignia NVIDIA GPU Accelerator o Dell PowerEdge */}
            <Box args={[0.18, 0.032, 0.008]} position={[-width / 2 + 0.15, height * 0.36, depth / 2 - 0.01]}>
                <meshStandardMaterial color={type === 'gpu' ? '#15803D' : '#1D4ED8'} emissive={type === 'gpu' ? '#22C55E' : '#3B82F6'} emissiveIntensity={0.6} />
            </Box>

            {/* Manijas de liberación y extracción reforzadas */}
            <Box args={[0.018, height * 0.7, 0.035]} position={[-width / 2 - 0.01, 0, depth / 2 - 0.03]}>
                <meshStandardMaterial color="#E2E8F0" metalness={0.98} roughness={0.08} />
            </Box>
            <Box args={[0.018, height * 0.7, 0.035]} position={[width / 2 + 0.01, 0, depth / 2 - 0.03]}>
                <meshStandardMaterial color="#E2E8F0" metalness={0.98} roughness={0.08} />
            </Box>
        </group>
    );
};

// ==========================================
// SWITCH INFINIBAND / FIBRA ÓPTICA 100G (1U)
// ==========================================
const Switch100G = ({ yPos }) => {
    const width = 0.96;
    const height = 0.11;
    const depth = 0.65;

    return (
        <group position={[0, yPos, 0]}>
            {/* Chasis metálico */}
            <Box args={[width, height * 0.95, depth]} position={[0, 0, -0.1]}>
                <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
            </Box>

            {/* Panel frontal plateado de alta densidad */}
            <Box args={[width * 0.98, height * 0.9, 0.02]} position={[0, 0, depth / 2 - 0.08]}>
                <meshStandardMaterial color="#CBD5E1" metalness={0.95} roughness={0.15} />
            </Box>

            {/* Puertos QSFP28 / SFP+ de alta velocidad (24 puertos agrupados) */}
            {Array.from({ length: 16 }).map((_, pIdx) => (
                <group key={'port-' + pIdx} position={[-width / 2 + 0.15 + pIdx * 0.042, 0, depth / 2 - 0.068]}>
                    <Box args={[0.032, 0.038, 0.01]}>
                        <meshStandardMaterial color="#0F172A" metalness={0.6} roughness={0.4} />
                    </Box>
                    <Box args={[0.036, 0.042, 0.005]} position={[0, 0, -0.002]}>
                        <meshStandardMaterial color="#94A3B8" metalness={0.95} roughness={0.1} />
                    </Box>
                    {/* LED de enlace QSFP (Cyan / Ámbar) */}
                    <mesh position={[0, 0.026, 0.006]}>
                        <sphereGeometry args={[0.0028, 8, 8]} />
                        <meshStandardMaterial
                            color={pIdx % 3 === 0 ? '#38BDF8' : '#10B981'}
                            emissive={pIdx % 3 === 0 ? '#38BDF8' : '#10B981'}
                            emissiveIntensity={0.8}
                        />
                    </mesh>
                </group>
            ))}

            {/* Puertos de gestión RJ45 y consola en azul */}
            <Box args={[0.08, 0.04, 0.01]} position={[width / 2 - 0.1, 0, depth / 2 - 0.068]}>
                <meshStandardMaterial color="#1D4ED8" metalness={0.5} roughness={0.3} />
            </Box>
        </group>
    );
};

// ==========================================
// UNIDAD UPS & DISTRIBUCIÓN PDU (3U)
// ==========================================
const PduUpsUnit = ({ yPos }) => {
    const width = 0.96;
    const height = 0.28;
    const depth = 0.82;

    return (
        <group position={[0, yPos, 0]}>
            {/* Chasis robusto */}
            <Box args={[width, height * 0.96, depth]} position={[0, 0, -0.05]}>
                <meshStandardMaterial color="#1E293B" metalness={0.8} roughness={0.3} />
            </Box>

            {/* Panel frontal con display LCD */}
            <RoundedBox args={[width * 0.98, height * 0.92, 0.02]} radius={0.008} position={[0, 0, depth / 2 - 0.03]}>
                <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.25} />
            </RoundedBox>

            {/* Pantalla digital LCD verde/cyan de monitoreo eléctrico */}
            <Box args={[0.22, 0.09, 0.01]} position={[-width / 2 + 0.2, 0.02, depth / 2 - 0.015]}>
                <meshStandardMaterial color="#064E3B" emissive="#10B981" emissiveIntensity={0.9} />
            </Box>

            {/* Interruptores termomagnéticos industriales */}
            {Array.from({ length: 6 }).map((_, swIdx) => (
                <Box
                    key={'sw-' + swIdx}
                    args={[0.028, 0.06, 0.015]}
                    position={[-width / 2 + 0.42 + swIdx * 0.045, 0.02, depth / 2 - 0.012]}
                >
                    <meshStandardMaterial color="#DC2626" metalness={0.4} roughness={0.5} />
                </Box>
            ))}

            {/* Rejilla de ventilación de transformadores */}
            <Box args={[0.24, height * 0.6, 0.006]} position={[width / 2 - 0.18, 0, depth / 2 - 0.015]}>
                <meshStandardMaterial color="#0F172A" metalness={0.8} roughness={0.4} />
            </Box>
        </group>
    );
};

// ==========================================
// GABINETE / RACK DE 42U COMPLETO
// ==========================================
const EnterpriseRackCabinet = ({ position = [0, 0, 0], rackId = 'RACK-01', role = 'Cómputo' }) => {
    const rackHeight = 2.45;
    const width = 1.08;
    const depth = 0.95;

    return (
        <group position={position}>
            {/* Marco estructural exterior en acero antracita con recubrimiento en polvo */}
            {/* Columnas frontales y traseras */}
            <Box args={[0.06, rackHeight + 0.08, 0.06]} position={[-width / 2 - 0.02, 0, depth / 2]}>
                <meshStandardMaterial color="#475569" metalness={0.6} roughness={0.3} />
            </Box>
            <Box args={[0.06, rackHeight + 0.08, 0.06]} position={[width / 2 + 0.02, 0, depth / 2]}>
                <meshStandardMaterial color="#475569" metalness={0.6} roughness={0.3} />
            </Box>
            <Box args={[0.06, rackHeight + 0.08, 0.06]} position={[-width / 2 - 0.02, 0, -depth / 2]}>
                <meshStandardMaterial color="#475569" metalness={0.6} roughness={0.3} />
            </Box>
            <Box args={[0.06, rackHeight + 0.08, 0.06]} position={[width / 2 + 0.02, 0, -depth / 2]}>
                <meshStandardMaterial color="#475569" metalness={0.6} roughness={0.3} />
            </Box>

            {/* Rieles de montaje vertical EIA-310 (Acero galvanizado brillante) */}
            <Box args={[0.03, rackHeight, 0.04]} position={[-width / 2 + 0.035, 0, depth / 2 - 0.06]}>
                <meshStandardMaterial color="#CBD5E1" metalness={0.96} roughness={0.1} />
            </Box>
            <Box args={[0.03, rackHeight, 0.04]} position={[width / 2 - 0.035, 0, depth / 2 - 0.06]}>
                <meshStandardMaterial color="#CBD5E1" metalness={0.96} roughness={0.1} />
            </Box>

            {/* Techo del rack con rejillas para ventiladores de extracción de calor */}
            <RoundedBox args={[width + 0.12, 0.05, depth + 0.08]} radius={0.01} position={[0, rackHeight / 2 + 0.04, 0]}>
                <meshStandardMaterial color="#334155" metalness={0.6} roughness={0.4} />
            </RoundedBox>
            <Cylinder args={[0.16, 0.16, 0.02, 24]} position={[-0.22, rackHeight / 2 + 0.065, 0]}>
                <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.3} />
            </Cylinder>
            <Cylinder args={[0.16, 0.16, 0.02, 24]} position={[0.22, rackHeight / 2 + 0.065, 0]}>
                <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.3} />
            </Cylinder>

            {/* Base reforzada con niveladores y patas industriales */}
            <RoundedBox args={[width + 0.12, 0.06, depth + 0.08]} radius={0.01} position={[0, -rackHeight / 2 - 0.03, 0]}>
                <meshStandardMaterial color="#334155" metalness={0.6} roughness={0.4} />
            </RoundedBox>
            {/* Patas niveladoras cromadas */}
            <Cylinder args={[0.04, 0.05, 0.06, 16]} position={[-width / 2, -rackHeight / 2 - 0.07, depth / 2]}>
                <meshStandardMaterial color="#E2E8F0" metalness={0.95} roughness={0.1} />
            </Cylinder>
            <Cylinder args={[0.04, 0.05, 0.06, 16]} position={[width / 2, -rackHeight / 2 - 0.07, depth / 2]}>
                <meshStandardMaterial color="#E2E8F0" metalness={0.95} roughness={0.1} />
            </Cylinder>
            <Cylinder args={[0.04, 0.05, 0.06, 16]} position={[-width / 2, -rackHeight / 2 - 0.07, -depth / 2]}>
                <meshStandardMaterial color="#E2E8F0" metalness={0.95} roughness={0.1} />
            </Cylinder>
            <Cylinder args={[0.04, 0.05, 0.06, 16]} position={[width / 2, -rackHeight / 2 - 0.07, -depth / 2]}>
                <meshStandardMaterial color="#E2E8F0" metalness={0.95} roughness={0.1} />
            </Cylinder>

            {/* Paneles laterales con respiradores y acabado texturizado */}
            <Box args={[0.015, rackHeight * 0.95, depth * 0.94]} position={[-width / 2 - 0.04, 0, 0]}>
                <meshStandardMaterial color="#334155" metalness={0.6} roughness={0.4} />
            </Box>
            <Box args={[0.015, rackHeight * 0.95, depth * 0.94]} position={[width / 2 + 0.04, 0, 0]}>
                <meshStandardMaterial color="#334155" metalness={0.6} roughness={0.4} />
            </Box>

            {/* Placa superior iluminada con la identificación del Rack (LARCAD / UNACH) */}
            <Box args={[0.42, 0.055, 0.01]} position={[0, rackHeight / 2 - 0.02, depth / 2 + 0.02]}>
                <meshStandardMaterial color="#0B1329" emissive="#3B82F6" emissiveIntensity={0.5} />
            </Box>

            {/* Canal vertical de cables frontales (Fibra óptica azul y cables Cat6A) */}
            <Cylinder args={[0.012, 0.012, rackHeight * 0.85, 12]} position={[-width / 2 + 0.015, 0, depth / 2 + 0.01]}>
                <meshStandardMaterial color="#2563EB" roughness={0.4} />
            </Cylinder>
            <Cylinder args={[0.009, 0.009, rackHeight * 0.82, 12]} position={[width / 2 - 0.015, 0, depth / 2 + 0.01]}>
                <meshStandardMaterial color="#06B6D4" roughness={0.4} />
            </Cylinder>

            {/* ========================================== */}
            {/* EQUIPAMIENTO INTERNO APILADO DEL RACK     */}
            {/* ========================================== */}
            {/* Top: Switch InfiniBand 100G (1U) */}
            <Switch100G yPos={rackHeight / 2 - 0.12} />
            <Switch100G yPos={rackHeight / 2 - 0.25} />

            {/* Nodos de Cómputo Dell PowerEdge R650 (1U x 4) */}
            <Server1U yPos={rackHeight / 2 - 0.40} />
            <Server1U yPos={rackHeight / 2 - 0.53} />
            <Server1U yPos={rackHeight / 2 - 0.66} />
            <Server1U yPos={rackHeight / 2 - 0.79} />

            {/* Nodos de Aceleración GPU Dell PowerEdge R750 (2U x 2) */}
            <Server2U yPos={rackHeight / 2 - 1.02} type="gpu" />
            <Server2U yPos={rackHeight / 2 - 1.30} type="gpu" />

            {/* Servidores de Almacenamiento Masivo Ceph (2U x 2) */}
            <Server2U yPos={rackHeight / 2 - 1.58} type="storage" />
            <Server2U yPos={rackHeight / 2 - 1.86} type="storage" />

            {/* Bottom: Sistema de Energía UPS Modular & PDU (3U) */}
            <PduUpsUnit yPos={-rackHeight / 2 + 0.22} />
        </group>
    );
};

// ==========================================
// ENTORNO DE SALA DATACENTER (Piso Falso & Luces)
// ==========================================
const DatacenterRoom = () => {
    // Piso de baldosas de centro de datos (600x600mm)
    return (
        <group position={[0, -1.35, 0]}>
            {/* Piso principal con baldosas claras de alta disipación electrostática */}
            <Box args={[14, 0.08, 10]} position={[0, -0.04, 0]}>
                <meshStandardMaterial color="#334155" metalness={0.4} roughness={0.5} />
            </Box>

            {/* Baldosas perforadas de ventilación en pasillo frío (rejillas frontales) */}
            {[-1.6, 0, 1.6].map((xOffset, idx) => (
                <Box key={'tile-' + idx} args={[1.2, 0.01, 1.1]} position={[xOffset, 0.005, 0.85]}>
                    <meshStandardMaterial color="#475569" metalness={0.65} roughness={0.4} />
                </Box>
            ))}

            {/* Resplandor frío bajo piso (plenum de aire acondicionado de precisión) */}
            <pointLight position={[0, -0.1, 0.5]} intensity={0.5} distance={4} color="#F8FAFC" />
        </group>
    );
};

// ==========================================
// COMPONENTE PRINCIPAL DEL CANVAS 3D
// ==========================================
const HardwareModel3D = () => {
    const [viewMode, setViewMode] = useState('perspective');
    const controlsRef = useRef();
    const isMobile = useMediaQuery('(max-width: 768px)');
    const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

    return (
        <div style={{ position: 'relative', width: '100%', height: isMobile ? '300px' : '480px' }}>
            <Canvas
                camera={{ position: [0, 0.3, 4.8], fov: 46 }}
                gl={{ antialias: false, toneMappingExposure: 1.15, powerPreference: 'high-performance' }}
                dpr={[1, 1.5]}
                frameloop={reduceMotion ? 'demand' : 'always'}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '18px',
                    background: 'transparent',
                    touchAction: 'pan-y',
                }}
            >
                {/* Iluminación de Estudio Datacenter Profesional (Más realista) */}
                <ambientLight intensity={1.2} color="#FFFFFF" />
                <directionalLight position={[0, 6, 2]} intensity={1.5} color="#FFFFFF" castShadow />
                <directionalLight position={[-4, 3, 4]} intensity={0.8} color="#F8FAFC" />
                
                {/* Luces de relleno neutras en lugar de colores neon saturados */}
                <pointLight position={[-3.5, 1.5, 2]} intensity={0.6} distance={7} color="#FFFFFF" />
                <pointLight position={[3.5, 0.5, 2]} intensity={0.5} distance={7} color="#E2E8F0" />
                <pointLight position={[0, -0.5, -2]} intensity={0.4} distance={6} color="#FFFFFF" />

                {/* Entorno de la sala de cómputo */}
                <DatacenterRoom />

                {/* 3 Racks de Servidores Completos en Producción */}
                {/* Rack 1: Nodos de Cómputo CPU (Intel Xeon Gold) */}
                <EnterpriseRackCabinet position={[-1.4, 0, 0]} rackId="RACK-HPC-01" role="Cómputo" />

                {/* Rack 2: Servidores de Aceleración GPU & Almacenamiento Scratch Ceph */}
                <EnterpriseRackCabinet position={[0, 0, 0]} rackId="RACK-HPC-02" role="GPU & Ceph" />

                {/* Rack 3: Almacenamiento SAS, Core Network & Switches InfiniBand */}
                <EnterpriseRackCabinet position={[1.4, 0, 0]} rackId="RACK-HPC-03" role="Storage & Core" />

                {/* Sombra de contacto suave sobre el suelo */}
                <ContactShadows
                    position={[0, -1.34, 0]}
                    opacity={0.75}
                    scale={10}
                    blur={1.8}
                    far={4}
                    color="#020617"
                />

                {/* Controles de cámara con rotación automática suave */}
                <OrbitControls
                    ref={controlsRef}
                    enableZoom={!isMobile}
                    minDistance={3.2}
                    maxDistance={7.0}
                    autoRotate={false}
                    maxPolarAngle={Math.PI / 2 + 0.05}
                    minPolarAngle={Math.PI / 4}
                    minAzimuthAngle={-Math.PI / 6}
                    maxAzimuthAngle={Math.PI / 6}
                />
            </Canvas>

            {/* Controles interactivos flotantes en la esquina inferior */}
            <div
                style={{
                    position: 'absolute',
                    top: '14px',
                    left: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(10px)',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    fontSize: '11px',
                    fontWeight: '600',
                    color: '#E2E8F0',
                    pointerEvents: 'none',
                }}
            >
                <span
                    style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: '#10B981',
                        boxShadow: '0 0 8px #10B981',
                    }}
                />
                SALA HPC LARCAD • 3 RACKS ACTIVOS
            </div>
        </div>
    );
};

export default HardwareModel3D;
