import React, { useState } from 'react';
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi';
import UNACHLogo from '../../img/UNACH.svg';
import {
  ContactContainer,
  ContactContent,
  SectionHeader,
  SectionTag,
  SectionTitle,
  SectionSubtitle,
  ContactGrid,
  InfoColumn,
  InfoCard,
  ContactMethodsList,
  ContactMethodItem,
  MapFrame,
  FormColumn,
  FormCard,
  FormGroup,
  FormLabel,
  Input,
  TextArea,
  SubmitButton,
  StatusAlert,
} from './Contact.styles';

const Contact = () => {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'sent', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('sent');
        setForm({ nombre: '', correo: '', mensaje: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(result.message || 'No fue posible enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Ocurrió un error al contactar al servidor.');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <ContactContainer id="contacto">
      <ContactContent className="container">
        <SectionHeader>
          <SectionTag>Comunicación Directa</SectionTag>
          <SectionTitle>Contacto y Solicitud de Recursos</SectionTitle>
          <SectionSubtitle>
            Ponte en contacto con nuestro equipo técnico y de gestión para solicitar cuentas en el clúster, servicios administrados o visitas al laboratorio.
          </SectionSubtitle>
        </SectionHeader>

        <ContactGrid>
          {/* Columna Izquierda: Información Institucional y Mapa */}
          <InfoColumn>
            <InfoCard>
              <div className="institution-badge">
                <img src={UNACHLogo} alt="UNACH" style={{ height: 42, width: 'auto' }} />
                <div>
                  <h4>Universidad Autónoma de Chiapas</h4>
                  <span>Laboratorio Regional de Cómputo de Alto Desempeño</span>
                </div>
              </div>

              <ContactMethodsList>
                <ContactMethodItem>
                  <div className="icon-wrap"><FiMail /></div>
                  <div>
                    <span className="label">Correo Electrónico Institucional</span>
                    <a href="mailto:larcad@unach.mx" className="val">larcad@unach.mx</a>
                  </div>
                </ContactMethodItem>

                <ContactMethodItem>
                  <div className="icon-wrap"><FiPhone /></div>
                  <div>
                    <span className="label">Teléfono Directo</span>
                    <span className="val">(+52) 961 617 8000 ext. 8107</span>
                  </div>
                </ContactMethodItem>

                <ContactMethodItem>
                  <div className="icon-wrap"><FiClock /></div>
                  <div>
                    <span className="label">Horario de Atención</span>
                    <span className="val">Lunes a Viernes: 9:00 - 17:00 hrs</span>
                  </div>
                </ContactMethodItem>

                <ContactMethodItem>
                  <div className="icon-wrap"><FiMapPin /></div>
                  <div>
                    <span className="label">Ubicación Física</span>
                    <span className="val">
                      Carretera Emiliano Zapata Km. 8, Ciudad Universitaria, C.P. 29050, Tuxtla Gutiérrez, Chiapas, México.
                    </span>
                  </div>
                </ContactMethodItem>
              </ContactMethodsList>

              <MapFrame>
                <iframe
                  title="LARCAD UNACH Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15286.60711366825!2d-93.185633!3d16.6943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd0a8df2ea837%3A0x197c180cf82b5093!2sLaboratorio%20Regional%20de%20Computo%20de%20Alto%20Desempeno%20%2C%20UNACH!5e0!3m2!1ses-419!2sus!4v1764236629833!5m2!1ses-419!2sus"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </MapFrame>
            </InfoCard>
          </InfoColumn>

          {/* Columna Derecha: Formulario de Contacto */}
          <FormColumn>
            <FormCard onSubmit={handleSubmit} autoComplete="off">
              <h3>Envíanos un Mensaje</h3>
              <p className="form-sub">
                Ingresa tus datos y los detalles de tu proyecto o requerimiento de cómputo.
              </p>

              <FormGroup>
                <FormLabel htmlFor="nombre">Nombre Completo o Institución</FormLabel>
                <Input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Ej. Dr. Roberto Gómez / Dpto. de Física"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="correo">Correo Electrónico Institucional</FormLabel>
                <Input
                  type="email"
                  id="correo"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  required
                  placeholder="tu.nombre@unach.mx o correo institucional"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="mensaje">Descripción de la Solicitud o Proyecto</FormLabel>
                <TextArea
                  id="mensaje"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe los requerimientos de tu proyecto: software que requieres, estimación de núcleos/RAM, almacenamiento o servicio de interés..."
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={status === 'sending'}
              >
                <FiSend size={16} />
                <span>{status === 'sending' ? 'Enviando Mensaje...' : 'Enviar Mensaje'}</span>
              </SubmitButton>

              {status === 'sent' && (
                <StatusAlert $type="success">
                  <FiCheckCircle size={18} />
                  <span>¡Mensaje recibido con éxito! El equipo de LARCAD se pondrá en contacto a la brevedad.</span>
                </StatusAlert>
              )}

              {status === 'error' && (
                <StatusAlert $type="error">
                  <FiAlertCircle size={18} />
                  <span>{errorMessage || 'Ocurrió un error al enviar el mensaje. Inténtalo nuevamente o escribe directo a larcad@unach.mx.'}</span>
                </StatusAlert>
              )}
            </FormCard>
          </FormColumn>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
