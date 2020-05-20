module.exports = {
  siteMetadata: {
    linkedin: "https://www.linkedin.com/in/mranthonysutton/",
    github: "https://github.com/mranthonysutton",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        exclude: /(node_modules|.cache|public)/,
      },
    },
  ],
};
