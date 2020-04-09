module.exports = {
  siteMetadata: {
    title: `My Portfolio`,
    description: `I am Vincenzo and this is my page`,
    author: `@brewno88`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ff79c6`,
        theme_color: `#ff79c6`,
        display: `minimal-ui`,
        icon: `src/images/profileImg.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`kalam`, `source sans pro\:300,40,700`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingID: process.env.GOOGLE_ANALYTICS_TRACKINGID || "none",
      },
    },
  ],
}
