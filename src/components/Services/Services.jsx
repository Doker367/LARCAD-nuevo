
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaServer, FaCloud, FaNetworkWired, FaShieldAlt, FaDatabase, FaCogs, FaEye, FaHdd, FaTools, FaLock, FaGlobe, FaSitemap, FaExchangeAlt, FaProjectDiagram, FaUserGraduate } from 'react-icons/fa';
import {
    ServicesContainer,
    ServicesContent,
    SectionTitle,
    ServicesGrid,
    ServiceCard,
    IconWrapper,
    ServiceTitle,
    ServiceDescription,
} from './Services.styles';

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const services = [
        {
            icon: <FaServer />,
            title: 'Colocación Segura',
            description: 'Housing de equipos en instalaciones con videovigilancia y ambiente controlado 24/7.',
        },
        {
            icon: <FaCloud />,
            title: 'Hospedaje de Sistemas',
            description: 'Hosting profesional con alta disponibilidad y redundancia garantizada.',
        },
        {
            icon: <FaNetworkWired />,
            title: 'Virtualización VMware',
            description: 'Infraestructura virtualizada escalable con tecnología VMware de clase empresarial.',
        },
        {
            icon: <FaShieldAlt />,
            title: 'Seguridad Informática',
            description: 'Firewall avanzado, protección perimetral y monitoreo constante de amenazas.',
        },
        {
            icon: <FaDatabase />,
            title: 'Almacenamiento Híbrido',
            description: 'Soluciones NFS/SAN con respaldo administrado y almacenamiento en la nube.',
        },
        {
            icon: <FaCogs />,
            title: 'Simulaciones HPC',
            description: 'Cómputo de alto rendimiento para modelado científico y cálculos complejos.',
        },
        {
            icon: <FaNetworkWired />,
            title: 'Telecomunicaciones',
            description: 'DNS, fibra óptica, enlaces redundantes y conectividad de alta velocidad.',
        },
        {
            icon: <FaCogs />,
            title: 'Capacitación',
            description: 'Cursos especializados en bases de datos, switches, ciberseguridad y desarrollo web.',
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
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };


    // Nueva estructura de servicios con iconos y animaciones
    const detailedServices = [
        {
            icon: <FaServer />,
            title: 'Colocación segura y confiable de equipos de TI (Housing)',
            description: 'Infraestructura física con videovigilancia, ambiente controlado y acceso seguro para alojar tus equipos de tecnologías de información.',
        },
        {
            icon: <FaCloud />,
            title: 'Servicio de Hospedaje (Hosting)',
            description: 'Albergue de sistemas, como páginas web y bases de datos, con alta disponibilidad y soporte profesional.',
        },
        {
            icon: <FaEye />,
            title: 'Monitoreo de Infraestructura',
            description: 'Software especializado para monitorear parámetros operativos de equipos físicos, virtuales y dispositivos de red en tiempo real.',
        },
        {
            icon: <FaNetworkWired />,
            title: 'Virtualización',
            description: 'Ambiente de virtualización VMware (x86) para optimizar recursos y facilitar la gestión de sistemas.',
        },
        {
            icon: <FaHdd />,
            title: 'Almacenamiento',
            description: 'Sistema de almacenamiento híbrido con NFS y SAN, seguro y escalable según tus necesidades.',
        },
        {
            icon: <FaDatabase />,
            title: 'Respaldo',
            description: 'Herramientas de respaldo con recuperación en el tiempo y protección automatizada de datos.',
        },
        {
            icon: <FaTools />,
            title: 'Administración',
            description: 'Administración y configuración profesional de sistemas operativos y plataformas.',
        },
        {
            icon: <FaLock />,
            title: 'Seguridad informática y protección de datos',
            description: 'Soluciones de seguridad integral y protección de datos, incluyendo firewall avanzado y sistemas de respaldo.',
        },
        {
            icon: <FaCloud />,
            title: 'Almacenamiento de información en la nube',
            description: 'Guarda archivos y datos en servidores remotos del LARCAD, accesibles desde cualquier lugar y con respaldo automatizado.',
        },
        {
            icon: <FaGlobe />,
            title: 'Servicios de Telecomunicaciones',
            description: 'Conectividad segura y confiable para instituciones públicas, privadas y académicas, con alta disponibilidad.',
        },
        {
            icon: <FaShieldAlt />,
            title: 'Seguridad Perimetral',
            description: 'Firewall avanzado, sistemas de detección de intrusos y protección perimetral de la red.',
        },
        {
            icon: <FaSitemap />,
            title: 'Servidor de Nombres de Dominio (DNS)',
            description: 'Gestión y administración de DNS para garantizar la disponibilidad y seguridad de tus dominios.',
        },
        {
            icon: <FaExchangeAlt />,
            title: 'Salida a internet redundante',
            description: 'Enlaces únicos o redundantes para asegurar la continuidad y disponibilidad de la conexión a internet.',
        },
        {
            icon: <FaNetworkWired />,
            title: 'Interconexión por fibra óptica',
            description: 'Interconexión local entre instituciones mediante fibra óptica de alta velocidad.',
        },
        {
            icon: <FaProjectDiagram />,
            title: 'Alta disponibilidad y redundancia',
            description: 'Infraestructura y enlaces diseñados para máxima disponibilidad y tolerancia a fallos.',
        },
        {
            icon: <FaCogs />,
            title: 'Simulaciones de Alto Desempeño',
            description: 'Simulación de cómputo de alto desempeño, modelado científico y soluciones industriales.',
        },
        {
            icon: <FaDatabase />,
            title: 'Diseño e Implementación de Bases de Datos',
            description: 'Soluciones robustas para el diseño, implementación y gestión de bases de datos.',
        },
        {
            icon: <FaUserGraduate />,
            title: 'Capacitación y Certificaciones',
            description: 'Especialización en bases de datos, switches, ciberseguridad, diseño web y comercio electrónico.',
        },
    ];

    // containerVariants y cardVariants ya están definidos, eliminar duplicados

    return (
        <ServicesContainer id="servicios" ref={ref}>
            <ServicesContent className="container">
                <SectionTitle
                    as={motion.h2}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Nuestros Servicios
                </SectionTitle>

                <ServicesGrid
                    as={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {detailedServices.map((service, index) => (
                        <ServiceCard
                            key={index}
                            as={motion.div}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.06,
                                rotateY: index % 2 === 0 ? 4 : -4,
                                rotateX: index % 2 === 0 ? 2 : -2,
                                boxShadow: index % 2 === 0
                                    ? '0 12px 40px rgba(222,244,64,0.13)'
                                    : '0 12px 40px rgba(47,49,245,0.13)',
                                background: index % 2 === 0
                                    ? 'linear-gradient(135deg, rgba(222,244,64,0.07) 0%, rgba(47,49,245,0.03) 100%)'
                                    : 'linear-gradient(135deg, rgba(47,49,245,0.07) 0%, rgba(222,244,64,0.03) 100%)',
                                transition: { duration: 0.3 },
                            }}
                            style={{
                                alignItems: index % 2 === 0 ? 'flex-start' : 'flex-end',
                                textAlign: index % 2 === 0 ? 'left' : 'right',
                                background: index % 2 === 0
                                    ? 'linear-gradient(135deg, rgba(222,244,64,0.04) 0%, rgba(47,49,245,0.01) 100%)'
                                    : 'linear-gradient(135deg, rgba(47,49,245,0.04) 0%, rgba(222,244,64,0.01) 100%)',
                                border: index % 2 === 0
                                    ? '1.5px solid rgba(222,244,64,0.13)'
                                    : '1.5px solid rgba(47,49,245,0.13)',
                                minHeight: '260px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <IconWrapper>{service.icon}</IconWrapper>
                            <ServiceTitle>{service.title}</ServiceTitle>
                            <ServiceDescription>{service.description}</ServiceDescription>
                        </ServiceCard>
                    ))}
                </ServicesGrid>

                {/* Bloques destacados para servicios administrados de respaldo y almacenamiento */}
                <div
                    style={{
                        margin: '4rem auto 2.5rem auto',
                        maxWidth: 1300,
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '2.5rem',
                        alignItems: 'stretch',
                    }}
                    className="responsive-admin-services"
                >
                                    {/* Estilos responsivos para las tarjetas de servicios administrados */}
                                    <style>{`
                                        @media (max-width: 900px) {
                                            .responsive-admin-services {
                                                grid-template-columns: 1fr !important;
                                                gap: 2rem !important;
                                                max-width: 98vw !important;
                                            }
                                            .responsive-admin-services > div {
                                                min-width: 0 !important;
                                                max-width: 100% !important;
                                                padding: 2rem 1.1rem !important;
                                            }
                                        }
                                        @media (max-width: 600px) {
                                            .responsive-admin-services {
                                                margin: 2.2rem 0 1.5rem 0 !important;
                                                gap: 1.2rem !important;
                                            }
                                            .responsive-admin-services > div {
                                                font-size: 0.98rem !important;
                                                padding: 1.2rem 0.5rem !important;
                                            }
                                        }
                                    `}</style>
                    {/* Tarjeta Servicio Administrado de Respaldo */}
                    <div style={{
                        background: '#101820',
                        borderRadius: 18,
                        boxShadow: '0 4px 32px rgba(47,49,245,0.13)',
                        padding: '2.5rem 2.5rem',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        position: 'relative',
                        overflow: 'hidden',
                        fontSize: '1.08rem',
                        minHeight: '100%',
                    }}>
                        <div style={{ position: 'absolute', top: 24, right: 24, fontSize: 44, color: '#def44022' }}><FaDatabase /></div>
                        <h3 style={{ color: '#def440', fontWeight: 800, fontSize: '1.7rem', marginBottom: 12 }}> Servicio Administrado de  </h3>
                        <h3 style={{ color: '#def440', fontWeight: 800, fontSize: '1.7rem', marginBottom: 12 }}>  Respaldo </h3>

                        <p style={{ marginBottom: 10, fontWeight: 500, lineHeight: 1.7 }}>
                            Ofrecemos servicios especializados con tecnología de vanguardia para resguardar y mantener íntegra la información de nuestros clientes. Garantizamos la preparación ante cualquier falla o desastre, asegurando la continuidad operativa y del servicio.
                        </p>
                        <p style={{ marginBottom: 18, lineHeight: 1.7 }}>
                            Nuestro servicio administrado de almacenamiento permite resguardar la información de forma segura en nuestras plataformas tecnológicas innovadoras, adaptándose a las necesidades del mercado.
                        </p>
                        <h4 style={{ color: '#def440', fontWeight: 700, margin: '1.2rem 0 0.5rem 0', fontSize: '1.15rem' }}>Servicio de Respaldo</h4>
                        <b style={{ color: '#def440' }}>Características</b>
                        <ul style={{ marginBottom: 10, marginTop: 4, paddingLeft: 18, lineHeight: 1.7 }}>
                            <li>Repositorio de información o almacenamiento desde 1TB con tolerancia a fallas.</li>
                            <li>Acceso seguro a la información.</li>
                            <li>Servicios administrados 24/7.</li>
                            <li>Monitoreo de salud de los equipos.</li>
                        </ul>
                        <b style={{ color: '#def440' }}>Funcionalidades</b>
                        <ul style={{ marginTop: 4, paddingLeft: 18, lineHeight: 1.7 }}>
                            <li>Resguardo de la información con disponibilidad del 99.99%.</li>
                            <li>Tolerancia a fallas.</li>
                            <li>Atención personalizada para soporte y mantenimiento.</li>
                            <li>Acceso seguro a la información.</li>
                            <li>Monitoreo del sistema (hardware, software y cambios).</li>
                        </ul>
                    </div>
                    {/* Tarjeta Servicio Administrado de Almacenamiento */}
                    <div style={{
                        background: '#101820',
                        borderRadius: 18,
                        boxShadow: '0 4px 32px rgba(222,244,64,0.13)',
                        padding: '2.5rem 2.5rem',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        position: 'relative',
                        overflow: 'hidden',
                        fontSize: '1.08rem',
                        minHeight: '100%',
                    }}>
                        <div style={{ position: 'absolute', top: 24, right: 24, fontSize: 44, color: '#def44022' }}><FaHdd /></div>
                        <h3 style={{ color: '#def440', fontWeight: 800, fontSize: '1.7rem', marginBottom: 12 }}>Servicio Administrado de Almacenamiento</h3>
                        <p style={{ marginBottom: 10, fontWeight: 500, lineHeight: 1.7 }}>
                            Brindamos soluciones avanzadas para resguardar y mantener la integridad de la información, utilizando tecnología de última generación. Nuestro objetivo es asegurar la continuidad operativa de nuestros clientes ante cualquier eventualidad.
                        </p>
                        <p style={{ marginBottom: 18, lineHeight: 1.7 }}>
                            El servicio administrado de almacenamiento permite resguardar la información de manera segura y eficiente, adaptándose a las necesidades específicas de cada cliente.
                        </p>
                        <h4 style={{ color: '#def440', fontWeight: 700, margin: '1.2rem 0 0.5rem 0', fontSize: '1.15rem' }}>Servicio de Almacenamiento</h4>
                        <b style={{ color: '#def440' }}>Características</b>
                        <ul style={{ marginBottom: 10, marginTop: 4, paddingLeft: 18, lineHeight: 1.7 }}>
                            <li>Almacenamiento de hasta 1TB con tolerancia a fallas.</li>
                            <li>Acceso seguro y controlado a la información.</li>
                            <li>Servicios administrados 24/7.</li>
                            <li>Monitoreo constante de la salud de los equipos.</li>
                        </ul>
                        <b style={{ color: '#def440' }}>Funcionalidades</b>
                        <ul style={{ marginTop: 4, paddingLeft: 18, lineHeight: 1.7 }}>
                            <li>Disponibilidad de la información garantizada al 99.9% certificado.</li>
                            <li>Tolerancia a fallas y recuperación ante desastres.</li>
                            <li>Soporte y mantenimiento personalizado.</li>
                            <li>Acceso seguro a la información.</li>
                            <li>Monitoreo integral del sistema (hardware, software y cambios).</li>
                        </ul>
                    </div>
                </div>
            </ServicesContent>
        </ServicesContainer>
    );
};

export default Services;
