import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HardwareModel3D from './HardwareModel3D';
import {
    HardwareContainer,
    HardwareContent,
    SectionTitle,
    ContentWrapper,
    Model3DWrapper,
    SpecsGrid,
    SpecCard,
    SpecLabel,
    SpecValue,
} from './Hardware.styles';
import { FaServer, FaHdd, FaDatabase, FaNetworkWired, FaLayerGroup, FaShieldAlt } from 'react-icons/fa';

const Hardware = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    // Estructura con íconos y mejor distribución visual
    const specs = [
        {
            label: 'Servidores',
            icon: <FaServer size={32} color="#def440" style={{ marginRight: 12 }} />,
            value: [
                '8 Servidores de procesamiento con 2.2 TB RAM DDR4',
                'Intel Xeon Gold, 192 núcleos',
                'Tarjeta gráfica Nvidia RTX A5000',
                'Rendimiento equivalente a supercomputadora (HPC)',
            ],
        },
        {
            label: 'Almacenamiento y Cómputo',
            icon: <FaHdd size={32} color="#def440" style={{ marginRight: 12 }} />,
            value: [
                'Almacenamiento en disco SAS: 110 TB',
                'Clúster de Cálculo: 192 núcleos de procesamiento, 128 TB de almacenamiento, 1.2 TB Memoria RAM',
                'Soporte para simulaciones de alto desempeño',
            ],
        },
        {
            label: 'Clúster de Almacenamiento (/home)',
            icon: <FaDatabase size={32} color="#def440" style={{ marginRight: 12 }} />,
            value: [
                'Capacidad total: 128 TB',
                'Almacenamiento con tolerancia a fallos',
            ],
        },
        {
            label: 'Clúster de Almacenamiento (/scratch)',
            icon: <FaDatabase size={32} color="#def440" style={{ marginRight: 12, filter: 'brightness(0.8)' }} />,
            value: [
                'Capacidad total: 800 TB',
                'File System: Ceph',
                'Alta disponibilidad y rendimiento',
            ],
        },
        {
            label: 'Conectividad',
            icon: <FaNetworkWired size={32} color="#def440" style={{ marginRight: 12 }} />,
            value: [
                'Switches de alto desempeño',
                'Conectividad con red de fibra óptica',
                'VPN seguras y enlaces redundantes',
            ],
        },
        {
            label: 'Racks',
            icon: <FaLayerGroup size={32} color="#def440" style={{ marginRight: 12 }} />,
            value: [
                '32 Racks de cómputo y almacenamiento',
                'Videovigilancia y ambiente controlado',
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const specVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <HardwareContainer id="hardware" ref={ref}>
            <HardwareContent className="container">
                <SectionTitle
                    as={motion.h2}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Hardware de Elite
                </SectionTitle>

                <ContentWrapper>
                    <Model3DWrapper
                        as={motion.div}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <HardwareModel3D />
                    </Model3DWrapper>

                    <SpecsGrid
                        as={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        {specs.map((spec, index) => (
                            <SpecCard
                                key={index}
                                as={motion.div}
                                variants={specVariants}
                                whileHover={{ scale: 1.04, y: -6 }}
                                style={{ alignItems: 'flex-start', minHeight: 120 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                                    {spec.icon}
                                    <SpecLabel>{spec.label}</SpecLabel>
                                </div>
                                <SpecValue as="div" style={{ textAlign: 'left', width: '100%' }}>
                                    <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
                                        {spec.value.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </SpecValue>
                            </SpecCard>
                        ))}
                    </SpecsGrid>
                </ContentWrapper>
            </HardwareContent>
        </HardwareContainer>
    );
};

export default Hardware;
