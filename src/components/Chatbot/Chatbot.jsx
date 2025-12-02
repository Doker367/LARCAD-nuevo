import { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: '¡Hola! Soy el asistente virtual de LARCAD. ¿En qué puedo ayudarte?', 
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
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    
    // Agregar mensaje del usuario
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
        text: data.response || data.fulfillmentText || 'Lo siento, no pude procesar tu mensaje.', 
        isBot: true 
      }]);
    } catch (error) {
      console.error('Error:', error);
      // Respuesta local cuando no hay backend
      const localResponse = getLocalResponse(userMessage);
      setMessages(prev => [...prev, { 
        text: localResponse, 
        isBot: true 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  // Respuestas locales para cuando no hay backend
  const getLocalResponse = (message) => {
    const msg = message.toLowerCase();
    
    if (msg.includes('servicio') || msg.includes('ofrec')) {
      return 'LARCAD ofrece servicios de cómputo de alto desempeño, almacenamiento masivo, hospedaje de servidores y soporte técnico especializado para investigación científica.';
    }
    if (msg.includes('hardware') || msg.includes('servidor')) {
      return 'Contamos con servidores Dell PowerEdge R650 y R750, nodos de cómputo con procesadores AMD EPYC, sistema de almacenamiento QNAP con más de 1 PB de capacidad, y conectividad de alta velocidad.';
    }
    if (msg.includes('software') || msg.includes('programa')) {
      return 'Tenemos instalado software científico como CORSIKA, FLUKA, Geant4, HAWC2, ORCA y Quantum ESPRESSO para simulaciones de física de partículas y materia condensada.';
    }
    if (msg.includes('contacto') || msg.includes('correo') || msg.includes('email')) {
      return 'Puedes contactarnos en larcad@unach.mx o llamar al (+52) 961 617 8000 ext. 8107. Estamos ubicados en la Universidad Autónoma de Chiapas.';
    }
    if (msg.includes('acceso') || msg.includes('cuenta') || msg.includes('usar')) {
      return 'Para solicitar acceso a los recursos de LARCAD, envía un correo a larcad@unach.mx con tu información institucional y descripción del proyecto de investigación.';
    }
    if (msg.includes('ubicación') || msg.includes('dirección') || msg.includes('donde')) {
      return 'Estamos ubicados en: Carretera Emiliano Zapata Km. 8, Ciudad Universitaria, C.P. 29050, Tuxtla Gutiérrez, Chiapas, México.';
    }
    if (msg.includes('hola') || msg.includes('buenos') || msg.includes('saludos')) {
      return '¡Hola! Bienvenido a LARCAD. ¿En qué puedo ayudarte hoy? Puedo darte información sobre nuestros servicios, hardware, software o cómo contactarnos.';
    }
    if (msg.includes('gracias') || msg.includes('thank')) {
      return '¡De nada! Si tienes más preguntas, no dudes en consultarme. Estoy aquí para ayudarte.';
    }
    if (msg.includes('costo') || msg.includes('precio') || msg.includes('cuanto cuesta') || msg.includes('cuánto cuesta')) {
      return 'Los servicios de LARCAD están disponibles para la comunidad académica de la UNACH. Para proyectos externos, contáctanos en larcad@unach.mx para conocer las opciones disponibles.';
    }
    if (msg.includes('gpu') || msg.includes('tarjeta gráfica')) {
      return 'Contamos con nodos de cómputo con GPUs NVIDIA para procesamiento paralelo y machine learning. Consulta disponibilidad escribiendo a larcad@unach.mx.';
    }
    if (msg.includes('almacenamiento') || msg.includes('capacidad')) {
      return 'Nuestro sistema de almacenamiento QNAP ofrece más de 1 PB (Petabyte) de capacidad con respaldos automáticos y alta disponibilidad.';
    }
    if (msg.includes('horario') || msg.includes('atención')) {
      return 'Nuestro horario de atención es de Lunes a Viernes de 9:00 a 17:00 hrs. Para emergencias técnicas, contáctanos por correo electrónico.';
    }
    if (msg.includes('documento') || msg.includes('requisito')) {
      return 'Para solicitar acceso necesitas: identificación institucional, descripción del proyecto de investigación y carta de tu asesor o jefe de departamento.';
    }
    if (msg.includes('tiempo') || msg.includes('tarda') || msg.includes('registro')) {
      return 'El proceso de registro generalmente toma de 2 a 5 días hábiles una vez recibida toda la documentación completa.';
    }
    if (msg.includes('remoto') || msg.includes('remotamente') || msg.includes('desde casa')) {
      return '¡Sí! Puedes acceder a los recursos de LARCAD de forma remota mediante SSH. Te proporcionaremos las credenciales y guías de conexión.';
    }
    if (msg.includes('capacitación') || msg.includes('curso') || msg.includes('tutorial')) {
      return 'Ofrecemos capacitaciones periódicas sobre uso de HPC, software científico y buenas prácticas. Consulta el calendario en nuestra página o escríbenos.';
    }
    if (msg.includes('proyecto') || msg.includes('colabora')) {
      return 'Tenemos colaboraciones activas con proyectos de física de partículas, astronomía y ciencias computacionales. ¡Nos encantaría conocer tu proyecto!';
    }
    if (msg.includes('visita') || msg.includes('conocer') || msg.includes('tour')) {
      return 'Puedes agendar una visita al laboratorio escribiendo a larcad@unach.mx. Estaremos encantados de mostrarte nuestras instalaciones.';
    }
    if (msg.includes('instalar') || msg.includes('propio software')) {
      return 'Sí, puedes solicitar la instalación de software adicional. Envíanos los requisitos y nuestro equipo técnico evaluará la compatibilidad.';
    }
    if (msg.includes('simulacion') || msg.includes('ejecuto') || msg.includes('correr')) {
      return 'Para ejecutar simulaciones, utilizamos un sistema de colas (SLURM). Te proporcionamos documentación y ejemplos de scripts para enviar trabajos.';
    }
    if (msg.includes('soporte') || msg.includes('ayuda técnica')) {
      return 'Contamos con soporte técnico especializado. Puedes reportar incidentes o solicitar ayuda en larcad@unach.mx o en horario de oficina.';
    }
    if (msg.includes('estacionamiento') || msg.includes('llegar')) {
      return 'La universidad cuenta con estacionamiento para visitantes. Estamos en el edificio principal de Ciudad Universitaria, Tuxtla Gutiérrez.';
    }
    
    return 'Gracias por tu mensaje. Puedo ayudarte con información sobre nuestros servicios, hardware disponible, software instalado, o cómo contactarnos. ¿Qué te gustaría saber?';
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
    '¿Cómo puedo acceder?',
    '¿Cuál es el hardware disponible?',
    'Información de contacto'
  ];

  // Sugerencias contextuales basadas en el último mensaje
  const getSuggestedQuestions = () => {
    if (messages.length <= 1) return quickQuestions;
    
    const lastBotMessage = [...messages].reverse().find(m => m.isBot)?.text?.toLowerCase() || '';
    
    if (lastBotMessage.includes('servicio')) {
      return [
        '¿Cuánto cuesta usar los servicios?',
        '¿Qué software tienen instalado?',
        '¿Cómo solicito acceso?',
        '¿Cuál es el hardware disponible?'
      ];
    }
    if (lastBotMessage.includes('hardware') || lastBotMessage.includes('servidor')) {
      return [
        '¿Qué software puedo usar?',
        '¿Cómo conecto mi proyecto?',
        '¿Tienen GPU disponibles?',
        '¿Cuál es la capacidad de almacenamiento?'
      ];
    }
    if (lastBotMessage.includes('software') || lastBotMessage.includes('programa')) {
      return [
        '¿Puedo instalar mi propio software?',
        '¿Cómo ejecuto simulaciones?',
        '¿Tienen soporte técnico?',
        '¿Cuáles son los requisitos de acceso?'
      ];
    }
    if (lastBotMessage.includes('contacto') || lastBotMessage.includes('correo')) {
      return [
        '¿Cuál es el horario de atención?',
        '¿Dónde están ubicados?',
        '¿Cómo solicito una cuenta?',
        '¿Ofrecen capacitación?'
      ];
    }
    if (lastBotMessage.includes('acceso') || lastBotMessage.includes('cuenta')) {
      return [
        '¿Qué documentos necesito?',
        '¿Cuánto tiempo tarda el registro?',
        '¿Hay costo por el servicio?',
        '¿Puedo usar los recursos remotamente?'
      ];
    }
    if (lastBotMessage.includes('ubicación') || lastBotMessage.includes('dirección')) {
      return [
        '¿Cuál es el horario de visitas?',
        '¿Cómo puedo contactarlos?',
        '¿Tienen estacionamiento?',
        '¿Qué servicios ofrecen?'
      ];
    }
    
    // Preguntas generales si no hay contexto específico
    return [
      '¿Qué más pueden contarme?',
      '¿Tienen proyectos activos?',
        '¿Ofrecen colaboraciones?',
      '¿Cómo puedo visitar el laboratorio?'
    ];
  };

  return (
    <>
      {/* Botón flotante del chat */}
      <ChatButton
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          boxShadow: isOpen 
            ? '0 0 20px rgba(47, 49, 245, 0.5)' 
            : '0 0 30px rgba(47, 49, 245, 0.3)'
        }}
      >
        {isOpen ? (
          <CloseIcon>✕</CloseIcon>
        ) : (
          <ChatIcon>💬</ChatIcon>
        )}
        {!isOpen && <PulseRing />}
      </ChatButton>

      {/* Ventana del chat */}
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header del chat */}
            <ChatHeader>
              <HeaderInfo>
                <BotAvatar>
                  <span>🤖</span>
                  <OnlineIndicator />
                </BotAvatar>
                <HeaderText>
                  <BotName>Asistente LARCAD</BotName>
                  <BotStatus>En línea</BotStatus>
                </HeaderText>
              </HeaderInfo>
              <MinimizeButton onClick={() => setIsOpen(false)}>
                ─
              </MinimizeButton>
            </ChatHeader>

            {/* Área de mensajes */}
            <MessagesContainer>
              {messages.map((msg, index) => (
                <MessageWrapper key={index} $isBot={msg.isBot}>
                  <Message
                    $isBot={msg.isBot}
                    initial={{ opacity: 0, x: msg.isBot ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {msg.isBot && <MessageAvatar>🤖</MessageAvatar>}
                    <MessageBubble $isBot={msg.isBot}>
                      {msg.text}
                    </MessageBubble>
                  </Message>
                </MessageWrapper>
              ))}
              
              {isTyping && (
                <MessageWrapper $isBot={true}>
                  <Message $isBot={true}>
                    <MessageAvatar>🤖</MessageAvatar>
                    <MessageBubble $isBot={true}>
                      <TypingIndicator>
                        <TypingDot $delay="0s" />
                        <TypingDot $delay="0.2s" />
                        <TypingDot $delay="0.4s" />
                      </TypingIndicator>
                    </MessageBubble>
                  </Message>
                </MessageWrapper>
              )}
              <div ref={messagesEndRef} />
            </MessagesContainer>

            {/* Preguntas sugeridas - compactas y discretas */}
            <QuickQuestionsContainer>
              <QuickQuestionsScroll>
                {getSuggestedQuestions().slice(0, 3).map((question, index) => (
                  <QuickQuestionChip
                    key={index}
                    onClick={() => {
                      setInputValue('');
                      setMessages(prev => [...prev, { text: question, isBot: false }]);
                      setIsTyping(true);
                      setTimeout(() => {
                        const response = getLocalResponse(question);
                        setMessages(prev => [...prev, { text: response, isBot: true }]);
                        setIsTyping(false);
                      }, 800);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {question}
                  </QuickQuestionChip>
                ))}
              </QuickQuestionsScroll>
            </QuickQuestionsContainer>

            {/* Input del chat */}
            <ChatInputContainer>
              <ChatInput
                type="text"
                placeholder="Escribe tu mensaje..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <SendButton
                onClick={sendMessage}
                disabled={!inputValue.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SendIcon>➤</SendIcon>
              </SendButton>
            </ChatInputContainer>

            {/* Footer */}
            <ChatFooter>
              Powered by LARCAD • Universidad Autónoma de Chiapas
            </ChatFooter>
          </ChatWindow>
        )}
      </AnimatePresence>
    </>
  );
};

// ================== ANIMACIONES ==================
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
`;

const bounce = keyframes`
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(47, 49, 245, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(47, 49, 245, 0.6);
  }
`;

// ================== ESTILOS ==================
const ChatButton = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: linear-gradient(135deg, #101820 0%, #1a2840 100%);
  border: 2px solid rgba(47, 49, 245, 0.5);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${glow} 2s ease-in-out infinite;
  
  &:hover {
    border-color: #2f31f5;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    bottom: 15px;
    right: 15px;
  }
`;

const PulseRing = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #2f31f5;
  animation: ${pulse} 2s ease-out infinite;
`;

const ChatIcon = styled.span`
  font-size: 28px;
`;

const CloseIcon = styled.span`
  font-size: 24px;
  color: #def440;
  font-weight: bold;
`;

const ChatWindow = styled(motion.div)`
  position: fixed;
  bottom: 85px;
  right: 20px;
  width: 340px;
  height: 480px;
  background: linear-gradient(180deg, #101820 0%, #0d1620 100%);
  border-radius: 16px;
  border: 1px solid rgba(47, 49, 245, 0.3);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(47, 49, 245, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 9998;

  @media (max-width: 480px) {
    width: calc(100vw - 30px);
    height: calc(100vh - 100px);
    max-height: 500px;
    right: 15px;
    bottom: 75px;
    border-radius: 12px;
  }

  @media (max-width: 380px) {
    width: calc(100vw - 20px);
    right: 10px;
  }
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
  background: linear-gradient(90deg, rgba(47, 49, 245, 0.1) 0%, rgba(47, 49, 245, 0.05) 100%);
  border-bottom: 1px solid rgba(47, 49, 245, 0.2);
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BotAvatar = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a2840 0%, #2a4060 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  position: relative;
  border: 2px solid rgba(47, 49, 245, 0.3);
`;

const OnlineIndicator = styled.span`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  background: #def440;
  border-radius: 50%;
  border: 2px solid #101820;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;

const BotName = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
`;

const BotStatus = styled.span`
  color: #def440;
  font-size: 12px;
`;

const MinimizeButton = styled.button`
  background: none;
  border: none;
  color: #def440;
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: rgba(47, 49, 245, 0.1);
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(47, 49, 245, 0.3);
    border-radius: 3px;
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: ${props => props.$isBot ? 'flex-start' : 'flex-end'};
`;

const Message = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  max-width: 85%;
`;

const MessageAvatar = styled.span`
  font-size: 20px;
  margin-bottom: 5px;
`;

const MessageBubble = styled.div`
  padding: 12px 16px;
  border-radius: ${props => props.$isBot ? '18px 18px 18px 4px' : '18px 18px 4px 18px'};
  background: ${props => props.$isBot 
    ? 'linear-gradient(135deg, #1a2840 0%, #243850 100%)' 
    : 'linear-gradient(135deg, #2f31f5 0%, #253ff7 100%)'};
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid ${props => props.$isBot ? 'rgba(47, 49, 245, 0.2)' : 'transparent'};
`;

const TypingIndicator = styled.div`
  display: flex;
  gap: 5px;
  padding: 5px 0;
`;

const TypingDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #def440;
  animation: ${bounce} 1s ease-in-out infinite;
  animation-delay: ${props => props.$delay};
`;

const QuickQuestionsContainer = styled.div`
  padding: 8px 12px;
  border-top: 1px solid rgba(47, 49, 245, 0.08);
  background: rgba(0, 0, 0, 0.15);
`;

const QuickQuestionsScroll = styled.div`
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 4px;
  
  &::-webkit-scrollbar {
    height: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(47, 49, 245, 0.2);
    border-radius: 2px;
  }
`;

const QuickQuestionChip = styled(motion.button)`
  background: rgba(47, 49, 245, 0.08);
  border: 1px solid rgba(47, 49, 245, 0.2);
  color: rgba(222, 244, 64, 0.9);
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: rgba(47, 49, 245, 0.15);
    border-color: rgba(47, 49, 245, 0.4);
  }
`;

const ChatInputContainer = styled.div`
  display: flex;
  padding: 10px 12px;
  gap: 8px;
  background: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(47, 49, 245, 0.1);
`;

const ChatInput = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(47, 49, 245, 0.2);
  border-radius: 20px;
  padding: 10px 16px;
  color: #fff;
  font-size: 13px;
  outline: none;
  transition: all 0.3s;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-color: #2f31f5;
    background: rgba(47, 49, 245, 0.05);
  }
`;

const SendButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2f31f5 0%, #253ff7 100%);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    box-shadow: 0 0 15px rgba(47, 49, 245, 0.5);
  }
`;

const SendIcon = styled.span`
  color: #fff;
  font-size: 18px;
  transform: rotate(-10deg);
`;

const ChatFooter = styled.div`
  text-align: center;
  padding: 10px;
  color: rgba(255, 255, 255, 0.3);
  font-size: 10px;
  background: rgba(0, 0, 0, 0.2);
`;

export default Chatbot;
