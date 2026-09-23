import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const AboutContainer = styled.section`
  padding: 6rem 0;
  background: linear-gradient(180deg, ${theme.colors.dark} 0%, #0c121e 100%);
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

export const AboutContent = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const SectionHeader = styled.div`
  text-align: center;
  max-width: 780px;
  margin: 0 auto 3.5rem auto;
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

export const InstitutionalHeroCard = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2.5rem;
  padding: 2.8rem;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
  margin-bottom: 3rem;

  .content-left {
    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 1.2rem;
      line-height: 1.3;
      font-family: 'Space Grotesk', sans-serif;
    }
    p {
      color: #94A3B8;
      font-size: 1.02rem;
      line-height: 1.75;
      margin-bottom: 1rem;
      strong {
        color: #F1F5F9;
      }
    }
  }

  .badges-right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    .badge-item {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 1.1rem 1.4rem;
      background: rgba(30, 41, 59, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 14px;
      transition: all 0.2s ease;

      &:hover {
        background: rgba(30, 41, 59, 0.7);
        border-color: rgba(59, 130, 246, 0.3);
      }

      .icon {
        width: 42px;
        height: 42px;
        border-radius: 10px;
        background: rgba(59, 130, 246, 0.12);
        color: #60A5FA;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        flex-shrink: 0;
      }

      strong {
        display: block;
        color: #FFFFFF;
        font-size: 0.95rem;
        font-weight: 600;
      }

      span {
        display: block;
        color: #94A3B8;
        font-size: 0.8rem;
        margin-top: 2px;
      }
    }
  }

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

export const OrganizationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.8rem;
  margin-bottom: 4rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.4rem;
  }
`;

export const OrgCard = styled.div`
  padding: 2.2rem;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 18px;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: rgba(59, 130, 246, 0.4);
    background: rgba(20, 30, 52, 0.75);
    transform: translateY(-3px);
    box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.6);
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;

    .pill {
      font-size: 0.75rem;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.06);
      color: #94A3B8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
`;

export const OrgCardIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%);
  border: 1px solid rgba(59, 130, 246, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #60A5FA;
  font-size: 1.3rem;
`;

export const OrgCardTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.8rem;
  font-family: 'Space Grotesk', sans-serif;
`;

export const OrgCardBody = styled.div`
  font-size: 0.98rem;
  color: #94A3B8;
  line-height: 1.7;
  flex-grow: 1;

  .pillar-list {
    list-style: none;
    padding: 0;
    margin-top: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #CBD5E1;
      font-size: 0.92rem;
    }
  }
`;

export const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
  margin-bottom: 4rem;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const ResourceCard = styled.div`
  padding: 2rem;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 18px;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(6, 182, 212, 0.4);
    background: rgba(20, 30, 52, 0.75);
    transform: translateY(-3px);
  }

  .res-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(6, 182, 212, 0.1);
    border: 1px solid rgba(6, 182, 212, 0.25);
    color: #22D3EE;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 0.95rem;
    color: #94A3B8;
    line-height: 1.65;

    strong {
      color: #F1F5F9;
    }
  }
`;

export const ServicesTickerContainer = styled.div`
  margin: 3.5rem 0;
  padding: 2rem 0;
  background: rgba(15, 23, 42, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  overflow: hidden;

  .ticker-wrapper {
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  }
`;

export const TickerTitle = styled.div`
  text-align: center;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #64748B;
  margin-bottom: 1.4rem;
`;

export const TickerTrack = styled.div`
  display: flex;
  gap: 1.5rem;
  width: max-content;
  animation: ticker 45s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes ticker {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

export const TickerItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0.7rem 1.4rem;
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 9999px;
  font-size: 0.92rem;
  font-weight: 600;
  color: #CBD5E1;
  white-space: nowrap;

  .icon {
    color: #60A5FA;
    font-size: 1.1rem;
    display: flex;
  }
`;

export const FacilityCard = styled.div`
  padding: 3rem;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
  margin-top: 4rem;

  .badge-tag {
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
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #FFFFFF;
    margin-bottom: 0.8rem;
    font-family: 'Space Grotesk', sans-serif;
  }

  .lead {
    font-size: 1.05rem;
    color: #94A3B8;
    line-height: 1.7;
    margin-bottom: 2rem;
    max-width: 900px;
  }

  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 2.5rem;

    @media (max-width: ${theme.breakpoints.tablet}) {
      grid-template-columns: 1fr;
    }

    .hl-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;

      .check {
        color: #10B981;
        font-size: 1.3rem;
        flex-shrink: 0;
        margin-top: 3px;
      }

      strong {
        display: block;
        color: #FFFFFF;
        font-size: 0.98rem;
        margin-bottom: 2px;
      }

      span {
        display: block;
        color: #94A3B8;
        font-size: 0.88rem;
        line-height: 1.5;
      }
    }
  }

  .institutional-note {
    padding: 1.2rem 1.6rem;
    background: rgba(30, 41, 59, 0.45);
    border-left: 4px solid #3B82F6;
    border-radius: 0 12px 12px 0;
    font-size: 0.92rem;
    color: #94A3B8;
    line-height: 1.65;

    strong {
      color: #E2E8F0;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 2rem 1.5rem;
  }
`;
