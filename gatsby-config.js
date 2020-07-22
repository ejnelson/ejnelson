module.exports = {
  siteMetadata: {
    title: `Erikthe.dev at your service`,
    description: `Erikthe.dev is a modern explorer pursuing new frontiers in web development and digital technology`,
    author: `@ejnelson`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-screenshot`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ErikTheDev`,
        short_name: `ErikTheDev`,
        start_url: `/`,
        background_color: `red`,
        theme_color: `red`,
        display: `minimal-ui`,
        icon: `src/images/explorer-logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
