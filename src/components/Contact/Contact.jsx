import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaUniversity } from 'react-icons/fa';
import {
  ContactContainer,
  ContactContent,
  SectionTitle,
  LocationInfo,
  LocationTitle,
  LocationText,
} from './Contact.styles';

const formStyles = {
  background: 'rgba(255,255,255,0.04)',
  borderRadius: '18px',
  padding: '2.5rem 2rem',
  marginBottom: '2.5rem',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.13)',
  border: '1px solid rgba(47,49,245,0.13)',
  width: '100%',
  boxSizing: 'border-box',
};

const labelStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: '#fff',
  fontWeight: 600,
  marginBottom: 6,
};

const inputStyles = {
  width: '100%',
  padding: '1rem 1.2rem',
  borderRadius: 10,
  border: '2px solid rgba(47,49,245,0.18)',
  background: 'rgba(255,255,255,0.07)',
  color: '#fff',
  fontSize: '1rem',
  marginBottom: 18,
  fontFamily: 'Outfit, sans-serif',
};

const textareaStyles = {
  ...inputStyles,
  minHeight: 120,
  resize: 'vertical',
};

const buttonStyles = {
  padding: '1rem 2.2rem',
  borderRadius: 50,
  background: 'linear-gradient(135deg, #2f31f5, #253ff7)',
  color: '#fff',
  fontWeight: 700,
  fontSize: '1.1rem',
  border: 'none',
  cursor: 'pointer',
  marginTop: 8,
  boxShadow: '0 8px 25px rgba(47,49,245,0.18)',
  letterSpacing: 1,
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  gap: '0.7rem',
  opacity: 1,
  transition: 'opacity 0.3s ease',
};

const disabledButtonStyles = {
  ...buttonStyles,
  opacity: 0.6,
  cursor: 'not-allowed',
};

const Contact = () => {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'sent', 'error'

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('La respuesta del servidor no fue exitosa.');
      }

      const result = await response.json();

      if (result.success) {
        setStatus('sent');
        setForm({ nombre: '', correo: '', mensaje: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        throw new Error(result.message || 'Ocurrió un error al enviar el correo.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <ContactContainer id="contacto">
      <ContactContent className="container">
        <SectionTitle>Contáctanos</SectionTitle>
        <div style={{ width: '100%' }}>
          <form style={formStyles} onSubmit={handleSubmit} autoComplete="off">
            <label style={labelStyles} htmlFor="nombre">
              <FaUniversity style={{ color: '#def440' }} /> Nombre
            </label>
            <input
              style={inputStyles}
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre completo"
            />
            <label style={labelStyles} htmlFor="correo">
              <FaEnvelope style={{ color: '#def440' }} /> Email
            </label>
            <input
              style={inputStyles}
              type="email"
              id="correo"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
            <label style={labelStyles} htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              style={textareaStyles}
              id="mensaje"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              required
              placeholder="Cuéntanos sobre tu proyecto..."
            />
            <button
              type="submit"
              style={status === 'sending' ? disabledButtonStyles : buttonStyles}
              disabled={status === 'sending'}
            >
              <FaEnvelope />
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            
            {status === 'sent' && (
              <div style={{ color: '#def440', marginTop: 12, fontWeight: 600 }}>
                ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
              </div>
            )}
            {status === 'error' && (
              <div style={{ color: '#ff6b6b', marginTop: 12, fontWeight: 600 }}>
                Hubo un error al enviar el mensaje. Por favor, inténtalo más tarde.
              </div>
            )}
          </form>
          <LocationInfo>
            <LocationTitle>
              <FaUniversity style={{ marginRight: '0.5rem' }} /> Universidad Autónoma de Chiapas
            </LocationTitle>
            <LocationText>
              <FaEnvelope style={{ marginRight: '0.5rem' }} />
              <strong>Email:</strong> larcad@unach.mx
            </LocationText>
            <LocationText>
              <FaUniversity style={{ marginRight: '0.5rem' }} />
              Universidad Autónoma de Chiapas
            </LocationText>
            <LocationText>
              <FaMapMarkerAlt style={{ marginRight: '0.5rem' }} />
              Carretera Emiliano Zapata Km. 8
            </LocationText>
            <LocationText>
              Ciudad Universitaria, C. P. 29050
            </LocationText>
            <LocationText>
              Tuxtla Gutiérrez, Chiapas, México
            </LocationText>
            <LocationText style={{ marginTop: '1rem' }}>
              <FaPhone style={{ marginRight: '0.5rem' }} />
              <strong>Teléfono:</strong> (+52) 961 617 8000 ext. 8107
            </LocationText>
            <div style={{ margin: '2.5rem 0 0 0', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 32px rgba(47,49,245,0.15)' }}>
              <iframe
                title="LARCAD UNACH Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15286.60711366825!2d-93.185633!3d16.6943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd0a8df2ea837%3A0x197c180cf82b5093!2sLaboratorio%20Regional%20de%20Computo%20de%20Alto%20Desempeno%20%2C%20UNACH!5e0!3m2!1ses-419!2sus!4v1764236629833!5m2!1ses-419!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </LocationInfo>
        </div>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
