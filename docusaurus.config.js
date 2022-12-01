// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Highsoft Sistemas',
  tagline: 'O controle da sua empresa em um so lugar',
  url: 'https://docs.highsoftsistemas.com.br',
  baseUrl: '/',
  organizationName: 'Highsoft Sistemas',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-integrador',
        path: 'docs-integrador',
        routeBasePath: 'docs-integrador',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-movel',
        path: 'docs-movel',
        routeBasePath: 'docs-movel',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Highsoft Sistemas',
        logo: {
          alt: 'Highsoft Sistemas Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: 'docs/intro/getting-started',
            label: 'HSCorp',
            position: 'left',
          },
          {
            to: 'docs-integrador/intro/getting-started',
            label: 'HSIntegrador',
            position: 'left',
          },
          {
            to: 'docs-movel/intro/getting-started',
            label: 'HSMovel',
            position: 'left',
          },
          {
            to: 'docs/tags',
            label: 'Tags',
            position: 'left',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            href: 'https://highsoftsistemas.com.br',
            label: 'Site',
            position: 'right',
          },
          {
            href: 'https://github.com/HighsoftWeb',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentações',
            items: [
              {
                label: 'HSCorp',
                to: '/docs/intro/getting-started',
              },
              {
                label: 'HSIntegrador',
                to: '/docs-integrador/intro/getting-started',
              },
              {
                label: 'HSMovel',
                to: '/docs-movel/intro/getting-started',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/highsoftsistemas/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/HighsoftSistemas',
              },
              {
                label: 'Github',
                href: 'https://github.com/HighsoftWeb',
              },
            ],
          },
          {
            title: 'Extra',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Dev to',
                href: 'https://dev.to/highsoftsistemas',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Highsoft Sistemas.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      sidebar: {
        hideable: true,
      },
    }),
};

module.exports = config;
