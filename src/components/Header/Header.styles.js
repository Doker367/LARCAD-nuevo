import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  ${theme.glassmorphism(0.05, 15)};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 1rem 1.5rem;
  }
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  
  span {
    color: ${theme.colors.white};
    -webkit-text-fill-color: ${theme.colors.white};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.4rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  transition: color ${theme.transition.fast};

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.colors.accent};
    transition: width ${theme.transition.normal};
  }

  &:hover {
    color: ${theme.colors.accent};
    
    &::after {
      width: 100%;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.white};
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: ${theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 320px;
  height: 100vh;
  background: linear-gradient(180deg, #0a1220 0%, #101820 50%, #0d1628 100%);
  padding: 5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.8), 0 0 60px rgba(47, 49, 245, 0.15);
  border-left: 1px solid rgba(47, 49, 245, 0.2);
`;

export const MobileNavLink = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  border-left: 3px solid transparent;
  background: rgba(47, 49, 245, 0.05);
  transition: all ${theme.transition.fast};

  &:hover {
    color: ${theme.colors.accent};
    border-left-color: ${theme.colors.accent};
    background: rgba(47, 49, 245, 0.15);
    padding-left: 1.3rem;
  }
`;
