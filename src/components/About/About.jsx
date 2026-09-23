import React from 'react';
import Divider from "../Divider";
import { motion } from 'framer-motion';
import {
    FiTarget,
    FiCompass,
    FiCpu,
    FiCheckSquare,
    FiServer,
    FiShare2,
    FiZap,
    FiShield,
    FiAward,
    FiLayers,
    FiCheckCircle,
} from 'react-icons/fi';
import {
    AboutContainer,
    AboutContent,
    SectionHeader,
    SectionTag,
    SectionTitle,
    SectionSubtitle,
    InstitutionalHeroCard,
    OrganizationGrid,
    OrgCard,
    OrgCardIcon,
    OrgCardTitle,
    OrgCardBody,
    ResourcesGrid,
    ResourceCard,
    ServicesTickerContainer,
    TickerTitle,
    TickerTrack,
    TickerItem,
    FacilityCard,
} from './About.styles';

const About = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
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

    const tickerServices = [
        { icon: <FiServer />, name: 'Housing & Colocación de Equipos' },
        { icon: <FiLayers />, name: 'Virtualización VMware Enterprise' },
        { icon: <FiShield />, name: 'Seguridad Perimetral & VPNs' },
        { icon: <FiCpu />, name: 'Simulación HPC & Cómputo Paralelo' },
        { icon: <FiShare2 />, name: 'Almacenamiento Híbrido Ceph & SAN' },
        { icon: <FiZap />, name: 'Enlaces Redundantes & Fibra Óptica' },
        { icon: <FiAward />, name: 'Certificaciones & Capacitación TIC' },
        { icon: <FiCheckSquare />, name: 'Respaldo Automatizado 24/7' },
    ];

    return (
        <AboutContainer id="nosotros">
            <Divider type="slant-right" color="#0B0F19" accentColor="#06B6D4" position="bottom" height="60px" />
            <AboutContent className="container">
                <SectionHeader>
                    <SectionTag>Laboratorio Institucional</SectionTag>
                    <SectionTitle>Sobre Nosotros</SectionTitle>
                    <SectionSubtitle>
                        Rompiendo la brecha tecnológica en el sureste de México a través del cómputo científico de alto desempeño.
                    </SectionSubtitle>
                </SectionHeader>

                {/* Bloque institucional destacado */}
                <InstitutionalHeroCard
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="content-left">
                        <h3>Un polo de innovación científica para Chiapas y el país</h3>
                        <p>
                            El <strong>Laboratorio Regional de Cómputo de Alto Desempeño (LARCAD)</strong> de la <strong>Universidad Autónoma de Chiapas</strong> se ha consolidado como un centro neurálgico para el desarrollo científico regional.
                        </p>
                        <p>
                            En la investigación contemporánea, los laboratorios HPC son esenciales: procesan y analizan volúmenes masivos de datos a velocidades que superan por órdenes de magnitud las capacidades de infraestructuras convencionales, permitiendo modelado molecular, física de partículas, climatología y analítica avanzada.
                        </p>
                    </div>

                    <div className="badges-right">
                        <div className="badge-item">
                            <div className="icon"><FiAward /></div>
                            <div>
                                <strong>Calidad Certificada</strong>
                                <span>Norma ISO 9001:2008 en gestión y servicios</span>
                            </div>
                        </div>
                        <div className="badge-item">
                            <div className="icon"><FiCpu /></div>
                            <div>
                                <strong>Fondos CONAHCYT / FAM</strong>
                                <span>Financiado por FOMIX y Secretaría de Educación</span>
                            </div>
                        </div>
                        <div className="badge-item">
                            <div className="icon"><FiShield /></div>
                            <div>
                                <strong>Infraestructura Crítica</strong>
                                <span>Subestación eléctrica y enfriamiento de precisión</span>
                            </div>
                        </div>
                    </div>
                </InstitutionalHeroCard>

                {/* Nuestra Organización */}
                <SectionHeader style={{ marginTop: '5rem' }}>
                    <SectionTag>Estructura Estratégica</SectionTag>
                    <SectionTitle style={{ fontSize: '2.4rem' }}>Nuestra Organización</SectionTitle>
                </SectionHeader>

                <OrganizationGrid
                    as={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <OrgCard as={motion.div} variants={cardVariants}>
                        <div className="card-top">
                            <OrgCardIcon><FiTarget /></OrgCardIcon>
                            <span className="pill">Propósito</span>
                        </div>
                        <OrgCardTitle>Misión</OrgCardTitle>
                        <OrgCardBody>
                            Somos un Laboratorio Regional de Cómputo de Alto Desempeño dinámico, innovador y de excelencia, con liderazgo regional, nacional y presencia internacional; dedicado a proveer soluciones integrales hechas a la medida en Tecnologías de la Información y Comunicaciones (TIC).
                        </OrgCardBody>
                    </OrgCard>

                    <OrgCard as={motion.div} variants={cardVariants}>
                        <div className="card-top">
                            <OrgCardIcon><FiCompass /></OrgCardIcon>
                            <span className="pill">Visión a Futuro</span>
                        </div>
                        <OrgCardTitle>Visión</OrgCardTitle>
                        <OrgCardBody>
                            Ser el Laboratorio Regional de referencia en México y con proyección internacional, atendiendo proyectos a gran escala bajo cuatro pilares fundamentales:
                            <ul className="pillar-list">
                                <li><FiCheckCircle size={14} color="#10B981" /> Autosustentabilidad operativa</li>
                                <li><FiCheckCircle size={14} color="#10B981" /> Infraestructura en actualización constante</li>
                                <li><FiCheckCircle size={14} color="#10B981" /> Servicios tecnológicos de alto impacto</li>
                                <li><FiCheckCircle size={14} color="#10B981" /> Personal científico certificado</li>
                            </ul>
                        </OrgCardBody>
                    </OrgCard>

                    <OrgCard as={motion.div} variants={cardVariants}>
                        <div className="card-top">
                            <OrgCardIcon><FiCpu /></OrgCardIcon>
                            <span className="pill">Capacidades</span>
                        </div>
                        <OrgCardTitle>Qué Hacemos</OrgCardTitle>
                        <OrgCardBody>
                            Nuestras soluciones tecnológicas responden directamente a los desafíos computacionales de las organizaciones académicas e industriales. Proveemos entornos seguros, confiables y de alta disponibilidad que garantizan resultados reproducibles y aceleran los tiempos de cálculo.
                        </OrgCardBody>
                    </OrgCard>

                    <OrgCard as={motion.div} variants={cardVariants}>
                        <div className="card-top">
                            <OrgCardIcon><FiCheckSquare /></OrgCardIcon>
                            <span className="pill">Estándares</span>
                        </div>
                        <OrgCardTitle>Políticas de Calidad</OrgCardTitle>
                        <OrgCardBody>
                            En LARCAD brindamos soluciones de vanguardia en TICs plenamente orientadas a la satisfacción del cliente y el rigor científico, a través de la gestión formal de la calidad de nuestros servicios en el marco de la norma <strong>ISO 9001:2008</strong>.
                        </OrgCardBody>
                    </OrgCard>
                </OrganizationGrid>

                {/* Recursos Clave */}
                <SectionHeader style={{ marginTop: '5rem' }}>
                    <SectionTag>Capacidades Técnicas</SectionTag>
                    <SectionTitle style={{ fontSize: '2.4rem' }}>Recursos de Supercómputo</SectionTitle>
                </SectionHeader>

                <ResourcesGrid
                    as={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <ResourceCard as={motion.div} variants={cardVariants}>
                        <div className="res-icon"><FiServer /></div>
                        <h3>Servidores de Procesamiento</h3>
                        <p>
                            8 nodos de cálculo equipados con procesadores <strong>Intel Xeon Gold</strong> (192 núcleos), aceleración gráfica <strong>NVIDIA RTX A5000</strong> y 2.2 TB de memoria RAM DDR4 con redundancia N+1.
                        </p>
                    </ResourceCard>

                    <ResourceCard as={motion.div} variants={cardVariants}>
                        <div className="res-icon"><FiShare2 /></div>
                        <h3>Red y Conectividad</h3>
                        <p>
                            Switches de alta velocidad de baja latencia, enlaces de fibra óptica dedicados, segmentación VLAN, túneles VPN cifrados y monitoreo proactivo de tráfico 24/7.
                        </p>
                    </ResourceCard>

                    <ResourceCard as={motion.div} variants={cardVariants}>
                        <div className="res-icon"><FiZap /></div>
                        <h3>Almacenamiento Científico</h3>
                        <p>
                            Sistema de archivos distribuido <strong>Ceph</strong> (+800 TB en /scratch) y almacenamiento transaccional SAS de 128 TB, optimizado para flujos I/O intensivos.
                        </p>
                    </ResourceCard>
                </ResourcesGrid>

                {/* Ticker de Servicios */}
                <ServicesTickerContainer>
                    <TickerTitle>Ecosistema de Capacidades y Servicios Disponibles</TickerTitle>
                    <div className="ticker-wrapper">
                        <TickerTrack>
                            {tickerServices.concat(tickerServices).map((service, idx) => (
                                <TickerItem key={idx}>
                                    <span className="icon">{service.icon}</span>
                                    <span>{service.name}</span>
                                </TickerItem>
                            ))}
                        </TickerTrack>
                    </div>
                </ServicesTickerContainer>

                {/* Instalaciones y Respaldo Institucional */}
                <FacilityCard
                    id="que-es"
                    as={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="badge-tag">Infraestructura de Clase Mundial</div>
                    <h2>Centro de Datos y Clúster LARCAD</h2>
                    <p className="lead">
                        Diseñado para albergar cálculos científicos complejos y salvaguardar datos críticos bajo estrictos estándares de seguridad física, ambiental y de red.
                    </p>

                    <div className="highlights-grid">
                        <div className="hl-item">
                            <FiCheckCircle className="check" />
                            <div>
                                <strong>Supercómputo Escalable</strong>
                                <span>Ejecución paralela de modelos matemáticos y simulaciones en clúster.</span>
                            </div>
                        </div>
                        <div className="hl-item">
                            <FiCheckCircle className="check" />
                            <div>
                                <strong>Continuidad Garantizada</strong>
                                <span>Subestación eléctrica propia, UPS modular y enfriamiento de precisión.</span>
                            </div>
                        </div>
                        <div className="hl-item">
                            <FiCheckCircle className="check" />
                            <div>
                                <strong>Almacenamiento Multi-Nivel</strong>
                                <span>Particiones /home seguras y /scratch de alto rendimiento (Ceph).</span>
                            </div>
                        </div>
                        <div className="hl-item">
                            <FiCheckCircle className="check" />
                            <div>
                                <strong>Soporte Especializado</strong>
                                <span>Acompañamiento técnico de ingenieros e investigadores certificados.</span>
                            </div>
                        </div>
                    </div>

                    <div className="institutional-note">
                        <strong>Inversión y Respaldo:</strong> El desarrollo y consolidación del LARCAD ha sido posible gracias al liderazgo de la UNACH y el financiamiento de programas de excelencia como el <strong>Fondo Mixto (FOMIX) de CONAHCYT</strong> y el <strong>Fondo de Aportaciones Múltiples (FAM)</strong> de la Secretaría de Educación, bajo la dirección técnica del <strong>Dr. Sendic Estrada Jiménez</strong>.
                    </div>
                </FacilityCard>
            </AboutContent>
        </AboutContainer>
    );
};

export default About;
