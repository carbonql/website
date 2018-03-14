module.exports = {
  siteMetadata: {
    title: 'CarbonQL',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `examples`,
        path: `${__dirname}/src/examples/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
        ],
      },
    },
  ],
};
