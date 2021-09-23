module.exports = {
  siteMetadata: {
    siteUrl: "https://www.gatsbytutorialmain57093.gatsbyjs.io",
    title: "Phil's Blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
