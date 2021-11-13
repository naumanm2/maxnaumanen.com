module.exports = {
  siteMetadata: {
    title: "max",
    titleTemplate: "designer, techniquêist",
    description: `pls hire me`,
    image: "src/images/favicon_red.png",
    url: "https://www.maxnaumanen.com",
    siteUrl: "https://www.maxnaumanen.com",
    author: "@maxnaumanen",
    twitterUsername: "maxnaumanen",
    keywords: `tech, developer, ux, ui, react, gatsby, aalto, helsinki, student, design`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingId: "G-15B2NM4K9N",
      },
      pluginConfig: {
        head: true,
        anonymize_ip: true,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: "/",
      },
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
