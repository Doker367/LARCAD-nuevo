import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${theme.colors.dark};
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 2rem;
  max-width: 1000px;
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: ${theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 3px;
  
  /* Efecto neon en el título */
  text-shadow: ${theme.neonGlow(theme.colors.primary, 'strong')};

  span {
    background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.primary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
    filter: drop-shadow(${theme.neonGlow(theme.colors.accent, 'light')});
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: clamp(1rem, 3vw, 1.3rem);
  color: ${theme.colors.gray};
  margin-bottom: 3rem;
  line-height: 1.8;
  font-weight: 400;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  color: ${theme.colors.dark};
  background: ${theme.colors.accent};
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all ${theme.transition.normal};
  text-transform: uppercase;
  letter-spacing: 1px;
  
  /* Glassmorphism effect */
  ${theme.glassmorphism(0.15, 10)};
  background: linear-gradient(135deg, 
    rgba(222, 244, 64, 0.9),
    rgba(197, 214, 47, 0.8)
  );
  
  box-shadow: 0 8px 32px rgba(222, 244, 64, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover::before {
    width: 300px;
    height: 300px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;
