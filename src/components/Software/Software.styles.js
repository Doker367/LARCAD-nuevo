import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const SoftwareContainer = styled.section`
  padding: 8rem 0;
  background: ${theme.colors.dark};
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`;

export const SoftwareContent = styled.div`
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

export const SoftwareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const SoftwareCard = styled.div`
  ${theme.glassmorphism(0.04, 12)};
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all ${theme.transition.normal};
  border: 1px solid rgba(47, 49, 245, 0.15);
  min-height: 280px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent});
    transform: scaleX(0);
    transition: transform ${theme.transition.normal};
  }

  &:hover {
    ${theme.glassmorphism(0.09, 14)};
    box-shadow: 0 12px 40px rgba(47, 49, 245, 0.25);
    border-color: rgba(222, 244, 64, 0.4);

    &::before {
      transform: scaleX(1);
    }
  }
`;

export const SoftwareLogo = styled.div`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
`;

export const SoftwareTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.white};
  text-align: center;
  margin-bottom: 0.5rem;
  transition: color ${theme.transition.fast};

  ${SoftwareCard}:hover & {
    color: ${theme.colors.accent};
  }
`;

export const SoftwareDescription = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.gray};
  line-height: 1.6;
  text-align: left;
  flex-grow: 1;
`;

export const SoftwareLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 0.5rem;
`;

export const SoftwareLink = styled.a`
  font-size: 0.85rem;
  color: ${theme.colors.primary};
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  background: rgba(47, 49, 245, 0.1);
  transition: all ${theme.transition.fast};
  border: 1px solid rgba(47, 49, 245, 0.2);

  &:hover {
    background: rgba(222, 244, 64, 0.15);
    color: ${theme.colors.accent};
    border-color: rgba(222, 244, 64, 0.4);
    transform: translateY(-2px);
  }
`;

export const SoftwareVersion = styled.div`
  font-size: 0.85rem;
  color: ${theme.colors.gray};
  font-family: 'Courier New', monospace;
  margin-top: 0.5rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 500;
`;
