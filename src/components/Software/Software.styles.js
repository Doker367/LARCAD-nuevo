import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const SoftwareContainer = styled.section`
  padding: 6rem 0;
  background: ${theme.colors.dark};
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

export const SoftwareContent = styled.div`
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

export const SoftwareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.8rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const SoftwareCard = styled.div`
  padding: 2.2rem;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(59, 130, 246, 0.4);
    background: rgba(20, 30, 52, 0.75);
    transform: translateY(-3px);
    box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.6);
  }
`;

export const SoftwareCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
`;

export const SoftwareIconWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.25);
  color: #60A5FA;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
`;

export const SoftwareCategoryBadge = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  padding: 4px 10px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #CBD5E1;
`;

export const SoftwareTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.7rem;
  font-family: 'Space Grotesk', sans-serif;
`;

export const SoftwareDescription = styled.p`
  font-size: 0.94rem;
  color: #94A3B8;
  line-height: 1.65;
  flex-grow: 1;
  margin-bottom: 1.5rem;
`;

export const SoftwareLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
`;

export const SoftwareLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #93C5FD;
  text-decoration: none;
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all 0.2s ease;

  &:hover {
    background: ${theme.colors.primary};
    color: #FFFFFF;
    border-color: ${theme.colors.primary};
    transform: translateY(-1px);
  }
`;

export const SoftwareVersionTag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 0.78rem;

  .label {
    color: #64748B;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .val {
    font-family: 'JetBrains Mono', monospace;
    color: #38BDF8;
    background: rgba(56, 189, 248, 0.08);
    padding: 2px 6px;
    border-radius: 4px;
  }
`;
