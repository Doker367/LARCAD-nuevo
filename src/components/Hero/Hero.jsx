import React from 'react';
import { motion } from 'framer-motion';
import Background3D from './Background3D';
import { HeroContainer, HeroContent, Title, Subtitle, CTAButton } from './Hero.styles';

const Hero = () => {
    return (
        <HeroContainer id="inicio">
            <Background3D />

            <HeroContent>
                <Title
                    as={motion.h1}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    LARCAD
                    <br />
                </Title>

                <Subtitle
                    as={motion.p}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Laboratorio Regional de Cómputo de Alto Desempeño
                    <br />
                    Universidad Autónoma de Chiapas
                </Subtitle>

                <CTAButton
                    as={motion.a}
                    href="#que-es"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 30px rgba(222, 244, 64, 0.6)',
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    Conocer Más
                </CTAButton>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
