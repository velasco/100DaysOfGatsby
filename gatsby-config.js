module.exports = {
  siteMetadata: {
    title: "100DaysOfGatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "1s83Bgukpj140JpWO0Z3akZXMphhsYyhoLmxwD9HB9g",
        spaceId: "dwte6xgss77v",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
