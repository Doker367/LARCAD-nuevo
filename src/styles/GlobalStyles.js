import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

  :root {
    /* Colores obligatorios */
    --color-primary: #2f31f5;
    --color-accent: #def440;
    --color-secondary: #253ff7;
    --color-gray: #8a8d8f;
    --color-dark: #101820;
    --color-white: #ffffff;
    
    /* Gradientes */
    --gradient-primary: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    --gradient-accent: linear-gradient(135deg, var(--color-accent), #c5d62f);
    
    /* Efectos neon */
    --neon-blue: 0 0 5px var(--color-primary), 
                 0 0 10px var(--color-primary),
                 0 0 20px var(--color-primary),
                 0 0 40px var(--color-primary);
    
    --neon-yellow: 0 0 5px var(--color-accent), 
                   0 0 10px var(--color-accent),
                   0 0 20px var(--color-accent);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: var(--color-dark);
    color: var(--color-white);
    overflow-x: hidden;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: var(--color-primary);
    color: var(--color-white);
  }

  /* Scrollbar personalizado */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-secondary);
  }

  /* Utilidades */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Animaciones globales */
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(47, 49, 245, 0.5);
    }
    50% {
      box-shadow: 0 0 40px rgba(47, 49, 245, 0.8);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyles;
