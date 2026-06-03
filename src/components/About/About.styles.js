// Grid especial para Nuestra Organización (2 columnas)
export const OrganizationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 4rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const AboutContainer = styled.section`
  padding: 8rem 0;
  background: linear-gradient(180deg, ${theme.colors.dark} 0%, #0a0e14 100%);
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`;

export const AboutContent = styled.div`
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
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent});
    margin: 1rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const Card = styled.div`
  ${theme.glassmorphism(0.05, 15)};
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  transition: all ${theme.transition.normal};
  position: relative;
  overflow: hidden;
  
  /* Floating effect */
  box-shadow: 0 10px 40px rgba(47, 49, 245, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent});
    transform: scaleX(0);
    transition: transform ${theme.transition.normal};
  }

  &:hover {
    ${theme.glassmorphism(0.1, 15)};
    box-shadow: 0 15px 60px rgba(47, 49, 245, 0.4);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

export const CardIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px rgba(222, 244, 64, 0.5));
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.white};
  margin-bottom: 1rem;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: ${theme.colors.gray};
  line-height: 1.7;
`;
