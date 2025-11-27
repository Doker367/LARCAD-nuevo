import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';
import {
    AboutContainer,
    AboutContent,
    SectionTitle,
    CardsGrid,
    Card,
    CardIcon,
    CardTitle,
    CardDescription,
    OrganizationGrid,
} from './About.styles';

// Estilos mejorados para el bloque institucional
const infoBlockStyle = {
    background: 'rgba(16,24,32,0.65)',
    borderRadius: '28px',
    margin: '0 auto 3.5rem auto',
    padding: '2.8rem 2.5rem 2.5rem 2.5rem',
    maxWidth: '1200px', // igual que AboutContent
    width: '100%',
    color: '#fff',
    boxShadow: '0 12px 48px 0 rgba(47,49,245,0.18)',
    fontSize: '1.18rem',
    lineHeight: 1.85,
    letterSpacing: '0.1px',
    textAlign: 'center',
    border: '1.5px solid rgba(222,244,64,0.13)',
    backdropFilter: 'blur(6px)',
};
const infoTitleStyle = {
    fontSize: '1.45rem',
    color: '#def440',
    display: 'block',
    marginBottom: '1.2rem',
    textAlign: 'center',
    letterSpacing: '1.5px',
    fontWeight: 800,
    textShadow: '0 2px 16px #222, 0 0 8px #def44088',
    textTransform: 'uppercase',
};

