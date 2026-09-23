import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ServicesContainer = styled.section`
  padding: 6rem 0;
  background: ${theme.colors.dark};
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

export const ServicesContent = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const SectionHeader = styled.div`
  text-align: center;
  max-width: 780px;
  margin: 0 auto 2.5rem auto;
`;

export const SectionTag = styled.div`
  display: inline-block;
  padding: 4px 14px;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.25);
  margin-bottom: 0.8rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.2;
  letter-spacing: -0.5px;
  font-family: 'Space Grotesk', sans-serif;
  margin-bottom: 0.8rem;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.05rem;
  color: #94A3B8;
  line-height: 1.6;
`;

export const FilterTabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

export const FilterTab = styled.button`
  padding: 0.6rem 1.3rem;
  border-radius: 9999px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${props => props.$active ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255, 255, 255, 0.08)'};
  background: ${props => props.$active ? 'rgba(59, 130, 246, 0.18)' : 'rgba(15, 23, 42, 0.6)'};
  color: ${props => props.$active ? '#FFFFFF' : '#94A3B8'};
  transition: all 0.2s ease;

  &:hover {
    color: #FFFFFF;
    border-color: rgba(59, 130, 246, 0.4);
    background: rgba(30, 41, 59, 0.8);
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.6rem;
  margin-bottom: 5rem;
`;

export const ServiceCard = styled.div`
  padding: 1.8rem;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(59, 130, 246, 0.35);
    background: rgba(20, 30, 52, 0.75);
    transform: translateY(-3px);
    box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.6);
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
  }
`;

export const ServiceCategoryTag = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  padding: 3px 8px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: #94A3B8;
`;

export const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.25);
  color: #60A5FA;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.6rem;
  line-height: 1.3;
  font-family: 'Space Grotesk', sans-serif;
`;

export const ServiceDescription = styled.p`
  font-size: 0.92rem;
  color: #94A3B8;
  line-height: 1.6;
  flex-grow: 1;
`;

export const TierServicesWrapper = styled.div`
  padding: 3.5rem;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 2rem 1.2rem;
  }
`;

export const TierHeader = styled.div`
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3rem auto;

  .badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 9999px;
    background: rgba(245, 158, 11, 0.12);
    border: 1px solid rgba(245, 158, 11, 0.3);
    color: #FBBF24;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 0.8rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #FFFFFF;
    margin-bottom: 0.6rem;
    font-family: 'Space Grotesk', sans-serif;
  }

  p {
    font-size: 1rem;
    color: #94A3B8;
    line-height: 1.6;
  }
`;

export const TierCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const TierCard = styled.div`
  padding: 2.5rem;
  background: rgba(20, 30, 52, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(59, 130, 246, 0.4);
    background: rgba(25, 38, 66, 0.8);
    transform: translateY(-2px);
  }
`;

export const TierBadge = styled.div`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: ${props => props.$color || '#3B82F6'};
  background: ${props => props.$color ? `${props.$color}18` : 'rgba(59, 130, 246, 0.12)'};
  border: 1px solid ${props => props.$color ? `${props.$color}40` : 'rgba(59, 130, 246, 0.3)'};
  margin-bottom: 1.2rem;
  width: fit-content;
`;

export const TierTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.8rem;
  font-family: 'Space Grotesk', sans-serif;
`;

export const TierDesc = styled.p`
  font-size: 0.98rem;
  color: #94A3B8;
  line-height: 1.65;
  margin-bottom: 1.8rem;
`;

export const TierFeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 0.94rem;
    color: #CBD5E1;

    .check {
      color: #10B981;
      font-size: 1.2rem;
      flex-shrink: 0;
      margin-top: 2px;
    }
  }
`;
