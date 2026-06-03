import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FooterContainer = styled.footer`
  background: ${theme.colors.dark};
  border-top: 1px solid rgba(47, 49, 245, 0.2);
  padding: 3rem 0 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent,
      ${theme.colors.primary},
      ${theme.colors.accent},
      ${theme.colors.primary},
      transparent
    );
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(138, 141, 143, 0.2);

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const FooterBrand = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  span {
    color: ${theme.colors.white};
    -webkit-text-fill-color: ${theme.colors.white};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const SocialIcon = styled.a`
  font-size: 1.8rem;
  color: ${theme.colors.gray};
  transition: all ${theme.transition.fast};
  cursor: pointer;
  
  &:hover {
    color: ${theme.colors.accent};
    filter: drop-shadow(${theme.neonGlow(theme.colors.accent, 'light')});
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
`;

export const Copyright = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.gray};
  font-weight: 300;
`;
