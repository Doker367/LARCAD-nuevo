import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const InfoSectionContainer = styled.section`
  background: linear-gradient(180deg, ${theme.colors.dark} 0%, #0a0e14 100%);
  padding: 6rem 0 6rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoContent = styled(motion.div)`
  background: rgba(16,24,32,0.85);
  border-radius: 20px;
  padding: 2.5rem;
  max-width: 700px;
  color: #fff;
  box-shadow: 0 8px 32px rgba(47,49,245,0.15);
  font-size: 1.1rem;
  line-height: 1.7;
  letter-spacing: 0.2px;
  margin: 0 1rem;
`;

const InfoTitle = styled.strong`
  font-size: 1.3rem;
  color: #def440;
  display: block;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 1px;
`;

const InfoSection = () => (
  <InfoSectionContainer id="info-larcad">
    <InfoContent
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <InfoTitle>Acerca de nosotros</InfoTitle>
      El Laboratorio Regional de Cómputo de Alto Desempeño (LARCAD) de la Universidad Autónoma de Chiapas se ha convertido en un faro de innovación, rompiendo la brecha tecnológica en la región y abriendo nuevas oportunidades para el desarrollo científico y tecnológico del estado. En los últimos años, los laboratorios de cómputo de alto desempeño (HPC) han experimentado un crecimiento exponencial, impulsando el avance científico y tecnológico en diversas áreas. Estos laboratorios, como el LARCAD de la UNACH, funcionan como centros de investigación donde se procesan y analizan grandes cantidades de datos a velocidades inimaginables con equipos de cómputo tradicionales.
    </InfoContent>
  </InfoSectionContainer>
);

export default InfoSection;
