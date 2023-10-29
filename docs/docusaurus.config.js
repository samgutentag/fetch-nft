// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fetch-NFT",
  tagline: "A dead simple library to fetch and display Ethereum & Solana NFTs!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://samgutentag.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/fetch-nft/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "samgutentag", // Usually your GitHub org/user name.
  projectName: "fetch-nft", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/samgutentag/fetch-nft/docs/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //   editUrl: "https://github.com/samgutentag/fetch-nft/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "| Fetch-NFT",
        logo: {
          alt: "Fetch-NFT",
          src: "img/Horizontal_Black.svg",
          srcDark: "img/Horizontal_White.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "quickstartSidebar",
            position: "left",
            label: "Quickstart",
          },
          {
            type: "docSidebar",
            sidebarId: "strategySidebar",
            position: "left",
            label: "DevRel Strategy",
          },
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Documentation",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/samgutentag/fetch-nft",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Quickstart",
                to: "/docs/quickstart/getting-started",
              },
              {
                label: "DevRel Strategy",
                to: "/docs/devrel-strategy",
              },
              {
                label: "Documentation",
                to: "/docs/documentation/approach",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Audius",
                href: "https://www.audius.co",
              },
              {
                label: "Discord",
                href: "https://discord.gg/audius",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/audius",
              },
            ],
          },
          {
            title: "Listen with Audius",
            items: [
              {
                label: "Download the App",
                href: "https://www.audius.co/download",
              },
              {
                label: "App Store",
                href: "https://apps.apple.com/us/app/audius-music/id1491270519",
              },
              {
                label: "Google Play",
                href: "https://play.google.com/store/apps/details?id=co.audius.app",
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with ☕️, ❤️, and Docusaurus.`,
        copyright: `Built with ☕️, ❤️, and Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
