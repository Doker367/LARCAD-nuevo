import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  padding: 20px 24px;
  background: rgba(16, 24, 32, 0.97);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
`;

const Text = styled.p`
  color: #e0e0e0;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const AcceptBtn = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 700;
  font-size: 14px;
  padding: 10px 28px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition.normal};
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(47, 49, 245, 0.4);
  }

  @media (max-width: 768px) {
    flex: 1;
    padding: 12px 20px;
  }
`;

const RejectBtn = styled.button`
  background: transparent;
  color: #aaa;
  font-weight: 700;
  font-size: 14px;
  padding: 10px 28px;
  border: 2px solid #555;
  border-radius: 8px;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition.normal};
  white-space: nowrap;

  &:hover {
    border-color: #fff;
    color: #fff;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    flex: 1;
    padding: 12px 20px;
  }
`;

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    } else if (consent === 'accepted') {
      grantAnalytics();
    }
  }, []);

  const grantAnalytics = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
  };

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    grantAnalytics();
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <Banner
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Container>
            <Text>
              Utilizamos <Highlight>Google Analytics</Highlight> para analizar
              el uso del sitio y mejorar tu experiencia. Al continuar navegando,
              aceptas nuestra{' '}
              <Link href="#">Política de Privacidad</Link>.
            </Text>
            <Buttons>
              <AcceptBtn onClick={handleAccept}>Aceptar</AcceptBtn>
              <RejectBtn onClick={handleReject}>Rechazar</RejectBtn>
            </Buttons>
          </Container>
        </Banner>
      )}
    </AnimatePresence>
  );
}

export default CookieConsent;
