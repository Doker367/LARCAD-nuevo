import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.$scrolled ? 'rgba(11, 15, 25, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(20px)' : 'none'};
  -webkit-backdrop-filter: ${props => props.$scrolled ? 'blur(20px)' : 'none'};
  border-bottom: 1px solid ${props => props.$scrolled ? 'rgba(255, 255, 255, 0.06)' : 'transparent'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.$scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none'};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.$scrolled ? '1rem 2.5rem' : '1.8rem 2.5rem'};
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  transition: padding 0.3s ease;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${props => props.$scrolled ? '0.8rem 1.2rem' : '1.2rem 1.2rem'};
  }
`;

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  cursor: pointer;
`;

export const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #FFFFFF;
  display: block;
  line-height: 1.1;
  font-family: 'Space Grotesk', sans-serif;
`;

export const LogoSubtext = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: ${theme.colors.accent};
  text-transform: uppercase;
  display: block;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #CBD5E1;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.92rem;
  position: relative;
  transition: color ${theme.transition.fast};
  letter-spacing: 0.2px;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.colors.primary};
    border-radius: 2px;
    transition: width ${theme.transition.normal};
  }

  &:hover {
    color: #FFFFFF;
    
    &::after {
      width: 100%;
    }
  }
`;

export const HeaderCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.6rem 1.4rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%);
  border: none;
  color: #FFFFFF;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: all ${theme.transition.normal};
  margin-left: 0.8rem;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(6, 182, 212, 0.6);
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  padding: 6px;

  @media (max-width: ${theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 320px;
  height: 100vh;
  background: rgba(11, 15, 25, 0.98);
  backdrop-filter: blur(20px);
  padding: 5rem 1.8rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
`;

export const MobileNavLink = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all ${theme.transition.fast};

  &:hover {
    color: ${theme.colors.accent};
    border-color: rgba(6, 182, 212, 0.3);
    background: rgba(6, 182, 212, 0.08);
  }
`;
