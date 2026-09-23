import React, { useState, useEffect } from 'react';
import Divider from "../Divider";
import { motion } from 'framer-motion';
import { FiArrowRight, FiCpu, FiHardDrive, FiServer, FiActivity } from 'react-icons/fi';
import Background3D from './Background3D';
import {
    HeroContainer,
    HeroContent,
    InstitutionalBadge,
    Title,
    Subtitle,
    ButtonGroup,
    PrimaryButton,
    SecondaryButton,
    StatsStrip,
    StatItem,
    StatNumber,
    StatLabel,
} from './Hero.styles';

const useMatrixEffect = (targetText, duration = 2000) => {
    const [text, setText] = useState('');
    
    useEffect(() => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
        let iteration = 0;
        const maxIterations = targetText.length;
        
        const interval = setInterval(() => {
            setText(
                targetText
                    .split('')
                    .map((letter, index) => {
                        if (index < iteration) {
                            return targetText[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join('')
            );
            
            if (iteration >= maxIterations) {
                clearInterval(interval);
            }
            
            iteration += 1 / (duration / (targetText.length * 50));
        }, 50);
        
        return () => clearInterval(interval);
    }, [targetText, duration]);
    
    return text;
};

const Hero = () => {
    const stats = [
        { icon: <FiCpu />, value: '192', label: 'Núcleos de Cómputo', detail: 'Intel Xeon Gold' },
        { icon: <FiServer />, value: '3.4 TB', label: 'Memoria RAM Total', detail: 'DDR4 ECC' },
        { icon: <FiHardDrive />, value: '928 TB', label: 'Almacenamiento', detail: 'Ceph + SAS Redundante' },
        { icon: <FiActivity />, value: '99.9%', label: 'Disponibilidad', detail: 'SLA Operativo 24/7' },
    ];

    const matrixTitle = useMatrixEffect("Laboratorio Regional de Cómputo de Alto Desempeño", 2500);

    return (
        <HeroContainer id="inicio">
            <Divider type="slant-right" color="#0B0F19" accentColor="#3B82F6" position="bottom" height="80px" />
            <Background3D />

            <HeroContent>
                <Title
                    as={motion.h1}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    style={{ fontFamily: 'monospace' }}
                >
                    {matrixTitle}
                </Title>

                <Subtitle
                    as={motion.p}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    El <strong>Laboratorio Regional de Cómputo de Alto Desempeño (LARCAD)</strong> de la Universidad Autónoma de Chiapas impulsa la investigación científica regional y nacional con infraestructura de cálculo masivo, servidores de última generación y almacenamiento escalable.
                </Subtitle>

                <ButtonGroup
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                >
                    <PrimaryButton href="#hardware">
                        <span>Explorar Infraestructura</span>
                        <FiArrowRight size={18} />
                    </PrimaryButton>
                    <SecondaryButton href="#servicios">
                        <span>Ver Servicios y Capacidades</span>
                    </SecondaryButton>
                </ButtonGroup>

                <StatsStrip
                    as={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    {stats.map((stat, i) => (
                        <StatItem key={i}>
                            <div className="icon-wrap">{stat.icon}</div>
                            <div>
                                <StatNumber>{stat.value}</StatNumber>
                                <StatLabel>{stat.label}</StatLabel>
                                <div className="stat-detail">{stat.detail}</div>
                            </div>
                        </StatItem>
                    ))}
                </StatsStrip>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
