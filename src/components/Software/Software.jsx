import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    SoftwareContainer,
    SoftwareContent,
    SectionTitle,
    SoftwareGrid,
    SoftwareCard,
    SoftwareLogo,
    SoftwareTitle,
    SoftwareDescription,
    SoftwareLinks,
    SoftwareLink,
    SoftwareVersion,
} from './Software.styles';

const Software = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const softwareList = [
        {
            name: 'CORSIKA',
            logo: '🌌',
            description: 'CORSIKA es un software de física para la simulación de extensas duchas de aire inducidas por rayos cósmicos de alta energía.',
            links: [
                { label: 'Sitio oficial', url: '#' },
                { label: 'Documentación', url: '#' },
            ],
            version: '74005, 74005curved, 74005th, 74100curved',
        },
        {
            name: 'FLUKA',
            logo: '⚛️',
            description: 'FLUKA es una herramienta de propósito general para cálculos de transporte de partículas e interacciones con la materia, usada en múltiples aplicaciones científicas.',
            links: [
                { label: 'Sitio oficial', url: '#' },
                { label: 'Manual', url: '#' },
                { label: 'Cursos', url: '#' },
            ],
            version: '2011.2c',
        },
        {
            name: 'Geant4',
            logo: '🔬',
            description: 'Geant4 es un conjunto de herramientas para simular el paso de partículas a través de la materia, con aplicaciones en física de alta energía, medicina y más.',
            links: [
                { label: 'Sitio oficial', url: '#' },
                { label: 'Documentación', url: '#' },
            ],
            version: 'Geant4-10.1.0',
        },
        {
            name: 'Hawc2',
            logo: '🌀',
            description: 'HAWC2 es un código aeroelástico destinado a calcular la respuesta de la turbina eólica en el dominio del tiempo.',
            links: [
                { label: 'Sitio oficial', url: '#' },
                { label: 'Documentación', url: '#' },
            ],
            version: 'ape-hawc2-02.02',
        },
        {
            name: 'ORCA',
            logo: '🧪',
            description: 'ORCA es un software de química cuántica que ofrece métodos avanzados de estructura electrónica, como teoría del funcional de densidad y métodos multireferencia.',
            links: [
                { label: 'Sitio oficial', url: '#' },
                { label: 'Manual', url: '#' },
            ],
            version: '4.0.1.101',
        },
        {
            name: 'QUANTUM ESPRESSO',
            logo: '☕',
            description: 'Quantum Espresso es un conjunto integrado de códigos de computadora de código abierto para cálculos de estructura electrónica y modelado de materiales a nanoescala.',
            links: [
                { label: 'Sitio oficial', url: '#' },
                { label: 'Documentación', url: '#' },
                { label: 'Manual', url: '#' },
            ],
            version: 'qe-6.0',
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

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
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
        <SoftwareContainer id="software" ref={ref}>
            <SoftwareContent className="container">
                <SectionTitle
                    as={motion.h2}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Software de Desarrollo
                </SectionTitle>

                <SoftwareGrid
                    as={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {softwareList.map((software, index) => (
                        <SoftwareCard
                            key={index}
                            as={motion.div}
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, y: -8 }}
                        >
                            <SoftwareLogo>{software.logo}</SoftwareLogo>
                            <SoftwareTitle>{software.name}</SoftwareTitle>
                            <SoftwareDescription>{software.description}</SoftwareDescription>
                            <SoftwareLinks>
                                {software.links.map((link, i) => (
                                    <SoftwareLink key={i} href={link.url}>
                                        {link.label}
                                    </SoftwareLink>
                                ))}
                            </SoftwareLinks>
                            <SoftwareVersion>Versión: {software.version}</SoftwareVersion>
                        </SoftwareCard>
                    ))}
                </SoftwareGrid>
            </SoftwareContent>
        </SoftwareContainer>
    );
};

export default Software;
