module.exports = {
  siteMetadata: {
    title: "max",
    titleTemplate: "technique, design",
    description: `portfolio page of mine, a developer/designer looking extensively for job opportunities`,
    image: "src/images/favicon_red.png",
    url: "https://www.maxnaumanen.com",
    siteUrl: "https://www.maxnaumanen.com",
    author: "@maxnaumanen",
    twitterUsername: "maxnaumanen",
    keywords: `max naumanen, tech, developer, ux, ui, react, gatsby, aalto, helsinki, student, design, max, naumanen`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-15B2NM4K9N"],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: "/",
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://maxnaumanen.com',
        sitemap: 'https://maxnaumanen.com/sitemap-0.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `maxnaumanen.com`,
        lang: "en",
        short_name: `max`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#20322A`,
        display: `standalone`,
        icon: "src/images/favicon_darkred_512.png",
      },
    },
  ],
};
