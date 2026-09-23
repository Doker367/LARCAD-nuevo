import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Sistema de colores profesional */
    --color-primary: #3B82F6;
    --color-primary-hover: #2563EB;
    --color-secondary: #6366F1;
    --color-accent: #06B6D4;
    --color-unach-gold: #F59E0B;
    --color-dark: #0B0F19;
    --color-dark-secondary: #0F172A;
    --color-gray: #94A3B8;
    --color-gray-light: #CBD5E1;
    --color-white: #FFFFFF;
    
    /* Gradientes elegantes */
    --gradient-primary: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
    --gradient-accent: linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%);
    --gradient-gold: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);
    --gradient-dark: linear-gradient(180deg, #0B0F19 0%, #0F172A 100%);

    /* Sombras y elevaciones sutiles */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
    --shadow-md: 0 10px 30px -10px rgba(0, 0, 0, 0.6);
    --shadow-lg: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
    --glow-primary: 0 0 25px rgba(59, 130, 246, 0.25);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: clip;
    max-width: 100%;
    color-scheme: dark;
  }

  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: var(--color-dark);
    color: var(--color-white);
    overflow-x: clip;
    max-width: 100%;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  img,
  svg,
  video {
    max-width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  ::selection {
    background: rgba(59, 130, 246, 0.35);
    color: #FFFFFF;
  }

  /* Scrollbar refinado */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #0B0F19;
  }

  ::-webkit-scrollbar-thumb {
    background: #1E293B;
    border-radius: 4px;
    border: 2px solid #0B0F19;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #334155;
  }

  /* Contenedores globales */
  .container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 24px;

    @media (max-width: 768px) {
      padding: 0 18px;
    }

    @media (max-width: 480px) {
      padding: 0 14px;
    }
  }

  /* Clases de utilidad para badges y tipografía */
  .font-mono {
    font-family: 'JetBrains Mono', monospace;
  }

  .tech-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.25);
    color: #93C5FD;
  }
`;

export default GlobalStyles;
