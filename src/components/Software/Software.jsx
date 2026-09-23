import React from 'react';
import Divider from "../Divider";
import { motion } from 'framer-motion';
import {
    FiExternalLink,
    FiBookOpen,
    FiLayers,
    FiCpu,
    FiActivity,
    FiWind,
    FiCompass,
} from 'react-icons/fi';
import {
    SoftwareContainer,
    SoftwareContent,
    SectionHeader,
    SectionTag,
    SectionTitle,
    SectionSubtitle,
    SoftwareGrid,
    SoftwareCard,
    SoftwareCardHeader,
    SoftwareCategoryBadge,
    SoftwareIconWrap,
    SoftwareTitle,
    SoftwareDescription,
    SoftwareLinks,
    SoftwareLink,
    SoftwareVersionTag,
} from './Software.styles';

const Software = () => {

    const softwareList = [
        {
            name: 'CORSIKA',
            category: 'Astropartículas',
            icon: <FiActivity />,
            description: 'Simulación Monte Carlo de extensas cascadas de aire (duchas atmosféricas) inducidas por rayos cósmicos de ultra-alta energía.',
            links: [
                { label: 'Sitio Oficial', url: 'https://www.iap.kit.edu/corsika/' },
                { label: 'Documentación', url: 'https://www.iap.kit.edu/corsika/70.php' },
            ],
            version: 'v74005 / v74100curved',
        },
        {
            name: 'FLUKA',
            category: 'Física Nuclear & Radiación',
            icon: <FiLayers />,
            description: 'Herramienta de propósito general para cálculo del transporte de partículas e interacciones radiación-materia, con aplicaciones en aceleradores, medicina y física espacial.',
            links: [
                { label: 'Sitio Oficial', url: 'https://fluka.cern/' },
                { label: 'Manual CERN', url: 'https://fluka.cern/documentation' },
            ],
            version: 'v2011.2c',
        },
        {
            name: 'Geant4',
            category: 'Física de Altas Energías',
            icon: <FiCpu />,
            description: 'Toolkit desarrollado en CERN para simular el paso de partículas elementales a través de la materia con precisión geométrica y física avanzada.',
            links: [
                { label: 'Sitio Oficial', url: 'https://geant4.web.cern.ch/' },
                { label: 'Guía de Usuario', url: 'https://geant4-userdoc.web.cern.ch/' },
            ],
            version: 'v10.1.0',
        },
        {
            name: 'HAWC2',
            category: 'Aeroelasticidad Eólica',
            icon: <FiWind />,
            description: 'Código aeroelástico para modelar respuestas no lineales en el dominio del tiempo de aerogeneradores y turbinas eólicas flotantes.',
            links: [
                { label: 'Sitio DTU', url: 'https://www.hawc2.dk/' },
                { label: 'Manual Técnico', url: 'https://www.hawc2.dk/Documentation' },
            ],
            version: 'ape-hawc2-02.02',
        },
        {
            name: 'ORCA',
            category: 'Química Cuántica',
            icon: <FiCompass />,
            description: 'Paquete de química cuántica ab-initio para cálculos de estructura electrónica, teoría del funcional de la densidad (DFT), espectroscopía y métodos acoplados.',
            links: [
                { label: 'Portal Oficial', url: 'https://www.faccts.de/orca/' },
                { label: 'Documentación', url: 'https://www.orcasoftware.de/' },
            ],
            version: 'v4.0.1.101',
        },
        {
            name: 'Quantum ESPRESSO',
            category: 'Ciencia de Materiales',
            icon: <FiLayers />,
            description: 'Suite integrada de códigos abiertos para modelado a escala atómica de materiales, estructuras electrónicas periódicas y ondas planas pseudopotenciales.',
            links: [
                { label: 'Portal Oficial', url: 'https://www.quantum-espresso.org/' },
                { label: 'Documentación', url: 'https://www.quantum-espresso.org/Doc/' },
            ],
            version: 'QE-6.0',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <SoftwareContainer id="software">
            <Divider type="step" color="#0B0F19" accentColor="#38BDF8" position="bottom" height="60px" />
            <SoftwareContent className="container">
                <SectionHeader>
                    <SectionTag>Software Científico</SectionTag>
                    <SectionTitle>Herramientas y Entornos de Cálculo</SectionTitle>
                    <SectionSubtitle>
                        Paquetes optimizados e interconectados con las librerías paralelas MPI y aceleración CUDA del clúster.
                    </SectionSubtitle>
                </SectionHeader>

                <SoftwareGrid
                    as={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {softwareList.map((software, index) => (
                        <SoftwareCard
                            key={index}
                            as={motion.div}
                            variants={cardVariants}
                        >
                            <SoftwareCardHeader>
                                <SoftwareIconWrap>{software.icon}</SoftwareIconWrap>
                                <SoftwareCategoryBadge>{software.category}</SoftwareCategoryBadge>
                            </SoftwareCardHeader>

                            <SoftwareTitle>{software.name}</SoftwareTitle>
                            <SoftwareDescription>{software.description}</SoftwareDescription>

                            <SoftwareLinks>
                                {software.links.map((link, i) => (
                                    <SoftwareLink
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FiBookOpen size={13} />
                                        <span>{link.label}</span>
                                        <FiExternalLink size={11} />
                                    </SoftwareLink>
                                ))}
                            </SoftwareLinks>

                            <SoftwareVersionTag>
                                <span className="label">Compilación:</span>
                                <span className="val">{software.version}</span>
                            </SoftwareVersionTag>
                        </SoftwareCard>
                    ))}
                </SoftwareGrid>
            </SoftwareContent>
        </SoftwareContainer>
    );
};

export default Software;
