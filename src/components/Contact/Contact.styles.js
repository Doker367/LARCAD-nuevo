import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ContactContainer = styled.section`
  padding: 8rem 0;
  background: linear-gradient(180deg, #0a0e14 0%, ${theme.colors.dark} 100%);
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`;

export const ContactContent = styled.div`
  max-width: 800px;
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


export const LocationInfo = styled.div`
  margin-top: 3rem;
  ${theme.glassmorphism(0.03, 10)};
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(222, 244, 64, 0.2);
  text-align: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 1.5rem;
    margin-top: 2rem;
  }
`;

export const LocationTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.accent};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    font-size: 1.8rem;
  }
`;

export const LocationText = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.white};
  line-height: 1.8;
  margin-bottom: 0.5rem;

  strong {
    color: ${theme.colors.accent};
  }
`;
