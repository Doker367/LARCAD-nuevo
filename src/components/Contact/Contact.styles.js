import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ContactContainer = styled.section`
  padding: 6rem 0;
  background: linear-gradient(180deg, ${theme.colors.dark} 0%, #0c121e 100%);
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }
`;

export const ContactContent = styled.div`
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

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const InfoColumn = styled.div``;

export const InfoCard = styled.div`
  padding: 2.5rem;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.3) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  }

  .institution-badge {
    display: flex;
    align-items: center;
    gap: 14px;
    padding-bottom: 1.6rem;
    margin-bottom: 1.8rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);

    h4 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 2px;
    }

    span {
      font-size: 0.82rem;
      color: #94A3B8;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1.8rem 1.2rem;
  }
`;

export const ContactMethodsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  margin-bottom: 2rem;
`;

export const ContactMethodItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 10px;
  border-radius: 12px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }

  .icon-wrap {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%);
    border: 1px solid rgba(59, 130, 246, 0.25);
    color: #60A5FA;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.15rem;
    flex-shrink: 0;
  }

  .label {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #64748B;
    margin-bottom: 2px;
  }

  .val {
    display: block;
    font-size: 0.95rem;
    color: #F1F5F9;
    line-height: 1.5;
    text-decoration: none;
    transition: color 0.2s;

    &[href]:hover {
      color: #38BDF8;
    }
  }
`;

export const MapFrame = styled.div`
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  filter: grayscale(80%) invert(90%) hue-rotate(180deg) contrast(120%);
  transition: filter 0.4s ease;
  
  &:hover {
    filter: grayscale(0%) invert(0%) hue-rotate(0deg) contrast(100%);
  }
`;

export const FormColumn = styled.div``;

export const FormCard = styled.form`
  padding: 2.5rem;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.3) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 0.4rem;
    font-family: 'Space Grotesk', sans-serif;
  }

  .form-sub {
    font-size: 0.92rem;
    color: #94A3B8;
    margin-bottom: 2rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1.8rem 1.2rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 1.4rem;
`;

export const FormLabel = styled.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: #CBD5E1;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 0;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  color: #FFFFFF;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #475569;
    font-size: 0.9rem;
  }

  &:focus {
    border-bottom-color: #38BDF8;
    background: linear-gradient(180deg, transparent 80%, rgba(56, 189, 248, 0.05) 100%);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem 0;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  color: #FFFFFF;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  resize: vertical;
  min-height: 100px;
  transition: all 0.3s ease;

  &::placeholder {
    color: #475569;
    font-size: 0.9rem;
  }

  &:focus {
    border-bottom-color: #38BDF8;
    background: linear-gradient(180deg, transparent 80%, rgba(56, 189, 248, 0.05) 100%);
  }
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 0.95rem 1.5rem;
  border-radius: 10px;
  background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.35);

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.5);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const StatusAlert = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 1.2rem;
  padding: 0.9rem 1.2rem;
  border-radius: 10px;
  font-size: 0.9rem;
  line-height: 1.5;
  background: ${props => props.$type === 'success' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)'};
  border: 1px solid ${props => props.$type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'};
  color: ${props => props.$type === 'success' ? '#34D399' : '#F87171'};
`;
