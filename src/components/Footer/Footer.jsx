import React from 'react';
import UNACHLogo from '../../img/UNACH.svg';
import ExtraLogo from '../../img/image.png';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiExternalLink } from 'react-icons/fi';
import {
    FooterContainer,
    FooterContent,
    FooterGrid,
    BrandColumn,
    FooterColumn,
    ColumnTitle,
    FooterLinksList,
    FooterBottom,
    Copyright,
    PartnerLogos,
} from './Footer.styles';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <FooterContent className="container">
                <FooterGrid>
                    {/* Columna 1: Marca & Misión */}
                    <BrandColumn>
                        <div className="brand-header">
                            <span className="brand-title">LARCAD</span>
                        </div>
                        <p className="brand-desc">
                            El Laboratorio Regional de Cómputo de Alto Desempeño de la Universidad Autónoma de Chiapas provee infraestructura computacional y almacenamiento de escala científica para investigadores y estudiantes.
                        </p>
                        <PartnerLogos>
                            <img src={UNACHLogo} alt="UNACH" title="Universidad Autónoma de Chiapas" />
                            <img src={ExtraLogo} alt="LARCAD" title="LARCAD" />
                        </PartnerLogos>
                    </BrandColumn>

                    {/* Columna 2: Navegación Rápida */}
                    <FooterColumn>
                        <ColumnTitle>Navegación</ColumnTitle>
                        <FooterLinksList>
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#nosotros">Sobre Nosotros</a></li>
                            <li><a href="#servicios">Servicios</a></li>
                            <li><a href="#hardware">Hardware HPC</a></li>
                            <li><a href="#software">Software Científico</a></li>
                            <li><a href="#contacto">Contacto & Acceso</a></li>
                        </FooterLinksList>
                    </FooterColumn>

                    {/* Columna 3: Enlaces Institucionales */}
                    <FooterColumn>
                        <ColumnTitle>Institucional</ColumnTitle>
                        <FooterLinksList>
                            <li>
                                <a href="https://www.unach.mx" target="_blank" rel="noopener noreferrer">
                                    <span>Portal UNACH</span>
                                    <FiExternalLink size={12} />
                                </a>
                            </li>
                            <li>
                                <a href="https://investigacion.unach.mx" target="_blank" rel="noopener noreferrer">
                                    <span>Investigación y Posgrado</span>
                                    <FiExternalLink size={12} />
                                </a>
                            </li>
                            <li><a href="#que-es">Normativa ISO 9001:2008</a></li>
                            <li><a href="#nosotros">Fondos FOMIX & FAM</a></li>
                        </FooterLinksList>
                    </FooterColumn>

                    {/* Columna 4: Contacto Inmediato */}
                    <FooterColumn>
                        <ColumnTitle>Contacto</ColumnTitle>
                        <FooterLinksList className="contact-list">
                            <li>
                                <FiMail className="icon" />
                                <a href="mailto:larcad@unach.mx">larcad@unach.mx</a>
                            </li>
                            <li>
                                <FiPhone className="icon" />
                                <span>(+52) 961 617 8000 ext. 8107</span>
                            </li>
                            <li>
                                <FiMapPin className="icon" />
                                <span>Ciudad Universitaria, Tuxtla Gutiérrez, Chiapas</span>
                            </li>
                        </FooterLinksList>
                    </FooterColumn>
                </FooterGrid>

                <FooterBottom>
                    <Copyright
                        as={motion.p}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        © {currentYear} LARCAD • Universidad Autónoma de Chiapas. Todos los derechos reservados.
                    </Copyright>
                </FooterBottom>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
