// Theme configuration con colores, breakpoints y mixins
export const theme = {
    colors: {
        primary: '#2f31f5',
        accent: '#def440',
        secondary: '#253ff7',
        gray: '#8a8d8f',
        dark: '#101820',
        white: '#ffffff',
    },

    breakpoints: {
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px',
        wide: '1440px',
    },

    // Mixin para Glassmorphism
    glassmorphism: (opacity = 0.1, blur = 10) => `
    background: rgba(255, 255, 255, ${opacity});
    backdrop-filter: blur(${blur}px);
    -webkit-backdrop-filter: blur(${blur}px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  `,

    // Mixin para efectos neon/glow
    neonGlow: (color, intensity = 'normal') => {
        const glowMap = {
            light: `0 0 5px ${color}, 0 0 10px ${color}`,
            normal: `0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}`,
            strong: `0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color}`,
        };
        return glowMap[intensity] || glowMap.normal;
    },

    // Transiciones suaves
    transition: {
        fast: '0.2s ease-in-out',
        normal: '0.3s ease-in-out',
        slow: '0.5s ease-in-out',
    },
};

export default theme;
