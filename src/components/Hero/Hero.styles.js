import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${theme.colors.dark};
  padding: 7rem 1.5rem 4rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 6rem 1.25rem 3rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 5.5rem 1rem 2.5rem;
  }
`;

export const BackgroundFallback = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(circle at 50% 35%, rgba(59, 130, 246, 0.18) 0%, transparent 55%),
    radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.12) 0%, transparent 50%),
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    ${theme.colors.dark};
  background-size: 100% 100%, 100% 100%, 44px 44px, 44px 44px, 100% 100%;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const InstitutionalBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 9999px;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(59, 130, 246, 0.3);
  backdrop-filter: blur(10px);
  color: #93C5FD;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10B981;
    box-shadow: 0 0 10px #10B981;
    animation: beacon 2s infinite ease-in-out;
  }

  @keyframes beacon {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.4); opacity: 0.6; }
  }
`;

export const Title = styled.h1`
  font-size: clamp(2.4rem, 5.5vw, 4.2rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 1.6rem;
  color: #FFFFFF;
  letter-spacing: -0.5px;
  font-family: 'Space Grotesk', sans-serif;

  span {
    background: linear-gradient(135deg, #60A5FA 0%, #06B6D4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2rem;
    line-height: 1.25;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.65rem;
    line-height: 1.3;
    margin-bottom: 1.2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  color: #94A3B8;
  margin-bottom: 2.8rem;
  line-height: 1.75;
  font-weight: 400;
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;

  strong {
    color: #F1F5F9;
    font-weight: 600;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
    margin-bottom: 2.2rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0.95rem 2.2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: #FFFFFF;
  background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.15);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(37, 99, 235, 0.6);
    background: linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.95rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: #CBD5E1;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    color: #FFFFFF;
    border-color: rgba(255, 255, 255, 0.25);
    background: rgba(30, 41, 59, 0.7);
    transform: translateY(-2px);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`;

export const StatsStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  max-width: 1050px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.5);

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 1.2rem;
  }
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  text-align: left;

  .icon-wrap {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #60A5FA;
    font-size: 1.3rem;
    flex-shrink: 0;
  }

  .stat-detail {
    font-size: 0.75rem;
    color: #64748B;
    margin-top: 2px;
  }
`;

export const StatNumber = styled.div`
  font-size: 1.65rem;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.1;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.5px;
`;

export const StatLabel = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: #94A3B8;
  margin-top: 2px;
`;
