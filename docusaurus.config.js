// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ScreenHub',
  tagline: 'Sistema de Gestión de Información y Desarrollo Técnico',
  favicon: 'img/favicon_screenhub.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://jhonf.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ScreenHub/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jhonf', // Usually your GitHub org/user name.
  projectName: 'ScreenHub', // Usually your repo name.
  trailingSlash: false,


  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ScreenHub',
        logo: {
          alt: 'ScreenHub Logo',
          src: 'img/screenhub_logo_v2.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            to: '/docs/avance-del-proyecto/bitacora-mensual/2026-04-abril',
            label: 'Bitácora',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/jhonf/ScreenHub',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'El Proyecto',
                to: '/docs/proyecto/introduccion',
              },
              {
                label: 'Solución Técnica',
                to: '/docs/solucion-tecnica/arquitectura',
              },
              {
                label: 'Manual de Uso',
                to: '/docs/manual-de-uso/guia-administrador',
              },
            ],
          },
          {
            title: 'Investigación',
            items: [
              {
                label: 'SENA CTMA',
                href: 'https://www.sena.edu.co/',
              },
              {
                label: 'Semillero de Software',
                href: 'https://github.com/jhonf/ScreenHub', // O link real si existe
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Bitácora de Avance',
                to: '/docs/avance-del-proyecto/bitacora-mensual/2026-04-abril',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/jhonf/ScreenHub',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ScreenHub | Semillero de Investigación de Software. SENA CTMA.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
