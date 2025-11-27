#!/bin/bash

# Script de inicio rápido para el proyecto DataCenter

echo "🚀 Iniciando Centro de Datos - Sitio Web Futurista"
echo "================================================="
echo ""

# Navegar al directorio del proyecto
cd "$(dirname "$0")"

# Verificar si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
    echo ""
fi

# Iniciar servidor de desarrollo
echo "🔥 Iniciando servidor de desarrollo..."
echo "📍 El sitio estará disponible en: http://localhost:5173"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""

npm run dev
