import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HardwareContainer = styled.section`
  padding: 6.5rem 0;
  position: relative;
  background-color: #0A0F1D;
  background-image: 
    radial-gradient(ellipse at 50% 10%, rgba(37, 99, 235, 0.16) 0%, transparent 60%),
    radial-gradient(ellipse at 85% 65%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4.5rem 0;
  }
`;

export const HardwareContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const SectionHeader = styled.div`
  text-align: center;
  max-width: 820px;
  margin: 0 auto 3.5rem auto;
`;

export const SectionTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 16px;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #38BDF8;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.25);
  margin-bottom: 0.9rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.1rem, 4.2vw, 3.2rem);
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.2;
  letter-spacing: -0.5px;
  font-family: 'Space Grotesk', sans-serif;
  margin-bottom: 1rem;

  .highlight {
    background: linear-gradient(135deg, #60A5FA 0%, #38BDF8 50%, #2DD4BF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.08rem;
  color: #94A3B8;
  line-height: 1.65;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 1.15fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const Model3DWrapper = styled.div`
  background: linear-gradient(180deg, rgba(26, 36, 56, 0.75) 0%, rgba(15, 23, 42, 0.9) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 22px;
  padding: 1.2rem;
  border: 1px solid rgba(59, 130, 246, 0.25);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 35px rgba(37, 99, 235, 0.12);
`;

export const TelemetryBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 12px;
  padding: 8px 10px;
  background: rgba(11, 17, 32, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;

  .tele-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-right: 1px solid rgba(255, 255, 255, 0.06);

    &:last-child {
      border-right: none;
    }

    .label {
      font-size: 0.68rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #94A3B8;
      font-family: 'JetBrains Mono', monospace;
    }

    .val {
      font-size: 0.88rem;
      font-weight: 700;
      color: #F1F5F9;
      font-family: 'JetBrains Mono', monospace;

      &.ok {
        color: #34D399;
      }
      &.cool {
        color: #38BDF8;
      }
      &.amber {
        color: #FBBF24;
      }
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    .tele-item {
      border-right: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      padding: 4px 0;
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

export const ModelInstruction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 0.5rem 0.2rem;
  font-size: 0.78rem;
  color: #94A3B8;

  .instruction-left {
    display: flex;
    align-items: center;
    gap: 7px;

    svg {
      color: #38BDF8;
      font-size: 0.95rem;
    }
  }

  .badge-pue {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    padding: 2px 8px;
    border-radius: 6px;
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid rgba(16, 185, 129, 0.3);
    color: #34D399;
  }
`;

export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
`;

export const SpecCard = styled.div`
  padding: 1.5rem 1.8rem;
  background: linear-gradient(135deg, rgba(22, 33, 54, 0.75) 0%, rgba(15, 23, 42, 0.8) 100%);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-left: 3.5px solid ${props => props.$color || '#3B82F6'};
  border-radius: 16px;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, ${props => props.$color || '#3B82F6'}, transparent);
    opacity: 0.3;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.18);
    border-left-color: ${props => props.$color || '#3B82F6'};
    background: linear-gradient(135deg, rgba(28, 42, 68, 0.85) 0%, rgba(18, 28, 50, 0.9) 100%);
    box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px ${props => (props.$color ? `${props.$color}20` : 'transparent')};
    transform: translateY(-2px);
  }
`;

export const SpecHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.9rem;

  .title-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .spec-tag {
    font-size: 0.75rem;
    font-weight: 700;
    font-family: 'JetBrains Mono', monospace;
    padding: 3px 10px;
    border-radius: 6px;
    background: ${props => (props.$color ? `${props.$color}18` : 'rgba(59, 130, 246, 0.12)')};
    border: 1px solid ${props => (props.$color ? `${props.$color}40` : 'rgba(59, 130, 246, 0.25)')};
    color: ${props => props.$color || '#93C5FD'};
    letter-spacing: 0.3px;
  }
`;

export const SpecIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: ${props => (props.$color ? `${props.$color}18` : 'rgba(59, 130, 246, 0.12)')};
  border: 1px solid ${props => (props.$color ? `${props.$color}35` : 'rgba(59, 130, 246, 0.25)')};
  color: ${props => props.$color || '#60A5FA'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
`;

export const SpecLabel = styled.h3`
  font-size: 1.12rem;
  font-weight: 700;
  color: #F8FAFC;
  font-family: 'Space Grotesk', sans-serif;
`;

export const SpecList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;

  li {
    font-size: 0.9rem;
    color: #CBD5E1;
    line-height: 1.55;
    position: relative;
    padding-left: 16px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 9px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${props => props.$color || '#38BDF8'};
    }
  }
`;

export const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 16px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const CertCard = styled.div`
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(56, 189, 248, 0.4);
    transform: translateY(-2px);
  }

  img {
    height: 45px;
    margin-bottom: 8px;
    object-fit: contain;
  }

  .cert-title {
    font-size: 0.8rem;
    font-weight: bold;
    color: #F8FAFC;
    margin-bottom: 2px;
  }

  .cert-desc {
    font-size: 0.7rem;
    color: #94A3B8;
    line-height: 1.2;
  }
`;

export const StickyContainer = styled.div`
  position: sticky;
  top: 90px;
  align-self: start;

  @media (max-width: ${theme.breakpoints.desktop}) {
    position: static;
  }
`;
