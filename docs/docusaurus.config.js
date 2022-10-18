// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Next.js Client',
  tagline: 'Lojistik Platformu v1',
  url: 'https://yukgetir.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'yukgetir', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            '#github',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            '#github',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Next.js Client',
        logo: {
          alt: 'Yükgetir',
          src: 'img/logo-mini.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Başla',
          },
          {to: 'https://yukgetir.com', label: 'Site', position: 'left'},
          {
            href: 'https://github.com/bilinovabilisim/yg-next/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Döküman',
            items: [
              {
                label: 'Başla',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Daha fazlası',
            items: [
              {
                label: 'Yükgetir',
                to: 'https://yukgetir.com/',
              },
              {
                label: 'Client',
                href: 'https://github.com/bilinovabilisim/yg-next/',
              },
              {
                label: 'Server',
                href: 'https://github.com/bilinovabilisim/yg-nest/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yükgetir. Tüm Hakları Saklıdır`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
