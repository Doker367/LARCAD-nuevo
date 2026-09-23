import React, { useState, useRef } from 'react';
import Divider from "../Divider";
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    FiServer,
    FiCloud,
    FiEye,
    FiHardDrive,
    FiDatabase,
    FiShield,
    FiGlobe,
    FiCheckCircle,
    FiCpu,
    FiAward,
    FiLayers,
    FiLock,
    FiShare2,
    FiActivity,
} from 'react-icons/fi';
import {
    ServicesContainer,
    ServicesContent,
    SectionHeader,
    SectionTag,
    SectionTitle,
    SectionSubtitle,
    FilterTabsContainer,
    FilterTab,
    ServicesGrid,
    ServiceCard,
    ServiceCategoryTag,
    IconWrapper,
    ServiceTitle,
    ServiceDescription,
    TierServicesWrapper,
    TierHeader,
    TierCardsGrid,
    TierCard,
    TierBadge,
    TierTitle,
    TierDesc,
    TierFeaturesList,
} from './Services.styles';

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [activeFilter, setActiveFilter] = useState('all');

    const categories = [
        { id: 'all', label: 'Todos los Servicios' },
        { id: 'hpc', label: 'Cómputo & HPC' },
        { id: 'storage', label: 'Almacenamiento & Nube' },
        { id: 'network', label: 'Redes & Conectividad' },
        { id: 'security', label: 'Seguridad & Soporte' },
    ];

    const allServices = [
        {
            category: 'hpc',
            categoryName: 'Infraestructura TI',
            icon: <FiServer />,
            title: 'Colocación de Equipos (Housing)',
            description: 'Alojamiento físico en racks climatizados, monitoreo de ambiente por videovigilancia y acceso biométrico controlado.',
        },
        {
            category: 'hpc',
            categoryName: 'Hospedaje Web & DB',
            icon: <FiCloud />,
            title: 'Hospedaje de Sistemas (Hosting)',
            description: 'Albergue de aplicaciones web institucionales, APIs y bases de datos con alta disponibilidad y redundancia eléctrica.',
        },
        {
            category: 'security',
            categoryName: 'Monitoreo 24/7',
            icon: <FiEye />,
            title: 'Monitoreo de Infraestructura',
            description: 'Supervisión en tiempo real de parámetros de telemetría: carga de CPU, consumo de memoria, IOPS y salud física de servidores.',
        },
        {
            category: 'hpc',
            categoryName: 'Virtualización',
            icon: <FiLayers />,
            title: 'Virtualización VMware Enterprise',
            description: 'Entornos de virtualización x86 para optimizar recursos computacionales, creación de máquinas virtuales y snapshots automáticos.',
        },
        {
            category: 'storage',
            categoryName: 'Storage Masivo',
            icon: <FiHardDrive />,
            title: 'Almacenamiento Híbrido NFS/SAN',
            description: 'Arquitectura de almacenamiento escalable con protocolos SAN y NFS, particionado para datos transaccionales y archivos masivos.',
        },
        {
            category: 'storage',
            categoryName: 'Protección de Datos',
            icon: <FiDatabase />,
            title: 'Respaldo Automatizado',
            description: 'Políticas de copia de seguridad periódica con recuperación en cualquier punto del tiempo y protección ante pérdida de datos.',
        },
        {
            category: 'security',
            categoryName: 'Ciberseguridad',
            icon: <FiLock />,
            title: 'Seguridad y Protección de Datos',
            description: 'Implementación de directivas de cifrado, auditoría de accesos y cumplimiento de normativas de privacidad institucional.',
        },
        {
            category: 'storage',
            categoryName: 'Nube Privada',
            icon: <FiCloud />,
            title: 'Almacenamiento en Nube Institucional',
            description: 'Depósito seguro en los servidores locales del LARCAD con acceso autenticado vía SSH, SFTP o consola web desde cualquier punto.',
        },
        {
            category: 'network',
            categoryName: 'Telecomunicaciones',
            icon: <FiGlobe />,
            title: 'Servicios de Telecomunicaciones',
            description: 'Conectividad de grado científico para instituciones públicas, universitarias y centros de I+D con baja latencia.',
        },
        {
            category: 'security',
            categoryName: 'Defensa de Red',
            icon: <FiShield />,
            title: 'Seguridad Perimetral & Firewall',
            description: 'Inspección profunda de paquetes, sistemas de detección y prevención de intrusos (IDS/IPS) y filtrado perimetral.',
        },
        {
            category: 'network',
            categoryName: 'Infraestructura DNS',
            icon: <FiShare2 />,
            title: 'Servidor de Nombres de Dominio',
            description: 'Resolución recursiva y autoritativa de dominios con alta disponibilidad y protección contra ataques DDoS.',
        },
        {
            category: 'network',
            categoryName: 'Conectividad WAN',
            icon: <FiActivity />,
            title: 'Salida a Internet Redundante',
            description: 'Múltiples enlaces de fibra óptica carrier-class con conmutación automática ante fallas para garantizar conectividad continua.',
        },
        {
            category: 'network',
            categoryName: 'Fibra Óptica',
            icon: <FiActivity />,
            title: 'Interconexión de Fibra Óptica',
            description: 'Enlaces dedicados de alta capacidad interconectando las dependencias universitarias y centros científicos de la región.',
        },
        {
            category: 'hpc',
            categoryName: 'Supercómputo',
            icon: <FiCpu />,
            title: 'Simulaciones de Alto Desempeño',
            description: 'Ejecución de software científico paralelo (CORSIKA, FLUKA, Quantum ESPRESSO, ORCA) en clúster multihilo con soporte SLURM.',
        },
        {
            category: 'hpc',
            categoryName: 'Gestión de Datos',
            icon: <FiDatabase />,
            title: 'Diseño de Bases de Datos',
            description: 'Modelado, optimización y administración de motores relacionales y NoSQL de alto volumen de transacciones.',
        },
        {
            category: 'security',
            categoryName: 'Academia & TIC',
            icon: <FiAward />,
            title: 'Capacitación y Certificaciones',
            description: 'Cursos especializados para investigadores y estudiantes en HPC, redes, ciberseguridad, Linux y administración de servidores.',
        },
    ];

    const filteredServices = activeFilter === 'all'
        ? allServices
        : allServices.filter(s => s.category === activeFilter);

    return (
        <ServicesContainer id="servicios" ref={ref}>
            <ServicesContent className="container">
                <SectionHeader>
                    <SectionTag>Catálogo de Soluciones</SectionTag>
                    <SectionTitle>Nuestros Servicios</SectionTitle>
                    <SectionSubtitle>
                        Infraestructura especializada, almacenamiento masivo y conectividad para satisfacer los requerimientos más exigentes del sector científico e institucional.
                    </SectionSubtitle>
                </SectionHeader>

                {/* Filtros de Categoría */}
                <FilterTabsContainer>
                    {categories.map((tab) => (
                        <FilterTab
                            key={tab.id}
                            $active={activeFilter === tab.id}
                            onClick={() => setActiveFilter(tab.id)}
                        >
                            {tab.label}
                        </FilterTab>
                    ))}
                </FilterTabsContainer>

                {/* Grid de Servicios */}
                <ServicesGrid
                    as={motion.div}
                    layout
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <AnimatePresence>
                        {filteredServices.map((service, index) => (
                            <ServiceCard
                                key={service.title}
                                as={motion.div}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35, delay: index * 0.04 }}
                            >
                                <div className="card-top">
                                    <IconWrapper>{service.icon}</IconWrapper>
                                    <ServiceCategoryTag>{service.categoryName}</ServiceCategoryTag>
                                </div>
                                <ServiceTitle>{service.title}</ServiceTitle>
                                <ServiceDescription>{service.description}</ServiceDescription>
                            </ServiceCard>
                        ))}
                    </AnimatePresence>
                </ServicesGrid>

                {/* Servicios Administrados Premium */}
                <TierServicesWrapper>
                    <TierHeader>
                        <span className="badge">Soluciones Críticas</span>
                        <h2>Servicios Administrados Corporativos</h2>
                        <p>
                            Garantía de continuidad de negocio y resguardo de datos con acuerdos de nivel de servicio (SLA) certificados.
                        </p>
                    </TierHeader>

                    <TierCardsGrid>
                        {/* Tarjeta 1: Respaldo */}
                        <TierCard
                            as={motion.div}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <TierBadge $color="#3B82F6">SLA 99.99% • Tolerancia a Fallas</TierBadge>
                            <TierTitle>Servicio Administrado de Respaldo</TierTitle>
                            <TierDesc>
                                Protección automatizada de información en repositorios con redundancia geográfica y soporte 24/7 para garantizar la recuperación inmediata ante cualquier contingencia.
                            </TierDesc>

                            <TierFeaturesList>
                                <li>
                                    <FiCheckCircle className="check" />
                                    <span>Repositorio seguro de datos a partir de 1 TB escalable</span>
                                </li>
                                <li>
                                    <FiCheckCircle className="check" />
                                    <span>Monitoreo constante de salud de discos y servidores</span>
                                </li>
                                <li>
                                    <FiCheckCircle className="check" />
                                    <span>Políticas de retención temporal e inmutabilidad contra ransomware</span>
                                </li>
                                <li>
                                    <FiCheckCircle className="check" />
                                    <span>Atención y soporte técnico especializado 24/7/365</span>
                                </li>
                            </TierFeaturesList>
                        </TierCard>

                        {/* Tarjeta 2: Almacenamiento */}
                        <TierCard
                            as={motion.div}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                        >
                            <TierBadge $color="#06B6D4">SLA 99.9% • Certificado</TierBadge>
                            <TierTitle>Servicio Administrado de Almacenamiento</TierTitle>
                            <TierDesc>
                                Plataformas de almacenamiento de alta densidad para resguardar volúmenes masivos de datos bajo estándares de cifrado y contingencia ante desastres.
                            </TierDesc>

                            <TierFeaturesList>
                                <li>
                                    <FiCheckCircle className="check" />
                                    <span>Almacenamiento híbrido con acceso mediante protocolos estándar</span>
                                </li>
                                <li>
                                    <FiCheckCircle className="check" />
                                    <span>Acceso seguro, autenticado y cifrado en tránsito y reposo</span>
                                </li>
                                <li>
                                    <FiCheckCircle className="check" />
                                    <span>Recuperación ante desastres (Disaster Recovery Plan)</span>
                                </li>
                                <li>
                                    <FiCheckCircle className="check" />
                                    <span>Supervisión proactiva y reporte periódico de rendimiento</span>
                                </li>
                            </TierFeaturesList>
                        </TierCard>
                    </TierCardsGrid>
                </TierServicesWrapper>
            </ServicesContent>
        </ServicesContainer>
    );
};

export default Services;
