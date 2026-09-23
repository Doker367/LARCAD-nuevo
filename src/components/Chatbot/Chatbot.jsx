import { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiCpu, FiMinus } from 'react-icons/fi';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: '¡Hola! Soy el asistente técnico de LARCAD UNACH. ¿En qué puedo orientarte hoy sobre el clúster o nuestros servicios?', 
      isBot: true 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsTyping(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          sessionId: getSessionId()
        }),
      });

      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        text: data.response || data.fulfillmentText || 'No pude procesar tu solicitud en este momento.', 
        isBot: true 
      }]);
    } catch (error) {
      const localResponse = getLocalResponse(userMessage);
      setMessages(prev => [...prev, { 
        text: localResponse, 
        isBot: true 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  // Respuestas locales especializadas en HPC y LARCAD
  const getLocalResponse = (message) => {
    const msg = message.toLowerCase();
    
    if (msg.includes('servicio') || msg.includes('ofrec')) {
      return 'LARCAD ofrece cómputo de alto rendimiento (HPC), almacenamiento masivo con respaldos automáticos, hospedaje y colocación de servidores, y consultoría técnica especializada para investigación científica.';
    }
    if (msg.includes('hardware') || msg.includes('servidor') || msg.includes('nodo')) {
      return 'Disponemos de servidores Dell PowerEdge R650 y R750 con procesadores AMD EPYC de última generación, aceleración GPU NVIDIA, switches InfiniBand de baja latencia y 928 TB útiles de almacenamiento SAN/NAS.';
    }
    if (msg.includes('software') || msg.includes('programa') || msg.includes('libreria') || msg.includes('slurm')) {
      return 'Contamos con software científico de escala internacional: CORSIKA, FLUKA, Geant4, HAWC2, ORCA y Quantum ESPRESSO, administrados mediante el gestor de colas SLURM y módulos de entorno.';
    }
    if (msg.includes('contacto') || msg.includes('correo') || msg.includes('email') || msg.includes('telefono')) {
      return 'Puedes contactar al equipo en larcad@unach.mx o al (+52) 961 617 8000 ext. 8107. Estamos ubicados en Ciudad Universitaria UNACH, Tuxtla Gutiérrez, Chiapas.';
    }
    if (msg.includes('acceso') || msg.includes('cuenta') || msg.includes('usar') || msg.includes('solicitar')) {
      return 'Para tramitar tu cuenta de investigación, envía un correo a larcad@unach.mx con tu nombre, adscripción académica institucional, descripción del proyecto y requerimientos estimados de CPU/GPU/RAM.';
    }
    if (msg.includes('ubicación') || msg.includes('dirección') || msg.includes('donde')) {
      return 'Nos ubicamos en: Carretera Emiliano Zapata Km. 8, Ciudad Universitaria, C.P. 29050, Tuxtla Gutiérrez, Chiapas, México.';
    }
    if (msg.includes('hola') || msg.includes('buenos') || msg.includes('saludos')) {
      return '¡Hola! Bienvenido al portal de LARCAD UNACH. ¿Deseas consultar servicios, especificaciones del clúster o trámites de acceso a cómputo?';
    }
    if (msg.includes('gracias') || msg.includes('thank')) {
      return '¡Con gusto! Si requieres asesoría adicional sobre tus scripts de cálculo o el entorno de trabajo, estamos para apoyarte.';
    }
    if (msg.includes('costo') || msg.includes('precio') || msg.includes('cuanto cuesta') || msg.includes('tarifa')) {
      return 'Para la comunidad académica e investigadores de la UNACH, el acceso se gestiona bajo convenios institucionales de investigación. Para proyectos interinstitucionales o privados, contacta a larcad@unach.mx.';
    }
    if (msg.includes('gpu') || msg.includes('acelerador')) {
      return 'Contamos con nodos equipados con GPUs NVIDIA para aprendizaje profundo, renderizado científico y dinámica molecular. Consulta asignación al solicitar tu proyecto.';
    }
    if (msg.includes('almacenamiento') || msg.includes('capacidad') || msg.includes('disco')) {
      return 'Nuestra infraestructura cuenta con más de 928 TB útiles con soporte RAID empresarial, snapshots programados y cuotas escalables por grupo de investigación.';
    }
    if (msg.includes('horario') || msg.includes('atención')) {
      return 'El centro de atención opera de Lunes a Viernes de 09:00 a 17:00 hrs. El clúster y los sistemas de cálculo operan de forma ininterrumpida 24/7.';
    }
    if (msg.includes('remoto') || msg.includes('ssh') || msg.includes('vpn')) {
      return 'El acceso se realiza mediante conexiones seguras SSH y llaves criptográficas autorizadas, con opción de túnel VPN institucional para transferencias de datos seguras.';
    }
    if (msg.includes('visita') || msg.includes('conocer') || msg.includes('recorrido')) {
      return 'Organizamos visitas guiadas para grupos académicos y estudiantes. Coordina una fecha enviando tu solicitud a larcad@unach.mx.';
    }
    
    return 'Entendido. Puedo orientarte sobre los servicios del laboratorio, la arquitectura de cómputo, software científico disponible o los requisitos para solicitar una cuenta de investigador.';
  };

  const getSessionId = () => {
    let sessionId = sessionStorage.getItem('chatSessionId');
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('chatSessionId', sessionId);
    }
    return sessionId;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    '¿Qué servicios ofrecen?',
    '¿Cómo solicito acceso?',
    '¿Cuál es el hardware disponible?',
    'Software instalado'
  ];

  const getSuggestedQuestions = () => {
    if (messages.length <= 1) return quickQuestions;
    const lastBotMessage = [...messages].reverse().find(m => m.isBot)?.text?.toLowerCase() || '';
    
    if (lastBotMessage.includes('servicio')) {
      return ['¿Cómo solicito acceso?', '¿Tienen soporte SLURM?', 'Hardware disponible'];
    }
    if (lastBotMessage.includes('hardware') || lastBotMessage.includes('nodo')) {
      return ['¿Tienen GPUs disponibles?', 'Software compatible', 'Almacenamiento disponible'];
    }
    if (lastBotMessage.includes('software')) {
      return ['¿Puedo instalar librerías?', '¿Cómo envío trabajos?', 'Soporte técnico'];
    }
    return ['¿Cómo solicitar cuenta?', 'Horario de atención', 'Contacto LARCAD'];
  };

  const handleChipClick = (question) => {
    setInputValue('');
    setMessages(prev => [...prev, { text: question, isBot: false }]);
    setIsTyping(true);
    setTimeout(() => {
      const response = getLocalResponse(question);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <>
      {/* Botón flotante */}
      <FloatingTrigger
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Abrir asistente LARCAD"
      >
        <TriggerIconWrapper>
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <FiX size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <FiMessageSquare size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </TriggerIconWrapper>
        {!isOpen && <StatusBadge />}
      </FloatingTrigger>

      {/* Modal / Ventana de Chat */}
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          >
            {/* Header */}
            <ChatHeader>
              <HeaderInfo>
                <BotAvatar>
                  <FiCpu size={18} />
                  <OnlineDot />
                </BotAvatar>
                <div>
                  <BotTitle>Asistente LARCAD</BotTitle>
                  <BotSubtitle>
                    <span className="dot" /> Clúster UNACH en línea
                  </BotSubtitle>
                </div>
              </HeaderInfo>
              <HeaderActionBtn onClick={() => setIsOpen(false)} aria-label="Minimizar">
                <FiMinus size={18} />
              </HeaderActionBtn>
            </ChatHeader>

            {/* Mensajes */}
            <MessagesContainer>
              {messages.map((msg, index) => (
                <MessageRow key={index} $isBot={msg.isBot}>
                  {msg.isBot && (
                    <BotAvatarMini>
                      <FiCpu size={12} />
                    </BotAvatarMini>
                  )}
                  <Bubble $isBot={msg.isBot}>
                    {msg.text}
                  </Bubble>
                </MessageRow>
              ))}

              {isTyping && (
                <MessageRow $isBot={true}>
                  <BotAvatarMini>
                    <FiCpu size={12} />
                  </BotAvatarMini>
                  <Bubble $isBot={true}>
                    <TypingIndicator>
                      <span />
                      <span />
                      <span />
                    </TypingIndicator>
                  </Bubble>
                </MessageRow>
              )}
              <div ref={messagesEndRef} />
            </MessagesContainer>

            {/* Preguntas Sugeridas */}
            <SuggestedArea>
              <SuggestedScroll>
                {getSuggestedQuestions().map((q, idx) => (
                  <Chip
                    key={idx}
                    onClick={() => handleChipClick(q)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {q}
                  </Chip>
                ))}
              </SuggestedScroll>
            </SuggestedArea>

            {/* Input Form */}
            <InputContainer>
              <Input
                type="text"
                placeholder="Escribe tu consulta..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <SendBtn
                onClick={sendMessage}
                disabled={!inputValue.trim()}
                whileTap={{ scale: 0.92 }}
                aria-label="Enviar mensaje"
              >
                <FiSend size={15} />
              </SendBtn>
            </InputContainer>

            <ChatFooter>
              Laboratorio Regional de Cómputo de Alto Desempeño • UNACH
            </ChatFooter>
          </ChatWindow>
        )}
      </AnimatePresence>
    </>
  );
};

// ==================== ANIMATIONS ====================
const pulseGlow = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.4;
  }
`;

const dotPulse = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-4px);
  }
`;

// ==================== STYLES ====================
const FloatingTrigger = styled(motion.button)`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #06B6D4 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px -5px rgba(37, 99, 235, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 9999;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 15px 35px -5px rgba(37, 99, 235, 0.65), 0 0 20px rgba(6, 182, 212, 0.4);
  }

  @media (max-width: 640px) {
    bottom: 18px;
    right: 18px;
    width: 50px;
    height: 50px;
  }
`;

const TriggerIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatusBadge = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #10B981;
  border: 2.5px solid #0B0F19;

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: #10B981;
    animation: ${pulseGlow} 2s ease-in-out infinite;
    z-index: -1;
  }
`;

const ChatWindow = styled(motion.div)`
  position: fixed;
  bottom: 92px;
  right: 24px;
  width: 380px;
  height: 540px;
  background: rgba(11, 15, 25, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 9998;

  @media (max-width: 640px) {
    left: 16px;
    right: 16px;
    width: auto;
    bottom: 84px;
    height: calc(100vh - 130px);
    height: calc(100dvh - 130px);
    max-height: 560px;
  }
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  background: rgba(15, 23, 42, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BotAvatar = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #38BDF8;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const OnlineDot = styled.span`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #10B981;
  border: 2px solid #0B0F19;
`;

const BotTitle = styled.div`
  font-family: var(--font-heading, sans-serif);
  color: #F8FAFC;
  font-weight: 600;
  font-size: 14px;
`;

const BotSubtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #94A3B8;

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10B981;
  }
`;

const HeaderActionBtn = styled.button`
  background: transparent;
  border: none;
  color: #94A3B8;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.06);
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
`;

const MessageRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  justify-content: ${props => props.$isBot ? 'flex-start' : 'flex-end'};
`;

const BotAvatarMini = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.25);
  color: #38BDF8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
`;

const Bubble = styled.div`
  max-width: 82%;
  padding: 10px 14px;
  font-size: 13px;
  line-height: 1.5;
  border-radius: ${props => props.$isBot ? '4px 14px 14px 14px' : '14px 4px 14px 14px'};
  background: ${props => props.$isBot 
    ? 'rgba(30, 41, 59, 0.65)' 
    : 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)'};
  border: 1px solid ${props => props.$isBot ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.15)'};
  color: ${props => props.$isBot ? '#E2E8F0' : '#FFFFFF'};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  word-break: break-word;
`;

const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 6px;

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #38BDF8;
    animation: ${dotPulse} 1s infinite ease-in-out;

    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
`;

const SuggestedArea = styled.div`
  padding: 8px 12px;
  background: rgba(15, 23, 42, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const SuggestedScroll = styled.div`
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 2px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Chip = styled(motion.button)`
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  color: #93C5FD;
  padding: 5px 10px;
  border-radius: 9999px;
  font-size: 11px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(59, 130, 246, 0.18);
    border-color: rgba(59, 130, 246, 0.35);
    color: #BFDBFE;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: rgba(15, 23, 42, 0.9);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const Input = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 9px 12px;
  color: #FFFFFF;
  font-size: 13px;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #64748B;
  }

  &:focus {
    border-color: #3B82F6;
    background: rgba(59, 130, 246, 0.05);
  }
`;

const SendBtn = styled(motion.button)`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: #2563EB;
  border: none;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:disabled {
    background: rgba(255, 255, 255, 0.08);
    color: #64748B;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: #1D4ED8;
  }
`;

const ChatFooter = styled.div`
  padding: 8px 12px;
  font-size: 10px;
  color: #64748B;
  text-align: center;
  background: rgba(11, 15, 25, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
`;

export default Chatbot;
