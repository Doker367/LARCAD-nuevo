import React from 'react';
import UNACHLogo from '../../img/UNACH.svg';
import ExtraLogo from '../../img/image.png';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import {
    FooterContainer,
    FooterContent,
    FooterTop,
    FooterBrand,
    SocialLinks,
    SocialIcon,
    FooterBottom,
    Copyright,
} from './Footer.styles';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <FooterContent className="container">
                <FooterTop style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                    <FooterBrand
                        as={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: 2, color: '#def440' }}
                    >
                        LARCAD
                    </FooterBrand>
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <img src={UNACHLogo} alt="UNACH Logo" style={{ height: 70, width: 'auto', filter: 'drop-shadow(0 0 10px #2f31f5cc)' }} />
                        <img src={ExtraLogo} alt="Logo Extra" style={{ height: 70, width: 'auto', filter: 'drop-shadow(0 0 10px #def440cc)' }} />
                    </div>
                </FooterTop>

                <FooterBottom>
                    <Copyright
                        as={motion.p}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        © {currentYear} LARCAD. Todos los derechos reservados.
                    </Copyright>
                </FooterBottom>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
