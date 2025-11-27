# 🚀 Centro de Datos - Sitio Web Futurista

Sitio web moderno y futurista para un Centro de Datos, desarrollado con React, animaciones 3D, Glassmorphism y microinteracciones.

## 🎨 Características

- ✅ **Diseño Futurista**: Estética tecnológica con efectos neon y Glassmorphism
- ✅ **Animaciones 3D**: Implementadas con react-three-fiber
- ✅ **Microinteracciones**: Animaciones suaves con framer-motion
- ✅ **100% Responsive**: Diseño adaptable a móvil, tablet y desktop
- ✅ **Paleta de Colores Personalizada**: 
  - Primary: `#2f31f5`
  - Accent: `#def440`
  - Secondary: `#253ff7`
  - Gray: `#8a8d8f`
  - Dark: `#101820`
  - White: `#ffffff`

## 📦 Tecnologías

- **React** 18.3.1
- **Vite** - Build tool
- **Styled Components** - Estilos modulares
- **Framer Motion** - Animaciones y microinteracciones
- **React Three Fiber** - Animaciones 3D
- **Three.js** - Gráficos 3D
- **React Icons** - Iconos

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn

### Instalación

```bash
# Navegar al directorio del proyecto
cd datacenter-web

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción
npm run preview
```

## 📂 Estructura del Proyecto

```
datacenter-web/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.styles.js
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   ├── Hero.styles.js
│   │   │   └── Background3D.jsx
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.styles.js
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   └── Services.styles.js
│   │   ├── Hardware/
│   │   │   ├── Hardware.jsx
│   │   │   ├── Hardware.styles.js
│   │   │   └── HardwareModel3D.jsx
│   │   ├── Software/
│   │   │   ├── Software.jsx
│   │   │   └── Software.styles.js
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.styles.js
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.styles.js
│   ├── styles/
│   │   ├── GlobalStyles.js
│   │   └── theme.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 🎯 Secciones del Sitio

1. **Header/Navbar**: Menú responsivo con animaciones
2. **Hero**: Sección principal con fondo 3D animado y efecto neon
3. **Nosotros**: Tarjetas flotantes con Glassmorphism
4. **Servicios**: Grid futurista con efectos tilt 3D
5. **Hardware**: Especificaciones técnicas con modelo 3D interactivo
6. **Software**: Stack tecnológico con microinteracciones
7. **Contacto**: Formulario con inputs glowing y Glassmorphism
8. **Footer**: Diseño minimalista con enlaces sociales

## 🎨 Efectos Implementados

### Glassmorphism
- Backdrop filter con blur
- Bordes semi-transparentes
- Sombras suaves
- Fondos translúcidos

### Animaciones 3D
- Partículas flotantes animadas
- Malla ondulada dinámica
- Modelos 3D interactivos con rotación
- Iluminación dinámica

### Microinteracciones
- Hover effects con escala y glow
- Animaciones de entrada escalonadas
- Efectos tilt 3D en tarjetas
- Transiciones suaves

## 📱 Responsive Design

- **Móvil**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Personalización

### Cambiar Colores

Edita el archivo `src/styles/theme.js` para modificar la paleta de colores:

```javascript
colors: {
  primary: '#2f31f5',
  accent: '#def440',
  // ... otros colores
}
```

### Modificar Animaciones

Las animaciones se pueden ajustar en cada componente usando las variantes de framer-motion.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Desarrollo

Desarrollado con ❤️ usando las últimas tecnologías web.
