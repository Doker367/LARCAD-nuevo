import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HardwareContainer = styled.section`
  padding: 8rem 0;
  background: linear-gradient(180deg, #0a0e14 0%, ${theme.colors.dark} 100%);
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }
`;

export const HardwareContent = styled.div`
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

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const Model3DWrapper = styled.div`
  ${theme.glassmorphism(0.05, 15)};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 50px rgba(47, 49, 245, 0.3);
  border: 1px solid rgba(47, 49, 245, 0.3);
`;

export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

export const SpecCard = styled.div`
  ${theme.glassmorphism(0.04, 12)};
  padding: 1.5rem 1.5rem 1.5rem 1.2rem;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-left: 4px solid ${theme.colors.primary};
  transition: all ${theme.transition.normal};
  cursor: pointer;
  min-height: 120px;
  box-shadow: 0 5px 20px rgba(47, 49, 245, 0.10);

  &:hover {
    ${theme.glassmorphism(0.09, 14)};
    border-left-color: ${theme.colors.accent};
    box-shadow: 0 10px 32px rgba(222, 244, 64, 0.13);
    transform: translateY(-2px) scale(1.03);
  }
`;

export const SpecLabel = styled.span`
  font-size: 1.08rem;
  font-weight: 700;
  color: ${theme.colors.gray};
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

export const SpecValue = styled.span`
  font-size: 1.05rem;
  font-weight: 500;
  color: ${theme.colors.white};
  font-family: 'Outfit', 'Courier New', monospace;
  text-align: left;
  margin-top: 0.5rem;
  width: 100%;
`;
