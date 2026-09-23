import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FooterContainer = styled.footer`
  background: #070B12;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 5rem 0 2.5rem;
  position: relative;
`;

export const FooterContent = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.9fr 1fr 1.1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const BrandColumn = styled.div`
  .brand-header {
    margin-bottom: 1rem;
  }

  .brand-title {
    font-size: 1.6rem;
    font-weight: 800;
    color: #FFFFFF;
    letter-spacing: 1px;
    font-family: 'Space Grotesk', sans-serif;
    display: block;
    line-height: 1.1;
  }

  .brand-sub {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${theme.colors.accent};
    text-transform: uppercase;
  }

  .brand-desc {
    font-size: 0.9rem;
    color: #94A3B8;
    line-height: 1.65;
    margin-bottom: 1.5rem;
  }
`;

export const PartnerLogos = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.4rem;

  img {
    height: 48px;
    width: auto;
    max-width: 100%;
    opacity: 0.9;
    filter: brightness(1.1);
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 1rem;

    img {
      height: 38px;
    }
  }
`;

export const FooterColumn = styled.div``;

export const ColumnTitle = styled.h4`
  font-size: 0.92rem;
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  font-family: 'Space Grotesk', sans-serif;
`;

export const FooterLinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  li {
    font-size: 0.9rem;
    color: #94A3B8;

    a {
      color: #94A3B8;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: color 0.2s;

      &:hover {
        color: #38BDF8;
      }
    }
  }

  &.contact-list {
    li {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: 0.88rem;
      line-height: 1.5;

      .icon {
        color: #38BDF8;
        font-size: 1rem;
        flex-shrink: 0;
        margin-top: 3px;
      }
    }
  }
`;

export const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
`;

export const Copyright = styled.p`
  font-size: 0.85rem;
  color: #64748B;
  font-weight: 400;
`;
