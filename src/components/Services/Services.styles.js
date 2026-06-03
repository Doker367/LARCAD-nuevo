import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ServicesContainer = styled.section`
  padding: 8rem 0;
  background: ${theme.colors.dark};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      ${theme.colors.primary}, 
      transparent
    );
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`;

export const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  color: ${theme.colors.white};
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.primary});
    margin: 1rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  perspective: 1000px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ServiceCard = styled.div`
  ${theme.glassmorphism(0.03, 12)};
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d;
  transition: all ${theme.transition.normal};
  border: 1px solid rgba(47, 49, 245, 0.2);
  
  background: linear-gradient(135deg, 
    rgba(47, 49, 245, 0.05) 0%,
    rgba(37, 63, 247, 0.02) 100%
  );

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent});
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity ${theme.transition.normal};
  }

  &:hover {
    box-shadow: 0 20px 60px rgba(47, 49, 245, 0.3);
    
    &::before {
      opacity: 1;
    }
  }
`;

export const IconWrapper = styled.div`
  font-size: 3.5rem;
  color: ${theme.colors.accent};
  margin-bottom: 1.5rem;
  filter: drop-shadow(${theme.neonGlow(theme.colors.accent, 'light')});
  transition: all ${theme.transition.normal};

  ${ServiceCard}:hover & {
    transform: scale(1.1) translateZ(20px);
    filter: drop-shadow(${theme.neonGlow(theme.colors.accent, 'normal')});
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.white};
  margin-bottom: 1rem;
  transition: color ${theme.transition.fast};

  ${ServiceCard}:hover & {
    color: ${theme.colors.accent};
  }
`;

export const ServiceDescription = styled.p`
  font-size: 1rem;
  color: ${theme.colors.gray};
  line-height: 1.7;
`;
