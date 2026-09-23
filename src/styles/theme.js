// Theme configuration: Paleta profesional de Alto Desempeño (HPC) & UNACH
export const theme = {
    colors: {
        primary: '#3B82F6', // Azul tecnológico moderno
        primaryHover: '#2563EB',
        primaryGlow: 'rgba(59, 130, 246, 0.3)',
        accent: '#06B6D4', // Cian de datos y alta velocidad
        accentHover: '#0891B2',
        unachGold: '#F59E0B', // Oro institucional UNACH
        unachGoldLight: '#FBBF24',
        secondary: '#6366F1', // Índigo / Violeta científico
        dark: '#0B0F19', // Fondo deep space slate
        darkSecondary: '#0F172A',
        darkCard: 'rgba(15, 23, 42, 0.75)',
        darkCardHover: 'rgba(26, 38, 66, 0.85)',
        border: 'rgba(255, 255, 255, 0.08)',
        borderHover: 'rgba(99, 102, 241, 0.4)',
        gray: '#94A3B8', // Slate 400
        grayLight: '#CBD5E1', // Slate 300
        white: '#FFFFFF',
    },

    breakpoints: {
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px',
        wide: '1440px',
    },

    // Mixin para Glassmorphism limpio y elegante
    glassmorphism: (opacity = 0.06, blur = 16, borderOpacity = 0.08) => `
        background: rgba(15, 23, 42, ${opacity});
        backdrop-filter: blur(${blur}px);
        -webkit-backdrop-filter: blur(${blur}px);
        border: 1px solid rgba(255, 255, 255, ${borderOpacity});
        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
    `,

    // Mixin para compatibilidad con código existente
    neonGlow: (color, intensity = 'normal') => {
        return `0 0 15px ${color}40, 0 0 30px ${color}20`;
    },

    // Transiciones suaves
    transition: {
        fast: '0.15s ease',
        normal: '0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        slow: '0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    },
};

export default theme;
