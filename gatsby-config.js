const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Tiêng Đức Berlin',
    author: `@thaihoa311`,
    description: ''
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@root': path.resolve(__dirname),
          '@components': path.resolve(__dirname, 'src/components'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@static': path.resolve(__dirname, 'src/static'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
        extensions: []
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true
      }
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
