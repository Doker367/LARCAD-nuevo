import React from 'react';
import Divider from "../Divider";
import { motion } from 'framer-motion';
import {
    FiServer,
    FiHardDrive,
    FiDatabase,
    FiShare2,
    FiLayers,
    FiCpu,
    FiMove,
} from 'react-icons/fi';
import HardwareModel3D from './HardwareModel3D';
import {
    HardwareContainer,
    HardwareContent,
    SectionHeader,
    SectionTag,
    SectionTitle,
    SectionSubtitle,
    ContentWrapper,
    Model3DWrapper,
    TelemetryBar,
    ModelInstruction,
    SpecsGrid,
    SpecCard,
    SpecHeader,
    SpecIcon,
    SpecLabel,
    SpecList,
    CertificationsGrid,
    CertCard,
    StickyContainer,
} from './Hardware.styles';

const Hardware = () => {
    const specs = [
        {
            label: 'Nodos de Cómputo CPU & GPU',
            tag: '192 Cores • Dell PowerEdge',
            color: '#3B82F6', // Tech Blue
            icon: <FiCpu />,
            items: [
                '8 Servidores de procesamiento Dell PowerEdge R650 / R750 con 2.2 TB RAM DDR4 ECC',
                'Procesadores Intel Xeon Gold multi-hilo de alto rendimiento',
                'Aceleradores NVIDIA RTX A5000 para cómputo masivo paralelo y CUDA',
                'Arquitectura balanceada y redundancia N+1 para simulación científica ininterrumpida',
            ],
        },
        {
            label: 'Almacenamiento Scratch Ceph',
            tag: '800 TB • Ceph Distributed FS',
            color: '#06B6D4', // Cyan
            icon: <FiDatabase />,
            items: [
                'Partición /scratch de 800 TB sobre sistema de archivos distribuido Ceph',
                'Alta tasa de IOPS y concurrencia optimizada para simulación numérica pesada',
                'Acceso directo POSIX mediante nodos dedicados de metadatos (MDS)',
            ],
        },
        {
            label: 'Almacenamiento Home & Transaccional',
            tag: '128 TB • SAS Enterprise RAID',
            color: '#10B981', // Emerald
            icon: <FiHardDrive />,
            items: [
                'Partición /home persistente de 128 TB en arreglos de discos SAS empresariales',
                '110 TB adicionales en repositorios de respaldo y snapshots programados',
                'Tolerancia a fallos con bahías Hot-Swap y controladores redundantes',
            ],
        },
        {
            label: 'Infraestructura Datacenter & Racks',
            tag: '32 Gabinetes 42U • Tier II',
            color: '#8B5CF6', // Purple / Violet
            icon: <FiLayers />,
            items: [
                '32 Racks de servidores de 42U acondicionados con confinamiento de pasillo frío',
                'Subestación eléctrica propia respaldada por UPS modular y planta de emergencia',
                'Sistemas de aire acondicionado de precisión con control estricto de humedad y temperatura',
            ],
        },
        {
            label: 'Conectividad & Baja Latencia',
            tag: '100 Gbps • InfiniBand & Fibra',
            color: '#38BDF8', // Sky Blue
            icon: <FiShare2 />,
            items: [
                'Switches de interconexión Mellanox InfiniBand para comunicación MPI inter-nodo',
                'Red dorsal de fibra óptica carrier-class conectada a la Red Nacional de Investigación',
                'Túneles VPN seguros con cifrado de grado militar para acceso remoto autorizado (SSH)',
            ],
        },
        {
            label: 'Gestor de Cargas & Colas',
            tag: 'SLURM HPC Workload Manager',
            color: '#F59E0B', // UNACH Amber/Gold
            icon: <FiServer />,
            items: [
                'Planificador de trabajos por lotes SLURM para asignación eficiente y equitativa de recursos',
                'Monitoreo ambiental, térmico y de consumo por nodo en tiempo real',
                'Módulos de entorno dinámicos (Environment Modules) para software científico',
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const specVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: 'easeOut' },
        },
    };

    return (
        <HardwareContainer id="hardware">
            <Divider type="slant-left" color="#0B0F19" accentColor="#6366F1" position="bottom" height="70px" />
            <HardwareContent className="container">
                <SectionHeader>
                    <SectionTag>Arquitectura de Supercómputo</SectionTag>
                    <SectionTitle>
                        Hardware de <span className="highlight">Alto Rendimiento</span>
                    </SectionTitle>
                    <SectionSubtitle>
                        Nodos de cálculo, almacenamiento distribuido de baja latencia y gabinetes industriales diseñados para soportar las cargas de trabajo científicas más demandantes.
                    </SectionSubtitle>
                </SectionHeader>

                <ContentWrapper>
                    <StickyContainer>
                        <Model3DWrapper
                            as={motion.div}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                        {/* Certificaciones ICREA */}
                        <CertificationsGrid>
                            {[
                                { 
                                    level: 'Level I', 
                                    disp: '95%', 
                                    desc: 'Quality Assurance Data Center', 
                                    img: 'https://icrea-international.org/wp-content/uploads/2021/07/Empresa-Level-I.png' 
                                },
                                { 
                                    level: 'Level II', 
                                    disp: '99%', 
                                    desc: 'World Class Quality Assurance Data Center', 
                                    img: 'https://icrea-international.org/wp-content/uploads/2021/07/Empresa-Level-II.png' 
                                },
                                { 
                                    level: 'Nivel III', 
                                    disp: '99.9%', 
                                    desc: 'Safety World Class Quality', 
                                    img: 'https://icrea-international.org/wp-content/uploads/2021/07/Empresa-Level-III.png' 
                                }
                            ].map((cert, idx) => (
                                <CertCard key={idx}>
                                    <img src={cert.img} alt={cert.level} />
                                    <div className="cert-title">
                                        Disponibilidad {cert.disp}
                                    </div>
                                    <div className="cert-desc">
                                        {cert.level}<br/>{cert.desc}
                                    </div>
                                </CertCard>
                            ))}
                        </CertificationsGrid>

                        <HardwareModel3D />

                        <ModelInstruction>
                            <div className="instruction-left">
                                <FiMove />
                                <span>Arrastra con el mouse para inspeccionar los racks (Vista Frontal)</span>
                            </div>
                        </ModelInstruction>
                        </Model3DWrapper>
                    </StickyContainer>

                    <SpecsGrid
                        as={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {specs.map((spec, index) => (
                            <SpecCard
                                key={index}
                                as={motion.div}
                                variants={specVariants}
                                $color={spec.color}
                            >
                                <SpecHeader>
                                    <div className="title-group">
                                        <SpecIcon $color={spec.color}>{spec.icon}</SpecIcon>
                                        <SpecLabel>{spec.label}</SpecLabel>
                                    </div>
                                    <span className="spec-tag">{spec.tag}</span>
                                </SpecHeader>
                                <SpecList $color={spec.color}>
                                    {spec.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </SpecList>
                            </SpecCard>
                        ))}
                    </SpecsGrid>
                </ContentWrapper>
            </HardwareContent>
        </HardwareContainer>
    );
};

export default Hardware;
