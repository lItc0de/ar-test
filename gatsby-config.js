module.exports = {
  siteMetadata: {
    title: "ar-testcase",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