const About = () => {
        // Estilos para la sección informativa final
        const infoSectionStyle = {
            background: 'rgba(16,24,32,0.7)',
            borderRadius: '24px',
            margin: '4rem auto 0 auto',
            padding: '2.5rem 2rem 2.2rem 2rem',
            maxWidth: '1200px', // igual que AboutContent
            width: '100%',
            color: '#fff',
            boxShadow: '0 8px 32px rgba(47,49,245,0.13)',
            fontSize: '1.13rem',
            lineHeight: 1.8,
            letterSpacing: '0.1px',
            textAlign: 'left',
            border: '1.5px solid rgba(222,244,64,0.10)',
            backdropFilter: 'blur(5px)',
        };
        const infoTitleStyle = {
            fontSize: '1.5rem',
            color: '#def440',
            display: 'block',
            marginBottom: '1.2rem',
            textAlign: 'center',
            letterSpacing: '1.5px',
            fontWeight: 1200,
            textShadow: '0 2px 16px #222, 0 0 8px #def44088',
            textTransform: 'uppercase',
        };
        const infoListStyle = {
            margin: '1.2rem 0 1.5rem 0',
            paddingLeft: '1.2rem',
            fontSize: '1.08rem',
        };
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <AboutContainer id="nosotros" ref={ref}>
            <AboutContent className="container">
                <SectionTitle
                    as={motion.h2}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Sobre Nosotros
                </SectionTitle>

                {/* Bloque institucional destacado mejorado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={infoBlockStyle}
                >
                    
                    <span style={{ display: 'block', fontWeight: 500 }}>
                        El Laboratorio Regional de Cómputo de Alto Desempeño (LARCAD) de la Universidad Autónoma de Chiapas se ha convertido en un faro de innovación, rompiendo la brecha tecnológica en la región y abriendo nuevas oportunidades para el desarrollo científico y tecnológico del estado.<br /><br />
                        En los últimos años, los laboratorios de cómputo de alto desempeño (HPC) han experimentado un crecimiento exponencial, impulsando el avance científico y tecnológico en diversas áreas. Estos laboratorios, como el LARCAD de la UNACH, funcionan como centros de investigación donde se procesan y analizan grandes cantidades de datos a velocidades inimaginables con equipos de cómputo tradicionales.
                    </span>
                </motion.div>

                {/* Sección Nuestra Organización */}
                <SectionTitle
                    as={motion.h2}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ marginTop: '5rem', marginBottom: '2.5rem', fontSize: '2.2rem' }}
                >
                    Nuestra Organización
                </SectionTitle>
                <OrganizationGrid
                    as={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <Card as={motion.div} variants={cardVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                        <CardIcon>🎯</CardIcon>
                        <CardTitle>Misión</CardTitle>
                        <CardDescription>
                            Somos un Laboratorio Regional de Computo de Alto Desempeño (LARCAD), dinámico, innovador, de excelencia, con liderazgo regional, nacional y presencia internacional; dedicado a proveer soluciones integrales hechas a la medida en las Tecnologías de la información y comunicaciones.
                        </CardDescription>
                    </Card>
                    <Card as={motion.div} variants={cardVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                        <CardIcon>🚀</CardIcon>
                        <CardTitle>Visión</CardTitle>
                        <CardDescription>
                            Ser el Laboratorio Regional de Computo de Alto Desempeño (LARCAD), para ser líder en México y figurar como un referente internacional, brindando soluciones tecnológicas con un alta capacitad de respuesta para lograr satisfacer las nuevas necesidades de la sociedad, atendiendo proyectos a gran escala. Esto bajo un esquema de:<br />• Autosustentabilidad<br />• Infraestructura en constante actualización<br />• Innovación de servicios<br />• Personal certificado y orientado al aprovechamiento de los recursos.
                        </CardDescription>
                    </Card>
                    <Card as={motion.div} variants={cardVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                        <CardIcon>💡</CardIcon>
                        <CardTitle>Qué hacemos</CardTitle>
                        <CardDescription>
                            Las Soluciones tecnológicas que ofrecemos han surgido de un contexto cultural y tecnológico, que responde a las necesidades de nuestros clientes, enfrentándonos a los desafíos que actualmente tiene las organizaciones en cuestión de tecnología. Nuestros servicios tienen el objetivo claro de ofrecer soluciones efectivas, confiables y seguras que buscan lograr resultados concretos que generen una mejora y credibilidad en su adopción.
                        </CardDescription>
                    </Card>
                    <Card as={motion.div} variants={cardVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                        <CardIcon>📋</CardIcon>
                        <CardTitle>Políticas de calidad</CardTitle>
                        <CardDescription>
                            En LARCAD estamos orientados a brindar soluciones de vanguardia en materia de TICs, enfocados plenamente a la satisfacción del cliente, a través de la gestión de la calidad de nuestros servicios, en el marco de la norma IOS 9001:2008.
                        </CardDescription>
                    </Card>
                </OrganizationGrid>

                

                {/* Sección Recursos */}
                <SectionTitle
                    as={motion.h2}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ marginTop: '5rem', marginBottom: '2.5rem', fontSize: '2.2rem' }}
                >
                    Recursos
                </SectionTitle>
                <CardsGrid
                    as={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <Card as={motion.div} variants={cardVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                        <CardIcon>🖥️</CardIcon>
                        <CardTitle>Hardware</CardTitle>
                        <CardDescription>
                            8 servidores de procesamiento con 2.2 TB de RAM DDR4, 4 servidores de almacenamiento con 110 TB en discos SAS, procesadores Intel Xeon Gold (192 núcleos), tarjetas gráficas Nvidia RTX A5000 y redundancia N+1.
                        </CardDescription>
                    </Card>
                    <Card as={motion.div} variants={cardVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                        <CardIcon>🔗</CardIcon>
                        <CardTitle>Switches</CardTitle>
                        <CardDescription>
                            Switches de alto desempeño, firewalls para capacitación, red de fibra óptica interconectada con VPN seguras, enlaces redundantes y monitoreo constante de red e infraestructura.
                        </CardDescription>
                    </Card>
                    <Card as={motion.div} variants={cardVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                        <CardIcon>⚡</CardIcon>
                        <CardTitle>Capacidad de procesamiento</CardTitle>
                        <CardDescription>
                            Cómputo de alto desempeño (HPC) con más de 192 núcleos, +3.4 TB de RAM total, almacenamiento superior a 128 TB, ideal para simulaciones complejas, virtualización y análisis de datos.
                        </CardDescription>
                    </Card>
                </CardsGrid>

                

                {/* Sección Servicios */}

                {/* Banner de servicios full width con iconos, difuminado, título y animación mejorada */}
                <ServicesBanner>
                    <BannerTitle>Nuestros Servicios</BannerTitle>
                    <ServicesMarquee>
                        {[
                            { icon: '🏢', name: 'Colocación segura y confiable de equipos de TI (Housing)' },
                            { icon: '🌐', name: 'Servicio de Hospedaje (Hosting)' },
                            { icon: '🔎', name: 'Monitoreo de Infraestructura' },
                            { icon: '💻', name: 'Virtualización VMware' },
                            { icon: '🗄️', name: 'Almacenamiento Híbrido NFS/SAN' },
                            { icon: '💾', name: 'Respaldo y Recuperación' },
                            { icon: '🛠️', name: 'Administración de Sistemas' },
                            { icon: '🛡️', name: 'Seguridad informática y protección de datos' },
                            { icon: '☁️', name: 'Almacenamiento en la Nube' },
                            { icon: '📡', name: 'Servicios de Telecomunicaciones' },
                            { icon: '🚧', name: 'Seguridad Perimetral' },
                            { icon: '🌍', name: 'Servidor DNS' },
                            { icon: '🔗', name: 'Salida a internet redundante' },
                            { icon: '🔌', name: 'Interconexión por fibra óptica' },
                            { icon: '⚡', name: 'Alta disponibilidad y redundancia' },
                            { icon: '🧮', name: 'Simulaciones de Alto Desempeño' },
                            { icon: '🎓', name: 'Capacitación y Certificaciones' },
                        ].map((item, idx) => (
                            <span key={idx} className="service-item">
                                <span className="icon">{item.icon}</span>
                                {item.name}
                            </span>
                        ))}
                    </ServicesMarquee>
                </ServicesBanner>
                {/* Sección informativa final */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={infoSectionStyle}
                >
                    <span style={infoTitleStyle}>¿Qué es?</span>
                    Centro de Datos y Cómputo de Alto Desempeño con capacidad para almacenar y procesar vastas cantidades de datos, garantizando un entorno de máxima seguridad, calidad y eficiencia diseñado para satisfacer las necesidades más exigentes de instituciones públicas y privadas.
                    <br /><br />
                    <span style={{ fontWeight: 700, color: '#def440', fontSize: '1.1rem' }}>Ofrece:</span>
                    <ul style={infoListStyle}>
                        <li>✓ Almacenamiento seguro y capacidad escalable para proteger datos con las tecnologías más avanzadas.</li>
                        <li>✓ Procesamiento de datos con la potencia de una supercomputadora de última generación.</li>
                        <li>✓ Infraestructura robusta que asegura la continuidad operativa con sistemas de respaldo, disponibilidad y monitoreo constante.</li>
                        <li>✓ Soluciones personalizadas a las necesidades específicas de cada cliente, optimizando recursos y resultados.</li>
                    </ul>
                    <span style={infoTitleStyle}>Infraestructura de vanguardia</span>
                    Los servidores de alto desempeño del LARCAD funcionan como un clúster, requiriendo condiciones especiales para su óptimo funcionamiento. La UNACH ha realizado una inversión significativa en infraestructura, incluyendo una subestación eléctrica, sistemas de enfriamiento y un centro de datos de última generación que cumple con las normativas internacionales. Según el responsable técnico del proyecto Dr. Sendic Estrada Jiménez, el desarrollo del LARCAD ha sido posible gracias al apoyo de diversos programas de financiamiento, como el Fondo Mixto (FOMIX) de CONAHCYT y el Fondo de Aportaciones Múltiples (FAM) de la Secretaría de Educación. Estos recursos han permitido la construcción de la infraestructura necesaria para albergar este equipo de cómputo científico de última generación.
                </motion.div>
            </AboutContent>
        </AboutContainer>
    );
};

export default About;

// Styled components locales para el banner de servicios full-bleed
const ServicesBanner = styled.div`
    position: relative;
    margin: 4rem 0 2.5rem;
    background: linear-gradient(90deg, rgba(26,31,43,0.95) 60%, rgba(35,42,61,0.85) 100%);
    color: #def440;
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: 1.5px;
    padding: 2.2rem 0;
    overflow: hidden;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(6px);
    box-shadow: 0 4px 32px rgba(47,49,245,0.10);

    /* Full-bleed sin desplazar el layout */
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
`;

const BannerTitle = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 1.2rem;
    color: #fff;
    font-weight: 800;
    font-size: 1.6rem;
    letter-spacing: 2px;
    text-shadow: 0 2px 12px #232a3d;
`;

const ServicesMarquee = styled.div`
    display: flex;
    gap: 3.5rem;
    white-space: nowrap;
    animation: scrollServices 60s linear infinite;
    opacity: 0.92;
    filter: blur(0.2px) drop-shadow(0 2px 8px #1a1f2b);
    cursor: pointer;

    .service-item {
        display: inline-flex;
        align-items: center;
        margin-right: 2.5rem;
        font-size: 1.25em;
        opacity: 0.98;
    }

    .icon {
        font-size: 1.5em;
        margin-right: 0.7em;
        filter: drop-shadow(0 1px 2px #232a3d);
    }

    &:hover {
        animation-play-state: paused;
    }

    @keyframes scrollServices {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }
`;
