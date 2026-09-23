import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShield } from 'react-icons/fi';

const FloatingToast = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  left: 30px;
  z-index: 9990;
  width: calc(100% - 60px);
  max-width: 380px;
  padding: 24px;
  background: linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(10, 15, 30, 0.98) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.7), 
    0 0 0 1px rgba(255, 255, 255, 0.05) inset,
    0 0 30px rgba(59, 130, 246, 0.15);

  @media (max-width: 768px) {
    left: 20px;
    right: 20px;
    bottom: 90px;
    width: auto;
    max-width: none;
    padding: 20px;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .icon-wrapper {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.05) 100%);
    border: 1px solid rgba(59, 130, 246, 0.3);
    color: #60A5FA;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
  }

  h5 {
    font-size: 1rem;
    font-weight: 700;
    color: #F8FAFC;
    margin: 0;
    letter-spacing: -0.3px;
  }
`;

const ConsentText = styled.p`
  color: #94A3B8;
  font-size: 0.88rem;
  line-height: 1.6;
  margin: 0;

  strong {
    color: #E2E8F0;
    font-weight: 600;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const AcceptBtn = styled.button`
  flex: 1;
  width: 100%;
  background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
  color: #FFFFFF;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 10px 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.5);
    background: linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%);
  }
`;

const RejectBtn = styled.button`
  flex: 1;
  width: 100%;
  background: transparent;
  color: #94A3B8;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 10px 18px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(148, 163, 184, 0.1);
    color: #F8FAFC;
    border-color: rgba(148, 163, 184, 0.4);
  }
`;

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent-v2');
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
    localStorage.setItem('cookie-consent-v2', 'accepted');
    grantAnalytics();
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent-v2', 'rejected');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <FloatingToast
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        >
          <ContentWrap>
            <HeaderRow>
              <div className="icon-wrapper"><FiShield /></div>
              <h5>Privacidad y Telemetría</h5>
            </HeaderRow>
            <ConsentText>
              Utilizamos Google Analytics para analizar el uso del sitio y mejorar tu experiencia. Al continuar navegando, aceptas nuestra Política de Privacidad.
            </ConsentText>
            <ButtonsRow>
              <AcceptBtn onClick={handleAccept}>Aceptar</AcceptBtn>
              <RejectBtn onClick={handleReject}>Rechazar</RejectBtn>
            </ButtonsRow>
          </ContentWrap>
        </FloatingToast>
      )}
    </AnimatePresence>
  );
}

export default CookieConsent;
