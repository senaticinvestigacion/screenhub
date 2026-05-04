// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  sidebar: [
    'index',                    // Página de inicio
    {
      type: 'category',
      label: '📋 El Proyecto',
      collapsed: false,
      items: [
        'proyecto/introduccion',
        'proyecto/resumen-ejecutivo',
        'proyecto/objetivos',
        'proyecto/arbol-problemas',
        'proyecto/arbol-objetivos',
      ],
    },
    {
      type: 'category',
      label: '🛠️ Solución Técnica',
      collapsed: true,
      items: [
        'solucion-tecnica/arquitectura',
        'solucion-tecnica/stack-tecnologico',
        'solucion-tecnica/frontend',
        'solucion-tecnica/backend',
        'solucion-tecnica/ia-gemini',
        'solucion-tecnica/hardware-minipc',
        'solucion-tecnica/iot-sensores',
      ],
    },
    {
      type: 'category',
      label: '📖 Manual de Uso',
      collapsed: true,
      items: [
        'manual-de-uso/guia-administrador',
        'manual-de-uso/guia-publicador',
        'manual-de-uso/instalacion-minipc',
      ],
    },
    {
      type: 'category',
      label: '📈 Avance del Proyecto',
      collapsed: false,           // Siempre visible
      items: [
        {
          type: 'category',
          label: 'Bitácora Mensual',
          items: [            
            'avance-del-proyecto/bitacora-mensual/2026-04-abril',
            'avance-del-proyecto/bitacora-mensual/2026-05-mayo',
            'avance-del-proyecto/bitacora-mensual/2026-06-junio',
            'avance-del-proyecto/bitacora-mensual/2026-07-julio',
            'avance-del-proyecto/bitacora-mensual/2026-08-agosto',
            'avance-del-proyecto/bitacora-mensual/2026-09-septiembre',
            'avance-del-proyecto/bitacora-mensual/2026-10-octubre',
            'avance-del-proyecto/bitacora-mensual/2026-11-noviembre',
            'avance-del-proyecto/bitacora-mensual/2026-12-diciembre',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '💰 Presupuesto y Recursos',
      collapsed: true,
      items: [
        'presupuesto-y-recursos/presupuesto',        
      ],
    },
    {
      type: 'category',
      label: '📂 Anexos',
      items: [
        'anexos/presentacion',
        'anexos/cadena-de-valor',
      ],
    },
  ],
};

export default sidebars;
