import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Cargar variables de entorno desde .env
dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      // Plugin personalizado para integrar un servidor API de Express
      name: 'express-api-server',
      configureServer(server) {
        const app = express();
        
        // Middleware para parsear el cuerpo de las peticiones a JSON
        app.use(bodyParser.json());

        // Endpoint para enviar correos
        app.post('/api/send-email', async (req, res) => {
          try {
            const { nombre, correo, mensaje } = req.body;

            // Validación básica de los campos
            if (!nombre || !correo || !mensaje) {
              return res.status(400).json({
                success: false,
                message: 'Nombre, correo y mensaje son obligatorios.',
              });
            }

            // Configuración del transportador de Nodemailer con las credenciales de entorno
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              host: 'smtp.gmail.com',
              port: 465,
              secure: true,
              auth: {
                user: process.env.GMAIL_USER, // Variable de entorno
                pass: process.env.GMAIL_PASS, // Variable de entorno
              },
            });

            // Opciones del correo
            const mailOptions = {
              from: `"Formulario de Contacto - Datacenter" <${process.env.GMAIL_USER}>`,
              to: 'lard.cad.unach@gmail.com', // Correo de destino
              subject: `Nuevo Mensaje de Contacto de: ${nombre}`,
              html: `
                <h2>Nuevo mensaje de contacto desde el sitio web</h2>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Correo Electrónico:</strong> ${correo}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${mensaje}</p>
              `,
            };

            // Enviar el correo
            await transporter.sendMail(mailOptions);
            
            res.status(200).json({
              success: true,
              message: 'Correo enviado con éxito.',
            });
          } catch (error) {
            console.error('Error en /api/send-email:', error);
            res.status(500).json({
              success: false,
              message: 'Error interno al enviar el correo.',
              error: error.message,
            });
          }
        });

        // Montar la app de Express como middleware en el servidor de Vite
        server.middlewares.use(app);
      },
    },
  ],
});
